import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Ownhome() {
    return <InsurancePage
        type={ProgressType.ownhome}
        title="Deine Eigenheim-Versicherung"
        intro={<>
            Eine <b>Eigenheim-Versicherung</b> schützt dein Zuhause vor finanziellen Folgen durch <b>Feuer, Sturm, Leitungswasser, Einbruch oder Naturkatastrophen</b>. So bleibt dein Eigentum sicher - egal, was passiert.
        </>}
        heroImage="/ownhomeInsuranceInitial.webp"
        heroImageAlt="Ein Eigenheim."
        whyTitle="Warum eine Eigenheim-Versicherung"
        whyImage="/ownhomeInsurance.svg"
        whyImageAlt="Wichtigkeit der Eigenheim-Versicherung."
        whyText={<>
            Dein Zuhause ist einer deiner größten Werte - und verdient den besten Schutz. Eine <b>Eigenheim-Versicherung</b> deckt Schäden durch <b>Feuer, Sturm, Hagel, Leitungswasser, Einbruchdiebstahl oder Naturereignisse</b> ab. Sie schützt sowohl das Gebäude selbst als auch fest verbaute Teile wie Dach, Fenster oder Böden.
            <br />
            Ob Eigenheim, Reihenhaus oder Ferienhaus - mit der richtigen Versicherung bist du finanziell abgesichert, wenn etwas Unvorhergesehenes passiert. So kannst du dich entspannt zurücklehnen, denn dein Zuhause ist rundum geschützt.
        </>}
        covered={[
            "Das Gebäude samt fest verbauter Teile (Dach, Fenster, Böden)",
            "Feuer-, Blitz- und Explosionsschäden",
            "Sturm-, Hagel- und Schneedruckschäden",
            "Leitungswasserschäden und Rohrbruch",
            "Naturkatastrophen wie Hochwasser oder Erdrutsch (je nach Tarif)",
            "Einbruchschäden am Gebäude (z. B. aufgebrochene Türen und Fenster)",
            "Nebengebäude wie Garage, Carport oder Gartenhaus",
            "Photovoltaik- und Solaranlagen (je nach Tarif)",
            "Haus- und Grundbesitzhaftpflicht",
            "Folgekosten wie Abbruch-, Aufräum- und Entsorgungskosten",
        ]}
    />
}
