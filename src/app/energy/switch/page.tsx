import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function EnergySwitch() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Anbieter Wechsel Service
                </div>
                <div className="sm:text-lg">
                Wir übernehmen den kompletten Wechsel deines Stromanbieters für dich - absolut kostenlos und ohne Aufwand. 
                Von der Kündigung des alten Vertrags bis zur Anmeldung beim neuen Anbieter: kümmern wir uns um alles.
                Dein Strom wird fliegen, aber nicht deine Zeit.
                </div>
            </div>
            <div className="flex-1">
                <img src="/energySwitchInitial.webp" alt="Person unterschreibt Stromvertrag." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    So einfach ist der <span className="text-appPrimary font-bold">Anbieterwechsel.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-1-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Besten Tarif auswählen</div>
                            <div className="text-sm sm:text-base">
                                Nach unserem Vergleich wählst du den für dich passendsten Tarif aus. Wir beraten dich bei der Entscheidung und erklären alle Details.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-2-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Daten bereitstellen</div>
                            <div className="text-sm sm:text-base">
                                Du benötigst nur deine aktuelle Rechnung und die Zählernummer. Alle weiteren Daten besorgen wir von deinem aktuellen Anbieter.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-3-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Wir kümmern uns um alles</div>
                            <div className="text-sm sm:text-base">
                                Wir kündigen deinen alten Vertrag zum frühestmöglichen Zeitpunkt und registrieren dich beim neuen Anbieter. Du erhältst alle Bestätigungen.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:numeric-4-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Nahtloser Übergang</div>
                            <div className="text-sm sm:text-base">
                                Dein Strom fließt ungehindert weiter. Zum Wechselzeitpunkt übernimmt der neue Anbieter die Versorgung - ohne Unterbrechung.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Unsere <span className="text-appPrimary font-bold">Wechsel-Service Vorteile.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:pencil-off-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Kein Papierkram</div>
                            <div className="text-sm sm:text-base">
                                Wir übernehmen alle formellen Kündigungen und Anmeldungen. Keine lückenhaften Kündigungen oder fehlerhaften Anträge mehr.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:calendar-clock-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Perfekte Timing</div>
                            <div className="text-sm sm:text-base">
                                Wir kennen die exakten Kündigungsfristen aller Anbieter und sorgen dafür, dass der Wechsel zum optimalen Zeitpunkt erfolgt.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:shield-check-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Versorgungssicherheit</div>
                            <div className="text-sm sm:text-base">
                                Wir garantieren eine nahtlose Versorgung ohne Unterbrechung. Dein Strom wird immer fließen - garantiert.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Wichtige <span className="text-appPrimary font-bold">Informationen zum Wechsel.</span>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:file-clock-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Kündigungsfristen
                        </div>
                        <div className="text-sm sm:text-base">
                            Die meisten Stromverträge haben eine Kündigungsfrist von 6 Wochen zum Monatsende. Wir prüfen deinen Vertrag und finden den perfekten Zeitpunkt.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Standardfrist:</b> 6 Wochen</div>
                            <div className="text-sm"><b>Langfristige Verträge:</b> Bis zu 12 Monate</div>
                            <div className="text-sm"><b>Wir prüfen:</b> Exaktes Vertragsende</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:counter" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Zählerstände
                        </div>
                        <div className="text-sm sm:text-base">
                            Zum Wechselzeitraum benötigen wir deine aktuellen Zählerstände. Diese stehen auf deiner letzten Jahresabrechnung oder auf dem Zähler selbst.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Wichtig:</b> Exakte Ablesung</div>
                            <div className="text-sm"><b>Digitalzähler:</b> Automatische Übermittlung</div>
                            <div className="text-sm"><b>Wir helfen:</b> Bei der Ablesung</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:bank-transfer-out" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Abschlagszahlungen
                        </div>
                        <div className="text-sm sm:text-base">
                            Mit dem neuen Anbieter ändert sich deine Abschlagshöhe. Wir berechnen die neue Rate basierend auf deinem Verbrauch und dem neuen Tarif.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Anpassung:</b> Monatlich/Jährlich</div>
                            <div className="text-sm"><b>Nachzahlung:</b> Vermeiden durch Anpassung</div>
                            <div className="text-sm"><b>Vorteil:</b> Bessere Kostenkontrolle</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Häufige <span className="text-appPrimary font-bold">Fragen zum Wechsel.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:help-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Kann ich jederzeit wechseln?</div>
                            <div className="text-sm sm:text-base">
                                Ja, sobald deine Mindestvertragslaufzeit abgelaufen ist. Wir prüfen deine Kündigungsfrist und sorgen für einen reibungslosen Wechsel zum perfekten Zeitpunkt.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:help-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Gibt es Wechselkosten?</div>
                            <div className="text-sm sm:text-base">
                                Nein. Der Wechsel zu einem neuen Stromanbieter ist für dich absolut kostenlos. Wir verdienen an einer Provision vom neuen Anbieter, nicht von dir.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:help-circle-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Was passiert bei Ausfall?</div>
                            <div className="text-sm sm:text-base">
                                Nichts. Die Stromversorgung wird gesetzlich garantiert und läuft nahtlos weiter. Nur der Rechnungsempfänger ändert sich.
                            </div>
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