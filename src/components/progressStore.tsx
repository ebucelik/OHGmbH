"use client";

import { Provider } from "react-redux";
import store from "../app/store";
import ProgressContainer from "./progressContainer";

export default function ProgressStore() {
    return <Provider store={store}>
        <ProgressContainer />
    </Provider>
}