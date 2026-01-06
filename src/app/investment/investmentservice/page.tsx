import Button from "../../../components/button";
import { defaultPadding } from "../../../shared/style";

export default function InvestmentService() {
    return <div className="pt-30">
        <div className={`${defaultPadding} flex flex-col gap-10`}>
            <div className="text-2xl sm:text-5xl text-left">
                Ihr Kapital intelligent <span className="decoration-appPrimary underline underline-offset-8">für Sie</span> arbeiten lassen
            </div>

            <div className="p-5 sm:text-xl">
                Erfolgreicher Vermögensaufbau ist keine Magie, sondern folgt einer klaren Logik. Bei der OH GmbH unterstützen wir Sie dabei, Ihr Kapital strategisch zu vermehren, während Sie sich entspannt zurücklehnen können.

                Die Formel für Ihren Erfolg
                Die Rechnung für optimalen Vermögensaufbau ist simpel, aber effektiv:

                <b>Kapital × Zeit = Ertrag</b>

                Je nachdem, welchen Zeithorizont Sie mitbringen, wählen wir die passende Anlagestrategie. Ob kurzfristiger Liquiditätspuffer, mittelfristige Anschaffungen oder die langfristige Altersvorsorge – wir passen das Risiko und die Renditechancen exakt auf Ihre Lebensplanung an.

                Aktives Management bei voller Flexibilität
                Märkte verändern sich.

                <div>
                    <br />
                    <b>Deshalb bieten wir Ihnen ein aktiv gemanagtes Portfolio. Das bedeutet für Sie:</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Reaktion statt Stillstand: Unsere Experten beobachten die Märkte und schichten bei Bedarf um, um Chancen zu nutzen und Risiken zu minimieren.
                        </li>
                        <li>
                            Flexibilität: Trotz professioneller Verwaltung bleiben Sie flexibel. Ihr Kapital soll für Sie arbeiten, aber im Bedarfsfall zugänglich bleiben.
                        </li>
                        <li>
                            Der Steuer-Vorteil: Mehr Netto vom Brutto
                            Ein entscheidender Faktor bei jeder Geldanlage sind die Abzüge. Die Kapitalertragssteuer (KESt) kann einen erheblichen Teil Ihrer Rendite auffressen.
                        </li>
                        <li>
                            Hier setzen wir an: Wir bieten Ihnen spezielle Lösungen, um die Kapitalertragssteuer bei Ihrem Investment legal zu vermeiden. Durch intelligente Strukturen sorgen wir dafür, dass der Zinseszins-Effekt voll ausgeschöpft wird und mehr von Ihrem Gewinn direkt in Ihrem Vermögensaufbau verbleibt.
                        </li>
                    </ul>
                    <br />
                </div>

                <div>
                    <br />
                    <b>Warum Investment Service über die OH GmbH?</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Individuelle Strategie: Abgestimmt auf Ihren persönlichen Zeithorizont.
                        </li>
                        <li>
                            Expertise: Aktive Steuerung statt passives Abwarten.
                        </li>
                        <li>
                            Steueroptimierung: Maximierung der Rendite durch intelligente Gestaltung.
                        </li>
                        <li>
                            Transparenz: Sie behalten jederzeit den Überblick über Ihre Wertentwicklung.
                        </li>
                    </ul>
                    <br />
                </div>

                Zeit ist Ihr wertvollster Faktor beim Investieren. Beginnen Sie lieber heute als morgen, die Kraft des Zinseszinses für sich zu nutzen. Lassen Sie uns gemeinsam Ihr Portfolio optimieren.
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt kostenloses Investment-Gespräch buchen" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}