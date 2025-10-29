"use client";

import { ReactNode, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./button";

export interface FormState {
    [key: string]: string
}

export default function FormComponent(
    {
        children
    }: {
        children: ReactNode
    }
) {
    const [isLoading, setIsLoading] = useState(false)
    const [emailSentInfo, setEmailSentInfo] = useState({
        show: false,
        success: false
    })
    let formState: FormState = {}

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function sendEmailRequest(): Promise<Response> {
        return await fetch('/api/general', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'order': 'Termin' },
            body: JSON.stringify(formState)
        })
    }

    async function sendEmail() {
        scrollToTop()

        const response = await sendEmailRequest()

        setIsLoading(false)

        setEmailSentInfo({
            show: true,
            success: response.status == 200
        })

        setTimeout(() => {
            setEmailSentInfo({
                show: false,
                success: false
            })
        }, 6000)
    }

    function onFormAction(formData: FormData) {
        setIsLoading(true)

        formData.entries().forEach((value) => {
            formState[value[0]] = value[1].toString()
        })

        sendEmail()
    }

    function emailSentNotification(): React.ReactNode {
        return emailSentInfo.show
            ? <div className="flex flex-col gap-5 place-items-center fade-down-1s px-5 sm:px-10 py-5 sm:py-10">
                {
                    emailSentInfo.success
                        ?
                        <div className="font-bold text-xl sm:text-4xl text-appPrimary">
                            Danke für Ihr Vertrauen!
                        </div>
                        : <div className="font-bold text-xl sm:text-4xl">
                            Uups, ein Fehler ist aufgetreten.
                        </div>
                }
                {
                    emailSentInfo.success
                        ?
                        <div className="text-sm sm:text-lg">
                            Wir werden uns in Kürze bei Ihnen melden.
                        </div>
                        : <div className="text-sm sm:text-lg">
                            Bitte probieren Sie es erneut.
                        </div>
                }
                <div
                    className={`mt-5 p-3 rounded-2xl text-white text-sm sm:text-lg font-bold ${emailSentInfo.success ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    Ihre Termin Anfrage {emailSentInfo.success ? 'wurde erfolgreich gesendet.' : 'ist fehlgeschlagen.'}
                </div>
            </div>
            : <div></div>
    }

    return <form action={onFormAction}>
        <div>
            {
                isLoading
                    ? <div className="flex flex-col gap-5 place-items-center">
                        <Icon icon="mingcute:loading-fill" className="animate-spin h-12 w-12 text-appPrimary" />
                        <div>
                            Bitte warten, Ihre Anfrage wird gesendet.
                        </div>
                    </div>
                    : emailSentInfo.show
                        ? emailSentNotification()
                        : <div>
                            <div className="text-lg flex flex-col gap-2">
                                <div className="p-5">
                                    {
                                        children
                                    }
                                </div>
                                <div className="flex flex-row justify-end">
                                    <Button text={'Absenden'} isSubmit={true} isPrimary={true} className={`text-white w-30 lg:text-lg`} />
                                </div>
                            </div>
                        </div>
            }
        </div>
    </form>
}