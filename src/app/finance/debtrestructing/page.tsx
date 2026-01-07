import Button from "../../../components/button";

export default function DebtRestructing() {
    return <div className="pt-30">
        <div className={`flex flex-col gap-10`}>
            <div className="bg-appGray rounded-2xl flex flex-col place-items-center sm:flex-row gap-5 px-10 py-5 sm:py-20 sm:p-20 sm:mx-10">
                <div className="flex-1 text-2xl sm:text-5xl text-left">
                    Altkredite prüfen und <span className="decoration-appPrimary underline underline-offset-8">Zinskosten senken</span>
                </div>
                <div className="flex-1">
                    <img src="/debtrestructing.webp" alt="Umschuldung" className="object-cover rounded-2xl shadow-xl" />
                </div>
            </div>

            <div className="flex place-content-center">
                <div className="p-5 sm:w-2/3 sm:text-xl leading-relaxed space-y-6">
                    <p>
                        <strong>Haben Sie Ihren laufenden Kredit vor einigen Jahren abgeschlossen?</strong><br />
                        Dann zahlen Sie sehr wahrscheinlich zu viel. Der Finanzmarkt ist ständig in Bewegung –
                        und was gestern ein gutes Angebot war, ist heute oft teuer.
                    </p>

                    <p className="font-bold text-2xl">
                        Warum sich eine Umschuldung jetzt für Sie lohnt
                    </p>

                    <p>
                        Eine <strong>Umschuldung</strong> bedeutet nichts anderes, als einen bestehenden, teuren Kredit
                        durch ein neues Darlehen zu deutlich besseren Konditionen zu ersetzen.
                        Oft lassen sich dadurch die <strong>monatlichen Raten senken</strong> oder die
                        <strong>Laufzeit verkürzen</strong>.
                    </p>

                    <div>
                        <p className="font-bold text-xl mb-2">
                            Ihre Vorteile mit der OH GmbH
                        </p>

                        <ul className="list-disc pl-10 space-y-2">
                            <li>
                                <strong>Zinsersparnis:</strong> Wir prüfen, ob aktuelle Marktzinsen deutlich unter Ihrem laufenden Zinssatz liegen.
                            </li>
                            <li>
                                <strong>Ratenoptimierung:</strong> Wir passen die monatliche Belastung an Ihre aktuelle Lebenssituation an.
                            </li>
                            <li>
                                <strong>Alles aus einer Hand:</strong> Als Infina Partner vergleichen wir über
                                <strong> 600 Kreditmodelle</strong>, um die optimale Ablöse für Ihren Altkredit zu finden.
                            </li>
                            <li>
                                <strong>Bessere Konditionen:</strong> Wir verhandeln für Sie mit über
                                <strong> 120 Banken</strong>, um die beste Anschlussfinanzierung zu sichern.
                            </li>
                        </ul>
                    </div>

                    <p className="font-bold text-2xl">
                        Unser kostenloser Umschuldungs-Check
                    </p>

                    <p>
                        Wir analysieren Ihren bestehenden Vertrag und berechnen <strong>schwarz auf weiß</strong>,
                        wie viel Euro Sie durch einen Wechsel sparen können.
                        Oft sind das über die restliche Laufzeit hinweg <strong>viele tausend Euro</strong>.
                    </p>

                    <p>
                        <strong>Wichtig zu wissen:</strong> Auch wenn eine Vorfälligkeitsentschädigung anfällt,
                        lohnt sich der Wechsel in den meisten Fällen durch die langfristige Zinsersparnis dennoch.
                        <strong>Wir rechnen für Sie nach!</strong>
                    </p>

                    <p className="font-semibold">
                        Lassen Sie Ihr Geld nicht bei der Bank liegen.
                        Senden Sie uns einfach Ihre Eckdaten, und wir prüfen
                        <strong> unverbindlich Ihr Sparpotenzial.</strong>
                    </p>
                </div>
            </div>

            <div className="sm:pt-10 flex flex-row place-content-center">
                <Button text="Jetzt Umschuldungs-Check anfordern" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
            </div>
        </div>
    </div>
}