"use client";

import { useState } from "react";
import Button from "../button";

export type Step<T> = { key: String, title: T, children: React.ReactNode };

export default function Progress(
    {
        onNextStep,
        firstStep,
        lastStep,
        steps
    }: {
        onNextStep(formData: FormData): void,
        firstStep: Step<any>,
        lastStep: Step<any>,
        steps: Step<any>[]
    }
) {
    const [step, setStep] = useState(firstStep);
    const stepToReach = Object.keys(steps).length;
    const [percentage, setPercentage] = useState(20);

    function nextStep(formData: FormData) {
        onNextStep(formData)

        setStep((currentStep) => {
            var nextStep = currentStep == lastStep
                ? firstStep
                : steps[indexOfStep(currentStep)]

            evaluateStep(indexOfStep(nextStep))

            return nextStep
        });
    }

    const previousStep = () => {
        setStep((currentStep) => {
            var nextStep = currentStep == firstStep
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
            if (element.key === currentStep?.key || element.key == step.key) {
                index = steps.indexOf(element) + 1

                return
            }
        })

        return index
    }

    const reachedLastStep = () => {
        return indexOfStep() == steps.length
    }

    return <div className="px-5 sm:px-10 py-5 sm:py-10 sm:p-20 text-lg flex flex-col gap-2">
        <div className="text-nowrap">
            Schritt {indexOfStep()} von {stepToReach} - <b>{step.title}</b>
        </div>

        <div className="h-3 bg-gray-200 rounded-2xl">
            <div style={{ width: `${percentage}%` }} className={`h-3 bg-appPrimary rounded-2xl ease-linear transition-all duration-500`}></div>
        </div>

        <form className="py-5" action={nextStep}>
            <div className="pb-5">
                {
                    step.children
                }
            </div>

            <div className={`flex flex-row ${indexOfStep() > 1 ? 'gap-2' : 'gap-0'}`}>
                <Button text="Zurück" isPrimary={false} className={`w-25 lg:text-lg ${indexOfStep() > 1 ? 'block' : 'hidden'}`} onClick={previousStep} />
                <Button text={reachedLastStep() ? 'Absenden' : 'Weiter'} isSubmit={true} isPrimary={false} className={`w-30 lg:text-lg`} />
            </div>
        </form>
    </div>
}