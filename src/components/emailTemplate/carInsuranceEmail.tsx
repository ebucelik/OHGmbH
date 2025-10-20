import { carInsuranceFormTypes } from "../../model/carInsuranceFormType";
import { InsuranceState } from "../../core/carInsuranceCore";

export default function CarEmailTemplate({ insurance }: { insurance: InsuranceState }) {
    const date = new Date()

    function getInsurance(): React.ReactNode {
        return <div>
            {
                carInsuranceFormTypes.map((type) => {
                    return (
                        <div>
                            {type}: <b>{insurance[type]}</b>
                        </div>
                    )
                })
            }
        </div>
    }

    return (
        <div>
            <h3>
                Eine neue Autoversicherung ist angefragt worden.
            </h3>
            <div>
                <b>Details zur Autoversicherung:</b>
            </div>
            <br />
            {
                getInsurance()
            }
            <br />
            <div>
                {
                    'Auftragsdatum: ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString('de-DE')
                }
            </div>
        </div>
    )
}