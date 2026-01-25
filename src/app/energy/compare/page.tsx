import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function EnergyCompare() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Strom & Gas Vergleich
                </div>
                <div className="sm:text-lg">
                    Vergleiche über 500 Stromanbieter und 150 Gasanbieter in Österreich und finde den günstigsten Tarif für deinen Haushalt. 
                    Durchschnittliche Ersparnis: bis zu 800€ pro Jahr. In nur 3 Minuten zum besten Tarif - kostenlos und unverbindlich.
                </div>
            </div>
            <div className="flex-1">
                <img src="/energyCompareInitial.webp" alt="Stromrechner mit Preisvergleich." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    So einfach funktioniert der <span className="text-appPrimary font-bold">Preisvergleich.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-1-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Deinen Verbrauch eingeben</div>
                            <div className="text-sm sm:text-base">
                                Gib deine Jahresverbrauchswerte für Strom und/oder Gas ein. Falls du diese nicht kennst, helfen wir dir bei der Schätzung basierend auf deiner Haushaltsgröße.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-2-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">PLZ und Wohnsituation</div>
                            <div className="text-sm sm:text-base">
                                Gib deine Postleitzahl ein und wähle deine Wohnsituation (Ein-/Mehrfamilienhaus) für exakte Preisberechnung inklusive Netzentgelte.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-3-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Vergleichsergebnisse ansehen</div>
                            <div className="text-sm sm:text-base">
                                Erhalte eine übersichtliche Liste aller verfügbaren Tarife sortiert nach Preis. Filtere nach Ökostrom, Preisgarantie oder Vertragslaufzeit.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-4-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Kostenlos Wechseln</div>
                            <div className="text-sm sm:text-base">
                                Wähle den besten Tarif aus und wir übernehmen den kompletten Wechsel für dich. Dein alter Vertrag wird automatisch gekündigt.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Unsere <span className="text-appPrimary font-bold">Vorteile.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:chart-line-variant" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Maximale Ersparnis</div>
                            <div className="text-sm sm:text-base">
                                Unsere durchschnittlichen Kunden sparen 600-800€ pro Jahr beim Wechsel. Große Familien sogar über 1.200€ jährlich.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:update" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Tägliche Preisaktualisierung</div>
                            <div className="text-sm sm:text-base">
                                Alle Tarife werden täglich aktualisiert. Du erhältst garantiert die aktuellsten Preise und Angebote vom Markt.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:leaf" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Ökostrom-Filter</div>
                            <div className="text-sm sm:text-base">
                                Spezieller Filter für 100% Ökostrom aus erneuerbaren Energien.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Durchschnittliche <span className="text-appPrimary font-bold">Ersparnis.</span>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:home-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            1-Personen-Haushalt
                        </div>
                        <div className="text-sm sm:text-base">
                            Singles und Studenten sparen durchschnittlich beim Wechsel zu günstigeren Anbietern erheblich.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Stromverbrauch:</b> 1.200 kWh/Jahr</div>
                            <div className="text-sm"><b>Durchschnittliche Ersparnis:</b> 250-400€</div>
                            <div className="text-sm"><b>Bester Tarif:</b> Ab 18€/Monat</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:account-group-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Familien-Haushalt
                        </div>
                        <div className="text-sm sm:text-base">
                            Familien mit 2-3 Personen haben das größte Einsparpotenzial beim Strom- und Gaswechsel.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Stromverbrauch:</b> 3.500 kWh/Jahr</div>
                            <div className="text-sm"><b>Durchschnittliche Ersparnis:</b> 600-800€</div>
                            <div className="text-sm"><b>Bester Tarif:</b> Ab 45€/Monat</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:domain" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Großfamilie
                        </div>
                        <div className="text-sm sm:text-base">
                            4+ Personen Haushalte und Mehrfamilienhäuser sparen am meisten durch Tarifwechsel.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Stromverbrauch:</b> 5.000+ kWh/Jahr</div>
                            <div className="text-sm"><b>Durchschnittliche Ersparnis:</b> 800-1.200€</div>
                            <div className="text-sm"><b>Bester Tarif:</b> Ab 65€/Monat</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Diese <span className="text-appPrimary font-bold">Anbieter vergleichen wir.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Wien Energie</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Energie Burgenland</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">EWR</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">EVN</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">TIWAG</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Salzburg AG</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">AKB</div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Weitere <span className="text-appPrimary font-bold">Energie-Dienstleistungen.</span>
                </div>
                <div className="flex flex-wrap gap-10 justify-center">
                    <div className="hover:scale-101 duration-500">
                        <Link href="/energy/switch">
                            <div className="relative">
                                <img src="/energySwitchInitial.webp" alt="Anbieter Wechsel" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Anbieter Wechsel
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/energy/eco">
                            <div className="relative">
                                <img src="/energyEcoInitial.webp" alt="Ökostrom Tarife" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Ökostrom Tarife
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
