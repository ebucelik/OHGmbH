import { configureStore } from '@reduxjs/toolkit'
import insuranceReducer from '../core/insuranceCore'

export const store = configureStore({
    reducer: {
        insuranceCore: insuranceReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store