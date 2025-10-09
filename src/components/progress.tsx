"use client";

import { useState } from "react";
import Button from "./button";

type Step<T> = { key: String, value: T };

export default function Progress(
    { steps }: { steps: Step<any>[] }
) {
    const [step, setStep] = useState(steps[0]);
    const stepToReach = Object.keys(steps).length;
    const [percentage, setPercentage] = useState(20);

    const nextStep = () => {
        setStep((currentStep) => {
            var nextStep = steps.indexOf(currentStep) == steps.length - 1
                ? steps[steps.length - 1]
                : steps[steps.indexOf(currentStep) + 1]

            evaluateStep(steps.indexOf(nextStep) + 1)

            return nextStep
        });
    }

    const previousStep = () => {
        setStep((currentStep) => {
            var nextStep = steps.indexOf(currentStep) == 0
                ? steps[0]
                : steps[steps.indexOf(currentStep) - 1]

            evaluateStep(steps.indexOf(nextStep) + 1)

            return nextStep
        })
    }

    const evaluateStep = (nextStep: number) => {
        setPercentage((nextStep.valueOf() / stepToReach) * 100);
    }

    const indexOfStep = () => {
        return steps.indexOf(step) + 1;
    }

    return <div className="px-5 sm:px-10 py-5 sm:py-10 sm:p-20 text-lg flex flex-col gap-2">
        <div className="text-nowrap">
            Schritt {indexOfStep()} von {stepToReach} - <b>{step.value}</b>
        </div>

        <div className="h-3 bg-gray-200 rounded-2xl">
            <div style={{ width: `${percentage}%` }} className={`h-3 bg-appPrimary rounded-2xl ease-linear transition-all duration-500`}>

            </div>
        </div>

        <div className={`flex flex-row ${indexOfStep() > 1 ? 'gap-2' : 'gap-0'}`}>
            <Button text="Zurück" isPrimary={false} className={`w-25 lg:text-lg ${indexOfStep() > 1 ? 'block' : 'hidden'}`} onClick={previousStep} />
            <Button text="Weiter" isPrimary={false} className="w-25 lg:text-lg" onClick={nextStep} />
        </div>
    </div>
}