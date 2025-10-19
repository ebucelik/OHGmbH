import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
    insuranceType: string,
    carType: string,
    movementType: string,
    brand: string,
    modelName: string,
    enginePower: string,
    carPrice: string,
    specialEquipment: string,
    leasing: string,
    creationDate: string,
    amountOfSeats: string,
    registrationDistrict: string,
    bonusLevel: string,
    kmPerYear: string,
    paymentType: string,
    paymentFrequency: string,
    salutation: string,
    academicTitlePre: string,
    firstname: string,
    lastname: string,
    academicTitlePost: string,
    citizenship: string,
    birthday: string,
    job: string,
    address: string,
    doornumber: string,
    postalCode: string,
    city: string,
    email: string,
    phoneNumber: string
}

const initialState: InsuranceState = {
    insuranceType: "",
    carType: "",
    movementType: "",
    brand: "",
    modelName: "",
    enginePower: "",
    carPrice: "",
    specialEquipment: "",
    leasing: "",
    creationDate: "",
    amountOfSeats: "",
    registrationDistrict: "",
    bonusLevel: "",
    kmPerYear: "",
    paymentType: "",
    paymentFrequency: "",
    salutation: "",
    academicTitlePre: "",
    firstname: "",
    lastname: "",
    academicTitlePost: "",
    citizenship: "",
    birthday: "",
    job: "",
    address: "",
    doornumber: "",
    postalCode: "",
    city: "",
    email: "",
    phoneNumber: ""
}

export const carInsuranceCore = createSlice({
    name: 'carInsuranceCore',
    initialState: initialState,
    reducers: {
        setInsurance: (state, action: PayloadAction<InsuranceState>) => {
            const newState = action.payload

            state.insuranceType = newState.insuranceType === "" ? state.insuranceType : newState.insuranceType
            state.carType = newState.carType === "" ? state.carType : newState.carType
            state.movementType = newState.movementType === "" ? state.movementType : newState.movementType
            state.brand = newState.brand === "" ? state.brand : newState.brand
            state.modelName = newState.modelName === "" ? state.modelName : newState.modelName
            state.enginePower = newState.enginePower === "" ? state.enginePower : newState.enginePower
            state.carPrice = newState.carPrice === "" ? state.carPrice : newState.carPrice
            state.specialEquipment = newState.specialEquipment === "" ? state.specialEquipment : newState.specialEquipment
            state.leasing = newState.leasing === "" ? state.leasing : newState.leasing
            state.creationDate = newState.creationDate === "" ? state.creationDate : newState.creationDate
            state.amountOfSeats = newState.amountOfSeats === "" ? state.amountOfSeats : newState.amountOfSeats
            state.registrationDistrict = newState.registrationDistrict === "" ? state.registrationDistrict : newState.registrationDistrict
            state.bonusLevel = newState.bonusLevel === "" ? state.bonusLevel : newState.bonusLevel
            state.kmPerYear = newState.kmPerYear === "" ? state.kmPerYear : newState.kmPerYear
            state.paymentType = newState.paymentType === "" ? state.paymentType : newState.paymentType
            state.paymentFrequency = newState.paymentFrequency === "" ? state.paymentFrequency : newState.paymentFrequency
            state.salutation = newState.salutation === "" ? state.salutation : newState.salutation
            state.academicTitlePre = newState.academicTitlePre === "" ? state.academicTitlePre : newState.academicTitlePre
            state.firstname = newState.firstname === "" ? state.firstname : newState.firstname
            state.lastname = newState.lastname === "" ? state.lastname : newState.lastname
            state.academicTitlePost = newState.academicTitlePost === "" ? state.academicTitlePost : newState.academicTitlePost
            state.citizenship = newState.citizenship === "" ? state.citizenship : newState.citizenship
            state.birthday = newState.birthday === "" ? state.birthday : newState.birthday
            state.job = newState.job === "" ? state.job : newState.job
            state.address = newState.address === "" ? state.address : newState.address
            state.doornumber = newState.doornumber === "" ? state.doornumber : newState.doornumber
            state.postalCode = newState.postalCode === "" ? state.postalCode : newState.postalCode
            state.city = newState.city === "" ? state.city : newState.city
            state.email = newState.email === "" ? state.email : newState.email
            state.phoneNumber = newState.phoneNumber === "" ? state.phoneNumber : newState.phoneNumber

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