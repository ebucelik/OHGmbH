import Link from "next/link";

export default function Agb() {
    return <div>
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-appPrimary mb-8">Allgemeine Geschäftsbedingungen (AGB)</h2>
            <p className="text-sm text-gray-500 mb-10">Stand: 19. November 2025</p>

            <div className="space-y-10 text-lg">

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h3>
                    <p>Die folgenden Allgemeinen Geschäftsbedingungen gelten für sämtliche Geschäftsbeziehungen zwischen der OH GmbH (nachfolgend „wir“ oder „OH GmbH“) und ihren Kunden, soweit nicht schriftlich etwas anderes vereinbart wurde. Entgegenstehende oder von diesen AGB abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, wir haben ihrer Geltung ausdrücklich schriftlich zugestimmt.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Vertragsgegenstand und Leistungsumfang</h3>
                    <p>Die OH GmbH erbringt als unabhängiger Versicherungsmakler und Vermögensberater folgende Dienstleistungen:</p>
                    <ul className="list-disc ml-8 mt-4 space-y-2">
                        <li>Vermittlung und Betreuung von Versicherungsverträgen</li>
                        <li>Beratung und Vermittlung von Finanzierungen</li>
                        <li>Anlage- und Vermögensberatung</li>
                        <li>Vergleich und Vermittlung von Strom- und Gastarifen</li>
                        <li>Unterstützung bei der Schadenabwicklung</li>
                    </ul>
                    <p className="mt-4">Wir verpflichten uns, im besten Interesse des Kunden zu handeln und transparente, individuelle Lösungen anzubieten.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Zustandekommen des Maklervertrages</h3>
                    <p>Der Maklervertrag kommt zustande, sobald der Kunde unser Beratungsangebot annimmt – sei es durch Unterzeichnung eines Maklervertrags, durch Erteilung eines Auftrags oder durch Inanspruchnahme unserer Leistungen.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Vergütung</h3>
                    <p>Unsere Tätigkeit als Versicherungsmakler wird in der Regel durch die jeweilige Versicherungsgesellschaft in Form von Courtagen vergütet. Für bestimmte Leistungen (z. B. Honorarberatung, ausführliche Finanz- oder Anlageplanung) kann ein gesondertes Honorar vereinbart werden. Über die Höhe und Art der Vergütung informieren wir Sie vor Vertragsabschluss transparent.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Datenschutz</h3>
                    <p>Die Verarbeitung personenbezogener Daten erfolgt ausschließlich nach Maßgabe der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Nähere Informationen entnehmen Sie bitte unserer <Link href="/dataprotection" className="text-appPrimary hover:underline hover:underline-offset-2">Datenschutzerklärung</Link>.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Haftung</h3>
                    <p>Wir haften uneingeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Die Haftung ist der Höhe nach auf den typischerweise vorhersehbaren Schaden begrenzt.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Widerrufsrecht</h3>
                    <p>Verbraucher haben bei außerhalb von Geschäftsräumen geschlossenen Verträgen und bei Fernabsatzverträgen ein Widerrufsrecht nach Maßgabe der gesetzlichen Bestimmungen. Die Widerrufsbelehrung wird Ihnen vor Vertragsschluss separat zur Verfügung gestellt.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Schlussbestimmungen</h3>
                    <p>Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der OH GmbH. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
                </section>

            </div>

            <div className="mt-16 pt-10 border-t border-gray-300 text-center text-sm text-gray-600">
                <p>OH GmbH · Harald Otto & Manuel Holzmann</p>
                <p>Vertreten durch: Harald Otto (Versicherungsmakler) & Manuel Holzmann (Vermögensberater)</p>
            </div>
        </main>
    </div>
}