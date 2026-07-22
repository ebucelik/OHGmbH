const VVO_API_URL = "https://vvonet.vvo.at/vvo/vvonet_website.nsf/License";

export type VvoInsurer = {
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    fax?: string;
    email?: string;
    website?: string;
};

type VvoResponse = {
    status?: string;
    message?: string | null;
    versicherer?: {
        name?: string;
        address?: string;
        city?: string;
        phone?: string;
        fax?: string;
        email?: string;
        internet?: string;
    };
};

export class VvoValidationError extends Error { }

export function normalizePlate(value: unknown) {
    if (typeof value !== "string") {
        throw new VvoValidationError("Bitte ein Kennzeichen eingeben.");
    }

    const plate = value.trim().toUpperCase().replace(/\s+/g, "");

    if (!/^[A-ZÄÖÜ]{1,3}-[A-Z0-9]{1,8}$/.test(plate)) {
        throw new VvoValidationError("Bitte das Kennzeichen mit Bindestrich eingeben, z. B. W-12345A.");
    }

    return plate;
}

export function normalizeAccidentDate(value: unknown) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        throw new VvoValidationError("Bitte ein gültiges Unfalldatum eingeben.");
    }

    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));

    if (
        date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day
    ) {
        throw new VvoValidationError("Bitte ein gültiges Unfalldatum eingeben.");
    }

    const todayInVienna = new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/Vienna",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());

    if (value > todayInVienna) {
        throw new VvoValidationError("Das Unfalldatum darf nicht in der Zukunft liegen.");
    }

    return value;
}

export async function lookupVvo(plate: string, date: string, signal: AbortSignal): Promise<VvoInsurer> {
    const url = new URL(VVO_API_URL);
    url.searchParams.set("OpenAgent", "");
    url.searchParams.set("date", date);
    url.searchParams.set("licenseplate", plate);

    const response = await fetch(url, {
        method: "GET",
        cache: "no-store",
        signal,
        headers: {
            Accept: "application/json",
            "User-Agent": "OH-GmbH-KFZ-Versichererauskunft/1.0"
        }
    });

    if (!response.ok) {
        throw new Error(`VVO_HTTP_${response.status}`);
    }

    const data = await response.json() as VvoResponse;

    if (data.status !== "OK" || !data.versicherer?.name) {
        const statusMessages: Record<string, string> = {
            NOT_FOUND: "Für diese Angaben wurde kein Versicherer gefunden.",
            NO_DETAILS: "Für diese Angaben sind keine Detaildaten verfügbar.",
            NO_REGISTRATION: "Für diese Angaben wurde keine Zulassung gefunden.",
            NO_REGISTRATION_DETAILS: "Für diese Zulassung sind keine Detaildaten verfügbar.",
            NO_INSURANCE: "Für diese Angaben wurde keine Versicherung gefunden.",
            ERROR: "Die VVO-Auskunft konnte die Anfrage nicht abschließen."
        };

        throw new VvoValidationError(
            data.message || statusMessages[data.status || ""] || "Für diese Angaben wurde kein Ergebnis gefunden."
        );
    }

    return {
        name: data.versicherer.name,
        address: data.versicherer.address,
        city: data.versicherer.city,
        phone: data.versicherer.phone,
        fax: data.versicherer.fax,
        email: data.versicherer.email,
        website: ensureHttps(data.versicherer.internet)
    };
}

function ensureHttps(value?: string) {
    if (!value || value.startsWith("https://") || value.startsWith("http://")) {
        return value;
    }

    return `https://${value}`;
}
