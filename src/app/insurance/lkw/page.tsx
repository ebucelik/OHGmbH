import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function LKW() {
    return <div>
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine LKW-Versicherung
                </div>
                <div className="sm:text-lg">
                    Mit der richtigen LKW-Versicherung bist du im Schadensfall bestens abgesichert.
                    Die gesetzliche <b>Kfz-Haftpflichtversicherung</b> deckt Schäden ab, die du anderen zufügst. Ergänzend schützt eine <b>Kasko-Versicherung</b> dein eigenes Fahrzeug bei Unfall, Diebstahl oder Elementarschäden.
                    So bleibt dein Unternehmen mobil - sicher, zuverlässig und optimal versichert.
                </div>
            </div>
            <div className="flex-1">
                <img src="/lkwInsuranceInitial.webp" alt="Fahrendes LKW." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`flex flex-col place-items-center`}>
            <div className="sm:w-2/3 pt-15">
                <ProgressStore progressType={ProgressType.lkw} />
            </div>
            <div className="flex flex-col gap-5 sm:gap-20 sm:w-2/3 px-5 py-10 sm:py-20">
                <div className="text-2xl sm:text-4xl">
                    Warum eine LKW-Versicherung <span className="text-appPrimary font-bold">wichtig ist.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:text-lg">
                    <div className="flex-1">
                        <img src="/lkwInsurance.svg" alt="Wichtigkeit der LKW-Versicherung." className="object-cover rounded-2xl shadow-xl" />
                    </div>
                    <div className="flex-1">
                        Ein LKW ist oft mehr als nur ein Fahrzeug - er ist das Fundament vieler Unternehmen.
                        Ein Unfall, Diebstahl oder Schaden kann schnell hohe Kosten verursachen und den Betrieb lahmlegen.
                        Mit einer passenden LKW-Versicherung bist du <b>finanziell abgesichert</b> und kannst dich voll auf dein Geschäft konzentrieren.
                        Sie schützt dich vor Schäden an Dritten, am eigenen Fahrzeug und sorgt dafür, dass du im Schadensfall <b>schnell wieder mobil bist</b>.
                        <br />Kurz gesagt: Ohne Versicherung riskierst du Ausfälle - mit der richtigen bist <b>du auf der sicheren Seite</b>.
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
                                Ertragsausfallversicherung (bei Fahrzeugausfall nach Schaden)
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
                        <Link href="/insurance/motorcycle">
                            <div className="relative">
                                <img src="/motorcycleInsuranceInitial.webp" alt="Motorrad-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Motorrad-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="/insurance/moped">
                            <div className="relative">
                                <img src="/mopedInsuranceInitial.webp" alt="Moped-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Moped-Versicherung
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:scale-101 duration-500">
                        <Link href="">
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
                        <Link href="">
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
                        <Link href="/insurance/flat">
                            <div className="relative">
                                <img src="/householdInsuranceInitial.webp" alt="Haushalts-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                                <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                                    <div className="text-lg text-center">
                                        Haushalts-Versicherung
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