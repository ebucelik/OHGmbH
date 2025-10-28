import HCarousel from "../components/hcarousel";
import Button from "../components/button";
import { radley } from "./layout";
import { defaultPadding } from "../shared/style";
import ParallaxComponent from "../components/parallaxComponent";
import TypedComponent from "../components/typedComponent";
import SliderComponent from "../components/sliderComponent";

export default function Home() {
  const customerReviews = [
    {
      "text": '„Super Service! Mein Stromtarif wurde in wenigen Tagen gewechselt und ich spare jetzt jedes Monat. Alles total unkompliziert.“',
      "name": "- Markus H., Leobersdorf"
    },
    {
      "text": '„Ich habe über 120 Banken nie selbst vergleichen müssen - das Team hat alles übernommen und für mich den besten Kredit rausgeholt. Top Beratung!“',
      "name": "- Sabine K., Wien"
    },
    {
      "text": '„Bei meinem Autounfall hat man mir sofort geholfen. Kein Papierkram, kein Stress - einfach anrufen und es läuft. Sehr empfehlenswert!“',
      "name": "- Thomas R., Baden"
    },
    {
      "text": '„Endlich jemand, der Versicherungen so erklärt, dass man es versteht. Ehrlich, freundlich und zuverlässig!“',
      "name": "- Petra M., Mödling"
    },
    {
      "text": '„Ich hatte das Gefühl, wirklich persönlich betreut zu werden. Man merkt, dass es hier nicht nur ums Geschäft geht, sondern um die Menschen.“',
      "name": "- Johann W., Wiener Neustadt"
    },
    {
      "text": '„Super Service! Mein Stromtarif wurde in wenigen Tagen gewechselt und ich spare jetzt jedes Monat. Alles total unkompliziert.“',
      "name": "- Markus H., Leobersdorf"
    },
    {
      "text": '„Ich habe über 120 Banken nie selbst vergleichen müssen - das Team hat alles übernommen und für mich den besten Kredit rausgeholt. Top Beratung!“',
      "name": "- Sabine K., Wien"
    },
    {
      "text": '„Bei meinem Autounfall hat man mir sofort geholfen. Kein Papierkram, kein Stress - einfach anrufen und es läuft. Sehr empfehlenswert!“',
      "name": "- Thomas R., Baden"
    },
    {
      "text": '„Endlich jemand, der Versicherungen so erklärt, dass man es versteht. Ehrlich, freundlich und zuverlässig!“',
      "name": "- Petra M., Mödling"
    },
    {
      "text": '„Ich hatte das Gefühl, wirklich persönlich betreut zu werden. Man merkt, dass es hier nicht nur ums Geschäft geht, sondern um die Menschen.“',
      "name": "- Johann W., Wiener Neustadt"
    }
  ]
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
    <div className="relative">
      <div className="absolute -z-10" style={{ paddingTop: '200px' }}>
        <img src="/bglogo.svg" className="opacity-15 object-cover overflow-hidden" />
      </div>

      <div>
        <ParallaxComponent
          translateYStart={-30}
          translateYEnd={20}
          opacityStart={2}
          opacityEnd={0}
          scaleStart={1.1}
          scaleEnd={0.8}
        >
          <div className="mx-5 sm:mx-10 sm:flex sm:flex-row fade-up-1s">
            <div className="flex-1 content-center sm:pl-15">
              <div className="flex flex-col">
                <p className={`text-5xl sm:text-8xl ${radley.className}`}>
                  Stets
                </p>

                <TypedComponent words={["an deiner Seite.", "für dich da.", "professionell.", "qualitativ.", "innovativ."]} className={`text-5xl sm:text-8xl ${radley.className}`} />

                <p className="text-lg sm:text-2xl pt-5">
                  Dein unabhängiger Makler für
                </p>
                <p className="text-lg sm:text-2xl">
                  Versicherungen, Finanzierungen, Investments & Energie -
                </p>
                <p className="text-lg sm:text-2xl">
                  sicher und zuverlässig.
                </p>

                <Button text="Jetzt Termin vereinbaren" className="my-5 sm:mt-20" isPrimary={true} />
              </div>
            </div>
            <div className="flex-1">
              <SliderComponent
                children={[
                  <div className="relative">
                    <img
                      src="/haraldotto3.webp" alt="Harald Otto"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Harald Otto
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Versicherungsmakler
                      </div>
                    </div>
                  </div>,
                  <div className="relative">
                    <img
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Manuel Holzmann
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Vermögensberater
                      </div>
                    </div>
                  </div>,
                  <div className="relative">
                    <img
                      src="/haraldotto3.webp" alt="Harald Otto"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Harald Otto
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Versicherungsberater
                      </div>
                    </div>
                  </div>,
                  <div className="relative">
                    <img
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Manuel Holzmann
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Vermögensberater
                      </div>
                    </div>
                  </div>,
                  <div className="relative">
                    <img
                      src="/haraldotto3.webp" alt="Harald Otto"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Harald Otto
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Versicherungsberater
                      </div>
                    </div>
                  </div>,
                  <div className="relative">
                    <img
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"
                      className="object-contain rounded-lg shadow-lg"
                    />
                    <div className="absolute p-3 sm:p-5 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                      <div className="text-lg sm:text-5xl font-bold">
                        Manuel Holzmann
                      </div>
                      <div className="text-xs sm:text-2xl">
                        Geschäftsführer & Vermögensberater
                      </div>
                    </div>
                  </div>
                ]}
              />
            </div>
          </div>

          <HCarousel
            leadingTitle="Unsere Partner"
            innerDivClassName="[&_li]:mx-1 sm:[&_li]:mx-2"
            items={
              insuranceNames.map(
                (item, index) => (
                  <li key={index}>
                    <img src={item + `-logo.svg`} className={`w-32 ${item == 'roland' ? 'bg-black' : ''}`} />
                  </li>
                )
              )
            } />
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} w-full bg-linear-to-b from-white via-appPrimary to-white content-center`}>
        <ParallaxComponent
          translateYStart={90}
          translateYEnd={-50}
          scaleStart={0.8}
          scaleEnd={1}
        >
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-lg sm:text-4xl text-black">
            <div className={`sm:hidden ${radley.className}`}>
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
              <div className={`hidden sm:block ${radley.className}`}>
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
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} w-full my-20 sm:my-0`}>
        <ParallaxComponent
          translateYStart={90}
          translateYEnd={-50}
          scaleStart={0.9}
          scaleEnd={1}
        >
          <div className="flex flex-col place-items-center gap-5 sm:gap-30">
            <ParallaxComponent
              translateYStart={0}
              translateYEnd={-50}
            >
              <div className={`text-4xl sm:text-7xl text-left ${radley.className}`}>
                Wir sind
              </div>
            </ParallaxComponent>
            <div className="flex flex-col text-2xl sm:text-5xl gap-1">
              <div className="grid grid-cols-2">
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-250}
                  >
                    <span className="text-appPrimary">O</span>ffen,
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-250}
                  >
                    <span className="text-appPrimary">H</span>erzlich.
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-200}
                  >
                    <span className="text-appPrimary">O</span>ffensiv,
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-200}
                  >
                    <span className="text-appPrimary">H</span>artnäckig.
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-150}
                  >
                    <span className="text-appPrimary">O</span>rganisiert,
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-150}
                  >
                    <span className="text-appPrimary">H</span>ilfsbereit.
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-100}
                  >
                    <span className="text-appPrimary">O</span>ptimal,
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-100}
                  >
                    <span className="text-appPrimary">H</span>erausragend.
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-50}
                  >
                    <span className="text-appPrimary">O</span>rdentlich,
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-50}
                  >
                    <span className="text-appPrimary">H</span>ochprofessionell.
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-25}
                  >
                    <span className="text-appPrimary font-bold">Otto,</span>
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    translateYStart={0}
                    translateYEnd={-25}
                  >
                    <span className="text-appPrimary font-bold">Holzmann.</span>
                  </ParallaxComponent>
                </div>
              </div>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} px-10 w-full`}>
        <ParallaxComponent
          translateYStart={90}
          translateYEnd={-50}
          scaleStart={0.9}
          scaleEnd={1}
        >
          <div className={`text-2xl sm:text-5xl text-center ${radley.className}`}>
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
                <b className="text-lg sm:text-xl">Wir finden den besten Tarif für Sie.</b>

                <ul className="list-disc pl-5 py-1.5 pt-2">
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

            <div className="bg-linear-to-t from-appPrimary to-white rounded-xl shadow-lg hover:scale-101 duration-500">
              <div className="relative">
                <img src="/finance.webp" alt="Finanzierung Bild" className="w-full rounded-t-xl" />

                <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                  Finanzierungen
                </div>
              </div>
              <div className="p-5">
                <b className="text-lg sm:text-xl">Maßgeschneidert für Ihre Bedürfnisse.</b>

                <ul className="list-disc pl-5 py-1.5 pt-2">
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
            <div className="bg-linear-to-t from-appPrimary to-white rounded-xl shadow-lg hover:scale-101 duration-500">
              <div className="relative">
                <img src="/consulting.webp" alt="Strom und Gas Bild" className="w-full rounded-t-xl" />

                <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                  Persönliche Beratung
                </div>
              </div>
              <div className="p-5">
                <b className="text-lg sm:text-xl">Alles aus einer Hand.</b>

                <ul className="list-disc pl-5 py-1.5 pt-2">
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
          <div className="flex flex-col sm:flex-row justify-center place-items-center gap-5">
            <div className="text-sm sm:text-xl text-center">
              Haben wir Ihr Interesse geweckt?
            </div>
            <Button text="Kontaktiere Uns" isPrimary={false} />
          </div>
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} w-full`}>
        <ParallaxComponent
          translateYStart={90}
          translateYEnd={-50}
          scaleStart={0.9}
          scaleEnd={1}
        >
          <div className={`text-xl sm:text-3xl text-left ${radley.className}`}>
            Was unsere Kunden über uns sagen.
          </div>
          <HCarousel
            outerDivClassName="sm:w-full"
            innerDivClassName="[&_li]:mx-2 sm:[&_li]:mx-4"
            items={
              customerReviews.map((item, index) => (
                <li key={index} className="mb-5">
                  <div className="flex flex-col gap-2 p-3 bg-appGray rounded-4xl w-60 sm:w-100 h-60 sm:h-80 sm:text-xl justify-center place-items-center text-center shadow-lg">
                    <div>
                      {
                        item.text
                      }
                    </div>
                    <div className="font-bold">
                      {
                        item.name
                      }
                    </div>
                  </div>
                </li>
              ))
            } />
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} mb-30 w-full content-center`}>
        <ParallaxComponent
          translateYStart={90}
          translateYEnd={-20}
          scaleStart={0.8}
          scaleEnd={1}
        >
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 place-items-center">
            <div className={`flex-1 text-2xl sm:text-5xl ${radley.className} text-right`}>
              <div>
                Immer für Sie da,
              </div>
              <div>
                auch im <span className="decoration-appPrimary underline underline-offset-8">Ernstfall</span>.
              </div>
            </div>
            <div className="flex-1 sm:text-xl text-left">
              Unfälle und Schäden sind schon nervig genug - da braucht's keinen Papierkram-Stress obendrauf.
              Genau da kommen wir ins Spiel: Sie rufen uns an, und wir kümmern uns um den Rest.
              Ob Meldung, Abwicklung oder Diskussion mit der Versicherung - wir nehmen Ihnen den Aufwand ab.
              <br /><br />
              <b>Schnell, unkompliziert und mit einem Lächeln</b> - <br />
              damit Sie sich auf das Wesentliche konzentrieren können.
            </div>
          </div>
        </ParallaxComponent>
      </div>

      <div className={`${defaultPadding} w-full bg-appSecondary text-white`}>
        <div>
          <div className="pb-10 text-2xl sm:text-5xl text-left">
            Was tun bei <span className="decoration-appPrimary underline underline-offset-8">einem Schaden?</span>
          </div>

          <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:my-15 justify-evenly text-center text-lg sm:text-2xl font-bold">
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              <ParallaxComponent
                translateXStart={-30}
                translateXEnd={0}
                scaleStart={0.8}
                scaleEnd={1}
              >
                1. Schaden melden

                <img src="/talk.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
              </ParallaxComponent>
            </div>
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              <span className="sm:hidden">
                2. Unterlagen bereitstellen
              </span>

              <img src="/documents.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500" />

              <span className="hidden sm:block">
                2. Unterlagen bereitstellen
              </span>
            </div>
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              <ParallaxComponent
                translateXStart={30}
                translateXEnd={0}
                scaleStart={0.8}
                scaleEnd={1}
              >
                3. Zurücklehnen

                <img src="/chill.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
              </ParallaxComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
