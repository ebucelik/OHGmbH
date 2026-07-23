import type { Metadata } from "next";
import Link from "next/link";
import { radley } from "../../layout";
import { defaultPadding } from "../../../shared/style";
import VvoLookup from "../../../components/vvoLookup";

export const metadata: Metadata = {
    title: "KFZ-Versichererauskunft | OH GmbH",
    description: "Ermitteln Sie nach einem Schaden den Haftpflichtversicherer eines in Österreich zugelassenen Fahrzeugs."
};

export default function KfzVersichererauskunftPage() {
    return (
        <div className="pt-30">
            <div className={`${defaultPadding} sm:pb-20`}>
                <div className="mb-10 max-w-3xl">
                    <div className={`text-2xl sm:text-5xl ${radley.className} font-bold`}>
                        KFZ-<span className="decoration-appPrimary underline underline-offset-8">Versichererauskunft</span>
                    </div>
                    <div className="mt-5 sm:text-lg">
                        Finden Sie den Haftpflichtversicherer eines in Österreich zugelassenen Fahrzeugs – schnell und direkt für die Schadenabwicklung.
                    </div>
                </div>

                <VvoLookup />

                <div className="mt-8 rounded-2xl bg-appGray p-5 text-sm leading-relaxed text-gray-700">
                    <p>
                        Datenquelle ist die KFZ-Versichererauskunft des Versicherungsverbands Österreich. Die Auskunft erfolgt auf Grundlage des § 31a KHVG. Für die Richtigkeit der bereitgestellten Daten übernimmt der Fachverband keine Haftung.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                        <a className="hover:text-appPrimary underline underline-offset-4" href="https://vvonet.vvo.at/vvonet_versichererauskunft" target="_blank" rel="noreferrer">Offizielle VVO-Auskunft</a>
                        <a className="hover:text-appPrimary underline underline-offset-4" href="https://www.vvo.at/datenschutzerklaerung/" target="_blank" rel="noreferrer">Datenschutz beim VVO</a>
                        <Link className="hover:text-appPrimary underline underline-offset-4" href="/dataprotection">Datenschutz der OH GmbH</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
