"use client";

import { Provider } from "react-redux";
import store from "../../app/store";
import CarInsurance from "../insurance/carInsurance";
import { ProgressType } from "./progressType";
import LKWInsurance from "../insurance/lkwInsurance";
import MotorcycleInsurance from "../insurance/motorcycleInsurance";
import MopedInsurance from "../insurance/mopedInsurance";
import OwnhomeInsurance from "../insurance/ownhomeInsurance";
import FlatInsurance from "../insurance/flatInsurance";
import LawInsurance from "../insurance/lawInsurance";
import AccidentInsurance from "../insurance/accidentInsurance";
import HealthInsurance from "../insurance/healthInsurance";
import DisabilityInsurance from "../insurance/disabilityInsurance";
import LifeInsurance from "../insurance/lifeInsurance";

export default function ProgressStore(
    { progressType }: { progressType: ProgressType }
) {

    function progressBody() {
        switch (progressType) {
            case ProgressType.car:
                return <CarInsurance />

            case ProgressType.lkw:
                return <LKWInsurance />

            case ProgressType.motorcycle:
                return <MotorcycleInsurance />

            case ProgressType.moped:
                return <MopedInsurance />

            case ProgressType.ownhome:
                return <OwnhomeInsurance />

            case ProgressType.flat:
                return <FlatInsurance />

            case ProgressType.law:
                return <LawInsurance />

            case ProgressType.accident:
                return <AccidentInsurance />

            case ProgressType.health:
                return <HealthInsurance />

            case ProgressType.disability:
                return <DisabilityInsurance />

            case ProgressType.life:
                return <LifeInsurance />
        }
    }

    return <Provider store={store}>
        {
            progressBody()
        }
    </Provider>
}