"use client";

import { Provider } from "react-redux";
import store from "../../app/store";
import CarInsurance from "../insurance/carInsurance";
import { ProgressType } from "./progressType";
import LKWInsurance from "../insurance/lkwInsurance";
import MotorcycleInsurance from "../insurance/motorcycleInsurance";

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

            case ProgressType.bicycle:
                return <div></div>
        }
    }

    return <Provider store={store}>
        {
            progressBody()
        }
    </Provider>
}