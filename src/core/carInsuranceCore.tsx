import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InsuranceState {
    insuranceType: string,
    carType: string,
}

const initialState: InsuranceState = {
    insuranceType: "",
    carType: ""
}

export const carInsuranceCore = createSlice({
    name: 'carInsuranceCore',
    initialState: initialState,
    reducers: {
        setInsuranceForm: (state, action: PayloadAction<InsuranceState>) => {
            const newState = action.payload
            state.insuranceType = newState.insuranceType === "" ? state.insuranceType : newState.insuranceType
            state.carType = newState.carType === "" ? state.carType : newState.carType
        }
    }
})

export const { setInsuranceForm } = carInsuranceCore.actions

export default carInsuranceCore.reducer