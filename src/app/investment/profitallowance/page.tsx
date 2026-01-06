import Button from "../../../components/button";
import { defaultPadding } from "../../../shared/style";

export default function ProfitAllowance() {
    return <div className="pt-30">
        <div className={`${defaultPadding} flex flex-col gap-10`}>
            <div className="text-2xl sm:text-5xl text-left">
                Steuern sparen und <span className="decoration-appPrimary underline underline-offset-8">Vermögen aufbauen</span>
            </div>

            <div className="p-5 sm:text-xl">
                Für Unternehmer, Selbstständige und Freiberufler ist der Gewinnfreibetrag (GFB) eines der effektivsten Instrumente zur Steueroptimierung. Er bietet Ihnen die Möglichkeit, einen Teil Ihres Gewinns steuerfrei zu stellen, sofern dieser investiert wird.

                <div>
                    <br />
                    <b>Dazu zählen beispielsweise folgende Personengruppen:</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Unternehmer mit Einkünften aus Gewerbebetrieb
                        </li>
                        <li>
                            Land- und Forstwirte
                        </li>
                        <li>
                            Steuerberater, Zivilingenieure, Rechtsanwälte, Ärzte, Architekten oder Apotheker
                        </li>
                        <li>
                            Sportler
                        </li>
                        <li>
                            Geschäftsführende Gesellschafter einer GmbH (&gt; 25% Anteil)
                        </li>
                        <li>
                            Aufsichtsräte, Stiftungs- und Vereinsvorstände
                        </li>
                        <li>
                            ...& du im aktuellen Geschäftsjahr über 33.000 EUR Gewinn erzielst.
                        </li>
                    </ul>
                    <br />
                </div>

                <b>So funktioniert Ihr Steuervorteil</b>
                Das Finanzamt erlaubt es Ihnen, bis zu 15 % Ihres Gewinns steuerlich geltend zu machen. Während der Grundfreibetrag bis zu einem Gewinn von 33.000 € automatisch berücksichtigt wird, benötigen Sie für Gewinne darüber hinaus den investitionsbedingten Gewinnfreibetrag.

                Das bedeutet für Sie: Investieren Sie in begünstigte Wirtschaftsgüter oder Wertpapiere, reduziert dies direkt Ihren zu versteuernden Gewinn. Sie wandeln somit eine potenzielle Steuerzahlung in privates Vermögen um.

                <div>
                    <br />
                    <b>Warum Sie hier auf die OH GmbH setzen sollten:</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Passgenaue Lösungen: Wir finden die für den Gewinnfreibetrag zugelassenen Investments, die zu Ihrem Risikoprofil passen.
                        </li>
                        <li>
                            Aktives Fristenmanagement: Wir achten darauf, dass die Behaltefrist von 4 Jahren eingehalten wird, damit Ihr Steuervorteil dauerhaft gesichert bleibt.
                        </li>
                        <li>
                            Maximale Steuerersparnis: Wir berechnen gemeinsam mit Ihrem Steuerberater die optimale Investitionssumme, um Ihre Steuerlast auf ein Minimum zu senken.
                        </li>
                        <li>
                            Der Effekt: Investieren statt Steuern zahlen
                            Anstatt einen beträchtlichen Teil Ihres hart erarbeiteten Gewinns an das Finanzamt abzuführen, investieren Sie dieses Geld in Ihre eigene Zukunft. Nach Ablauf der Behaltefrist steht Ihnen das Kapital samt erwirtschafteter Rendite zur freien Verfügung.
                        </li>
                    </ul>
                    <br />
                </div>

                <b>Achtung – Stichtag 31.12.:</b> Der Gewinnfreibetrag muss noch im laufenden Kalenderjahr investiert werden. Wer zu spät kommt, verschenkt bares Geld an den Fiskus.

                <br />
                <br />

                Nutzen Sie Ihr Privileg als Unternehmer.

                <br />
                <br />

                <b>Praxisbeispiel:</b> So viel sparen Sie durch den Gewinnfreibetrag.
                <br />
                Angenommen, Sie erzielen als Unternehmer einen Gewinn von 100.000 € vor Steuern. Wir vergleichen die Situation ohne und mit Nutzung des investitionsbedingten Gewinnfreibetrag (GFB).

                <div className="py-10 overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                    Posten
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                    Ohne Investition
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                    Mit OH Investment-Strategie
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3">Jahresgewinn</td>
                                <td className="px-4 py-3">100.000 €</td>
                                <td className="px-4 py-3">100.000 €</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Grundfreibetrag (automatisch)</td>
                                <td className="px-4 py-3">4.950 € (15 % von 33.000 €)</td>
                                <td className="px-4 py-3">4.950 €</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Investitionsbedingter GFB</td>
                                <td className="px-4 py-3">0 €</td>
                                <td className="px-4 py-3">10.050 € (investiert in Wertpapiere)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Steuerpflichtiger Gewinn</td>
                                <td className="px-4 py-3 font-medium">95.050 €</td>
                                <td className="px-4 py-3 font-medium">85.000 €</td>
                            </tr>
                            <tr className="bg-green-50">
                                <td className="px-4 py-3 font-semibold text-green-700">
                                    Steuerersparnis (ca. 42 % Grenzsteuer)
                                </td>
                                <td className="px-4 py-3">0 €</td>
                                <td className="px-4 py-3 font-semibold text-green-700">
                                    ca. 4.220 € gespart!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                Das Ergebnis für Ihr Vermögen:
                <br />
                In diesem Beispiel haben Sie 10.050 € in Ihr eigenes Portfolio investiert, anstatt sie voll zu versteuern. Das Finanzamt "beteiligt" sich an diesem Vermögensaufbau mit über 4.200 €, die Sie ansonsten als Einkommensteuer hätten abführen müssen. <b>Ihr Vorteil:</b> Nach der gesetzlichen Behaltefrist von 4 Jahren gehört Ihnen das gesamte Kapital plus die erwirtschaftete Rendite – steueroptimiert und sicher.

                <div>
                    <br />
                    <b>Was wir für Sie tun:</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Bedarfsanalyse: Wie viel können Sie dieses Jahr maximal steuerfrei stellen?
                        </li>
                        <li>
                            Produktauswahl: Welche GFB-tauglichen Wertpapiere bieten aktuell die besten Chancen?
                        </li>
                        <li>
                            Abwicklung: Wir erledigen den Papierkram, damit Sie sich auf Ihr Business konzentrieren können.
                        </li>
                        <li>
                            Der Effekt: Investieren statt Steuern zahlen
                            Anstatt einen beträchtlichen Teil Ihres hart erarbeiteten Gewinns an das Finanzamt abzuführen, investieren Sie dieses Geld in Ihre eigene Zukunft. Nach Ablauf der Behaltefrist steht Ihnen das Kapital samt erwirtschafteter Rendite zur freien Verfügung.
                        </li>
                    </ul>
                    <br />
                </div>

                <br />
                Warten Sie nicht bis zum Jahresende – sichern Sie sich Ihren Steuervorteil rechtzeitig!
                <br />
                <br />

                <b>Technischer Hinweis zur Aktualität</b>
                <br />
                Stand der Berechnungen: Die oben genannten Rechenbeispiele und Prozentsätze basieren auf der aktuellen Gesetzeslage für das Veranlagungsjahr 2025. Bitte beachten Sie, dass sich Steuergesetze, Freibeträge und Grenzsteuersätze durch gesetzliche Neuregelungen jederzeit ändern können. Eine verbindliche Auskunft über Ihre individuelle Steuerersparnis kann nur auf Basis Ihrer aktuellen Einkommensdaten und in Abstimmung mit Ihrem Steuerberater erfolgen.
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt kostenloses Beratungs-Gespräch vereinbaren" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}