import { insuranceFormTypes } from "../../model/formType";
import { InsuranceState } from "../../core/insuranceCore";

export default function EmailTemplate({ order, insurance }: { order: String | null, insurance: InsuranceState }) {
    const currentDay = new Date().toLocaleDateString("de-DE", { timeZone: "Europe/Paris", hour: '2-digit', minute: '2-digit', second: '2-digit' });

    function getInsurance(): React.ReactNode {
        return <div>
            {
                insuranceFormTypes.map((type, key) => {
                    return insurance[type] != "" && insurance[type] != undefined
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
                {order} ist angefragt worden.
            </h3>
            <div>
                <b>Details</b>
            </div>
            <br />
            {
                getInsurance()
            }
            <br />
            <div>
                {
                    'Auftragsdatum: ' + currentDay
                }
            </div>
        </div>
    )
}