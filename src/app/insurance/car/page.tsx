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
                            children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Fahrzeugart"
                                        listValues={[
                                            "PKW",
                                            "LKW",
                                            "Motorrad",
                                            "Moped"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Antriebsart"
                                        listValues={[
                                            "Diesel",
                                            "Benzin",
                                            "Elektro",
                                            "Hybrid",
                                            "Erdgas"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Marke"
                                        listValues={[
                                            "Abarth", "AC", "Acura", "Aiways", "Alfa Romeo", "Alpina", "Alpine", "Ariel", "Arrinera", "Artega", "Asia Motors", "Aston Martin", "Audi", "BAC", "Baojun", "Bentley", "BMW", "Borgward", "Brabus", "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Carver", "Caterham", "Changan", "Changhe", "Chery", "Chevrolet", "Chrysler", "Citroën", "Cupra", "Dacia", "Daewoo", "Daihatsu", "De Tomaso", "Delorean", "DFSK", "Dodge", "Dongfeng", "DS Automobiles", "Elaris", "Exeed", "FAW", "Ferrari", "Fiat", "Fisker", "Ford", "Foton", "GAC", "Geely", "Genesis", "Ginetta", "GMC", "Great Wall", "Gumpert", "Haval", "HiPhi", "Hindustan Motors", "Holden", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Iveco", "JAC", "Jaguar", "Jeep", "Jensen", "Karma", "Kia", "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "LEVC", "Lexus", "Ligier", "Lincoln", "Lotus", "Lucid", "Luxgen", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-AMG", "Mercedes-Benz", "Mercury", "MG", "Microcar", "Mini", "Mitsubishi", "Morgan", "Nio", "Nissan", "Noble", "Oldsmobile", "Opel", "Pagani", "Peugeot", "Piaggio", "Pininfarina", "Plymouth", "Polestar", "Pontiac", "Porsche", "Proton", "Qoros", "RAM", "Renault", "Rezvani", "Rimac", "Rivian", "Rolls-Royce", "Rover", "Saab", "Saleen", "Samsung", "Saturn", "Scion", "SEAT", "Seres", "Shelby", "Škoda", "Smart", "Spyker", "SsangYong", "Subaru", "Suzuki", "Tata", "Tazzari", "Tesla", "Toyota", "Trabant", "TVR", "Vauxhall", "Venturi", "Volkswagen", "Volvo", "W Motors", "Wartburg", "Wiesmann", "XPeng", "Yugo", "Zastava", "Zhidou", "Zotye"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.text}
                                        required={true}
                                        title="Modellbezeichnung"
                                        placeholder="zB.: CLA 180"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.text}
                                        required={true}
                                        title="Motorleistung in kW (gesamt)"
                                        placeholder="zB.: 110"
                                    />
                                </div>
                            </div>
                        },
                        {
                            key: "carDetailsEnhanced",
                            title: "KFZ Details Erweitert",
                            children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <FormInput
                                        type={InputType.text}
                                        required={true}
                                        title="Listenneupreise inkl. USt und NoVA"
                                        placeholder="Neupreis des Fahrzeugs"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.text}
                                        required={true}
                                        title="Sonderaustattung in EUR"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Leasing"
                                        listValues={[
                                            "Nein",
                                            "Ja"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.text}
                                        required={true}
                                        title="Baujahr/Erstzulassung"
                                        placeholder="zb.: 2020"
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        title="Anzahl der Sitzplätze"
                                        listValues={[
                                            "1",
                                            "2",
                                            "3",
                                            "4",
                                            "5",
                                            "6",
                                            "7",
                                            "8",
                                            "9"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Zulassungsbezirk"
                                        listValues={[
                                            "AM", "B", "BL", "BN", "BZ", "E", "FW", "G", "GM", "GS", "GU", "HA", "HB", "HE", "HO", "IL", "IM", "JE", "JO", "KI", "KL", "KO", "KR", "KS", "KU", "LA", "LB", "LE", "LF", "LI", "LN", "LO", "LZ", "MD", "ME", "MI", "MU", "ND", "NK", "OP", "PE", "PL", "RE", "RI", "RO", "S", "SD", "SE", "SL", "SP", "SR", "ST", "SZ", "TA", "TU", "UU", "VB", "VI", "VL", "VO", "W", "WB", "WE", "WL", "WO", "WT", "WU", "WY", "ZE"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Bonusstufe"
                                        listValues={[
                                            "-7",
                                            "-6",
                                            "-5",
                                            "-4",
                                            "-3",
                                            "-2",
                                            "-1",
                                            "0",
                                            "1",
                                            "2",
                                            "3",
                                            "4",
                                            "5",
                                            "6",
                                            "7",
                                            "8",
                                            "9",
                                            "10",
                                            "11",
                                            "12",
                                            "13",
                                            "14",
                                            "15",
                                            "16",
                                            "17"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Kilometerleistung pro Jahr"
                                        listValues={[
                                            "max 7.000 km",
                                            "max 10.000 km",
                                            "max 20.000 km",
                                            "max 30.000 km",
                                            "mehr als 30.000 km",
                                        ]}
                                    />
                                </div>
                            </div>
                        },
                        {
                            key: "paymentType",
                            title: "Zahlungsart",
                            children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Zahlart"
                                        listValues={[
                                            "Abbuchungsauftrag",
                                            "Zahlschein"
                                        ]}
                                    />
                                </div>
                                <div>
                                    <FormInput
                                        type={InputType.list}
                                        required={true}
                                        title="Zahlungsfrequenz"
                                        listValues={[
                                            "monatlich (nur bei Abbuchung möglich)",
                                            "vierteljährlich",
                                            "halbjährlich",
                                            "jährlich"
                                        ]}
                                    />
                                </div>
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