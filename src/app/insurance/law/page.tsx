import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Law() {
    return <InsurancePage
        type={ProgressType.law}
        title="Deine Rechtsschutz-Versicherung"
        intro={<>
            Recht haben ist gut - Recht bekommen kann teuer werden. Eine <b>Rechtsschutz-Versicherung</b> übernimmt <b>Anwalts-, Gerichts- und Sachverständigenkosten</b>, damit du deine Ansprüche ohne finanzielles Risiko durchsetzen kannst.
        </>}
        heroImage="/legalProtectionInsuranceInitial.webp"
        heroImageAlt="Rechtsschutz"
        whyTitle="Warum eine Rechtsschutz-Versicherung"
        whyImage="/legalProtectionInsurance.svg"
        whyImageAlt="Wichtigkeit der Rechtsschutz-Versicherung."
        whyText={<>
            Ein Streit mit dem Arbeitgeber, Ärger nach einem Verkehrsunfall oder Probleme mit einem Vertragspartner - rechtliche Auseinandersetzungen können jeden treffen, oft völlig unverschuldet.
            <br />
            Die <b>Rechtsschutz-Versicherung</b> übernimmt <b>Anwalts- und Gerichtskosten, Sachverständigengebühren</b> und bei Prozessverlust auch die Kosten der Gegenseite.
            <br />
            So kannst du dein Recht durchsetzen, ohne dir Sorgen um das Kostenrisiko machen zu müssen - und bekommst schon vorab kompetente rechtliche Beratung.
        </>}
        covered={[
            "Anwalts- und Gerichtskosten",
            "Sachverständigen- und Zeugengebühren",
            "Kosten der Gegenseite bei Prozessverlust",
            "Schadenersatz-Rechtsschutz (eigene Ansprüche durchsetzen)",
            "Straf-Rechtsschutz (Verteidigung in Strafverfahren)",
            "Arbeitsgerichts-Rechtsschutz (Streit mit dem Arbeitgeber)",
            "Fahrzeug- und Lenker-Rechtsschutz",
            "Vertrags-Rechtsschutz (je nach Tarif)",
            "Wohnungs- und Grundstücks-Rechtsschutz",
            "Beratungs-Rechtsschutz (rechtliche Erstberatung)",
        ]}
    />
}
