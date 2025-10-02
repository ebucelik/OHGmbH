import HCarousel from "../components/hcarousel";
import Button from "../components/button";

export default function Home() {
  const insuranceNames = [
    "allianz",
    "acredia",
    "apk-versicherung",
    "donau",
    "ergo",
    "garanta",
    "generali",
    "hdi",
    "helvetia",
    "muki",
    "roland",
    "swisslife",
    "uniqa",
    "vig",
    "wstv",
    "wustenrot",
    "zurich"
  ];

  return (
    <div className="mxauto">
      <div className="mx-5 sm:mx-10 sm:flex sm:flex-row fade-up-1s">
        <div className="flex-1 content-center sm:pl-15">
          <div className="flex flex-col">
            <p className="text-4xl sm:text-8xl font-serif">
              Stets an
            </p>
            <p className="text-4xl sm:text-8xl font-serif">
              deiner Seite.
            </p>
            <p className="text-lg sm:text-2xl pt-5">
              Dein unabhängiger Versicherungsmakler -
            </p>
            <p className="text-lg sm:text-2xl">
              sicher und zuverlässig.
            </p>

            <Button text="Jetzt Termin vereinbaren" className="my-5 sm:mt-20" isPrimary={true} />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/haraldotto3.webp" alt="Harald Otto am Arbeiten"
            className="object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <HCarousel leadingTitle="Unsere Partner" items={
        insuranceNames.map(
          (item, index) => (
            <li key={index}>
              <img src={item + `-logo.svg`} className="w-10 sm:w-32" />
            </li>
          )
        )
      } />

      <div className="px-5 sm:px-10 w-full bg-linear-to-b from-white via-appPrimary to-white content-center">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-lg sm:text-4xl text-black">
          <div className="sm:hidden font-serif">
            <div className="flex flex-row place-items-baseline">
              <div className="text-2xl sm:text-5xl">
                L
              </div>
              <div>
                angjährige Erfahrung,
              </div>
            </div>
            <div>
              unabhängige Marktübersicht,
            </div>
            <div>
              und maßgeschneiderte Lösungen.
            </div>
          </div>

          <div className="flex-1 content-center">
            <img className="rounded-2xl shadow-lg"
              src="/insurance1.svg"
              alt="Langjährige Erfahrung in Versicherungen"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5 justify-center">
            <div className="hidden sm:block font-serif">
              <div className="flex flex-row place-items-baseline">
                <div className="text-2xl sm:text-5xl">
                  L
                </div>
                <div>
                  angjährige Erfahrung,
                </div>
              </div>
              <div>
                unabhängige Marktübersicht,
              </div>
              <div>
                und maßgeschneiderte Lösungen.
              </div>
            </div>
            <div className="text-sm sm:text-xl">
              Seit vielen Jahren begleiten wir unsere Kundinnen und Kunden bei allen Fragen rund um Versicherungen.
              Dabei setzen wir nicht auf Standardlösungen, sondern auf persönliche Beratung und eine unabhängige Marktübersicht.
              Das bedeutet: Wir vergleichen Angebote zahlreicher Versicherer und wählen gemeinsam mit dir jene Lösung aus, die wirklich zu deinem Leben passt.
              So erhältst du eine Absicherung, die transparent, fair und auf deine individuellen Bedürfnisse zugeschnitten ist.
            </div>

            <Button text="Unser Team kontaktieren" className="my-5 sm:mt-10" isPrimary={false} />
          </div>
        </div>
      </div>

      <div className="py-15 sm:py-25 px-5 sm:px-10 w-full">
        <div className="text-2xl sm:text-5xl text-center font-serif">
          Es bleibt nicht nur bei Versicherungen.
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly gap-5 sm:gap-5 my-15">
          <div className="bg-linear-to-t from-appPrimary to-white rounded-xl shadow-lg hover:scale-101 duration-500">
            <div className="relative">
              <img src="/electric.webp" alt="Strom und Gas Bild" className="w-full rounded-t-xl" />

              <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                Strom und Gas
              </div>
            </div>
            <div className="p-5">
              <div>
                <b className="text-lg sm:text-xl">Wir finden den besten Tarif für Sie.</b>
                <p className="pt-2">
                  Energie ist ein wichtiger Kostenfaktor im Alltag. Doch die Preisunterschiede zwischen den Anbietern sind oft enorm.
                  Genau hier setzen wir an:
                </p>
                <ul className="list-disc pl-5 py-1.5">
                  <li>
                    <b>
                      Unabhängiger Vergleich:
                    </b> Wir durchsuchen für Sie über 100 Strom- und Gasanbieter.
                  </li>
                  <li>
                    <b>
                      Transparenz & Fairness:
                    </b> Sie sehen auf einen Blick, welche Tarife wirklich zu Ihrem Verbrauch passen.
                  </li>
                  <li>
                    <b>
                      Einfacher Wechsel:
                    </b> Wir kümmern uns um die Abwicklung, Sie sparen Zeit und Geld.
                  </li>
                </ul>
                <p>
                  Ob Haushalt oder Unternehmen - wir sorgen dafür, dass Sie <b>nicht mehr zahlen als nötig</b>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-t from-appPrimary to-white rounded-xl shadow-lg hover:scale-101 duration-500">
            <div className="relative">
              <img src="/finance.webp" alt="Finanzierung Bild" className="w-full rounded-t-xl" />

              <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                Finanzierungen
              </div>
            </div>
            <div className="p-5">
              <div>
                <b className="text-lg sm:text-xl">Maßgeschneidert für Ihre Bedürfnisse.</b>
                <p className="pt-2">
                  Als unabhängiger Vermittler greifen wir auf <b>über 120 Banken in ganz Österreich</b> zu und können dadurch für Sie die besten Konditionen vergleichen.
                </p>
                <ul className="list-disc pl-5 py-1.5">
                  <li>
                    <b>
                      Individuelle Beratung:
                    </b> Wir finden gemeinsam heraus, welche Finanzierungslösung zu Ihrer Situation passt.
                  </li>
                  <li>
                    <b>
                      Große Auswahl:
                    </b> Dank unseres Zugriffs auf mehr als 120 Banken haben wir Zugriff auf ein breites Angebot.
                  </li>
                  <li>
                    <b>
                      Beste Konditionen:
                    </b> Durch den Vergleich sichern wir Ihnen attraktive Zinsen und faire Vertragsbedingungen.
                  </li>
                </ul>
                <p>
                  So kommen Sie sicher zu Ihrer Wunschfinanzierung - ob für Immobilien, Investitionen oder private Projekte.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-t from-appPrimary to-white rounded-xl shadow-lg hover:scale-101 duration-500">
            <div className="relative">
              <img src="/consulting.webp" alt="Strom und Gas Bild" className="w-full rounded-t-xl" />

              <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                Persönliche Beratung
              </div>
            </div>
            <div className="p-5">
              <div>
                <b className="text-lg sm:text-xl">Alles aus einer Hand.</b>
                <p className="pt-2">
                  Wir bieten Ihnen eine umfassende und unabhängige Beratung in allen wichtigen Bereichen:
                </p>
                <ul className="list-disc pl-5 py-1.5">
                  <li>
                    <b>
                      Autoversicherung:
                    </b> Wir finden für Sie die passende Versicherung mit optimalem Schutz und fairen Prämien.
                  </li>
                  <li>
                    <b>
                      Strom & Gas:
                    </b> Über 100 Anbieter im Vergleich - damit Sie nie mehr zahlen als nötig.
                  </li>
                  <li>
                    <b>
                      Weitere Versicherungen & Services:
                    </b> Ob Haushalt, Gesundheit oder Vorsorge - wir beraten Sie ganzheitlich..
                  </li>
                </ul>
                <p>
                  Mit uns haben Sie einen Partner, der <b>alles vergleicht, für Sie auswählt und verständlich erklärt</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center place-items-center gap-5">
          <div className="text-sm sm:text-xl text-center">
            Haben wir Ihre Interesse geweckt?
          </div>
          <Button text="Kontaktiere Uns" isPrimary={false} />
        </div>
      </div>

      <div className="py-15 sm:py-25 mb-50 px-5 sm:px-10 w-full content-center">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 place-items-center">
          <div className="flex-1 text-2xl sm:text-5xl font-serif text-right">
            <div>
              Immer für Sie da,
            </div>
            <div>
              auch im <span className="decoration-appPrimary underline underline-offset-8">Ernstfall</span>.
            </div>
          </div>
          <div className="flex-1 text-sm sm:text-lg text-left">
            Unfälle und Schäden sind schon nervig genug - da braucht's keinen Papierkram-Stress obendrauf.
            Genau da kommen wir ins Spiel: Sie rufen uns an, und wir kümmern uns um den Rest.
            Ob Meldung, Abwicklung oder Diskussion mit der Versicherung - wir nehmen Ihnen den Aufwand ab.
            <br /><br />
            <b>Schnell, unkompliziert und mit einem Lächeln</b> - <br />
            damit Sie sich auf das Wesentliche konzentrieren können.
          </div>
        </div>
      </div>

      <div className="py-15 sm:py-25 px-5 sm:px-10 w-full h-screen bg-linear-to-b from-appPrimary via-appPrimary to-white">
        <div>
          <div className="pb-10 text-2xl sm:text-5xl text-left">
            Was tun bei <span className="decoration-white underline underline-offset-8">einem Schaden?</span>
          </div>

          <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:my-15 justify-evenly text-center text-lg sm:text-2xl font-bold">
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              1. Schaden melden

              <img src="/talk.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-xl" />
            </div>
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              <span className="sm:hidden">
                2. Unterlagen bereitstellen
              </span>

              <img src="/documents.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-xl" />

              <span className="hidden sm:block">
                2. Unterlagen bereitstellen
              </span>
            </div>
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              3. Zurücklehnen

              <img src="/chill.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
