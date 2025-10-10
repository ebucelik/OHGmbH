import FormInput, { InputType } from "../../../components/formInput";
import Progress from "../../../components/progress";
import { defaultPadding } from "../../../shared/style";
import { radley } from "../../layout";

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
            <div className="text-xl sm:text-4xl sm:w-2/3">
                In wenigen Schritten zur Autoversicherung
            </div>

            <div className="sm:w-2/3">
                <Progress steps={
                    [
                        {
                            key: "type",
                            title: "Deckungsumfang",
                            children: <div>
                                <FormInput
                                    type={InputType.radio}
                                    required={true}
                                    title="Welche Variante wünscht du?"
                                    listValues={[
                                        "Haftpflicht",
                                        "Haftpflicht und Teilkasko",
                                        "Haftpflicht und Vollkasko"
                                    ]}
                                />
                            </div>
                        },
                        {
                            key: "carDetails",
                            title: "KFZ Details",
                            children: <div>
                                Details
                            </div>
                        },
                        {
                            key: "carDetailsEnhanced",
                            title: "KFZ Details Erweitert",
                            children: <div>
                                Erweitert
                            </div>
                        },
                        {
                            key: "paymentType",
                            title: "Zahlungsart",
                            children: <div>
                                Zahlung
                            </div>
                        },
                        {
                            key: "personalDetails",
                            title: "Persönliche Angaben",
                            children: <div>
                                Persönlich
                            </div>
                        }
                    ]
                } />
            </div>
        </div>
    </div>
}