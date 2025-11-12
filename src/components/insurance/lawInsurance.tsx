"use client";

import { FormType, insuranceFormTypes } from "../../model/formType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { Insurance, reset, setInsuranceLaw } from "../../core/insuranceCore";
import { shallowEqual } from "react-redux";
import store from "../../app/store";
import Link from "next/link";

export default function LawInsurance() {
    const insurance = useAppSelector((state) => state.insuranceCore, shallowEqual)
    const dispatch = useAppDispatch()
    const required = true
    const state = store.getState

    function setInsuranceForm(
        insurance: Insurance
    ) {
        dispatch(
            setInsuranceLaw(insurance)
        )
    }

    const steps: Step<any>[] =
        [
            {
                key: "law",
                title: "Variante",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.lawType}
                            type={InputType.radio}
                            required={required}
                            title={FormType.lawType}
                            listValues={[
                                "KFZ-Rechtsschutz",
                                "KFZ-Rechtschutz + Privat-Rechtsschutz",
                                "Privat-Rechtsschutz ohne KFZ-Rechtsschutz"
                            ]}
                            value={insurance.law[FormType.lawType]}
                            onChange={(event) => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.law[FormType.lawType] = event.target.getAttribute('id') ?? ""

                                setInsuranceForm(newInsurance)
                            }}
                        />
                    </div>
                </div>
            },
            {
                key: "lawDetails",
                title: "Details",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.lawVehicles}
                            type={InputType.radio}
                            required={required}
                            title={FormType.lawVehicles}
                            listValues={[
                                "Keines",
                                "Ein Fahrzeug",
                                "Mehrere Fahrzeuge"
                            ]}
                            value={insurance.law[FormType.lawVehicles]}
                            onChange={(event) => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.law[FormType.lawVehicles] = event.target.getAttribute('id') ?? ""

                                setInsuranceForm(newInsurance)
                            }}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.lawPersons}
                            type={InputType.radio}
                            required={required}
                            title={FormType.lawPersons}
                            listValues={[
                                "Keine",
                                "Einzel Rechtsschutz",
                                "Familien Rechtsschutz"
                            ]}
                            value={insurance.law[FormType.lawPersons]}
                            onChange={(event) => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.law[FormType.lawPersons] = event.target.getAttribute('id') ?? ""

                                setInsuranceForm(newInsurance)
                            }}
                        />
                    </div>
                    <div className="col-span-2">
                        Die Grunddeckung beeinhaltet bereits:
                        <br />
                        Arbeits- & Sozial-RS, Schadenersatz-RS, Straf-RS, Beratungs-RS, Allgemeiner Vertrags-RS inkl. Europadeckung
                    </div>
                    <div>
                        <FormInput
                            id={FormType.lawInheritance}
                            type={InputType.list}
                            required={required}
                            title={FormType.lawInheritance}
                            listValues={[
                                "Ja",
                                "Nein"
                            ]}
                            value={insurance.law[FormType.lawInheritance]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.lawFamily}
                            type={InputType.list}
                            required={required}
                            title={FormType.lawFamily}
                            listValues={[
                                "Ja",
                                "Nein"
                            ]}
                            value={insurance.law[FormType.lawFamily]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.lawProperty}
                            type={InputType.list}
                            required={required}
                            title={FormType.lawProperty}
                            listValues={[
                                "Ja",
                                "Nein"
                            ]}
                            value={insurance.law[FormType.lawProperty]}
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
                                value={insurance.law[FormType.salutation]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePre}
                                type={InputType.text}
                                title={FormType.academicTitlePre}
                                placeholder="zB.: Ing."
                                value={insurance.law[FormType.academicTitlePre]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.firstname}
                                type={InputType.text}
                                required={required}
                                title={FormType.firstname}
                                value={insurance.law[FormType.firstname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.lastname}
                                type={InputType.text}
                                required={required}
                                title={FormType.lastname}
                                value={insurance.law[FormType.lastname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePost}
                                type={InputType.text}
                                title={FormType.academicTitlePost}
                                placeholder="zB.: BSc"
                                value={insurance.law[FormType.academicTitlePost]}
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
                                value={insurance.law[FormType.citizenship]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.work}
                                type={InputType.list}
                                required={required}
                                title={FormType.work}
                                listValues={[
                                    "Angestellter",
                                    "Arbeiter",
                                    "Selbstständig",
                                    "Geringfügig",
                                    "In Pension",
                                    "Nicht berufstätig"
                                ]}
                                value={insurance.law[FormType.work]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.birthday}
                                type={InputType.text}
                                required={required}
                                title={FormType.birthday}
                                placeholder="zB.: 22.01.1998"
                                value={insurance.law[FormType.birthday]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.job}
                                type={InputType.text}
                                required={required}
                                title={FormType.job}
                                placeholder="zB.: Informatiker"
                                value={insurance.law[FormType.job]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.address}
                                type={InputType.text}
                                required={required}
                                title={FormType.address}
                                placeholder="zB.: Hauptstraße 1"
                                value={insurance.law[FormType.address]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.doornumber}
                                type={InputType.text}
                                required={required}
                                title={FormType.doornumber}
                                placeholder="zB.: 28/2"
                                value={insurance.law[FormType.doornumber]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.postalCode}
                                type={InputType.number}
                                required={required}
                                title={FormType.postalCode}
                                placeholder="zB.: 2500"
                                value={insurance.law[FormType.postalCode]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.city}
                                type={InputType.text}
                                required={required}
                                title={FormType.city}
                                placeholder="zB.: Baden"
                                value={insurance.law[FormType.city]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.email}
                                type={InputType.email}
                                required={required}
                                title={FormType.email}
                                placeholder="zB.: maxmustermann@hotmail.com"
                                value={insurance.law[FormType.email]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.phoneNumber}
                                type={InputType.tel}
                                required={required}
                                title={FormType.phoneNumber}
                                placeholder="zB.: +43 660 1111100"
                                value={insurance.law[FormType.phoneNumber]}
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
                            value={insurance.law[FormType.orderAccepted]}
                            onChange={() => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.law[FormType.orderAccepted] = state().insuranceCore.law[FormType.orderAccepted] == 'NEIN' ? 'JA' : 'NEIN'
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
            headers: { 'Content-Type': 'application/json', 'order': 'Rechtsschutz-Versicherung' },
            body: JSON.stringify(state().insuranceCore.law)
        })
    }

    return <Progress
        title="Deine Rechtsschutz-Versicherung"
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        steps={steps}
        onSendEmail={sendEmail}
        onNextStep={(formData) => {
            const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }

            insuranceFormTypes.forEach((type) => {
                newInsurance.law[type] = formData.get(type)?.toString() ?? ""
            })

            newInsurance.law[FormType.orderAccepted] = newInsurance.law[FormType.orderAccepted] != 'NEIN' ? 'JA' : 'NEIN'

            setInsuranceForm(newInsurance)
        }}
        afterEmailSent={() => dispatch(reset())} />
}