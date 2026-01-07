import Button from "../../../components/button";

export default function Homecredit() {
    return <div className="pt-30">
        <div className={`flex flex-col gap-10`}>
            <div className="bg-appGray rounded-2xl flex flex-col place-items-center sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
                <div className="flex-1 text-2xl sm:text-5xl text-left">
                    Maßgeschneiderte Finanzierungslösungen <span className="decoration-appPrimary underline underline-offset-8">für Ihre Träume</span>
                </div>
                <div className="flex-1">
                    <img src="/homecredit.webp" alt="Hauskredit" className="object-cover rounded-2xl shadow-xl" />
                </div>
            </div>

            <div className="flex place-content-center">
                <div className="p-5 sm:w-2/3 sm:text-xl leading-relaxed space-y-6">
                    <p>
                        <strong>Eine Immobilie ist meist die größte Investition Ihres Lebens.</strong><br />
                        Warum sollten Sie sich also mit dem erstbesten Angebot zufriedengeben?
                        Bei der <strong>OH GmbH</strong> finden wir nicht einfach nur einen Kredit –
                        wir finden das <strong>Finanzierungsmodell, das perfekt zu Ihrem Leben passt</strong>.
                    </p>

                    <p className="font-bold text-2xl">
                        Warum ein Vergleich den entscheidenden Unterschied macht
                    </p>

                    <p>
                        Der Weg zur Hausbank ist bequem, aber oft teuer.
                        Nur wer den gesamten Markt sondiert, sichert sich die besten Konditionen.
                        Als stolzer <strong>Infina Partner</strong> bieten wir Ihnen den entscheidenden Marktvorteil:
                    </p>

                    <ul className="list-disc pl-10 space-y-2">
                        <li>
                            <strong>Über 120 Banken &amp; Bausparkassen:</strong>
                            Wir vergleichen für Sie regional sowie überregional.
                        </li>
                        <li>
                            <strong>Über 600 Kreditmodelle:</strong>
                            Von klassischen Fixzinskrediten bis hin zu flexiblen Förderungsmodellen.
                        </li>
                        <li>
                            <strong>Größter unabhängiger Kreditvermittler:</strong>
                            Profitieren Sie von der Größe und dem Verhandlungsgeschick des österreichischen
                            Marktführers im Bereich der privaten Wohnbaufinanzierung.
                        </li>
                    </ul>

                    <p className="font-bold text-2xl">
                        Ihr Vorteil: Wir arbeiten für Sie, nicht für die Bank
                    </p>

                    <p>
                        Wir sind an <strong>keine Bank gebunden</strong>.
                        Unser einziges Ziel ist es, die <strong>beste Finanzierung</strong> für Sie bei der passenden Bank zu finden.
                        Dabei übernehmen wir die <strong>gesamte Abwicklung</strong> –
                        von der ersten Marktsondierung bis hin zur finalen Vertragsunterschrift.
                    </p>

                    <p>
                        <strong>Sparen Sie Zeit und bares Geld:</strong>
                        Wir wissen genau, welche Bank aktuell die attraktivsten Zinsen bietet und
                        welche Vergabekriterien für Ihre individuelle Situation am vorteilhaftesten sind.
                    </p>

                    <p className="font-bold text-2xl">
                        Unser Versprechen an Sie
                    </p>

                    <ul className="list-disc pl-10 space-y-2">
                        <li>
                            <strong>Unabhängigkeit:</strong> Wir vergleichen objektiv und transparent.
                        </li>
                        <li>
                            <strong>Expertise:</strong> Durch die Partnerschaft mit Infina greifen wir auf
                            jahrzehntelanges Know-how zurück.
                        </li>
                        <li>
                            <strong>Individualität:</strong> Keine Standardlösungen, sondern ein Finanzierungskonzept,
                            das mit Ihrer Zukunftsplanung harmoniert.
                        </li>
                    </ul>

                    <p className="font-semibold text-lg">
                        Bereit für den Zins-Check?
                        <strong> Lassen Sie uns gemeinsam herausfinden, wie viel Sie bei Ihrer Finanzierung sparen können.</strong>
                    </p>
                </div>
            </div>


            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt unverbindliches Beratungsgespräch vereinbaren" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}