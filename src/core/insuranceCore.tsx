import { FormType, insuranceFormTypes } from "../model/formType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
    [key: string]: string
}

export interface Insurance {
    vehicle: InsuranceState,
    ownHome: InsuranceState,
    law: InsuranceState
}

const initialState: Insurance = {
    vehicle: {},
    ownHome: {},
    law: {}
}

insuranceFormTypes.forEach((type) => {
    initialState.vehicle[type] = ''
    initialState.ownHome[type] = ''
    initialState.law[type] = ''
})

initialState.vehicle[FormType.bonusLevel] = '9'
initialState.vehicle[FormType.paymentType] = 'Abbuchungsauftrag'
initialState.vehicle[FormType.paymentFrequency] = 'monatlich (nur bei Abbuchung möglich)'
initialState.vehicle[FormType.orderAccepted] = 'NEIN'

initialState.ownHome[FormType.equipmentOwnhome] = 'wohnlich'
initialState.ownHome[FormType.paymentOwnhome] = 'monatlich'
initialState.ownHome[FormType.orderAccepted] = 'NEIN'

export const insuranceCore = createSlice({
    name: 'insuranceCore',
    initialState: initialState,
    reducers: {
        setInsuranceVehicle: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.vehicle[type] = newState.vehicle[type] === "" || newState.vehicle[type] == undefined ? state.vehicle[type] : newState.vehicle[type]
            })

            return newState
        },
        setInsuranceOwnhome: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.ownHome[type] = newState.ownHome[type] === "" || newState.ownHome[type] == undefined ? state.ownHome[type] : newState.ownHome[type]
            })

            return newState
        },
        setInsuranceLaw: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.law[type] = newState.law[type] === "" || newState.law[type] == undefined ? state.law[type] : newState.law[type]
            })

            return newState
        },
        reset: () => {
            return {
                vehicle: {},
                ownHome: {},
                law: {}
            }
        }
    }
})

export const { setInsuranceVehicle, setInsuranceOwnhome, setInsuranceLaw, reset } = insuranceCore.actions

export default insuranceCore.reducer