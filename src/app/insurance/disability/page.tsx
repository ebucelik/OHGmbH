import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Disability() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine Berufsunfähigkeits-Versicherung
                </div>
                <div className="sm:text-lg">
                    Jede vierte Person wird in Deutschland berufsunfähig - oft früher als erwartet. Eine Berufsunfähigkeitsversicherung ist die wichtigste Absicherung für deine Arbeitskraft und dein Einkommen.
                    Wir finden den optimalen Schutz, der dich finanziell absichert, falls du deinen Beruf nicht mehr ausüben kannst.
                </div>
            </div>
            <div className="flex-1">
                <img src="/disabilityInsuranceInitial.webp" alt="Ein Mensch arbeitet im Büro mit Laptop." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="sm:w-2/3 pt-15">
                <ProgressStore progressType={ProgressType.disability} />
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum eine BU-Versicherung <span className="text-appPrimary font-bold">unverzichtbar ist.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:wallet-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Einkommenssicherung</div>
                            <div className="text-sm sm:text-base">
                                Erhalte eine monatliche Rente, die dein bisheriges Einkommen ersetzt, wenn du deinen Beruf aus gesundheitlichen Gründen nicht mehr ausüben kannst.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:home-heart-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Lebensstandard erhalten</div>
                            <div className="text-sm sm:text-base">
                                Sichere dir und deiner Familie den gewohnten Lebensstandard, auch wenn du nicht mehr arbeiten kannst. Keine finanziellen Sorgen bei Berufsunfähigkeit.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:shield-check-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Staatliche Lücken</div>
                            <div className="text-sm sm:text-base">
                                Die staatliche Erwerbsminderungsrente reicht oft nicht aus, um den Lebensunterhalt zu sichern. Schließe diese Lücke mit einer privaten BU-Versicherung.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:account-tie-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Spezifische Berufe</div>
                            <div className="text-sm sm:text-base">
                                Besonders wichtig für Akademiker, Selbstständige und Fachkräfte, da ihre Expertise schwer ersetzbar ist und die staatliche Absicherung oft geringer ausfällt.
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
                            <Icon icon="mdi:magnify-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Genaue Risikobewertung</div>
                            <div className="text-sm sm:text-base">
                                Wir analysieren deinen Beruf und deine Gesundheitsdaten, um den最适合 Versicherer mit besten Konditionen zu finden.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:file-document-check-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Optimierte Antragstellung</div>
                            <div className="text-sm sm:text-base">
                                Wir helfen dir bei der korrekten Beantwortung der Gesundheitsfragen und erhöhen so deine Annahmechancen erheblich.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:currency-eur" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Beste Preis-Leistung</div>
                            <div className="text-sm sm:text-base">
                                Durch unseren Vergleich von über 40 Versicherern findest du den besten Schutz zu günstigen Konditionen - oft bis zu 40% günstiger als Direktabschlüsse.
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
                            Grundschutz
                        </div>
                        <div className="text-sm sm:text-base">
                            Solide Grundabsicherung mit Berufsunfähigkeitsrente ab 1.000€/Monat und wichtigen Zusatzleistungen wie Arbeitsplatzverlust.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 30€/Monat</div>
                            <div className="text-sm"><b>Rente:</b> Bis zu 2.500€</div>
                            <div className="text-sm"><b>Laufzeit:</b> Bis 67 Jahre</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:star-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Komfort Plus
                        </div>
                        <div className="text-sm sm:text-base">
                            Umfassender Schutz mit höheren Renten, dynamischer Anpassung und eingeschlossener Dread Disease-Krankheitsversicherung.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 60€/Monat</div>
                            <div className="text-sm"><b>Rente:</b> Bis zu 4.000€</div>
                            <div className="text-sm"><b>Zusatz:</b> Pflegebonus</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:crown-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Premium Elite
                        </div>
                        <div className="text-sm sm:text-base">
                            Maximaler Schutz mit Höchstrenten, garantierter Rentensteigerung und weltweiten Gesundheitsschutz.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 120€/Monat</div>
                            <div className="text-sm"><b>Rente:</b> Bis zu 10.000€</div>
                            <div className="text-sm"><b>Zusatz:</b> Alle Extras</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Diese <span className="text-appPrimary font-bold">Versicherer arbeiten mit uns.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Allianz</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Axa</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Deutsche Renten</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">HDI</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">InterRisk</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Condor</div>
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
                        <Link href="/insurance/health">
                            <div className="relative">
                                <img src="/healthInsuranceInitial.webp" alt="Kranken-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Kranken-Versicherung
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