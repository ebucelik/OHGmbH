import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function EnergyEco() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Ökostrom & Nachhaltigkeit
                </div>
                <div className="sm:text-lg">
                Wähle Ökostrom aus 100% erneuerbaren Energien und trage aktiv zum Klimaschutz bei. 
                Moderne Ökostromtarife sind oft günstiger als konventioneller Strom und bieten garantierte Herkunft aus Wasser, Wind, Sonne und Biomasse.
                </div>
            </div>
            <div className="flex-1">
                <img src="/energyEcoInitial.webp" alt="Windräder und Solarpanele." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum <span className="text-appPrimary font-bold">Ökostrom wählen?</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:leaf" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Klimaschutz aktiv unterstützen</div>
                            <div className="text-sm sm:text-base">
                                Mit Ökostrom reduzierst du deinen CO2-Fußabdruck um bis zu 3 Tonnen pro Jahr. Das entspricht etwa 15.000 km Autofahrt.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:earth" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">100% erneuerbare Energien</div>
                            <div className="text-sm sm:text-base">
                                Garantierte Herkunft aus Wasserkraft, Windenergie, Solaranlagen und Biomasse. Kein Atomstrom, kein Kohlestrom.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:currency-eur" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Oft günstiger als konventionell</div>
                            <div className="text-sm sm:text-base">
                                Viele Ökostromtarife sind heute preislich gleichwertig oder sogar günstiger als herkömmlicher Strommix.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:certificate-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Zertifizierte Qualität</div>
                            <div className="text-sm sm:text-base">
                                Alle angebotenen Ökostromtarife sind nach TÜV-geprüften Kriterien zertifiziert und garantieren echten Ökostrom.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Erneuerbare <span className="text-appPrimary font-bold">Energiequellen.</span>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:water-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Wasserkraft
                        </div>
                        <div className="text-sm sm:text-base">
                            Österreichs wichtigste erneuerbare Energiequelle. Sauber, zuverlässig und wetterunabhängig. Macht über 60% des Ökostroms aus.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Anteil:</b> 60-65%</div>
                            <div className="text-sm"><b>Vorteile:</b> Stabil, wetterunabhängig</div>
                            <div className="text-sm"><b>Region:</b> Alpen, Donau</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:wind-turbine" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Windenergie
                        </div>
                        <div className="text-sm sm:text-base">
                            Moderne Windräder an exponierten Lagen. Emissionfrei und effizient. Die zweitwichtigste Quelle für Ökostrom.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Anteil:</b> 20-25%</div>
                            <div className="text-sm"><b>Vorteile:</b> Emissionsfrei, kostengünstig</div>
                            <div className="text-sm"><b>Region:</b> Wienerwald, Burgenland</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:solar-power" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Solarenergie
                        </div>
                        <div className="text-sm sm:text-base">
                            Photovoltaik auf Dächern und in Freiflächenanlagen. Sonnige Energie direkt von Österreichs Dächern.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Anteil:</b> 8-12%</div>
                            <div className="text-sm"><b>Vorteile:</b> Dezentral, wachsend</div>
                            <div className="text-sm"><b>Region:</b> Ostösterreich, Alpen</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Unsere <span className="text-appPrimary font-bold">Ökostrom-Vorteile.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:magnify-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Transparenz garantiert</div>
                            <div className="text-sm sm:text-base">
                                Jeder Kilowattstunde Ökostrom wird exakt nachverfolgt. Du erhältst Herkunftsnachweise für deine gesamte Strommenge.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:star-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">TÜV-geprüfte Zertifikate</div>
                            <div className="text-sm sm:text-base">
                                Alle Ökostromtarife sind nach strengen Kriterien zertifiziert: TÜV EE-01, OK Power, Grüner Strom Label.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:trending-up" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Förderung unterstützen</div>
                            <div className="text-sm sm:text-base">
                                Mit deinem Ökostrombeitrag förderst du direkt den Ausbau erneuerbarer Energien in Österreich.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Top <span className="text-appPrimary font-bold">Ökostrom-Anbieter.</span>
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
                        <div className="text-xs sm:text-base font-bold">TIWAG</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Salzburg AG</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">WEB</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Eco Supreme</div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Dein <span className="text-appPrimary font-bold">Beitrag zum Klimaschutz.</span>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:home-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            2-Personen-Haushalt
                        </div>
                        <div className="text-sm sm:text-base">
                            Mit Ökostrom sparest du etwa 2.000 kg CO2 pro Jahr. Das entspricht der Emission von 10.000 km Autofahrt.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Verbrauch:</b> 2.800 kWh/Jahr</div>
                            <div className="text-sm"><b>CO2-Einsparung:</b> 2.000 kg/Jahr</div>
                            <div className="text-sm"><b>Preis:</b> Ab 25€/Monat</div>
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
                            Familien mit Ökostrom sparen bis zu 3.500 kg CO2 jährlich - vergleichbar mit 20 Flügen von Wien nach Paris.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Verbrauch:</b> 4.500 kWh/Jahr</div>
                            <div className="text-sm"><b>CO2-Einsparung:</b> 3.500 kg/Jahr</div>
                            <div className="text-sm"><b>Preis:</b> Ab 40€/Monat</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:domain" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Großhaushalt
                        </div>
                        <div className="text-sm sm:text-base">
                            Große Haushalte mit Ökostrom sparen über 5.000 kg CO2 pro Jahr - ein wichtiger Beitrag zum Klimaschutz.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Verbrauch:</b> 6.500+ kWh/Jahr</div>
                            <div className="text-sm"><b>CO2-Einsparung:</b> 5.000+ kg/Jahr</div>
                            <div className="text-sm"><b>Preis:</b> Ab 55€/Monat</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Weitere <span className="text-appPrimary font-bold">Energie-Dienstleistungen.</span>
                </div>
                <div className="flex flex-wrap gap-10 justify-center">
                    <div className="hover:scale-101 duration-500">
                        <Link href="/energy/compare">
                            <div className="relative">
                                <img src="/energyCompareInitial.webp" alt="Strom & Gas Vergleich" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Strom & Gas Vergleich
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
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
                </div>
            </div>
        </div>
    </div>
}
