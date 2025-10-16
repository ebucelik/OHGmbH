import InsuranceService from "@/service/InsuranceService";

export default class Insurance implements InsuranceService {
    type: string;
    carType: string;

    constructor(
        type: string,
        carType: string
    ) {
        this.type = type;
        this.carType = carType;
    }

    set(formData: FormData) {
        const type = formData.get('radio')?.toString()
        const carType = formData.get('Fahrzeugart')?.toString()

        if (type != undefined && type != "") {
            this.type = type
        }

        if (carType != undefined && carType != "") {
            this.carType = carType
        }
    }
}