import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Moped() {
    return <InsurancePage
        type={ProgressType.moped}
        title="Deine Moped-Versicherung"
        intro={<>
            Ein Unfall oder Schaden kann schnell teuer werden. Die <b>Haftpflichtversicherung</b> schützt dich vor Kosten, wenn du anderen etwas beschädigst - und ist in Österreich Pflicht. Mit <b>Kasko-Schutz</b> bist du auch bei Diebstahl oder Unwetterschäden abgesichert.
        </>}
        heroImage="/mopedInsuranceInitial.webp"
        heroImageAlt="Fahrendes Moped."
        whyTitle="Warum eine Moped-Versicherung"
        whyImage="/mopedInsurance.svg"
        whyImageAlt="Wichtigkeit der Moped-Versicherung."
        whyText={<>
            Auch mit dem Moped kann schnell etwas passieren - ein kleiner Unfall, ein Kratzer oder ein Schaden an einem anderen Fahrzeug kann hohe Kosten verursachen. Die Moped-Haftpflichtversicherung ist <b>in Österreich gesetzlich vorgeschrieben</b> und schützt dich, wenn du jemand anderem Schaden zufügst.
            Mit einer zusätzlichen Kasko-Versicherung bist du auch bei Diebstahl, Vandalismus oder Unwetterschäden abgesichert. So kannst du sorgenfrei fahren - sicher, geschützt und gesetzlich auf der richtigen Seite.
        </>}
        covered={[
            "Personenschäden (z. B. Verletzungen anderer Verkehrsteilnehmer)",
            "Sachschäden (z. B. an fremden Fahrzeugen oder Gegenständen)",
            "Vermögensschäden, die durch den Unfall entstehen",
            "Diebstahl des Mopeds oder einzelner Teile (mit Kasko)",
            "Brand- und Explosionsschäden",
            "Naturgewalten: Sturm, Hagel, Blitz, Überschwemmung",
            "Vandalismus durch Dritte",
            "Selbstverschuldete Schäden am eigenen Moped (mit Kasko)",
            "Zubehör- und Bekleidungsschutz (z. B. Helm, Jacke)",
            "Pannenhilfe- und Abschleppkosten (bei Zusatzschutz)",
        ]}
    />
}
