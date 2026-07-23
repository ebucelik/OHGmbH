import EnergyPage from "../../../components/energy/energyPage";

export default function EnergyEco() {
    return <EnergyPage
        pageKey="eco"
        title="Öko-Tarife"
        intro={<>
            In Österreich muss jeder Stromanbieter offenlegen, aus welchen Energiequellen der gelieferte Strom stammt. Wir helfen dir, einen Tarif mit möglichst hohem Anteil an erneuerbaren Quellen zu finden - ohne dass du dich selbst durch alle Angebote wühlen musst.
        </>}
        steps={[
            {
                icon: "mdi:numeric-1-circle-outline",
                title: "Prioritäten festlegen",
                text: "Sag uns, worauf es dir ankommt: möglichst hoher Ökostrom-Anteil, ein bestimmtes Zertifikat oder ein regionaler Anbieter.",
            },
            {
                icon: "mdi:numeric-2-circle-outline",
                title: "Angebote prüfen",
                text: "Wir sehen uns die Stromkennzeichnung der verfügbaren Anbieter an und vergleichen Preis und Energiemix.",
            },
            {
                icon: "mdi:numeric-3-circle-outline",
                title: "Angebot erhalten",
                text: "Du bekommst eine Empfehlung, die zu deinen Vorstellungen und deinem Budget passt.",
            },
        ]}
        benefits={[
            "Berücksichtigung von Herkunftsnachweisen und Ökostrom-Zertifikaten",
            "Transparente Gegenüberstellung von Preis und Energiemix",
            "Manche Öko-Tarife kosten nicht mehr als konventionelle Tarife",
            "Persönliche Beratung statt anonymer Vergleichsportale",
        ]}
        ctaNote="Ich interessiere mich für einen Öko-Stromtarif."
    />
}
