"use client";

import { CarInsuranceFormType } from "../../model/carInsuranceFormType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { InsuranceState, setInsurance } from "../../core/carInsuranceCore";

export default function CarInsurance() {
    const carInsurance = useAppSelector((state) => state.carInsuranceCore)
    const dispatch = useAppDispatch()

    function setInsuranceForm(
        insuranceState: InsuranceState
    ) {
        dispatch(
            setInsurance(insuranceState)
        )
    }

    const steps: Step<any>[] =
        [
            {
                key: "type",
                title: "Deckungsumfang",
                children: <div>
                    <FormInput
                        id={CarInsuranceFormType.insuranceType}
                        type={InputType.radio}
                        required={true}
                        title="Welche Variante wünscht du?"
                        listValues={[
                            "Haftpflicht",
                            "Haftpflicht und Teilkasko",
                            "Haftpflicht und Vollkasko"
                        ]}
                        value={carInsurance.insuranceType}
                        onChange={(event) =>
                            setInsuranceForm(
                                {
                                    insuranceType: event.target.getAttribute('id') ?? "",
                                    carType: "",
                                    movementType: "",
                                    brand: "",
                                    modelName: "",
                                    enginePower: "",
                                    carPrice: "",
                                    specialEquipment: "",
                                    leasing: "",
                                    creationDate: "",
                                    amountOfSeats: "",
                                    registrationDistrict: "",
                                    bonusLevel: "",
                                    kmPerYear: "",
                                    paymentType: "",
                                    paymentFrequency: "",
                                    salutation: "",
                                    academicTitlePre: "",
                                    firstname: "",
                                    lastname: "",
                                    academicTitlePost: "",
                                    citizenship: "",
                                    birthday: "",
                                    job: "",
                                    address: "",
                                    doornumber: "",
                                    postalCode: "",
                                    city: "",
                                    email: "",
                                    phoneNumber: ""
                                }
                            )
                        }
                    />
                </div>
            },
            {
                key: "carDetails",
                title: "KFZ Details",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.carType}
                            type={InputType.list}
                            required={true}
                            title="Fahrzeugart"
                            listValues={[
                                "PKW",
                                "LKW",
                                "Motorrad",
                                "Moped"
                            ]}
                            value={carInsurance.carType}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.movementType}
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
                            value={carInsurance.movementType}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.brand}
                            type={InputType.list}
                            required={true}
                            title="Marke"
                            listValues={[
                                "Abarth", "AC", "Acura", "Aiways", "Alfa Romeo", "Alpina", "Alpine", "Ariel", "Arrinera", "Artega", "Asia Motors", "Aston Martin", "Audi", "BAC", "Baojun", "Bentley", "BMW", "Borgward", "Brabus", "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Carver", "Caterham", "Changan", "Changhe", "Chery", "Chevrolet", "Chrysler", "Citroën", "Cupra", "Dacia", "Daewoo", "Daihatsu", "De Tomaso", "Delorean", "DFSK", "Dodge", "Dongfeng", "DS Automobiles", "Elaris", "Exeed", "FAW", "Ferrari", "Fiat", "Fisker", "Ford", "Foton", "GAC", "Geely", "Genesis", "Ginetta", "GMC", "Great Wall", "Gumpert", "Haval", "HiPhi", "Hindustan Motors", "Holden", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Iveco", "JAC", "Jaguar", "Jeep", "Jensen", "Karma", "Kia", "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "LEVC", "Lexus", "Ligier", "Lincoln", "Lotus", "Lucid", "Luxgen", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-AMG", "Mercedes-Benz", "Mercury", "MG", "Microcar", "Mini", "Mitsubishi", "Morgan", "Nio", "Nissan", "Noble", "Oldsmobile", "Opel", "Pagani", "Peugeot", "Piaggio", "Pininfarina", "Plymouth", "Polestar", "Pontiac", "Porsche", "Proton", "Qoros", "RAM", "Renault", "Rezvani", "Rimac", "Rivian", "Rolls-Royce", "Rover", "Saab", "Saleen", "Samsung", "Saturn", "Scion", "SEAT", "Seres", "Shelby", "Škoda", "Smart", "Spyker", "SsangYong", "Subaru", "Suzuki", "Tata", "Tazzari", "Tesla", "Toyota", "Trabant", "TVR", "Vauxhall", "Venturi", "Volkswagen", "Volvo", "W Motors", "Wartburg", "Wiesmann", "XPeng", "Yugo", "Zastava", "Zhidou", "Zotye"
                            ]}
                            value={carInsurance.brand}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.modelName}
                            type={InputType.text}
                            required={true}
                            title="Modellbezeichnung"
                            placeholder="zB.: CLA 180"
                            value={carInsurance.modelName}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.enginePower}
                            type={InputType.text}
                            required={true}
                            title="Motorleistung in kW (gesamt)"
                            placeholder="zB.: 110"
                            value={carInsurance.enginePower}
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
                            id={CarInsuranceFormType.carPrice}
                            type={InputType.text}
                            required={true}
                            title="Listenneupreise inkl. USt und NoVA"
                            placeholder="Neupreis des Fahrzeugs"
                            value={carInsurance.carPrice}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.specialEquipment}
                            type={InputType.text}
                            required={true}
                            title="Sonderaustattung in EUR"
                            value={carInsurance.specialEquipment}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.leasing}
                            type={InputType.list}
                            required={true}
                            title="Leasing"
                            listValues={[
                                "Nein",
                                "Ja"
                            ]}
                            value={carInsurance.leasing}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.creationDate}
                            type={InputType.number}
                            required={true}
                            title="Baujahr/Erstzulassung"
                            placeholder="zB.: 2020"
                            value={carInsurance.creationDate}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.amountOfSeats}
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
                            value={carInsurance.amountOfSeats}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.registrationDistrict}
                            type={InputType.list}
                            required={true}
                            title="Zulassungsbezirk"
                            listValues={[
                                "AM", "B", "BL", "BN", "BZ", "E", "FW", "G", "GM", "GS", "GU", "HA", "HB", "HE", "HO", "IL", "IM", "JE", "JO", "KI", "KL", "KO", "KR", "KS", "KU", "LA", "LB", "LE", "LF", "LI", "LN", "LO", "LZ", "MD", "ME", "MI", "MU", "ND", "NK", "OP", "PE", "PL", "RE", "RI", "RO", "S", "SD", "SE", "SL", "SP", "SR", "ST", "SZ", "TA", "TU", "UU", "VB", "VI", "VL", "VO", "W", "WB", "WE", "WL", "WO", "WT", "WU", "WY", "ZE"
                            ]}
                            value={carInsurance.registrationDistrict}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.bonusLevel}
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
                            value={carInsurance.bonusLevel}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.kmPerYear}
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
                            value={carInsurance.kmPerYear}
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
                            id={CarInsuranceFormType.paymentType}
                            type={InputType.list}
                            required={true}
                            title="Zahlart"
                            listValues={[
                                "Abbuchungsauftrag",
                                "Zahlschein"
                            ]}
                            value={carInsurance.paymentType}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.paymentFrequency}
                            type={InputType.list}
                            required={true}
                            title="Zahlungsfrequenz"
                            listValues={[
                                "monatlich (nur bei Abbuchung möglich)",
                                "vierteljährlich",
                                "halbjährlich",
                                "jährlich"
                            ]}
                            value={carInsurance.paymentFrequency}
                        />
                    </div>
                </div>
            },
            {
                key: "personalDetails",
                title: "Persönliche Angaben",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.salutation}
                            type={InputType.list}
                            required={true}
                            title="Anrede"
                            listValues={[
                                "Herr",
                                "Frau",
                                "Firma"
                            ]}
                            value={carInsurance.salutation}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.academicTitlePre}
                            type={InputType.text}
                            title="Akad. Grad (vorangestellt)"
                            placeholder="zB.: Ing."
                            value={carInsurance.academicTitlePre}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.firstname}
                            type={InputType.text}
                            required={true}
                            title="Vorname"
                            value={carInsurance.firstname}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.lastname}
                            type={InputType.text}
                            required={true}
                            title="Nachname"
                            value={carInsurance.lastname}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.academicTitlePost}
                            type={InputType.text}
                            title="Akad. Grad (nachgestellt)"
                            placeholder="zB.: BSc"
                            value={carInsurance.academicTitlePost}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.citizenship}
                            type={InputType.text}
                            required={true}
                            title="Staatsbürgerschaft"
                            listValues={[
                                "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Äquatorialguinea", "Argentinien", "Armenien", "Aserbaidschan", "Äthiopien", "Australien", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei", "Bulgarien", "Burkina Faso", "Burundi", "Cabo Verde", "Chile", "China", "Costa Rica", "Dänemark", "Deutschland", "Dominica", "Dominikanische Republik", "Dschibuti", "Ecuador", "El Salvador", "Elfenbeinküste", "Eritrea", "Estland", "Eswatini", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Ghana", "Grenada", "Griechenland", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaika", "Japan", "Jemen", "Jordanien", "Kambodscha", "Kamerun", "Kanada", "Kasachstan", "Katar", "Kenia", "Kirgisistan", "Kiribati", "Kolumbien", "Komoren", "Kongo", "Kongo, Demokratische Republik", "Kroatien", "Kuba", "Kuwait", "Laos", "Lesotho", "Lettland", "Libanon", "Liberia", "Libyen", "Liechtenstein", "Litauen", "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "Malediven", "Mali", "Malta", "Marokko", "Marshallinseln", "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldau", "Monaco", "Mongolei", "Montenegro", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Neuseeland", "Nicaragua", "Niederlande", "Niger", "Nigeria", "Nordkorea", "Nordmazedonien", "Norwegen", "Oman", "Österreich", "Osttimor", "Pakistan", "Palästina", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal", "Ruanda", "Rumänien", "Russland", "Salomonen", "Sambia", "Samoa", "San Marino", "São Tomé und Príncipe", "Saudi-Arabien", "Schweden", "Schweiz", "Senegal", "Serbien", "Seychellen", "Sierra Leone", "Simbabwe", "Singapur", "Slowakei", "Slowenien", "Somalia", "Spanien", "Sri Lanka", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Südafrika", "Sudan", "Südsudan", "Suriname", "Syrien", "Tadschikistan", "Tansania", "Thailand", "Togo", "Tonga", "Trinidad und Tobago", "Tschad", "Tschechien", "Tunesien", "Türkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Ungarn", "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstadt", "Venezuela", "Vereinigte Arabische Emirate", "Vereinigte Staaten", "Vereinigtes Königreich", "Vietnam", "Weißrussland", "Zentralafrikanische Republik", "Zypern"
                            ]}
                            value={carInsurance.citizenship}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.birthday}
                            type={InputType.text}
                            required={true}
                            title="Geburtsdatum"
                            placeholder="zB.: 22.01.1998"
                            value={carInsurance.birthday}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.job}
                            type={InputType.text}
                            required={true}
                            title="Beruf"
                            placeholder="zB.: Informatiker"
                            value={carInsurance.job}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.address}
                            type={InputType.text}
                            required={true}
                            title="Adresse"
                            placeholder="zB.: Hauptstraße 1"
                            value={carInsurance.address}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.doornumber}
                            type={InputType.text}
                            required={true}
                            title="Hausnummer/Stiege/Stock/Tür"
                            placeholder="zB.: 28/2"
                            value={carInsurance.doornumber}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.postalCode}
                            type={InputType.number}
                            required={true}
                            title="PLZ"
                            placeholder="zB.: 2500"
                            value={carInsurance.postalCode}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.city}
                            type={InputType.text}
                            required={true}
                            title="Ort"
                            placeholder="zB.: Baden"
                            value={carInsurance.city}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.email}
                            type={InputType.email}
                            required={true}
                            title="E-Mail Adresse"
                            placeholder="zB.: maxmustermann@hotmail.com"
                            value={carInsurance.email}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.phoneNumber}
                            type={InputType.tel}
                            required={true}
                            title="Telefonnummer"
                            placeholder="zB.: +43 660 1111100"
                            value={carInsurance.phoneNumber}
                        />
                    </div>
                </div>
            }
        ]

    return <Progress
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        onNextStep={(formData) => {
            setInsuranceForm(
                {
                    insuranceType: formData.get(CarInsuranceFormType.insuranceType)?.toString() ?? "",
                    carType: formData.get(CarInsuranceFormType.carType)?.toString() ?? "",
                    movementType: formData.get(CarInsuranceFormType.movementType)?.toString() ?? "",
                    brand: formData.get(CarInsuranceFormType.brand)?.toString() ?? "",
                    modelName: formData.get(CarInsuranceFormType.modelName)?.toString() ?? "",
                    enginePower: formData.get(CarInsuranceFormType.enginePower)?.toString() ?? "",
                    carPrice: formData.get(CarInsuranceFormType.carPrice)?.toString() ?? "",
                    specialEquipment: formData.get(CarInsuranceFormType.specialEquipment)?.toString() ?? "",
                    leasing: formData.get(CarInsuranceFormType.leasing)?.toString() ?? "",
                    creationDate: formData.get(CarInsuranceFormType.creationDate)?.toString() ?? "",
                    amountOfSeats: formData.get(CarInsuranceFormType.amountOfSeats)?.toString() ?? "",
                    registrationDistrict: formData.get(CarInsuranceFormType.registrationDistrict)?.toString() ?? "",
                    bonusLevel: formData.get(CarInsuranceFormType.bonusLevel)?.toString() ?? "",
                    kmPerYear: formData.get(CarInsuranceFormType.kmPerYear)?.toString() ?? "",
                    paymentType: formData.get(CarInsuranceFormType.paymentType)?.toString() ?? "",
                    paymentFrequency: formData.get(CarInsuranceFormType.paymentFrequency)?.toString() ?? "",
                    salutation: formData.get(CarInsuranceFormType.salutation)?.toString() ?? "",
                    academicTitlePre: formData.get(CarInsuranceFormType.academicTitlePre)?.toString() ?? "",
                    firstname: formData.get(CarInsuranceFormType.firstname)?.toString() ?? "",
                    lastname: formData.get(CarInsuranceFormType.lastname)?.toString() ?? "",
                    academicTitlePost: formData.get(CarInsuranceFormType.academicTitlePost)?.toString() ?? "",
                    citizenship: formData.get(CarInsuranceFormType.citizenship)?.toString() ?? "",
                    birthday: formData.get(CarInsuranceFormType.birthday)?.toString() ?? "",
                    job: formData.get(CarInsuranceFormType.job)?.toString() ?? "",
                    address: formData.get(CarInsuranceFormType.address)?.toString() ?? "",
                    doornumber: formData.get(CarInsuranceFormType.doornumber)?.toString() ?? "",
                    postalCode: formData.get(CarInsuranceFormType.postalCode)?.toString() ?? "",
                    city: formData.get(CarInsuranceFormType.city)?.toString() ?? "",
                    email: formData.get(CarInsuranceFormType.email)?.toString() ?? "",
                    phoneNumber: formData.get(CarInsuranceFormType.phoneNumber)?.toString() ?? ""
                }
            )
        }}
        steps={steps} />
}