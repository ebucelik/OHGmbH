import { FormType, insuranceFormTypes } from "../model/formType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
    [key: string]: string
}

export interface Insurance {
    vehicle: InsuranceState,
    ownHome: InsuranceState,
    law: InsuranceState,
    accident: InsuranceState,
    health: InsuranceState,
    disability: InsuranceState,
    life: InsuranceState
}

const initialState: Insurance = {
    vehicle: {},
    ownHome: {},
    law: {},
    accident: {},
    health: {},
    disability: {},
    life: {}
}

insuranceFormTypes.forEach((type) => {
    initialState.vehicle[type] = ''
    initialState.ownHome[type] = ''
    initialState.law[type] = ''
    initialState.accident[type] = ''
    initialState.health[type] = ''
    initialState.disability[type] = ''
    initialState.life[type] = ''
})

initialState.vehicle[FormType.bonusLevel] = '9'
initialState.vehicle[FormType.paymentType] = 'Abbuchungsauftrag'
initialState.vehicle[FormType.paymentFrequency] = 'monatlich (nur bei Abbuchung möglich)'
initialState.vehicle[FormType.orderAccepted] = 'NEIN'

initialState.ownHome[FormType.equipmentOwnhome] = 'wohnlich'
initialState.ownHome[FormType.paymentOwnhome] = 'monatlich'
initialState.ownHome[FormType.orderAccepted] = 'NEIN'

initialState.law[FormType.orderAccepted] = 'NEIN'

initialState.accident[FormType.orderAccepted] = 'NEIN'

initialState.health[FormType.orderAccepted] = 'NEIN'

initialState.disability[FormType.orderAccepted] = 'NEIN'

initialState.life[FormType.orderAccepted] = 'NEIN'

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
        setInsuranceAccident: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.accident[type] = newState.accident[type] === "" || newState.accident[type] == undefined ? state.accident[type] : newState.accident[type]
            })

            return newState
        },
        setInsuranceHealth: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.health[type] = newState.health[type] === "" || newState.health[type] == undefined ? state.health[type] : newState.health[type]
            })

            return newState
        },
        setInsuranceDisability: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.disability[type] = newState.disability[type] === "" || newState.disability[type] == undefined ? state.disability[type] : newState.disability[type]
            })

            return newState
        },
        setInsuranceLife: (state, action: PayloadAction<Insurance>) => {
            const newState = action.payload

            insuranceFormTypes.forEach((type) => {
                newState.life[type] = newState.life[type] === "" || newState.life[type] == undefined ? state.life[type] : newState.life[type]
            })

            return newState
        },
        reset: () => {
            return {
                vehicle: {},
                ownHome: {},
                law: {},
                accident: {},
                health: {},
                disability: {},
                life: {}
            }
        }
    }
})

export const { setInsuranceVehicle, setInsuranceOwnhome, setInsuranceLaw, setInsuranceAccident, setInsuranceHealth, setInsuranceDisability, setInsuranceLife, reset } = insuranceCore.actions

export default insuranceCore.reducer