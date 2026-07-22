import type { Metadata } from "next";
import Link from "next/link";
import VvoLookup from "../../../components/vvoLookup";

export const metadata: Metadata = {
    title: "KFZ-Versichererauskunft | OH GmbH",
    description: "Ermitteln Sie nach einem Schaden den Haftpflichtversicherer eines in Österreich zugelassenen Fahrzeugs."
};

export default function KfzVersichererauskunftPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-appPrimaryLight/45 via-white to-white pt-32 pb-20 sm:pt-44">
            <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <div className="mb-10 max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-appSecondary">Digitale Leistung</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-950 sm:text-6xl">
                        KFZ-<span className="text-appPrimary">Versichererauskunft</span>
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
                        Finden Sie den Haftpflichtversicherer eines in Österreich zugelassenen Fahrzeugs – schnell und direkt für die Schadenabwicklung.
                    </p>
                </div>

                <VvoLookup />

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white/80 p-5 text-sm leading-relaxed text-gray-600">
                    <p>
                        Datenquelle ist die KFZ-Versichererauskunft des Versicherungsverbands Österreich. Die Auskunft erfolgt auf Grundlage des § 31a KHVG. Für die Richtigkeit der bereitgestellten Daten übernimmt der Fachverband keine Haftung.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                        <a className="text-appSecondary underline underline-offset-4" href="https://vvonet.vvo.at/vvonet_versichererauskunft" target="_blank" rel="noreferrer">Offizielle VVO-Auskunft</a>
                        <a className="text-appSecondary underline underline-offset-4" href="https://www.vvo.at/datenschutzerklaerung/" target="_blank" rel="noreferrer">Datenschutz beim VVO</a>
                        <Link className="text-appSecondary underline underline-offset-4" href="/dataprotection">Datenschutz der OH GmbH</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
