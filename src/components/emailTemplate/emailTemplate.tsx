import { carInsuranceFormTypes } from "../../model/carInsuranceFormType";
import { InsuranceState } from "../../core/carInsuranceCore";

export default function EmailTemplate({ order, insurance }: { order: String | null, insurance: InsuranceState }) {
    const date = new Date()

    function getInsurance(): React.ReactNode {
        return <div>
            {
                carInsuranceFormTypes.map((type, key) => {
                    return insurance[type] != ""
                        ? (
                            <div key={key}>
                                {type}: <b>{insurance[type]}</b>
                            </div>
                        )
                        : (<div></div>)
                })
            }
        </div>
    }

    return (
        <div>
            <h3>
                Eine neue {order} ist angefragt worden.
            </h3>
            <div>
                <b>Details zur {order}:</b>
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