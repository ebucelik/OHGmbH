import InsuranceService from "../service/InsuranceService";

export enum InsuranceType {
    insuranceType = "insuranceType",
    carType = "carType",
    movementType = "movementType",
    brand = "brand",
    modelName = "modelName",
    enginePower = "enginePower",
    carPrice = "carPrice",
    specialEquipment = "specialEquipment",
    leasing = "leasing",
    creationDate = "creationDate",
    amountOfSeats = "amountOfSeats",
    registrationDistrict = "registrationDistrict",
    bonusLevel = "bonusLevel",
    kmPerYear = "kmPerYear",
    paymentType = "paymentType",
    paymentFrequency = "paymentFrequency",
    salutation = "salutation",
    academicTitlePre = "academicTitlePre",
    firstname = "firstname",
    lastname = "lastname",
    academicTitlePost = "academicTitlePost",
    citizenship = "citizenship",
    birthday = "birthday",
    job = "job",
    address = "address",
    doornumber = "doornumber",
    postalCode = "postalCode",
    city = "city",
    email = "email",
    phoneNumber = "phoneNumber"
}

export default class Insurance implements InsuranceService {
    insuranceType: string;
    carType: string;

    constructor(
        insuranceType: string,
        carType: string
    ) {
        this.insuranceType = insuranceType;
        this.carType = carType;
    }

    set(formData: FormData) {
        const insuranceType = formData.get(InsuranceType.insuranceType)?.toString()
        const carType = formData.get(InsuranceType.carType)?.toString()

        if (insuranceType != undefined && insuranceType != "") {
            this.insuranceType = insuranceType
        }

        if (carType != undefined && carType != "") {
            this.carType = carType
        }
    }
}