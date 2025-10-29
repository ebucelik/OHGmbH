"use client";

import Link from "next/link";
import { FormType } from "../../model/formType";
import FormComponent from "../formComponent";
import FormInput, { InputType } from "../formInput";

export default function ContactComponent() {
    const required = true

    return <div>
        <FormComponent children={
            <div className="flex flex-col gap-5">
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
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.academicTitlePre}
                            type={InputType.text}
                            title={FormType.academicTitlePre}
                            placeholder="zB.: Ing."
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.firstname}
                            type={InputType.text}
                            required={required}
                            title={FormType.firstname}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.lastname}
                            type={InputType.text}
                            required={required}
                            title={FormType.lastname}
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.academicTitlePost}
                            type={InputType.text}
                            title={FormType.academicTitlePost}
                            placeholder="zB.: BSc"
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.postalCode}
                            type={InputType.number}
                            required={required}
                            title={FormType.postalCode}
                            placeholder="zB.: 2500"
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.city}
                            type={InputType.text}
                            required={required}
                            title={FormType.city}
                            placeholder="zB.: Baden"
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.email}
                            type={InputType.email}
                            required={required}
                            title={FormType.email}
                            placeholder="zB.: maxmustermann@hotmail.com"
                        />
                    </div>
                    <div>
                        <FormInput
                            id={FormType.phoneNumber}
                            type={InputType.tel}
                            required={required}
                            title={FormType.phoneNumber}
                            placeholder="zB.: +43 660 1111100"
                        />
                    </div>
                </div>
                <div className="flex">
                    <FormInput
                        id={FormType.orderAccepted}
                        type={InputType.checkbox}
                        required={required}
                        listValues={[
                            "Diese Anfrage ist zu 100% unverbindlich. Ich erteile eine Termin-Anfrage und akzeptiere die zugrundeliegende AGB."
                        ]}
                        listReactValues={[
                            <div>
                                Diese Anfrage ist zu <b>100% unverbindlich</b>. Ich erteile eine Termin-Anfrage und akzeptiere die zugrundeliegende
                                <Link href=""><b className="text-appPrimary"> AGB</b></Link>.
                            </div>
                        ]}
                    />
                </div>
            </div>
        } />
    </div>
}