import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Health() {
    return <InsurancePage
        type={ProgressType.health}
        title="Deine Krankenversicherung"
        intro={<>
            Die gesetzliche Krankenversicherung sichert in Österreich die medizinische Grundversorgung. Eine <b>private Zusatzversicherung</b> ergänzt sie um freie Arztwahl, Sonderklasse und weitere Leistungen, die die gesetzliche Kasse nicht übernimmt.
        </>}
        heroIcon="solar:health-bold"
        whyTitle="Warum eine private Krankenversicherung"
        whyIcon="mdi:hospital-box"
        whyText={<>
            Die gesetzliche Krankenversicherung deckt die medizinische Grundversorgung ab - bei vielen Leistungen bleibt aber ein Eigenanteil oder du hast keinen Einfluss auf Arzt und Zimmerkategorie im Spital.
            <br />
            Eine <b>private Krankenzusatzversicherung</b> gibt dir die Wahl: freie Arztwahl, Behandlung in der Sonderklasse (Ein- oder Zweibettzimmer) und schnelleren Zugang zu Fachärzten und Untersuchungen.
            <br />
            Auch Leistungen wie Zahnersatz oder eine Absicherung im Ausland sind über die gesetzliche Kasse oft nur eingeschränkt gedeckt - mit dem passenden Zusatztarif bist du hier klar besser abgesichert.
        </>}
        covered={[
            "Sonderklasse: Ein- oder Zweibettzimmer im Spital",
            "Freie Arztwahl und Wahlarzt-Kostenzuschuss",
            "Schnellerer Zugang zu Facharzt-Terminen und Untersuchungen",
            "Zahnersatz und Zahnbehandlungen (je nach Tarif)",
            "Ambulante Behandlungen bei Wahlärzten",
            "Auslandskrankenversicherung inkl. Rücktransport",
            "Kostenübernahme für Chefarztbehandlung",
            "Alternative Heilmethoden (je nach Tarif)",
            "Vorsorgeuntersuchungen über die Kassenleistung hinaus",
            "Ein-Bett-Aufpreis bei ambulanten Operationen (je nach Tarif)",
        ]}
    />
}
