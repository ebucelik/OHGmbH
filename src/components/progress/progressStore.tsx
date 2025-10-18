"use client";

import { Provider } from "react-redux";
import store from "../../app/store";
import CarInsurance from "../insurance/carInsurance";
import { ProgressType } from "./progressType";

export default function ProgressStore(
    { progressType }: { progressType: ProgressType }
) {

    function progressBody() {
        switch (progressType) {
            case ProgressType.car:
                return <CarInsurance />

            case ProgressType.motorcycle:
                return <div></div>

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