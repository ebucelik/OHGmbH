"use client";

import { CarInsuranceFormType, carInsuranceFormTypes } from "../../model/carInsuranceFormType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { InsuranceState, reset, setInsurance } from "../../core/carInsuranceCore";
import { shallowEqual } from "react-redux";
import store from "../../app/store";

export default function CarInsurance() {
    const carInsurance = useAppSelector((state) => state.carInsuranceCore, shallowEqual)
    const dispatch = useAppDispatch()
    const required = true
    const state = store.getState

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
                        required={required}
                        title="Welche Variante wünscht du?"
                        listValues={[
                            "Haftpflicht",
                            "Haftpflicht und Teilkasko",
                            "Haftpflicht und Vollkasko"
                        ]}
                        value={carInsurance[CarInsuranceFormType.insuranceType]}
                        onChange={(event) => {
                            const newInsuranceState: InsuranceState = {}
                            newInsuranceState[CarInsuranceFormType.insuranceType] = event.target.getAttribute('id') ?? ""

                            setInsuranceForm(newInsuranceState)
                        }}
                    />
                </div>
            },
            {
                key: "carDetails",
                title: "KFZ Details",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.movementType}
                            type={InputType.list}
                            required={required}
                            title="Antriebsart"
                            listValues={[
                                "Diesel",
                                "Benzin",
                                "Elektro",
                                "Hybrid",
                                "Erdgas"
                            ]}
                            value={carInsurance[CarInsuranceFormType.movementType]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.brand}
                            type={InputType.list}
                            required={required}
                            title="Marke"
                            listValues={[
                                "Abarth", "AC", "Acura", "Aiways", "Alfa Romeo", "Alpina", "Alpine", "Ariel", "Arrinera", "Artega", "Asia Motors", "Aston Martin", "Audi", "BAC", "Baojun", "Bentley", "BMW", "Borgward", "Brabus", "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Carver", "Caterham", "Changan", "Changhe", "Chery", "Chevrolet", "Chrysler", "Citroën", "Cupra", "Dacia", "Daewoo", "Daihatsu", "De Tomaso", "Delorean", "DFSK", "Dodge", "Dongfeng", "DS Automobiles", "Elaris", "Exeed", "FAW", "Ferrari", "Fiat", "Fisker", "Ford", "Foton", "GAC", "Geely", "Genesis", "Ginetta", "GMC", "Great Wall", "Gumpert", "Haval", "HiPhi", "Hindustan Motors", "Holden", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Iveco", "JAC", "Jaguar", "Jeep", "Jensen", "Karma", "Kia", "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "LEVC", "Lexus", "Ligier", "Lincoln", "Lotus", "Lucid", "Luxgen", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-AMG", "Mercedes-Benz", "Mercury", "MG", "Microcar", "Mini", "Mitsubishi", "Morgan", "Nio", "Nissan", "Noble", "Oldsmobile", "Opel", "Pagani", "Peugeot", "Piaggio", "Pininfarina", "Plymouth", "Polestar", "Pontiac", "Porsche", "Proton", "Qoros", "RAM", "Renault", "Rezvani", "Rimac", "Rivian", "Rolls-Royce", "Rover", "Saab", "Saleen", "Samsung", "Saturn", "Scion", "SEAT", "Seres", "Shelby", "Škoda", "Smart", "Spyker", "SsangYong", "Subaru", "Suzuki", "Tata", "Tazzari", "Tesla", "Toyota", "Trabant", "TVR", "Vauxhall", "Venturi", "Volkswagen", "Volvo", "W Motors", "Wartburg", "Wiesmann", "XPeng", "Yugo", "Zastava", "Zhidou", "Zotye"
                            ]}
                            value={carInsurance[CarInsuranceFormType.brand]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.modelName}
                            type={InputType.text}
                            required={required}
                            title="Modellbezeichnung"
                            placeholder="zB.: CLA 180"
                            value={carInsurance[CarInsuranceFormType.modelName]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.enginePower}
                            type={InputType.text}
                            required={required}
                            title="Motorleistung in kW (gesamt)"
                            placeholder="zB.: 110"
                            value={carInsurance[CarInsuranceFormType.enginePower]}
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
                            required={required}
                            title="Listenneupreise inkl. USt und NoVA"
                            placeholder="Neupreis des Fahrzeugs"
                            value={carInsurance[CarInsuranceFormType.carPrice]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.specialEquipment}
                            type={InputType.text}
                            required={required}
                            title="Sonderaustattung in EUR"
                            value={carInsurance[CarInsuranceFormType.specialEquipment]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.leasing}
                            type={InputType.list}
                            required={required}
                            title="Leasing"
                            listValues={[
                                "Nein",
                                "Ja"
                            ]}
                            value={carInsurance[CarInsuranceFormType.leasing]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.creationDate}
                            type={InputType.number}
                            required={required}
                            title="Baujahr/Erstzulassung"
                            placeholder="zB.: 2020"
                            value={carInsurance[CarInsuranceFormType.creationDate]}
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
                            value={carInsurance[CarInsuranceFormType.amountOfSeats]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.registrationDistrict}
                            type={InputType.list}
                            required={required}
                            title="Zulassungsbezirk"
                            listValues={[
                                "AM", "B", "BL", "BN", "BZ", "E", "FW", "G", "GM", "GS", "GU", "HA", "HB", "HE", "HO", "IL", "IM", "JE", "JO", "KI", "KL", "KO", "KR", "KS", "KU", "LA", "LB", "LE", "LF", "LI", "LN", "LO", "LZ", "MD", "ME", "MI", "MU", "ND", "NK", "OP", "PE", "PL", "RE", "RI", "RO", "S", "SD", "SE", "SL", "SP", "SR", "ST", "SZ", "TA", "TU", "UU", "VB", "VI", "VL", "VO", "W", "WB", "WE", "WL", "WO", "WT", "WU", "WY", "ZE"
                            ]}
                            value={carInsurance[CarInsuranceFormType.registrationDistrict]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.bonusLevel}
                            type={InputType.list}
                            required={required}
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
                            value={carInsurance[CarInsuranceFormType.bonusLevel]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.kmPerYear}
                            type={InputType.list}
                            required={required}
                            title="Kilometerleistung pro Jahr"
                            listValues={[
                                "max 7.000 km",
                                "max 10.000 km",
                                "max 20.000 km",
                                "max 30.000 km",
                                "mehr als 30.000 km",
                            ]}
                            value={carInsurance[CarInsuranceFormType.kmPerYear]}
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
                            required={required}
                            title="Zahlart"
                            listValues={[
                                "Abbuchungsauftrag",
                                "Zahlschein"
                            ]}
                            value={carInsurance[CarInsuranceFormType.paymentType]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={CarInsuranceFormType.paymentFrequency}
                            type={InputType.list}
                            required={required}
                            title="Zahlungsfrequenz"
                            listValues={[
                                "monatlich (nur bei Abbuchung möglich)",
                                "vierteljährlich",
                                "halbjährlich",
                                "jährlich"
                            ]}
                            value={carInsurance[CarInsuranceFormType.paymentFrequency]}
                        />
                    </div>
                </div>
            },
            {
                key: "personalDetails",
                title: "Persönliche Angaben",
                children: <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.salutation}
                                type={InputType.list}
                                required={required}
                                title="Anrede"
                                listValues={[
                                    "Herr",
                                    "Frau",
                                    "Firma"
                                ]}
                                value={carInsurance[CarInsuranceFormType.salutation]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.academicTitlePre}
                                type={InputType.text}
                                title="Akad. Grad (vorangestellt)"
                                placeholder="zB.: Ing."
                                value={carInsurance[CarInsuranceFormType.academicTitlePre]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.firstname}
                                type={InputType.text}
                                required={required}
                                title="Vorname"
                                value={carInsurance[CarInsuranceFormType.firstname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.lastname}
                                type={InputType.text}
                                required={required}
                                title="Nachname"
                                value={carInsurance[CarInsuranceFormType.lastname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.academicTitlePost}
                                type={InputType.text}
                                title="Akad. Grad (nachgestellt)"
                                placeholder="zB.: BSc"
                                value={carInsurance[CarInsuranceFormType.academicTitlePost]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.citizenship}
                                type={InputType.list}
                                required={required}
                                title="Staatsbürgerschaft"
                                listValues={[
                                    "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Äquatorialguinea", "Argentinien", "Armenien", "Aserbaidschan", "Äthiopien", "Australien", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei", "Bulgarien", "Burkina Faso", "Burundi", "Cabo Verde", "Chile", "China", "Costa Rica", "Dänemark", "Deutschland", "Dominica", "Dominikanische Republik", "Dschibuti", "Ecuador", "El Salvador", "Elfenbeinküste", "Eritrea", "Estland", "Eswatini", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Ghana", "Grenada", "Griechenland", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaika", "Japan", "Jemen", "Jordanien", "Kambodscha", "Kamerun", "Kanada", "Kasachstan", "Katar", "Kenia", "Kirgisistan", "Kiribati", "Kolumbien", "Komoren", "Kongo", "Kongo, Demokratische Republik", "Kroatien", "Kuba", "Kuwait", "Laos", "Lesotho", "Lettland", "Libanon", "Liberia", "Libyen", "Liechtenstein", "Litauen", "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "Malediven", "Mali", "Malta", "Marokko", "Marshallinseln", "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldau", "Monaco", "Mongolei", "Montenegro", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Neuseeland", "Nicaragua", "Niederlande", "Niger", "Nigeria", "Nordkorea", "Nordmazedonien", "Norwegen", "Oman", "Österreich", "Osttimor", "Pakistan", "Palästina", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal", "Ruanda", "Rumänien", "Russland", "Salomonen", "Sambia", "Samoa", "San Marino", "São Tomé und Príncipe", "Saudi-Arabien", "Schweden", "Schweiz", "Senegal", "Serbien", "Seychellen", "Sierra Leone", "Simbabwe", "Singapur", "Slowakei", "Slowenien", "Somalia", "Spanien", "Sri Lanka", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Südafrika", "Sudan", "Südsudan", "Suriname", "Syrien", "Tadschikistan", "Tansania", "Thailand", "Togo", "Tonga", "Trinidad und Tobago", "Tschad", "Tschechien", "Tunesien", "Türkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Ungarn", "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstadt", "Venezuela", "Vereinigte Arabische Emirate", "Vereinigte Staaten", "Vereinigtes Königreich", "Vietnam", "Weißrussland", "Zentralafrikanische Republik", "Zypern"
                                ]}
                                value={carInsurance[CarInsuranceFormType.citizenship]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.birthday}
                                type={InputType.text}
                                required={required}
                                title="Geburtsdatum"
                                placeholder="zB.: 22.01.1998"
                                value={carInsurance[CarInsuranceFormType.birthday]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.job}
                                type={InputType.text}
                                required={required}
                                title="Beruf"
                                placeholder="zB.: Informatiker"
                                value={carInsurance[CarInsuranceFormType.job]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.address}
                                type={InputType.text}
                                required={required}
                                title="Adresse"
                                placeholder="zB.: Hauptstraße 1"
                                value={carInsurance[CarInsuranceFormType.address]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.doornumber}
                                type={InputType.text}
                                required={required}
                                title="Hausnummer/Stiege/Stock/Tür"
                                placeholder="zB.: 28/2"
                                value={carInsurance[CarInsuranceFormType.doornumber]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.postalCode}
                                type={InputType.number}
                                required={required}
                                title="PLZ"
                                placeholder="zB.: 2500"
                                value={carInsurance[CarInsuranceFormType.postalCode]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.city}
                                type={InputType.text}
                                required={required}
                                title="Ort"
                                placeholder="zB.: Baden"
                                value={carInsurance[CarInsuranceFormType.city]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.email}
                                type={InputType.email}
                                required={required}
                                title="E-Mail Adresse"
                                placeholder="zB.: maxmustermann@hotmail.com"
                                value={carInsurance[CarInsuranceFormType.email]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={CarInsuranceFormType.phoneNumber}
                                type={InputType.tel}
                                required={required}
                                title="Telefonnummer"
                                placeholder="zB.: +43 660 1111100"
                                value={carInsurance[CarInsuranceFormType.phoneNumber]}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <FormInput
                            id={CarInsuranceFormType.orderAccepted}
                            type={InputType.checkbox}
                            required={required}
                            listValues={[
                                "Diese Anfrage ist zu 100% unverbindlich. Ich erteile einen Beratungsauftrag und akzeptiere die zugrundeliegende AGB."
                            ]}
                            listReactValues={[
                                <div>
                                    Diese Anfrage ist zu <b>100% unverbindlich</b>. Ich erteile einen Beratungsauftrag und akzeptiere die zugrundeliegende <b className="text-appPrimary">AGB</b>.
                                </div>
                            ]}
                            value={carInsurance[CarInsuranceFormType.orderAccepted]}
                            onChange={() => {
                                const newInsuranceState: InsuranceState = {}
                                newInsuranceState[CarInsuranceFormType.orderAccepted] = state().carInsuranceCore[CarInsuranceFormType.orderAccepted] == 'NEIN' ? 'JA' : 'NEIN'
                                setInsuranceForm(newInsuranceState)
                            }}
                        />
                    </div>
                </div>
            }
        ]

    async function sendEmail(): Promise<Response> {
        return await fetch('/api/insurance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'order': 'Autoversicherung' },
            body: JSON.stringify(state().carInsuranceCore)
        })
    }

    return <Progress
        title="In wenigen Schritten zur Autoversicherung"
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        steps={steps}
        onSendEmail={sendEmail}
        onNextStep={(formData) => {
            const newInsuranceState: InsuranceState = {}

            carInsuranceFormTypes.forEach((type) => {
                newInsuranceState[type] = formData.get(type)?.toString() ?? ""
            })

            newInsuranceState[CarInsuranceFormType.orderAccepted] = newInsuranceState[CarInsuranceFormType.orderAccepted] != 'NEIN' ? 'JA' : 'NEIN'

            setInsuranceForm(newInsuranceState)
        }}
        afterEmailSent={() => dispatch(reset())} />
}