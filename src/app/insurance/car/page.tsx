import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";
import ProgressStore from "../../../components/progress/progressStore";
import { ProgressType } from "../../../components/progress/progressType";
import { Icon } from "@iconify/react";

export default function Car() {
    return <div>
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-left">
                <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
                    Deine Auto-Versicherung
                </div>
                <div className="sm:text-lg">
                    In Österreich ist die Kfz-Haftpflichtversicherung <b>gesetzlich vorgeschrieben</b> - sie schützt dich, wenn du mit deinem Fahrzeug einen Schaden verursachst.
                    Wir helfen dir, den passenden Tarif zu finden, der nicht nur alle gesetzlichen Anforderungen erfüllt, sondern auch zu deinem Budget passt.
                </div>
            </div>
            <div className="flex-1">
                <img src="/driving.webp" alt="Eine Frau fährt ein Auto." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div className={`${defaultPadding} flex flex-col place-items-center`}>
            <div className="sm:w-2/3">
                <ProgressStore progressType={ProgressType.car} />
            </div>
            <div className="flex flex-col gap-10 sm:w-2/3 pt-20">
                <div className="text-xl sm:text-4xl">
                    Warum eine KFZ-Versicherung <span className="text-appPrimary font-bold">wichtig ist.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:text-lg">
                    <div className="flex-1">
                        <img src="/carInsurance.svg" alt="Wichtigkeit der Autoversicherung." className="object-cover rounded-2xl shadow-xl" />
                    </div>
                    <div className="flex-1">
                        Ein Auto bedeutet Freiheit - aber auch Verantwortung.
                        Schon ein kleiner Unfall kann schnell hohe Kosten verursachen.
                        Eine Kfz-Versicherung schützt dich genau davor: Sie übernimmt Schäden, die du anderen zufügst,
                        und - je nach Deckung - auch Schäden an deinem eigenen Fahrzeug.
                        <b> Ohne Versicherung müsstest du für Reparaturen, Gutachten oder Personenschäden selbst aufkommen -
                            und das kann teuer werden.</b> Mit der richtigen Kfz-Versicherung bist du auf der sicheren Seite: finanziell geschützt,
                        gesetzlich abgesichert und mit dem guten Gefühl, dass im Ernstfall jemand an deiner Seite steht.
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 sm:w-2/3 pt-20">
                <div className="text-xl sm:text-4xl text-center">
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
                                Sachschäden (z. B. an fremden Fahrzeugen, Gebäuden, Gegenständen)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Eigenschäden am eigenen Fahrzeug (je nach Kaskovariante)
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Diebstahl des Fahrzeugs oder Fahrzeugteilen
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 place-items-center">
                            <div>
                                <Icon icon="lets-icons:check-fill" className="h-12 w-12 text-green-600" />
                            </div>
                            <div>
                                Glasbruch (Windschutzscheibe, Seitenscheiben, Scheinwerfer)
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
                                Sturm-, Hagel-, Blitz- und Überschwemmungsschäden
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:text-xl">
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
                                Vandalismusschäden
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
                    </div>
                </div>
            </div>
        </div>
    </div>
}