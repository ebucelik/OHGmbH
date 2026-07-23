import EnergyPage from "../../../components/energy/energyPage";

export default function EnergySwitch() {
    return <EnergyPage
        pageKey="switch"
        title="Anbieterwechsel"
        intro={<>
            Der Wechsel des Strom- oder Gasanbieters ist in Österreich gesetzlich geregelt: Die Versorgung wird dabei nicht unterbrochen, und der Netzbetreiber bleibt unabhängig vom gewählten Lieferanten immer derselbe. Wir übernehmen die Abwicklung für dich.
        </>}
        steps={[
            {
                icon: "mdi:numeric-1-circle-outline",
                title: "Neuen Tarif auswählen",
                text: "Gemeinsam finden wir den passenden neuen Anbieter für dich - egal ob über den Tarifvergleich oder direkt nach deinen Wünschen.",
            },
            {
                icon: "mdi:numeric-2-circle-outline",
                title: "Vollmacht erteilen",
                text: "Du gibst uns eine Vollmacht, damit wir die Kündigung beim bisherigen Anbieter und die Anmeldung beim neuen für dich erledigen können.",
            },
            {
                icon: "mdi:numeric-3-circle-outline",
                title: "Zurücklehnen",
                text: "Wir kümmern uns um die komplette Abwicklung. Du musst nichts weiter tun, bis der Wechsel abgeschlossen ist.",
            },
        ]}
        benefits={[
            "Keine Unterbrechung der Strom- oder Gasversorgung während des Wechsels",
            "Der Netzbetreiber bleibt unabhängig vom Lieferanten gleich",
            "Wir übernehmen Kündigung und Anmeldung für dich",
            "Kein Papierkram - wir halten dich nur über den Fortschritt informiert",
        ]}
        ctaNote="Ich möchte meinen Strom-/Gasanbieter wechseln."
    />
}
