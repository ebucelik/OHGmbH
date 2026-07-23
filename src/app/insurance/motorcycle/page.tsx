import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Motorcycle() {
    return <InsurancePage
        type={ProgressType.motorcycle}
        title="Deine Motorrad-Versicherung"
        intro={<>
            Ob kurze Ausfahrt oder lange Tour - mit der passenden Motorrad-Versicherung bist du auf jeder Strecke gut geschützt.
            Die <b>Haftpflichtversicherung</b> deckt Schäden ab, die du anderen zufügst, und ist in Österreich verpflichtend.
            Für zusätzlichen Schutz sorgt die <b>Kasko-Versicherung</b>: Sie übernimmt Kosten bei Diebstahl, Unwetterschäden, Vandalismus oder selbstverschuldeten Unfällen.
        </>}
        heroImage="/motorcycleInsuranceInitial.webp"
        heroImageAlt="Fahrendes Motorrad."
        whyTitle="Warum eine Motorrad-Versicherung"
        whyImage="/motorcycleInsurance.svg"
        whyImageAlt="Wichtigkeit der Motorrad-Versicherung."
        whyText={<>
            Freiheit auf zwei Rädern - aber sicher!
            Mit der richtigen Motorrad-Versicherung bist du bestens geschützt, egal ob auf der Landstraße, in der Stadt oder auf Tour.
            Die <b>Kfz-Haftpflichtversicherung ist gesetzlich vorgeschrieben</b> und deckt Schäden ab, die du anderen zufügst.
            Eine Teilkasko oder Vollkasko sichert zusätzlich dein eigenes Bike - etwa bei Diebstahl, Unwetterschäden oder selbstverschuldeten Unfällen.
            So kannst du dich ganz aufs Fahren konzentrieren - <b>wir kümmern uns um den passenden Schutz</b>.
        </>}
        covered={[
            "Personenschäden (z. B. Verletzungen anderer Verkehrsteilnehmer)",
            "Sachschäden (z. B. an fremden Fahrzeugen, Gebäuden oder Gütern)",
            "Vermögensschäden, die durch den Unfall entstehen",
            "Diebstahl des Motorrads oder einzelner Teile",
            "Brand- und Explosionsschäden",
            "Naturgewalten: Sturm, Hagel, Blitz, Überschwemmung",
            "Wildschäden (Tierkollision)",
            "Vandalismus durch Dritte",
            "Selbstverschuldete Unfälle (nur bei Vollkasko)",
            "Zubehör- und Bekleidungsschutz (z. B. Helm, Jacke, Koffer)",
            "Pannenhilfe- und Abschleppkosten (bei Zusatzschutz)",
            "Auslandsschutz (für internationale Fahrten)",
            "Insassen-Unfallversicherung",
        ]}
    />
}
