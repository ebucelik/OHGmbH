import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Health() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine Kranken-Versicherung
                </div>
                <div className="sm:text-lg">
                    In Österreich ist die Krankenversicherung gesetzlich geregelt, aber du hast die Wahl zwischen der gesetzlichen und privaten Krankenversicherung. 
                    Wir helfen dir, die beste Option für deine Gesundheit und Finanzen zu finden und sorgen für optimalen Schutz bei Krankheit und Unfall.
                </div>
            </div>
            <div className="flex-1">
                <img src="/healthInsuranceInitial.webp" alt="Ein Arzt berät einen Patienten." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="sm:w-2/3 pt-15">
                <ProgressStore progressType={ProgressType.health} />
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum eine private Kranken-Versicherung <span className="text-appPrimary font-bold">vorteilhaft sein kann.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:hospital-building-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Freie Arztwahl</div>
                            <div className="text-sm sm:text-base">
                                Behandle dich beim Arzt deiner Wahl - ohne Wartezeiten und ohne Überweisungen. Zugang zu den besten Fachärzten und Kliniken.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:tooth-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Bessere Zahnbehandlung</div>
                            <div className="text-sm sm:text-base">
                                Umfassende Zahnersatzleistungen, professionelle Zahnreinigung und moderne Behandlungsmethoden ohne Kostenbeteiligung.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:hotel-suite-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Komfort im Krankenhaus</div>
                            <div className="text-sm sm:text-base">
                                Wahl zwischen Ein- oder Zweibettzimmern, Chefarztbehandlung und Behandlung in Privatkliniken für maximalen Komfort.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:eye-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Alternative Heilmethoden</div>
                            <div className="text-sm sm:text-base">
                                Erstattung für Homöopathie, Akupunktur, Osteopathie und andere komplementärmedizinische Behandlungen.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Unsere <span className="text-appPrimary font-bold">Leistungen.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:compare-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Unabhängiger Tarifvergleich</div>
                            <div className="text-sm sm:text-base">
                                Wir vergleichen über 20 private Krankenversicherer und finden den Tarif mit dem besten Preis-Leistungs-Verhältnis für dich.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:calculator-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Beitragsrechner</div>
                            <div className="text-sm sm:text-base">
                                Berechne deine Ersparnis gegenüber der gesetzlichen Versicherung und finde den optimalen Versicherungsschutz.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:file-document-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Volle Abwicklung</div>
                            <div className="text-sm sm:text-base">
                                Von der Beratung über die Antragstellung bis zur Leistungsbearbeitung - wir kümmern uns um alles.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Verfügbare <span className="text-appPrimary font-bold">Tarife.</span>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:shield-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Basis Tarif
                        </div>
                        <div className="text-sm sm:text-base">
                            Grundlegende Absicherung mit freiwilliger Versicherung im Ausland, Zahnersatz und alternative Heilmethoden.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 150€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Erstattung bis 80%</div>
                            <div className="text-sm"><b>Für:</b> Einzelpersonen</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:star-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Komfort Tarif
                        </div>
                        <div className="text-sm sm:text-base">
                            Umfassender Schutz mit Chefarztbehandlung, Ein- oder Zweibettzimmern und voller Zahnersatzübernahme.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 250€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Erstattung bis 100%</div>
                            <div className="text-sm"><b>Für:</b> Familien geeignet</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:crown-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Premium Tarif
                        </div>
                        <div className="text-sm sm:text-base">
                            Maximaler Schutz mit Privatkliniken, internationaler Absicherung und allen alternativen Heilmethoden.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 400€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Vollständige Übernahme</div>
                            <div className="text-sm"><b>Für:</b> Höchste Ansprüche</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Diese <span className="text-appPrimary font-bold">Versicherer arbeiten mit uns.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">DKV</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">AOK</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Signal Iduna</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Continentale</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Hallesche</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Barmenia</div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Interesiert an <span className="text-appPrimary font-bold">anderen Versicherungen?</span>
                </div>
                <div className="flex flex-wrap gap-10 justify-center">
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/life">
                            <div className="relative">
                                <img src="/lifeInsuranceInitial.webp" alt="Lebens-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Lebens-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/accident">
                            <div className="relative">
                                <img src="/accidentInsuranceInitial.webp" alt="Unfall-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Unfall-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/law">
                            <div className="relative">
                                <img src="/lawInsuranceInitial.webp" alt="Rechtsschutz-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Rechtsschutz-Versicherung
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