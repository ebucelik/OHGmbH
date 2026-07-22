import { NextRequest } from "next/server";
import { lookupVvo, normalizeAccidentDate, normalizePlate, VvoValidationError } from "../../../lib/vvo";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestsByClient = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
    const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(client)) {
        return json({ error: "Zu viele Abfragen. Bitte versuchen Sie es in einigen Minuten erneut." }, 429);
    }

    try {
        const body = await request.json();
        const plate = normalizePlate(body?.plate);
        const date = normalizeAccidentDate(body?.date);
        const insurer = await lookupVvo(plate, date, AbortSignal.timeout(8_000));

        return json({ insurer }, 200);
    } catch (error) {
        if (error instanceof VvoValidationError) {
            return json({ error: error.message }, 400);
        }

        if (error instanceof SyntaxError) {
            return json({ error: "Die Anfrage enthält ungültige Daten." }, 400);
        }

        if (error instanceof Error && error.name === "TimeoutError") {
            return json({ error: "Die VVO-Auskunft antwortet derzeit nicht. Bitte versuchen Sie es später erneut." }, 504);
        }

        return json({ error: "Die VVO-Auskunft ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut." }, 502);
    }
}

function isRateLimited(client: string) {
    const now = Date.now();
    const current = requestsByClient.get(client);

    if (!current || current.resetAt <= now) {
        requestsByClient.set(client, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    current.count += 1;
    return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function json(body: object, status: number) {
    return Response.json(body, {
        status,
        headers: {
            "Cache-Control": "no-store, max-age=0"
        }
    });
}
