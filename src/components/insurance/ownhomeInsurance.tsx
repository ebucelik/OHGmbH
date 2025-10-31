"use client";

import { FormType, carInsuranceFormTypes } from "../../model/formType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { InsuranceState, reset, setInsurance } from "../../core/carInsuranceCore";
import { shallowEqual } from "react-redux";
import store from "../../app/store";
import Link from "next/link";
import { useState } from "react";

export default function OwnhomeInsurance() {
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
                title: "Details Eigenheim",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.floors}
                            type={InputType.radio}
                            required={required}
                            title="Wie viele Stockwerke gibt es?"
                            listValues={[
                                "nur Erdgeschoß",
                                "1 Stockwerk",
                                "2 Stockwerke",
                                "3 Stockwerke"
                            ]}
                            value={carInsurance[FormType.floors]}
                            onChange={(event) => {
                                const newInsuranceState: InsuranceState = {}
                                newInsuranceState[FormType.floors] = event.target.getAttribute('id') ?? ""

                                setInsuranceForm(newInsuranceState)
                            }}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor0}
                            type={InputType.text}
                            required={required}
                            title="Fläche Erdgeschoß"
                            placeholder="Ergeschoß in m2"
                            value={carInsurance[FormType.floor0]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor1}
                            type={InputType.text}
                            title="Fläche 1. Stockwerk (falls vorhanden)"
                            placeholder="1. Stockwerk in m2"
                            value={carInsurance[FormType.floor1]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor2}
                            type={InputType.text}
                            title="Fläche 2. Stockwerk (falls vorhanden)"
                            placeholder="2. Stockwerk in m2"
                            value={carInsurance[FormType.floor2]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor3}
                            type={InputType.text}
                            title="Fläche 3. Stockwerk (falls vorhanden)"
                            placeholder="3. Stockwerk in m2"
                            value={carInsurance[FormType.floor3]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.attic}
                            type={InputType.text}
                            title="Mansardenfläche (falls vorhanden)"
                            placeholder="Mansarde in m2"
                            value={carInsurance[FormType.attic]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.cellar}
                            type={InputType.text}
                            title="Kellerfläche (falls vorhanden)"
                            placeholder="Keller in m2"
                            value={carInsurance[FormType.cellar]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.creationDate}
                            type={InputType.number}
                            required={required}
                            title="Baujahr Gebäude"
                            placeholder="zB.: 2000"
                            value={carInsurance[FormType.creationDate]}
                        />
                    </div>
                </div>
            },
            {
                key: "carDetails",
                title: "KFZ Details",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.movementType}
                            type={InputType.list}
                            required={required}
                            title={FormType.movementType}
                            listValues={[
                                "Diesel",
                                "Benzin",
                                "Elektro",
                                "Hybrid",
                                "Erdgas"
                            ]}
                            value={carInsurance[FormType.movementType]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.brand}
                            type={InputType.list}
                            required={required}
                            title={FormType.brand}
                            listValues={[
                                "Abarth", "AC", "Acura", "Aiways", "Alfa Romeo", "Alpina", "Alpine", "Ariel", "Arrinera", "Artega", "Asia Motors", "Aston Martin", "Audi", "BAC", "Baojun", "Bentley", "BMW", "Borgward", "Brabus", "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Carver", "Caterham", "Changan", "Changhe", "Chery", "Chevrolet", "Chrysler", "Citroën", "Cupra", "Dacia", "Daewoo", "Daihatsu", "De Tomaso", "Delorean", "DFSK", "Dodge", "Dongfeng", "DS Automobiles", "Elaris", "Exeed", "FAW", "Ferrari", "Fiat", "Fisker", "Ford", "Foton", "GAC", "Geely", "Genesis", "Ginetta", "GMC", "Great Wall", "Gumpert", "Haval", "HiPhi", "Hindustan Motors", "Holden", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Iveco", "JAC", "Jaguar", "Jeep", "Jensen", "Karma", "Kia", "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "LEVC", "Lexus", "Ligier", "Lincoln", "Lotus", "Lucid", "Luxgen", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-AMG", "Mercedes-Benz", "Mercury", "MG", "Microcar", "Mini", "Mitsubishi", "Morgan", "Nio", "Nissan", "Noble", "Oldsmobile", "Opel", "Pagani", "Peugeot", "Piaggio", "Pininfarina", "Plymouth", "Polestar", "Pontiac", "Porsche", "Proton", "Qoros", "RAM", "Renault", "Rezvani", "Rimac", "Rivian", "Rolls-Royce", "Rover", "Saab", "Saleen", "Samsung", "Saturn", "Scion", "SEAT", "Seres", "Shelby", "Škoda", "Smart", "Spyker", "SsangYong", "Subaru", "Suzuki", "Tata", "Tazzari", "Tesla", "Toyota", "Trabant", "TVR", "Vauxhall", "Venturi", "Volkswagen", "Volvo", "W Motors", "Wartburg", "Wiesmann", "XPeng", "Yugo", "Zastava", "Zhidou", "Zotye"
                            ]}
                            value={carInsurance[FormType.brand]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.modelName}
                            type={InputType.text}
                            required={required}
                            title={FormType.modelName}
                            placeholder="zB.: CLA 180"
                            value={carInsurance[FormType.modelName]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.enginePower}
                            type={InputType.text}
                            required={required}
                            title={FormType.enginePower}
                            placeholder="zB.: 110"
                            value={carInsurance[FormType.enginePower]}
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
                            id={FormType.carPrice}
                            type={InputType.text}
                            required={required}
                            title={FormType.carPrice}
                            placeholder="Neupreis des Fahrzeugs"
                            value={carInsurance[FormType.carPrice]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.specialEquipment}
                            type={InputType.text}
                            required={required}
                            title={FormType.specialEquipment}
                            value={carInsurance[FormType.specialEquipment]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.leasing}
                            type={InputType.list}
                            required={required}
                            title={FormType.leasing}
                            listValues={[
                                "Nein",
                                "Ja"
                            ]}
                            value={carInsurance[FormType.leasing]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.creationDate}
                            type={InputType.number}
                            required={required}
                            title={FormType.creationDate}
                            placeholder="zB.: 2020"
                            value={carInsurance[FormType.creationDate]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.amountOfSeats}
                            type={InputType.list}
                            title={FormType.amountOfSeats}
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
                            value={carInsurance[FormType.amountOfSeats]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.registrationDistrict}
                            type={InputType.list}
                            required={required}
                            title="Zulassungsbezirk"
                            listValues={[
                                "AM", "B", "BL", "BN", "BZ", "E", "FW", "G", "GM", "GS", "GU", "HA", "HB", "HE", "HO", "IL", "IM", "JE", "JO", "KI", "KL", "KO", "KR", "KS", "KU", "LA", "LB", "LE", "LF", "LI", "LN", "LO", "LZ", "MD", "ME", "MI", "MU", "ND", "NK", "OP", "PE", "PL", "RE", "RI", "RO", "S", "SD", "SE", "SL", "SP", "SR", "ST", "SZ", "TA", "TU", "UU", "VB", "VI", "VL", "VO", "W", "WB", "WE", "WL", "WO", "WT", "WU", "WY", "ZE"
                            ]}
                            value={carInsurance[FormType.registrationDistrict]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.bonusLevel}
                            type={InputType.list}
                            required={required}
                            title={FormType.bonusLevel}
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
                            value={carInsurance[FormType.bonusLevel]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.kmPerYear}
                            type={InputType.list}
                            required={required}
                            title={FormType.kmPerYear}
                            listValues={[
                                "max 7.000 km",
                                "max 10.000 km",
                                "max 20.000 km",
                                "max 30.000 km",
                                "mehr als 30.000 km",
                            ]}
                            value={carInsurance[FormType.kmPerYear]}
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
                            id={FormType.paymentType}
                            type={InputType.list}
                            required={required}
                            title={FormType.paymentType}
                            listValues={[
                                "Abbuchungsauftrag",
                                "Zahlschein"
                            ]}
                            value={carInsurance[FormType.paymentType]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.paymentFrequency}
                            type={InputType.list}
                            required={required}
                            title={FormType.paymentFrequency}
                            listValues={[
                                "monatlich (nur bei Abbuchung möglich)",
                                "vierteljährlich",
                                "halbjährlich",
                                "jährlich"
                            ]}
                            value={carInsurance[FormType.paymentFrequency]}
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
                                id={FormType.salutation}
                                type={InputType.list}
                                required={required}
                                title={FormType.salutation}
                                listValues={[
                                    "Herr",
                                    "Frau",
                                    "Firma"
                                ]}
                                value={carInsurance[FormType.salutation]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePre}
                                type={InputType.text}
                                title={FormType.academicTitlePre}
                                placeholder="zB.: Ing."
                                value={carInsurance[FormType.academicTitlePre]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.firstname}
                                type={InputType.text}
                                required={required}
                                title={FormType.firstname}
                                value={carInsurance[FormType.firstname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.lastname}
                                type={InputType.text}
                                required={required}
                                title={FormType.lastname}
                                value={carInsurance[FormType.lastname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePost}
                                type={InputType.text}
                                title={FormType.academicTitlePost}
                                placeholder="zB.: BSc"
                                value={carInsurance[FormType.academicTitlePost]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.citizenship}
                                type={InputType.list}
                                required={required}
                                title={FormType.citizenship}
                                listValues={[
                                    "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Äquatorialguinea", "Argentinien", "Armenien", "Aserbaidschan", "Äthiopien", "Australien", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei", "Bulgarien", "Burkina Faso", "Burundi", "Cabo Verde", "Chile", "China", "Costa Rica", "Dänemark", "Deutschland", "Dominica", "Dominikanische Republik", "Dschibuti", "Ecuador", "El Salvador", "Elfenbeinküste", "Eritrea", "Estland", "Eswatini", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Ghana", "Grenada", "Griechenland", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaika", "Japan", "Jemen", "Jordanien", "Kambodscha", "Kamerun", "Kanada", "Kasachstan", "Katar", "Kenia", "Kirgisistan", "Kiribati", "Kolumbien", "Komoren", "Kongo", "Kongo, Demokratische Republik", "Kroatien", "Kuba", "Kuwait", "Laos", "Lesotho", "Lettland", "Libanon", "Liberia", "Libyen", "Liechtenstein", "Litauen", "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "Malediven", "Mali", "Malta", "Marokko", "Marshallinseln", "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldau", "Monaco", "Mongolei", "Montenegro", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Neuseeland", "Nicaragua", "Niederlande", "Niger", "Nigeria", "Nordkorea", "Nordmazedonien", "Norwegen", "Oman", "Österreich", "Osttimor", "Pakistan", "Palästina", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal", "Ruanda", "Rumänien", "Russland", "Salomonen", "Sambia", "Samoa", "San Marino", "São Tomé und Príncipe", "Saudi-Arabien", "Schweden", "Schweiz", "Senegal", "Serbien", "Seychellen", "Sierra Leone", "Simbabwe", "Singapur", "Slowakei", "Slowenien", "Somalia", "Spanien", "Sri Lanka", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Südafrika", "Sudan", "Südsudan", "Suriname", "Syrien", "Tadschikistan", "Tansania", "Thailand", "Togo", "Tonga", "Trinidad und Tobago", "Tschad", "Tschechien", "Tunesien", "Türkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Ungarn", "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstadt", "Venezuela", "Vereinigte Arabische Emirate", "Vereinigte Staaten", "Vereinigtes Königreich", "Vietnam", "Weißrussland", "Zentralafrikanische Republik", "Zypern"
                                ]}
                                value={carInsurance[FormType.citizenship]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.birthday}
                                type={InputType.text}
                                required={required}
                                title={FormType.birthday}
                                placeholder="zB.: 22.01.1998"
                                value={carInsurance[FormType.birthday]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.job}
                                type={InputType.text}
                                required={required}
                                title={FormType.job}
                                placeholder="zB.: Informatiker"
                                value={carInsurance[FormType.job]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.address}
                                type={InputType.text}
                                required={required}
                                title={FormType.address}
                                placeholder="zB.: Hauptstraße 1"
                                value={carInsurance[FormType.address]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.doornumber}
                                type={InputType.text}
                                required={required}
                                title={FormType.doornumber}
                                placeholder="zB.: 28/2"
                                value={carInsurance[FormType.doornumber]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.postalCode}
                                type={InputType.number}
                                required={required}
                                title={FormType.postalCode}
                                placeholder="zB.: 2500"
                                value={carInsurance[FormType.postalCode]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.city}
                                type={InputType.text}
                                required={required}
                                title={FormType.city}
                                placeholder="zB.: Baden"
                                value={carInsurance[FormType.city]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.email}
                                type={InputType.email}
                                required={required}
                                title={FormType.email}
                                placeholder="zB.: maxmustermann@hotmail.com"
                                value={carInsurance[FormType.email]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.phoneNumber}
                                type={InputType.tel}
                                required={required}
                                title={FormType.phoneNumber}
                                placeholder="zB.: +43 660 1111100"
                                value={carInsurance[FormType.phoneNumber]}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <FormInput
                            id={FormType.orderAccepted}
                            type={InputType.checkbox}
                            required={required}
                            listValues={[
                                "Diese Anfrage ist zu 100% unverbindlich. Ich erteile einen Beratungsauftrag und akzeptiere die zugrundeliegende AGB."
                            ]}
                            listReactValues={[
                                <div>
                                    Diese Anfrage ist zu <b>100% unverbindlich</b>. Ich erteile einen Beratungsauftrag und akzeptiere die zugrundeliegende
                                    <Link href=""><b className="text-appPrimary"> AGB</b></Link>.
                                </div>
                            ]}
                            value={carInsurance[FormType.orderAccepted]}
                            onChange={() => {
                                const newInsuranceState: InsuranceState = {}
                                newInsuranceState[FormType.orderAccepted] = state().carInsuranceCore[FormType.orderAccepted] == 'NEIN' ? 'JA' : 'NEIN'
                                setInsuranceForm(newInsuranceState)
                            }}
                        />
                    </div>
                </div>
            }
        ]

    async function sendEmail(): Promise<Response> {
        return await fetch('/api/general', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'order': 'Eigenheim-Versicherung' },
            body: JSON.stringify(state().carInsuranceCore)
        })
    }

    return <Progress
        title="Deine Eigenheim-Versicherung"
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        steps={steps}
        onSendEmail={sendEmail}
        onNextStep={(formData) => {
            const newInsuranceState: InsuranceState = {}

            carInsuranceFormTypes.forEach((type) => {
                newInsuranceState[type] = formData.get(type)?.toString() ?? ""
            })

            newInsuranceState[FormType.orderAccepted] = newInsuranceState[FormType.orderAccepted] != 'NEIN' ? 'JA' : 'NEIN'

            setInsuranceForm(newInsuranceState)
        }}
        afterEmailSent={() => dispatch(reset())} />
}