import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Life() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine Lebens-Versicherung
                </div>
                <div className="sm:text-lg">
                    Eine Lebensversicherung ist ein wichtiger Baustein deiner finanziellen Absicherung. Sie schützt nicht nur deine Liebsten im Todesfall, sondern dient auch der Vermögensbildung und Altersvorsorge.
                    Wir helfen dir, die passende Tarifkombination zu finden, die deine individuellen Bedürfnisse optimal berücksichtigt.
                </div>
            </div>
            <div className="flex-1">
                <img src="/lifeInsuranceInitial.webp" alt="Eine Familie genießt die Zeit zusammen." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="sm:w-2/3 pt-15">
                <ProgressStore progressType={ProgressType.life} />
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum eine Lebens-Versicherung <span className="text-appPrimary font-bold">entscheidend ist.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:shield-check-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Absicherung der Familie</div>
                            <div className="text-sm sm:text-base">
                                Sorge dafür, dass deine Angehörigen finanziell versorgt sind, falls dir etwas zustoßen sollte.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:home-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Immobilienfinanzierung</div>
                            <div className="text-sm sm:text-base">
                                Sichere deine Hypothek ab und sorge dafür, dass dein Traumhaus auch bei unvorhergesehenen Ereignissen erhalten bleibt.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:piggy-bank-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Altersvorsorge</div>
                            <div className="text-sm sm:text-base">
                                Baue systematisch Vermögen für deinen Ruhestand auf und genieße finanzielle Unabhängigkeit.
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
                            <Icon icon="mdi:calculator" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Unabhängiger Vergleich</div>
                            <div className="text-sm sm:text-base">
                                Wir analysieren für dich über 50 Versicherungsanbieter und finden den besten Tarif zu deinen Konditionen.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:account-group-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Persönliche Beratung</div>
                            <div className="text-sm sm:text-base">
                                Unsere Experten nehmen sich Zeit für deine individuelle Situation und finden die optimale Lösung.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-appPrimary text-2xl">
                            <Icon icon="mdi:file-document-outline" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">Komplettservice</div>
                            <div className="text-sm sm:text-base">
                                Wir unterstützen dich bei der Antragstellung und stehen dir auch nach Vertragsabschluss zur Seite.
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
                                <Icon icon="mdi:shield-account-outline" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Risikolebensversicherung
                        </div>
                        <div className="text-sm sm:text-base">
                            Reine Todesfalleistung bei Tod des Versicherten während der Vertragslaufzeit. Ideale Grundabsicherung zu günstigen Beiträgen.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 5€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Bis zu 1.000.000€</div>
                            <div className="text-sm"><b>Laufzeit:</b> 10-30 Jahre</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:chart-line" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Kapitallebensversicherung
                        </div>
                        <div className="text-sm sm:text-base">
                            Kombination aus Risikoschutz und Vermögensbildung mit garantierter Todesfalleistung und Erlebensfallleistung.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 30€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Garantierte Auszahlung</div>
                            <div className="text-sm"><b>Laufzeit:</b> 12-30 Jahre</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-appGray rounded-2xl p-5 sm:p-10 flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="text-appPrimary text-4xl">
                                <Icon icon="mdi:cash-plus" />
                            </div>
                        </div>
                        <div className="text-lg font-bold text-center">
                            Rentenversicherung
                        </div>
                        <div className="text-sm sm:text-base">
                            Direkte Altersvorsorge mit monatlicher Rente im Ruhestand. Zusätzlich steuerliche Vorteile möglich.
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-sm"><b>Ab:</b> 50€/Monat</div>
                            <div className="text-sm"><b>Leistung:</b> Lebenslange Rente</div>
                            <div className="text-sm"><b>Laufzeit:</b> Flexibel</div>
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
                        <div className="text-xs sm:text-base font-bold">AXA</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Generali</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">HDI</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">WWK</div>
                    </div>
                    <div className="w-32 h-16 rounded-xl bg-white flex items-center justify-center">
                        <div className="text-xs sm:text-base font-bold">Debeka</div>
                    </div>
                </div>
                <div className="text-2xl sm:text-4xl">
                    Interesiert an <span className="text-appPrimary font-bold">anderen Versicherungen?</span>
                </div>
                <div className="flex flex-wrap gap-10 justify-center">
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/car">
                            <div className="relative">
                                <img src="/carInsuranceInitial.webp" alt="KFZ-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        KFZ-Versicherung
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
