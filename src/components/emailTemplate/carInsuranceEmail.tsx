import { InsuranceState } from "../../core/carInsuranceCore";

export default function CarEmailTemplate({ insurance }: { insurance: InsuranceState }) {
    const date = new Date()

    return (
        <div>
            <h3>
                Eine neue Autoversicherung ist angefragt worden.
            </h3>
            <div>
                <b>Details zur Autoversicherung:</b>
            </div>
            <br />
            <div>
                Variante: <b>{insurance.insuranceType}</b>
            </div>
            <div>
                Fahrzeugart: <b>{insurance.carType}</b>
            </div>
            <div>
                Antriebsart: <b>{insurance.movementType}</b>
            </div>
            <div>
                Marke: <b>{insurance.brand}</b>
            </div>
            <div>
                Modellbezeichnung: <b>{insurance.modelName}</b>
            </div>
            <div>
                Motorleistung in kW: <b>{insurance.enginePower}</b>
            </div>
            <div>
                Listenneupreise inkl. USt und NoVA: <b>{insurance.carPrice}</b>
            </div>
            <div>
                Sonderausstattung in EUR: <b>{insurance.specialEquipment}</b>
            </div>
            <div>
                Leasing: <b>{insurance.leasing}</b>
            </div>
            <div>
                Baujahr/Erstzulassung: <b>{insurance.creationDate}</b>
            </div>
            <div>
                Anzahl der Sitzplätze: <b>{insurance.amountOfSeats}</b>
            </div>
            <div>
                Zulassungsbezirk: <b>{insurance.registrationDistrict}</b>
            </div>
            <div>
                Bonusstufe: <b>{insurance.bonusLevel}</b>
            </div>
            <div>
                Kilometerleistung pro Jahr: <b>{insurance.kmPerYear}</b>
            </div>
            <div>
                Zahlart: <b>{insurance.paymentType}</b>
            </div>
            <div>
                Zahlungsfrequenz: <b>{insurance.paymentFrequency}</b>
            </div>
            <br />
            <div>
                <b>Persönliche Angaben:</b>
            </div>
            <br />
            <div>
                Anrede: <b>{insurance.salutation}</b>
            </div>
            <div>
                Akad. Grad (vorangestellt): <b>{insurance.academicTitlePre}</b>
            </div>
            <div>
                Vorname: <b>{insurance.firstname}</b>
            </div>
            <div>
                Nachname: <b>{insurance.lastname}</b>
            </div>
            <div>
                Akad. Grad (nachgestellt): <b>{insurance.academicTitlePost}</b>
            </div>
            <div>
                Staatsbürgerschaft: <b>{insurance.citizenship}</b>
            </div>
            <div>
                Geburtsdatum: <b>{insurance.birthday}</b>
            </div>
            <div>
                Beruf: <b>{insurance.job}</b>
            </div>
            <div>
                Adresse: <b>{insurance.address}</b>
            </div>
            <div>
                Hausnummer/Stiege/Stock/Tür: <b>{insurance.doornumber}</b>
            </div>
            <div>
                PLZ: <b>{insurance.postalCode}</b>
            </div>
            <div>
                Ort: <b>{insurance.city}</b>
            </div>
            <div>
                E-Mail: <b>{insurance.email}</b>
            </div>
            <div>
                Telefonnummer: <b>{insurance.phoneNumber}</b>
            </div>
            <div>
                Beratungsauftrag akzeptiert: <b>{insurance.orderAccepted ? 'JA' : 'NEIN'}</b>
            </div>
            <br />
            <div>
                {
                    'Auftragsdatum: ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString('de-DE')
                }
            </div>
        </div>
    )
}