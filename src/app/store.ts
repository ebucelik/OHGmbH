import { configureStore } from '@reduxjs/toolkit'
import carInsuranceReducer from '../core/carInsuranceCore'

export const store = configureStore({
    reducer: {
        carInsuranceCore: carInsuranceReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store