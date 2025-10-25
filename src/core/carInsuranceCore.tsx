import { FormType, carInsuranceFormTypes } from "../model/formType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
    [key: string]: string
}

const initialState: InsuranceState = {}

carInsuranceFormTypes.forEach((type) => {
    initialState[type] = ''
})

initialState[FormType.bonusLevel] = '9'
initialState[FormType.paymentType] = 'Abbuchungsauftrag'
initialState[FormType.paymentFrequency] = 'monatlich (nur bei Abbuchung möglich)'
initialState[FormType.orderAccepted] = 'NEIN'

export const carInsuranceCore = createSlice({
    name: 'carInsuranceCore',
    initialState: initialState,
    reducers: {
        setInsurance: (state, action: PayloadAction<InsuranceState>) => {
            const newState = action.payload

            carInsuranceFormTypes.forEach((type) => {
                newState[type] = newState[type] === "" || newState[type] == undefined ? state[type] : newState[type]
            })

            return newState
        },
        reset: () => {
            return initialState
        }
    }
})

export const { setInsurance, reset } = carInsuranceCore.actions

export default carInsuranceCore.reducer