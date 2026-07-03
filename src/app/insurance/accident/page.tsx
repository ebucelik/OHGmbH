import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Accident() {
    return <InsurancePage
        type={ProgressType.accident}
        title="Deine Unfall-Versicherung"
        intro={<>
            Ein Unfall kann jeden treffen - zuhause, beim Sport oder im Straßenverkehr. Die <b>Unfallversicherung</b> bietet finanzielle Sicherheit, wenn etwas passiert, und unterstützt dich bei Behandlungen, Reha oder bleibenden Schäden.
        </>}
        heroImage="/accidentInsuranceInitial.webp"
        heroImageAlt="Absicherung bei einem Unfall."
        whyTitle="Warum eine Unfall-Versicherung"
        whyImage="/accidentInsurance.svg"
        whyImageAlt="Wichtigkeit der Unfall-Versicherung."
        whyText={<>
            Ein Moment der Unachtsamkeit kann das Leben verändern - ob im Alltag, im Beruf oder in der Freizeit. <br />
            Die <b>Unfallversicherung</b> schützt dich und deine Familie vor den finanziellen Folgen eines Unfalls.
            Sie leistet bei <b>Invalidität, Spitalsaufenthalt, Reha-Maßnahmen oder im schlimmsten Fall Todesfall</b> und hilft, laufende Kosten abzufedern.
            So hast du die Sicherheit, dass du nach einem Unfall nicht allein dastehst - und dich voll auf deine Genesung konzentrieren kannst.
        </>}
        covered={[
            "Dauernde Invalidität (einmalige Kapitalleistung)",
            "Unfalltod (Absicherung der Familie)",
            "Spital- und Taggeld während des Aufenthalts",
            "Unfallkosten wie Bergung und Rückholung (auch per Hubschrauber)",
            "Reha-Maßnahmen und Therapiekosten",
            "Kosmetische Operationen nach einem Unfall",
            "Knochenbruchpauschale (je nach Tarif)",
            "Weltweiter Schutz - rund um die Uhr, in Freizeit und Beruf",
            "Absicherung für die ganze Familie (je nach Tarif)",
        ]}
    />
}
