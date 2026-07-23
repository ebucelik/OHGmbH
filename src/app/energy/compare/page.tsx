import EnergyPage from "../../../components/energy/energyPage";

export default function EnergyCompare() {
    return <EnergyPage
        pageKey="compare"
        title="Strom & Gas Vergleich"
        intro={<>
            Wie hoch dein Strom- und Gaspreis ausfällt, hängt stark vom gewählten Anbieter ab. Wir vergleichen den Markt für dich und finden den Tarif, der zu deinem Verbrauch passt.
        </>}
        steps={[
            {
                icon: "mdi:numeric-1-circle-outline",
                title: "Verbrauch angeben",
                text: "Teile uns deine Jahresverbrauchswerte für Strom und/oder Gas mit. Kennst du sie nicht genau, schätzen wir gemeinsam anhand deiner Haushaltsgröße.",
            },
            {
                icon: "mdi:numeric-2-circle-outline",
                title: "PLZ und Wohnsituation",
                text: "Postleitzahl und Wohnsituation (Ein- oder Mehrfamilienhaus) fließen in den Vergleich mit ein, da Netzentgelte regional unterschiedlich sind.",
            },
            {
                icon: "mdi:numeric-3-circle-outline",
                title: "Angebot erhalten",
                text: "Wir vergleichen die verfügbaren Anbieter für dich und melden uns mit einer übersichtlichen Empfehlung.",
            },
        ]}
        benefits={[
            "Unabhängiger Vergleich mehrerer Anbieter",
            "Berücksichtigung von Fixkosten, Arbeitspreis und Vertragslaufzeit",
            "Persönliche Empfehlung statt anonymer Online-Rechner",
            "Wir kümmern uns auf Wunsch auch um den Wechsel",
        ]}
        ctaNote="Ich möchte meinen Strom-/Gastarif vergleichen lassen."
    />
}
