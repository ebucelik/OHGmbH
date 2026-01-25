import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Flat() {
    return <div className="pt-30">
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine Haushalts-Versicherung
                </div>
                <div className="sm:text-lg">
                    Eine <b>Haushaltsversicherung</b> schützt dein Hab und Gut vor <b>Feuer, Wasser, Einbruch oder Sturm</b>. So ist dein Zuhause und alles darin bestens abgesichert - egal, was passiert.
                </div>
            </div>
            <div className="flex-1">
                <img src="/householdInsuranceInitial.webp" alt="Haushalt" className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="sm:w-2/3 pt-15">
                <ProgressStore progressType={ProgressType.flat} />
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum eine Haushalts-Versicherung <span className="text-appPrimary font-bold">wichtig ist.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:text-lg">
                    <div className="flex-1">
                        <img src="/householdInsurance.svg" alt="Wichtigkeit der Haushalts-Versicherung." className="object-cover rounded-2xl shadow-xl" />
                    </div>
                    <div className="flex-1">
                        Dein Zuhause ist mehr als nur vier Wände - es steckt voller Erinnerungen und Wertgegenstände. Eine <b>Haushaltsversicherung</b> schützt alles, was sich im Haushalt befindet: Möbel, Kleidung, Elektrogeräte, Schmuck und vieles mehr.
                        <br />
                        Sie greift bei <b>Einbruchdiebstahl, Feuer, Leitungswasser-, Sturm- und Hagelschäden</b> und übernimmt auch Folgekosten wie Aufräumarbeiten oder Hotelkosten nach einem großen Schaden.
                        <br />
                        So kannst du dich darauf verlassen, dass dein Besitz und dein Alltag auch im Ernstfall gut geschützt sind.
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl text-center">
                    Was ist eigentlich <span className="decoration-appPrimary underline underline-offset-8">versichert?</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <div className="flex flex-col gap-3 sm:text-xl">
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Personenschäden (z. B. Verletzungen anderer Verkehrsteilnehmer)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Sachschäden (z. B. an fremden Fahrzeugen, Gebäuden oder Gütern)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Vermögensschäden, die durch den Unfall entstehen
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Diebstahl des LKW oder einzelner Fahrzeugteile
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Glasbruch (z. B. Windschutz- oder Seitenscheiben)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Brand- und Explosionsschäden
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Naturgewalten: Sturm, Hagel, Blitz, Überschwemmung
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Wildschäden (Tierkollision)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Marder- oder Kurzschlussschäden (je nach Tarif)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Parkschäden (je nach Tarif)
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:text-xl">
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Selbstverschuldete Unfälle (nur bei Vollkasko)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Pannenhilfe- und Abschleppkosten (bei Zusatzschutz)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Schäden durch höhere Gewalt (z. B. Naturkatastrophen)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Vandalismus durch Dritte
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Schäden durch unbekannte Dritte
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Auslandsschutz (für internationale Fahrten)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Zubehör- und Bekleidungsschutz (z. B. Helm, Jacke, Koffer)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Pannenhilfe und Abschleppdienst
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Rechtsschutzversicherung
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Insassen-Unfallversicherung
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    Jeweils abhängig vom gewählten Tarif.
                </div>
            </div>
            <div className={`${defaultPadding} w-full bg-appSecondary text-white`}>
                <div className="text-2xl sm:text-4xl">
                    Mehr Versicherungen
                </div>
                <div className="grid grid-rows-1 sm:grid-cols-3 gap-10 py-5 sm:py-10 place-items-center sm:justify-center">
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/car">
                            <div className="relative">
                                <img src="/carInsuranceInitial.webp" alt="Auto-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Auto-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/lkw">
                            <div className="relative">
                                <img src="/lkwInsuranceInitial.webp" alt="LKW-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        LKW-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/moped">
                            <div className="relative">
                                <img src="/mopedInsuranceInitial.webp" alt="Motorrad-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Moped-Versicherung
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
                        <Link href="/insurance/ownhome">
                            <div className="relative">
                                <img src="/ownhomeInsuranceInitial.webp" alt="Haushalts-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Eigenheim-Versicherung
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