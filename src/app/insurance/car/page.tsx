import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Car() {
    return <InsurancePage
        type={ProgressType.car}
        title="Deine Auto-Versicherung"
        intro={<>
            In Österreich ist die Kfz-Haftpflichtversicherung <b>gesetzlich vorgeschrieben</b> - sie schützt dich, wenn du mit deinem Fahrzeug einen Schaden verursachst.
            Wir helfen dir, den passenden Tarif zu finden, der nicht nur alle gesetzlichen Anforderungen erfüllt, sondern auch zu deinem Budget passt.
        </>}
        heroImage="/carInsuranceInitial.webp"
        heroImageAlt="Eine Frau fährt ein Auto."
        whyTitle="Warum eine KFZ-Versicherung"
        whyImage="/carInsurance.svg"
        whyImageAlt="Wichtigkeit der Autoversicherung."
        whyText={<>
            Ein Auto bedeutet Freiheit - aber auch Verantwortung.
            Schon ein kleiner Unfall kann schnell hohe Kosten verursachen.
            Eine Kfz-Versicherung schützt dich genau davor: Sie übernimmt Schäden, die du anderen zufügst,
            und - je nach Deckung - auch Schäden an deinem eigenen Fahrzeug.
            <b> Ohne Versicherung müsstest du für Reparaturen, Gutachten oder Personenschäden selbst aufkommen -
                und das kann teuer werden.</b> Mit der richtigen Kfz-Versicherung bist du auf der sicheren Seite: finanziell geschützt,
            gesetzlich abgesichert und mit dem guten Gefühl, dass im Ernstfall jemand an deiner Seite steht.
        </>}
        covered={[
            "Personenschäden (z. B. Verletzungen anderer Verkehrsteilnehmer)",
            "Sachschäden (z. B. an fremden Fahrzeugen, Gebäuden, Gegenständen)",
            "Eigenschäden am eigenen Fahrzeug (je nach Kaskovariante)",
            "Vermögensschäden, die durch den Unfall entstehen",
            "Diebstahl des Fahrzeugs oder von Fahrzeugteilen",
            "Glasbruch (Windschutzscheibe, Seitenscheiben, Scheinwerfer)",
            "Brand- und Explosionsschäden",
            "Sturm-, Hagel-, Blitz- und Überschwemmungsschäden",
            "Marder- oder Kurzschlussschäden (je nach Tarif)",
            "Wildschäden (Tierkollision)",
            "Vandalismusschäden",
            "Parkschäden (je nach Tarif)",
            "Selbstverschuldete Unfälle (nur bei Vollkasko)",
            "Pannenhilfe- und Abschleppkosten (bei Zusatzschutz)",
            "Schäden durch höhere Gewalt (z. B. Naturkatastrophen)",
            "Zubehör- und Gepäckschutz (z. B. Felgen, Dachbox, Kindersitz)",
            "Rechtsschutzversicherung (als Ergänzung)",
            "Insassen-Unfallversicherung (für Fahrer & Mitfahrer)",
        ]}
    />
}
