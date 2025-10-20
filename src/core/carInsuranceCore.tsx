import { CarInsuranceFormType, carInsuranceFormTypes } from "../model/carInsuranceFormType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
    [key: string]: string
}

const initialState: InsuranceState = {}

carInsuranceFormTypes.forEach((type) => {
    initialState[type] = ''
})

initialState[CarInsuranceFormType.bonusLevel] = '7'
initialState[CarInsuranceFormType.paymentType] = 'Abbuchungsauftrag'
initialState[CarInsuranceFormType.paymentFrequency] = 'monatlich (nur bei Abbuchung möglich)'
initialState[CarInsuranceFormType.orderAccepted] = 'NEIN'

export const carInsuranceCore = createSlice({
    name: 'carInsuranceCore',
    initialState: initialState,
    reducers: {
        setInsurance: (state, action: PayloadAction<InsuranceState>) => {
            const newState = action.payload

            carInsuranceFormTypes.forEach((type) => {
                state[type] = newState[type] === "" || newState[type] == undefined ? state[type] : newState[type]
            })

            return state
        },
        reset: (state) => {
            state = initialState

            return state
        }
    }
})

export const { setInsurance, reset } = carInsuranceCore.actions

export default carInsuranceCore.reducer