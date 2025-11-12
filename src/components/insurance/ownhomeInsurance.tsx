"use client";

import { FormType, insuranceFormTypes } from "../../model/formType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { Insurance, reset, setInsuranceOwnhome } from "../../core/insuranceCore";
import { shallowEqual } from "react-redux";
import store from "../../app/store";
import Link from "next/link";

export default function OwnhomeInsurance() {
    const insurance = useAppSelector((state) => state.insuranceCore, shallowEqual)
    const dispatch = useAppDispatch()
    const required = true
    const state = store.getState

    function setInsuranceForm(
        insurance: Insurance
    ) {
        dispatch(
            setInsuranceOwnhome(insurance)
        )
    }

    const steps: Step<any>[] =
        [
            {
                key: "detailsOwnhome",
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
                            value={insurance.ownHome[FormType.floors]}
                            onChange={(event) => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.ownHome[FormType.floors] = event.target.getAttribute('id') ?? ""

                                setInsuranceForm(newInsurance)
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
                            value={insurance.ownHome[FormType.floor0]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor1}
                            type={InputType.text}
                            title="Fläche 1. Stockwerk (falls vorhanden)"
                            placeholder="1. Stockwerk in m2"
                            value={insurance.ownHome[FormType.floor1]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor2}
                            type={InputType.text}
                            title="Fläche 2. Stockwerk (falls vorhanden)"
                            placeholder="2. Stockwerk in m2"
                            value={insurance.ownHome[FormType.floor2]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.floor3}
                            type={InputType.text}
                            title="Fläche 3. Stockwerk (falls vorhanden)"
                            placeholder="3. Stockwerk in m2"
                            value={insurance.ownHome[FormType.floor3]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.attic}
                            type={InputType.text}
                            title="Mansardenfläche (falls vorhanden)"
                            placeholder="Mansarde in m2"
                            value={insurance.ownHome[FormType.attic]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.cellar}
                            type={InputType.text}
                            title="Kellerfläche (falls vorhanden)"
                            placeholder="Keller in m2"
                            value={insurance.ownHome[FormType.cellar]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.creationDate}
                            type={InputType.number}
                            required={required}
                            title="Baujahr Gebäude"
                            placeholder="zB.: 2000"
                            value={insurance.ownHome[FormType.creationDate]}
                        />
                    </div>
                </div>
            },
            {
                key: "addressOwnhome",
                title: "Anschrift des Eigenheims",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.addressOfOwnhome}
                            type={InputType.text}
                            required={required}
                            title={FormType.addressOfOwnhome}
                            placeholder="zB.: Musterstraße 1"
                            value={insurance.ownHome[FormType.addressOfOwnhome]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.doorOfOwnhome}
                            type={InputType.text}
                            required={required}
                            title={FormType.doorOfOwnhome}
                            placeholder="zB.: 28/2"
                            value={insurance.ownHome[FormType.doorOfOwnhome]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.plzOfOwnhome}
                            type={InputType.number}
                            required={required}
                            title={FormType.plzOfOwnhome}
                            placeholder="zB.: 1210"
                            value={insurance.ownHome[FormType.plzOfOwnhome]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.cityOfOwnhome}
                            type={InputType.text}
                            required={required}
                            title={FormType.cityOfOwnhome}
                            placeholder="zB.: Wien"
                            value={insurance.ownHome[FormType.cityOfOwnhome]}
                        />
                    </div>
                </div>
            },
            {
                key: "ownHomeDetails",
                title: "Details Haushalt",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.livingAreaOwnhome}
                            type={InputType.number}
                            required={required}
                            title={FormType.livingAreaOwnhome}
                            placeholder="zB.: 75"
                            value={insurance.ownHome[FormType.livingAreaOwnhome]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.equipmentOwnhome}
                            type={InputType.list}
                            required={required}
                            title={FormType.equipmentOwnhome}
                            listValues={[
                                "einfach",
                                "wohnlich",
                                "gehoben"
                            ]}
                            value={insurance.ownHome[FormType.equipmentOwnhome]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.paymentOwnhome}
                            type={InputType.list}
                            required={required}
                            title={FormType.paymentOwnhome}
                            listValues={[
                                "monatlich",
                                "vierteljährlich",
                                "halbjährlich",
                                "jährlich"
                            ]}
                            value={insurance.ownHome[FormType.paymentOwnhome]}
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
                                value={insurance.ownHome[FormType.salutation]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePre}
                                type={InputType.text}
                                title={FormType.academicTitlePre}
                                placeholder="zB.: Ing."
                                value={insurance.ownHome[FormType.academicTitlePre]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.firstname}
                                type={InputType.text}
                                required={required}
                                title={FormType.firstname}
                                value={insurance.ownHome[FormType.firstname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.lastname}
                                type={InputType.text}
                                required={required}
                                title={FormType.lastname}
                                value={insurance.ownHome[FormType.lastname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePost}
                                type={InputType.text}
                                title={FormType.academicTitlePost}
                                placeholder="zB.: BSc"
                                value={insurance.ownHome[FormType.academicTitlePost]}
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
                                value={insurance.ownHome[FormType.citizenship]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.birthday}
                                type={InputType.text}
                                required={required}
                                title={FormType.birthday}
                                placeholder="zB.: 22.01.1998"
                                value={insurance.ownHome[FormType.birthday]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.job}
                                type={InputType.text}
                                required={required}
                                title={FormType.job}
                                placeholder="zB.: Informatiker"
                                value={insurance.ownHome[FormType.job]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.address}
                                type={InputType.text}
                                required={required}
                                title={FormType.address}
                                placeholder="zB.: Hauptstraße 1"
                                value={insurance.ownHome[FormType.address]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.doornumber}
                                type={InputType.text}
                                required={required}
                                title={FormType.doornumber}
                                placeholder="zB.: 28/2"
                                value={insurance.ownHome[FormType.doornumber]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.postalCode}
                                type={InputType.number}
                                required={required}
                                title={FormType.postalCode}
                                placeholder="zB.: 2500"
                                value={insurance.ownHome[FormType.postalCode]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.city}
                                type={InputType.text}
                                required={required}
                                title={FormType.city}
                                placeholder="zB.: Baden"
                                value={insurance.ownHome[FormType.city]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.email}
                                type={InputType.email}
                                required={required}
                                title={FormType.email}
                                placeholder="zB.: maxmustermann@hotmail.com"
                                value={insurance.ownHome[FormType.email]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.phoneNumber}
                                type={InputType.tel}
                                required={required}
                                title={FormType.phoneNumber}
                                placeholder="zB.: +43 660 1111100"
                                value={insurance.ownHome[FormType.phoneNumber]}
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
                            value={insurance.ownHome[FormType.orderAccepted]}
                            onChange={() => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.ownHome[FormType.orderAccepted] = state().insuranceCore.ownHome[FormType.orderAccepted] == 'NEIN' ? 'JA' : 'NEIN'
                                setInsuranceForm(newInsurance)
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
            body: JSON.stringify(state().insuranceCore.ownHome)
        })
    }

    return <Progress
        title="Deine Eigenheim-Versicherung"
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        steps={steps}
        onSendEmail={sendEmail}
        onNextStep={(formData) => {
            const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }

            insuranceFormTypes.forEach((type) => {
                newInsurance.ownHome[type] = formData.get(type)?.toString() ?? ""
            })

            newInsurance.ownHome[FormType.orderAccepted] = newInsurance.ownHome[FormType.orderAccepted] != 'NEIN' ? 'JA' : 'NEIN'

            setInsuranceForm(newInsurance)
        }}
        afterEmailSent={() => dispatch(reset())} />
}