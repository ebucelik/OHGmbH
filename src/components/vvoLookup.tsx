"use client";

import { FormEvent, useState } from "react";

type Insurer = {
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    fax?: string;
    email?: string;
    website?: string;
};

type ApiResponse = {
    insurer?: Insurer;
    error?: string;
};

function todayInVienna() {
    return new Intl.DateTimeFormat("sv-SE", {
        timeZone: "Europe/Vienna",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
}

export default function VvoLookup() {
    const today = todayInVienna();
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState(today);
    const [insurer, setInsurer] = useState<Insurer>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setInsurer(undefined);
        setIsLoading(true);

        try {
            const response = await fetch("/api/vvo-lookup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ plate, date })
            });
            const data = await response.json() as ApiResponse;

            if (!response.ok || !data.insurer) {
                throw new Error(data.error || "Die Abfrage konnte nicht abgeschlossen werden.");
            }

            setInsurer(data.insurer);
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "Die Abfrage konnte nicht abgeschlossen werden.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-appPrimary/30 bg-white p-6 shadow-xl shadow-appSecondary/10 sm:p-9"
            >
                <div className="space-y-6">
                    <div>
                        <label htmlFor="plate" className="mb-2 block text-sm font-bold uppercase tracking-wider text-appSecondary">
                            Kennzeichen
                        </label>
                        <input
                            id="plate"
                            name="plate"
                            type="text"
                            value={plate}
                            onChange={(event) => setPlate(event.target.value.toUpperCase())}
                            placeholder="z. B. W-12345A"
                            autoComplete="off"
                            maxLength={12}
                            required
                            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-xl font-semibold uppercase outline-none transition focus:border-appPrimary focus:ring-4 focus:ring-appPrimary/20"
                        />
                        <p className="mt-2 text-sm text-gray-500">Bitte nach dem Orts- oder Bezirkskürzel einen Bindestrich setzen.</p>
                    </div>

                    <div>
                        <label htmlFor="accident-date" className="mb-2 block text-sm font-bold uppercase tracking-wider text-appSecondary">
                            Unfalldatum
                        </label>
                        <input
                            id="accident-date"
                            name="date"
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            max={today}
                            required
                            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-xl font-semibold outline-none transition focus:border-appPrimary focus:ring-4 focus:ring-appPrimary/20"
                        />
                    </div>
                </div>

                <p className="mt-6 rounded-2xl bg-appGray px-4 py-3 text-sm leading-relaxed text-gray-700">
                    Die Abfrage ist für Schadenfälle vorgesehen, bei denen Sie oder eine von Ihnen vertretene Person durch das angegebene Fahrzeug geschädigt wurden.
                </p>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-6 w-full rounded-2xl bg-appPrimary px-6 py-4 text-lg font-bold text-appOnPrimary transition hover:bg-appPrimaryLight disabled:cursor-wait disabled:opacity-60"
                >
                    {isLoading ? "Versicherer wird gesucht …" : "Versicherer abfragen"}
                </button>
            </form>

            <div className="min-h-80 rounded-3xl bg-appSecondary p-6 text-white shadow-xl shadow-appSecondary/20 sm:p-9" aria-live="polite">
                {!insurer && !error && (
                    <div className="flex h-full min-h-64 flex-col justify-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-appPrimary">VVO-Auskunft</p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Haftpflichtversicherer finden</h2>
                        <p className="mt-4 max-w-xl text-white/75">
                            Geben Sie Kennzeichen und Unfalldatum ein. Das Ergebnis erscheint anschließend direkt hier.
                        </p>
                    </div>
                )}

                {error && (
                    <div className="flex h-full min-h-64 flex-col justify-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-appPrimary">Keine Auskunft möglich</p>
                        <p className="mt-4 text-xl font-semibold">{error}</p>
                    </div>
                )}

                {insurer && (
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-appPrimary">Zuständiger Versicherer</p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{insurer.name}</h2>

                        <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                            {(insurer.address || insurer.city) && (
                                <div>
                                    <dt className="text-sm font-bold uppercase tracking-wider text-white/55">Adresse</dt>
                                    <dd className="mt-1 text-lg">{insurer.address}<br />{insurer.city}</dd>
                                </div>
                            )}
                            {insurer.phone && (
                                <div>
                                    <dt className="text-sm font-bold uppercase tracking-wider text-white/55">Telefon</dt>
                                    <dd className="mt-1 text-lg"><a className="underline decoration-appPrimary underline-offset-4" href={`tel:${insurer.phone}`}>{insurer.phone}</a></dd>
                                </div>
                            )}
                            {insurer.email && (
                                <div>
                                    <dt className="text-sm font-bold uppercase tracking-wider text-white/55">E-Mail</dt>
                                    <dd className="mt-1 break-all text-lg"><a className="underline decoration-appPrimary underline-offset-4" href={`mailto:${insurer.email}`}>{insurer.email}</a></dd>
                                </div>
                            )}
                            {insurer.website && (
                                <div>
                                    <dt className="text-sm font-bold uppercase tracking-wider text-white/55">Website</dt>
                                    <dd className="mt-1 text-lg"><a className="underline decoration-appPrimary underline-offset-4" href={insurer.website} target="_blank" rel="noreferrer">Website öffnen</a></dd>
                                </div>
                            )}
                        </dl>
                    </div>
                )}
            </div>
        </div>
    );
}
