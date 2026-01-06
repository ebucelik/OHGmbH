import Button from "../../../components/button";
import { defaultPadding } from "../../../shared/style";

export default function Homecredit() {
    return <div className="pt-30">
        <div className={`${defaultPadding} flex flex-col gap-10`}>
            <div className="text-2xl sm:text-5xl text-left">
                Maßgeschneiderte Finanzierungslösungen <span className="decoration-appPrimary underline underline-offset-8">für Ihre Träume</span>
            </div>

            <div className="p-5 sm:text-xl">
                Eine Immobilie ist meist die größte Investition Ihres Lebens. Warum sollten Sie sich also mit dem erstbesten Angebot zufriedengeben? Bei der OH GmbH finden wir nicht einfach nur einen Kredit – wir finden das Finanzierungsmodell, das perfekt zu Ihrem Leben passt.

                Warum ein Vergleich den entscheidenden Unterschied macht
                Der Weg zur Hausbank ist bequem, aber oft teuer. Nur wer den gesamten Markt sondiert, sichert sich die besten Konditionen. Als stolzer Infina Partner bieten wir Ihnen den entscheidenden Marktvorteil:

                Über 120 Banken & Bausparkassen: Wir vergleichen für Sie regional sowie überregional.

                Über 600 Kreditmodelle: Von klassischen Fixzinskrediten bis hin zu flexiblen Förderungsmodellen.

                Größter unabhängiger Kreditvermittler: Profitieren Sie von der Größe und dem Verhandlungsgeschick des österreichischen Marktführers im Bereich der privaten Wohnbaufinanzierung.

                Ihr Vorteil: Wir arbeiten für Sie, nicht für die Bank
                Wir sind an keine Bank gebunden. Unser einziges Ziel ist es, die beste Finanzierung für Sie bei der passenden Bank zu finden. Dabei übernehmen wir die gesamte Abwicklung – von der ersten Marktsondierung bis hin zur finalen Vertragsunterschrift.

                Sparen Sie Zeit und bares Geld: Wir wissen genau, welche Bank aktuell die attraktivsten Zinsen bietet und welche Vergabekriterien für Ihre individuelle Situation am vorteilhaftesten sind.

                Unser Versprechen an Sie
                Unabhängigkeit: Wir vergleichen objektiv und transparent.

                Expertise: Durch die Partnerschaft mit Infina greifen wir auf jahrzehntelanges Know-how zurück.

                Individualität: Keine Standardlösungen, sondern ein Finanzierungskonzept, das mit Ihrer Zukunftsplanung harmoniert.

                Bereit für den Zins-Check? Lassen Sie uns gemeinsam herausfinden, wie viel Sie bei Ihrer Finanzierung sparen können.
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt unverbindliches Beratungsgespräch vereinbaren" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}