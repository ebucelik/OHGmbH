import Button from "../../../components/button";
import { defaultPadding } from "../../../shared/style";

export default function DebtRestructing() {
    return <div className="pt-30">
        <div className={`${defaultPadding} flex flex-col gap-10`}>
            <div className="text-2xl sm:text-5xl text-left">
                Altkredite prüfen und <span className="decoration-appPrimary underline underline-offset-8">Zinskosten senken</span>
            </div>

            <div className="p-5 sm:text-xl">
                Haben Sie Ihren laufenden Kredit vor einigen Jahren abgeschlossen? Dann zahlen Sie sehr wahrscheinlich zu viel. Der Finanzmarkt ist ständig in Bewegung – und was gestern ein gutes Angebot war, ist heute oft teuer.

                Warum sich eine Umschuldung jetzt für Sie lohnt
                Eine Umschuldung bedeutet nichts anderes, als einen bestehenden, teuren Kredit durch ein neues Darlehen zu deutlich besseren Konditionen zu ersetzen. Oft lassen sich dadurch die monatlichen Raten senken oder die Laufzeit verkürzen.

                <div>
                    <br />
                    <b>Ihre Vorteile mit der OH GmbH:</b>

                    <ul className="list-disc pl-10">
                        <li>
                            Zinsersparnis: Wir prüfen, ob aktuelle Marktzinsen deutlich unter Ihrem laufenden Zinssatz liegen.
                        </li>
                        <li>
                            Ratenoptimierung: Wir passen die monatliche Belastung an Ihre aktuelle Lebenssituation an.
                        </li>
                        <li>
                            Alles aus einer Hand: Als Infina Partner vergleichen wir über 600 Kreditmodelle, um die optimale Ablöse für Ihren Altkredit zu finden.
                        </li>
                        <li>
                            Bessere Konditionen: Wir verhandeln für Sie mit über 120 Banken, um die beste Anschlussfinanzierung zu sichern.
                        </li>
                    </ul>
                    <br />
                </div>

                Unser kostenloser Umschuldungs-Check
                Wir analysieren Ihren bestehenden Vertrag und berechnen schwarz auf weiß, wie viel Euro Sie durch einen Wechsel sparen können. Oft sind das über die restliche Laufzeit hinweg viele tausend Euro.

                Wichtig zu wissen: Auch wenn eine Vorfälligkeitsentschädigung anfällt, lohnt sich der Wechsel in den meisten Fällen durch die langfristige Zinsersparnis dennoch. Wir rechnen für Sie nach!

                Lassen Sie Ihr Geld nicht bei der Bank liegen. Senden Sie uns einfach Ihre Eckdaten, und wir prüfen unverbindlich Ihr Sparpotenzial.
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt Umschuldungs-Check anfordern" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}