"use client";

import { FormType, insuranceFormTypes } from "../../model/formType";
import FormInput, { InputType } from "../formInput";
import Progress, { Step } from "../progress/progress";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { Insurance, reset, setInsuranceAccident } from "../../core/insuranceCore";
import { shallowEqual } from "react-redux";
import store from "../../app/store";
import Link from "next/link";

export default function AccidentInsurance() {
    const insurance = useAppSelector((state) => state.insuranceCore, shallowEqual)
    const dispatch = useAppDispatch()
    const required = true
    const state = store.getState

    function setInsuranceForm(
        insurance: Insurance
    ) {
        dispatch(
            setInsuranceAccident(insurance)
        )
    }

    const steps: Step<any>[] =
        [
            {
                key: "familystate",
                title: "Familienstand",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.accidentPersons}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentPersons}
                            listValues={[
                                "nur Ich",
                                "Meine Familie und Ich",
                                "Mein Partner und Ich",
                                "Mein minderjähriges Kind/Kinder und Ich"
                            ]}
                            value={insurance.accident[FormType.accidentPersons]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentBirthday}
                            type={InputType.text}
                            required={required}
                            title={FormType.accidentBirthday}
                            placeholder="tt.mm.jjjj"
                            value={insurance.accident[FormType.accidentBirthday]}
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
                            value={insurance.accident[FormType.work]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentWorkDetail}
                            type={InputType.text}
                            required={required}
                            title={FormType.accidentWorkDetail}
                            placeholder="z.B.: Software Entwickler"
                            value={insurance.accident[FormType.accidentWorkDetail]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentBirthdayOfPartner}
                            type={InputType.text}
                            title={FormType.accidentBirthdayOfPartner}
                            placeholder="tt.mm.jjjj"
                            value={insurance.accident[FormType.accidentBirthdayOfPartner]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentWorkOfPartner}
                            type={InputType.list}
                            title={FormType.accidentWorkOfPartner}
                            listValues={[
                                "Angestellter",
                                "Arbeiter",
                                "Selbstständig",
                                "Geringfügig",
                                "In Pension",
                                "Nicht berufstätig"
                            ]}
                            value={insurance.accident[FormType.accidentWorkOfPartner]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentWorkDetailOfPartner}
                            type={InputType.text}
                            title={FormType.accidentWorkDetailOfPartner}
                            placeholder="z.B.: Software Entwickler"
                            value={insurance.accident[FormType.accidentWorkDetailOfPartner]}
                        />
                    </div>
                </div>
            },
            {
                key: "details",
                title: "Details",
                children: <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <FormInput
                            id={FormType.accidentInvalidity}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentInvalidity}
                            listValues={[
                                "€ 100.000,-",
                                "€ 150.000,-",
                                "€ 200.000,-"
                            ]}
                            value={insurance.accident[FormType.accidentInvalidity]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentPension}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentPension}
                            listValues={[
                                "€ 100,- bis € 400,- monatlich",
                                "€ 400,- bis € 800,- monatlich",
                                "€ 800,- und mehr",
                                "nicht gewünscht"
                            ]}
                            value={insurance.accident[FormType.accidentPension]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentDead}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentDead}
                            listValues={[
                                "€ 10.000,-",
                                "€ 20.000,-",
                                "€ 50.000,-",
                                "nicht gewünscht"
                            ]}
                            value={insurance.accident[FormType.accidentDead]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentCosts}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentCosts}
                            listValues={[
                                "€ 2.000,-",
                                "€ 4.000,-",
                                "€ 6.000,-",
                                "nicht gewünscht"
                            ]}
                            value={insurance.accident[FormType.accidentCosts]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentBonebreak}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentBonebreak}
                            listValues={[
                                "ja",
                                "nein",
                                "nicht gewünscht"
                            ]}
                            value={insurance.accident[FormType.accidentBonebreak]}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.accidentHospitalMoney}
                            type={InputType.radio}
                            required={required}
                            title={FormType.accidentHospitalMoney}
                            listValues={[
                                "€ 20,-",
                                "€ 25,-",
                                "€ 50,-",
                                "nicht gewünscht"
                            ]}
                            value={insurance.accident[FormType.accidentHospitalMoney]}
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
                                value={insurance.accident[FormType.salutation]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePre}
                                type={InputType.text}
                                title={FormType.academicTitlePre}
                                placeholder="zB.: Ing."
                                value={insurance.accident[FormType.academicTitlePre]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.firstname}
                                type={InputType.text}
                                required={required}
                                title={FormType.firstname}
                                value={insurance.accident[FormType.firstname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.lastname}
                                type={InputType.text}
                                required={required}
                                title={FormType.lastname}
                                value={insurance.accident[FormType.lastname]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.academicTitlePost}
                                type={InputType.text}
                                title={FormType.academicTitlePost}
                                placeholder="zB.: BSc"
                                value={insurance.accident[FormType.academicTitlePost]}
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
                                value={insurance.accident[FormType.citizenship]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.birthday}
                                type={InputType.text}
                                required={required}
                                title={FormType.birthday}
                                placeholder="zB.: 22.01.1998"
                                value={insurance.accident[FormType.birthday]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.job}
                                type={InputType.text}
                                required={required}
                                title={FormType.job}
                                placeholder="zB.: Informatiker"
                                value={insurance.accident[FormType.job]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.address}
                                type={InputType.text}
                                required={required}
                                title={FormType.address}
                                placeholder="zB.: Hauptstraße 1"
                                value={insurance.accident[FormType.address]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.doornumber}
                                type={InputType.text}
                                required={required}
                                title={FormType.doornumber}
                                placeholder="zB.: 28/2"
                                value={insurance.accident[FormType.doornumber]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.postalCode}
                                type={InputType.number}
                                required={required}
                                title={FormType.postalCode}
                                placeholder="zB.: 2500"
                                value={insurance.accident[FormType.postalCode]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.city}
                                type={InputType.text}
                                required={required}
                                title={FormType.city}
                                placeholder="zB.: Baden"
                                value={insurance.accident[FormType.city]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.email}
                                type={InputType.email}
                                required={required}
                                title={FormType.email}
                                placeholder="zB.: maxmustermann@hotmail.com"
                                value={insurance.accident[FormType.email]}
                            />
                        </div>
                        <div>
                            <FormInput
                                id={FormType.phoneNumber}
                                type={InputType.tel}
                                required={required}
                                title={FormType.phoneNumber}
                                placeholder="zB.: +43 660 1111100"
                                value={insurance.accident[FormType.phoneNumber]}
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
                                    <Link href="/agb"><b className="text-appPrimary"> AGB</b></Link>.
                                </div>
                            ]}
                            value={insurance.accident[FormType.orderAccepted]}
                            onChange={() => {
                                const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }
                                newInsurance.accident[FormType.orderAccepted] = state().insuranceCore.accident[FormType.orderAccepted] == 'NEIN' ? 'JA' : 'NEIN'
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
            headers: { 'Content-Type': 'application/json', 'order': 'Unfall-Versicherung' },
            body: JSON.stringify(state().insuranceCore.accident)
        })
    }

    return <Progress
        title="Deine Unfall-Versicherung"
        firstStep={steps[0]}
        lastStep={steps[steps.length - 1]}
        steps={steps}
        onSendEmail={sendEmail}
        onNextStep={(formData) => {
            const newInsurance: Insurance = { vehicle: {}, ownHome: {}, law: {}, accident: {} }

            insuranceFormTypes.forEach((type) => {
                newInsurance.accident[type] = formData.get(type)?.toString() ?? ""
            })

            newInsurance.accident[FormType.orderAccepted] = newInsurance.accident[FormType.orderAccepted] != 'NEIN' ? 'JA' : 'NEIN'

            setInsuranceForm(newInsurance)
        }}
        afterEmailSent={() => dispatch(reset())} />
}