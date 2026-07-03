import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function LKW() {
    return <InsurancePage
        type={ProgressType.lkw}
        title="Deine LKW-Versicherung"
        intro={<>
            Mit der richtigen LKW-Versicherung bist du im Schadensfall bestens abgesichert.
            Die gesetzliche <b>Kfz-Haftpflichtversicherung</b> deckt Schäden ab, die du anderen zufügst. Ergänzend schützt eine <b>Kasko-Versicherung</b> dein eigenes Fahrzeug bei Unfall, Diebstahl oder Elementarschäden.
            So bleibt dein Unternehmen mobil - sicher, zuverlässig und optimal versichert.
        </>}
        heroImage="/lkwInsuranceInitial.webp"
        heroImageAlt="Fahrender LKW."
        whyTitle="Warum eine LKW-Versicherung"
        whyImage="/lkwInsurance.svg"
        whyImageAlt="Wichtigkeit der LKW-Versicherung."
        whyText={<>
            Ein LKW ist oft mehr als nur ein Fahrzeug - er ist das Fundament vieler Unternehmen.
            Ein Unfall, Diebstahl oder Schaden kann schnell hohe Kosten verursachen und den Betrieb lahmlegen.
            Mit einer passenden LKW-Versicherung bist du <b>finanziell abgesichert</b> und kannst dich voll auf dein Geschäft konzentrieren.
            Sie schützt dich vor Schäden an Dritten, am eigenen Fahrzeug und sorgt dafür, dass du im Schadensfall <b>schnell wieder mobil bist</b>.
            <br />Kurz gesagt: Ohne Versicherung riskierst du Ausfälle - mit der richtigen bist <b>du auf der sicheren Seite</b>.
        </>}
        covered={[
            "Personenschäden (z. B. Verletzungen anderer Verkehrsteilnehmer)",
            "Sachschäden (z. B. an fremden Fahrzeugen, Gebäuden oder Gütern)",
            "Vermögensschäden, die durch den Unfall entstehen",
            "Diebstahl des LKW oder einzelner Fahrzeugteile",
            "Glasbruch (z. B. Windschutz- oder Seitenscheiben)",
            "Brand- und Explosionsschäden",
            "Naturgewalten: Sturm, Hagel, Blitz, Überschwemmung",
            "Wildschäden (Tierkollision)",
            "Vandalismus durch Dritte",
            "Selbstverschuldete Unfälle (nur bei Vollkasko)",
            "Pannenhilfe- und Abschleppkosten (bei Zusatzschutz)",
            "Auslandsschutz (für internationale Fahrten)",
            "Aufbauten und Zubehör (z. B. Kran, Kühlaggregat - je nach Tarif)",
            "Insassen-Unfallversicherung",
        ]}
    />
}
