"use client";

import { Component, use, useEffect, useRef, useState } from "react";
import Button from "./button";

export default function Progress() {
    enum CarInsuranceSteps {
        type = 1,
        carDetails = 2,
        carDetailsEnhanced = 3,
        paymentType = 4,
        personalDetails = 5
    }
    const [step, setStep] = useState(CarInsuranceSteps.type);
    const stepToReach = Object.keys(CarInsuranceSteps).length / 2;
    const [percentage, setPercentage] = useState(20);

    const nextStep = () => {
        setStep((currentStep) => {
            var nextStep = CarInsuranceSteps.type

            switch (currentStep) {
                case CarInsuranceSteps.type:
                    nextStep = CarInsuranceSteps.carDetails
                    break

                case CarInsuranceSteps.carDetails:
                    nextStep = CarInsuranceSteps.carDetailsEnhanced
                    break;

                case CarInsuranceSteps.carDetailsEnhanced:
                    nextStep = CarInsuranceSteps.paymentType
                    break;

                case CarInsuranceSteps.paymentType:
                    nextStep = CarInsuranceSteps.personalDetails
                    break;

                case CarInsuranceSteps.personalDetails:
                    // TODO: send email
                    break;
            }

            evaluateStep(currentStep, nextStep)

            return nextStep
        });
    }

    const evaluateStep = (currentStep: CarInsuranceSteps, nextStep: CarInsuranceSteps) => {

        var percentageToReach = (nextStep.valueOf() / stepToReach) * 100;

        var interval = setInterval(() => {
            setPercentage((currentPercentage) => {
                if (nextStep > currentStep) {
                    if (currentPercentage >= percentageToReach) {
                        clearInterval(interval);

                        return currentPercentage;
                    }

                    return currentPercentage + 1;
                } else {
                    if (currentPercentage <= percentageToReach) {
                        clearInterval(interval);

                        return currentPercentage;
                    }

                    return currentPercentage - 1;
                }
            });
        }, 15);
    }

    const previousStep = () => {
        setStep((currentStep) => {
            var nextStep = CarInsuranceSteps.type

            switch (currentStep) {
                case CarInsuranceSteps.type:
                    break

                case CarInsuranceSteps.carDetails:
                    nextStep = CarInsuranceSteps.type
                    break;

                case CarInsuranceSteps.carDetailsEnhanced:
                    nextStep = CarInsuranceSteps.carDetails
                    break;

                case CarInsuranceSteps.paymentType:
                    nextStep = CarInsuranceSteps.carDetailsEnhanced
                    break;

                case CarInsuranceSteps.personalDetails:
                    nextStep = CarInsuranceSteps.paymentType
                    break;
            }

            evaluateStep(currentStep, nextStep)

            return nextStep
        });
    }

    function getCarInsuranceStepText(currentStep: CarInsuranceSteps): String {
        switch (currentStep) {
            case CarInsuranceSteps.type:
                return "Deckungsumfang"

            case CarInsuranceSteps.carDetails:
                return "KFZ Details"

            case CarInsuranceSteps.carDetailsEnhanced:
                return "KFZ Details Erweitert"

            case CarInsuranceSteps.paymentType:
                return "Zahlungsart"

            case CarInsuranceSteps.personalDetails:
                return "Persönliche Angaben"
        }
    }

    return <div className="px-5 sm:px-10 py-5 sm:py-10 sm:p-20 text-lg flex flex-col gap-2">
        <div className="text-nowrap">
            Schritt {step} von {stepToReach} - <b>{getCarInsuranceStepText(step)}</b>
        </div>

        <div className="h-3 bg-gray-200 rounded-2xl">
            <div style={{ width: `${percentage}%` }} className={`h-3 bg-appPrimary rounded-2xl`}>

            </div>
        </div>

        <div className={`flex flex-row ${step > 1 ? 'gap-2' : 'gap-0'}`}>
            <Button text="Zurück" isPrimary={false} className={`w-25 lg:text-lg ${step > 1 ? 'block' : 'hidden'}`} onClick={previousStep} />
            <Button text="Nächster Schritt" isPrimary={false} className="w-30 sm:w-50 lg:text-lg" onClick={nextStep} />
        </div>
    </div>
}