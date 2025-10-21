"use client";

import { useState } from "react";
import Button from "../button";
import { Icon } from "@iconify/react";

export type Step<T> = { key: String, title: T, children: React.ReactNode };

export default function Progress(
    {
        title,
        firstStep,
        lastStep,
        steps,
        onSendEmail,
        onNextStep,
        afterEmailSent,
    }: {
        title: string,
        firstStep: Step<any>,
        lastStep: Step<any>,
        steps: Step<any>[],
        onSendEmail(): Promise<Response>,
        onNextStep(formData: FormData): void,
        afterEmailSent(): void,
    }
) {
    const [step, setStep] = useState(firstStep);
    const stepToReach = Object.keys(steps).length;
    const [percentage, setPercentage] = useState(20);
    const [isLoading, setIsLoading] = useState(false)
    const [emailSentInfo, setEmailSentInfo] = useState({
        show: false,
        success: false
    })

    async function sendEmail() {
        const response = await onSendEmail()

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
        }, 8000)

        afterEmailSent()

        setStep(firstStep)

        evaluateStep(1)
    }

    function nextStep(formData: FormData) {
        onNextStep(formData)

        if (reachedLastStep()) {

            setIsLoading(true)

            sendEmail()
        } else {
            setStep((currentStep) => {
                let nextStep = currentStep == lastStep
                    ? firstStep
                    : steps[indexOfStep(currentStep)]

                evaluateStep(indexOfStep(nextStep))

                return nextStep
            });
        }
    }

    const previousStep = () => {
        setStep((currentStep) => {
            let nextStep = currentStep == firstStep
                ? firstStep
                : steps[indexOfStep(currentStep) - 2]

            evaluateStep(indexOfStep(nextStep) - 1)

            return nextStep
        })
    }

    const evaluateStep = (nextStep: number) => {
        setPercentage((nextStep.valueOf() / stepToReach) * 100);
    }

    const indexOfStep = (currentStep?: Step<any>) => {
        var index = 0

        steps.forEach((element) => {
            if (element.key === currentStep?.key || element.key === step.key) {
                index = steps.indexOf(element)
                index = index == steps.length ? index : index + 1

                return
            }
        })

        return index
    }

    const reachedLastStep = () => {
        return indexOfStep() == steps.length
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
                            Ein Berater wird sich in Kürze bei Ihnen melden.
                        </div>
                        : <div className="text-sm sm:text-lg">
                            Bitte probieren Sie es erneut.
                        </div>
                }
                <div
                    className={`mt-5 p-3 rounded-2xl text-white text-sm sm:text-lg font-bold ${emailSentInfo.success ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    Ihre Anfrage {emailSentInfo.success ? 'wurde erfolgreich gesendet.' : 'ist fehlgeschlagen.'}
                </div>
            </div>
            : <div></div>
    }

    return <form action={nextStep}>
        <div>
            {
                isLoading
                    ? <div className="flex flex-col gap-5 place-items-center px-5 sm:px-10 py-5 sm:py-10">
                        <Icon icon="mingcute:loading-fill" className="animate-spin h-12 w-12 text-appPrimary" />
                        <div>
                            Bitte warten, Ihre Anfrage wird gesendet.
                        </div>
                    </div>
                    : emailSentInfo.show
                        ? emailSentNotification()
                        : <div>
                            <div className="text-xl sm:text-4xl sm:w-2/3">
                                {
                                    title
                                }
                            </div>

                            <div className="px-5 sm:px-10 py-5 sm:py-10 text-lg flex flex-col gap-2">
                                <div className="text-nowrap">
                                    Schritt {indexOfStep()} von {stepToReach} - <b>{step.title}</b>
                                </div>

                                <div className="h-3 bg-gray-200 rounded-2xl">
                                    <div style={{ width: `${percentage}%` }} className={`h-3 bg-appPrimary rounded-2xl ease-linear transition-all duration-500`}></div>
                                </div>

                                <div className="p-5">
                                    {
                                        step.children
                                    }
                                </div>
                                <div className={`flex flex-col sm:flex-row ${indexOfStep() > 1 ? 'gap-2' : 'gap-0'}`}>
                                    <Button text="Zurück" isPrimary={false} className={`w-25 lg:text-lg ${indexOfStep() > 1 ? 'block' : 'hidden'}`} onClick={previousStep} />
                                    <Button text={reachedLastStep() ? 'Absenden' : 'Weiter'} isSubmit={true} isPrimary={false} className={`w-30 lg:text-lg`} />
                                </div>
                            </div>
                        </div>
            }
        </div>
    </form>
}