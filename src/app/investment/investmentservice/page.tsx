import Button from "../../../components/button";

export default function InvestmentService() {
    return <div className="pt-30">
        <div className={`flex flex-col gap-10`}>
            <div className="bg-appGray rounded-2xl flex flex-col place-items-center sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
                <div className="flex-1 text-2xl sm:text-5xl text-left">
                    Ihr Kapital intelligent <span className="decoration-appPrimary underline underline-offset-8">für Sie</span> arbeiten lassen
                </div>
                <div className="flex-1">
                    <img src="/investmentservice.webp" alt="Investment Service" className="object-cover rounded-2xl shadow-xl" />
                </div>
            </div>

            <div className="flex place-content-center">
                <div className="p-5 sm:w-2/3 sm:text-xl leading-relaxed space-y-6">
                    <p>
                        <strong>Erfolgreicher Vermögensaufbau ist keine Magie, sondern folgt einer klaren Logik.</strong><br />
                        Bei der <strong>OH GmbH</strong> unterstützen wir Sie dabei, Ihr Kapital strategisch zu vermehren,
                        während Sie sich entspannt zurücklehnen können.
                    </p>

                    <p className="font-bold text-2xl">
                        Die Formel für Ihren Erfolg
                    </p>

                    <p>
                        Die Rechnung für optimalen Vermögensaufbau ist simpel, aber effektiv:
                    </p>

                    <p className="text-2xl font-bold text-center">
                        Kapital × Zeit = Ertrag
                    </p>

                    <p>
                        Je nachdem, welchen <strong>Zeithorizont</strong> Sie mitbringen, wählen wir die passende Anlagestrategie.
                        Ob kurzfristiger <strong>Liquiditätspuffer</strong>, mittelfristige Anschaffungen oder die
                        langfristige <strong>Altersvorsorge</strong> – wir passen Risiko und Renditechancen
                        exakt an Ihre Lebensplanung an.
                    </p>

                    <p className="font-bold text-2xl">
                        Aktives Management bei voller Flexibilität
                    </p>

                    <p>
                        <strong>Märkte verändern sich.</strong>
                        Deshalb setzen wir auf ein <strong>aktiv gemanagtes Portfolio</strong>.
                    </p>

                    <div>
                        <p className="font-semibold text-xl mb-2">
                            Das bedeutet für Sie:
                        </p>

                        <ul className="list-disc pl-10 space-y-3">
                            <li>
                                <strong>Reaktion statt Stillstand:</strong>
                                Unsere Experten beobachten die Märkte kontinuierlich und schichten bei Bedarf um,
                                um Chancen zu nutzen und Risiken zu minimieren.
                            </li>
                            <li>
                                <strong>Volle Flexibilität:</strong>
                                Trotz professioneller Verwaltung bleibt Ihr Kapital zugänglich –
                                es arbeitet für Sie, ohne Sie einzuschränken.
                            </li>
                            <li>
                                <strong>Der Steuer-Vorteil – mehr Netto vom Brutto:</strong>
                                Die Kapitalertragssteuer (KESt) kann einen erheblichen Teil Ihrer Rendite auffressen.
                            </li>
                            <li>
                                <strong>Hier setzen wir an:</strong>
                                Durch intelligente, <strong>legale Strukturen</strong> vermeiden wir unnötige Steuerabzüge,
                                maximieren den <strong>Zinseszins-Effekt</strong> und sorgen dafür,
                                dass mehr von Ihrem Gewinn direkt in Ihrem Vermögensaufbau verbleibt.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold text-2xl mb-2">
                            Warum Investment Service über die OH GmbH?
                        </p>

                        <ul className="list-disc pl-10 space-y-2">
                            <li>
                                <strong>Individuelle Strategie:</strong> Abgestimmt auf Ihren persönlichen Zeithorizont.
                            </li>
                            <li>
                                <strong>Expertise:</strong> Aktive Steuerung statt passives Abwarten.
                            </li>
                            <li>
                                <strong>Steueroptimierung:</strong> Maximierung der Rendite durch intelligente Gestaltung.
                            </li>
                            <li>
                                <strong>Transparenz:</strong> Sie behalten jederzeit den Überblick über Ihre Wertentwicklung.
                            </li>
                        </ul>
                    </div>

                    <p className="font-semibold text-lg">
                        Zeit ist Ihr wertvollster Faktor beim Investieren.
                        Beginnen Sie lieber heute als morgen, die Kraft des Zinseszinses für sich zu nutzen.
                        <br />
                        <strong>Lassen Sie uns gemeinsam Ihr Portfolio optimieren.</strong>
                    </p>
                </div>
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt kostenloses Investment-Gespräch buchen" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}