import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Flat() {
    return <InsurancePage
        type={ProgressType.flat}
        title="Deine Haushalts-Versicherung"
        intro={<>
            Eine <b>Haushaltsversicherung</b> schützt dein Hab und Gut vor <b>Feuer, Wasser, Einbruch oder Sturm</b>. So ist dein Zuhause und alles darin bestens abgesichert - egal, was passiert.
        </>}
        heroImage="/householdInsuranceInitial.webp"
        heroImageAlt="Ein eingerichteter Haushalt."
        whyTitle="Warum eine Haushalts-Versicherung"
        whyImage="/householdInsurance.svg"
        whyImageAlt="Wichtigkeit der Haushalts-Versicherung."
        whyText={<>
            Dein Zuhause ist mehr als nur vier Wände - es steckt voller Erinnerungen und Wertgegenstände. Eine <b>Haushaltsversicherung</b> schützt alles, was sich im Haushalt befindet: Möbel, Kleidung, Elektrogeräte, Schmuck und vieles mehr.
            <br />
            Sie greift bei <b>Einbruchdiebstahl, Feuer, Leitungswasser-, Sturm- und Hagelschäden</b> und übernimmt auch Folgekosten wie Aufräumarbeiten oder Hotelkosten nach einem großen Schaden.
            <br />
            So kannst du dich darauf verlassen, dass dein Besitz und dein Alltag auch im Ernstfall gut geschützt sind.
        </>}
        covered={[
            "Der gesamte Wohnungsinhalt: Möbel, Kleidung, Elektrogeräte",
            "Einbruchdiebstahl und Beraubung",
            "Feuer-, Brand-, Blitz- und Explosionsschäden",
            "Leitungswasserschäden",
            "Sturm-, Hagel- und Schneedruckschäden",
            "Glasbruch (z. B. Fenster, Türverglasung - je nach Tarif)",
            "Wertgegenstände und Schmuck (bis zur Tarifgrenze)",
            "Vandalismus nach einem Einbruch",
            "Privathaftpflicht für die ganze Familie",
            "Folgekosten wie Aufräumarbeiten oder Hotelkosten",
        ]}
    />
}
