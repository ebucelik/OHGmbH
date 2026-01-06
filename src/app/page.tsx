import HCarousel from "../components/hcarousel";
import Button from "../components/button";
import { radley } from "./layout";
import { defaultPadding } from "../shared/style";
import ParallaxComponent from "../components/parallaxComponent";
import TypedComponent from "../components/typedComponent";
import SliderComponent from "../components/sliderComponent";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

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
    "zurich",
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
      <div className="absolute -z-10" style={{ padding: '5%' }}>
        <img src="/bglogo.svg" className="opacity-15 object-cover overflow-hidden" />
      </div>

      {
        // Video im Hintergrund wie bei nsc-coral.vercel.app und OH GmbH mit Versicherungs-berater in die Mitte.
        // Statt Finanzierungsberater usw: Versicherungen, Finanzierungen, Vermögensaufbau
      }

      <div className="sm:pt-10">
        <ParallaxComponent
          speed={-30}
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

                <Button text="Jetzt Termin vereinbaren" className="my-5 sm:mt-20" isPrimary={true} href="/contact" />
              </div>
            </div>
            <div className="flex-1">
              <SliderComponent
                children={[
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src="/haraldotto3.webp" alt="Harald Otto"
                      fill
                      className="rounded-lg shadow-lg"
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
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <img
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"

                      className="rounded-lg shadow-lg"
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
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src="/haraldotto3.webp" alt="Harald Otto"
                      fill
                      className="rounded-lg shadow-lg"
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
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"
                      fill
                      className="rounded-lg shadow-lg"
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
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src="/haraldotto3.webp" alt="Harald Otto"
                      fill
                      className="rounded-lg shadow-lg"
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
                  <div className="relative" style={{ width: '100%', height: '100%' }}>
                    <Image
                      src="/holzmannmanuel.png" alt="Manuel Holzmann"
                      fill
                      className="rounded-lg shadow-lg"
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
            innerDivClassName="[&_li]:mx-5"
            items={
              insuranceNames.map(
                (item, index) => (
                  <li key={index}>
                    <Image src={`/` + item + `-logo.svg`} alt={item} width={200} height={100} className={`w-32 ${item == 'roland' ? 'bg-black' : ''}`} />
                  </li>
                )
              )
            } />
        </ParallaxComponent>
      </div>

      {
        // Hier kommt das video mir parrallax effekt und ein text eventuell wie zb.: "Vertrauen schaffen."
      }

      <div className={`${defaultPadding} w-full py-10 sm:py-100`}>
        <ParallaxComponent
          speed={-20}
          scaleStart={0.9}
          scaleEnd={1}
        >
          <div className="flex flex-col sm:place-items-center gap-5 sm:gap-30">
            <ParallaxComponent
              speed={-20}
            >
              <div className={`text-2xl sm:text-5xl font-bold`}>
                Wer wir sind
              </div>
            </ParallaxComponent>
            <div className="flex flex-col text-2xl sm:text-5xl gap-1">
              <div className="grid grid-cols-2 gap-1 sm:gap-30">
                <div className="sm:text-right">
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={-20}
                    translateXEnd={10}
                  >
                    <span className="text-appPrimary">O</span>ffen
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={20}
                    translateXEnd={-10}
                  >
                    <span className="text-appPrimary">H</span>erzlich
                  </ParallaxComponent>
                </div>
                <div className="sm:text-right">
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={-20}
                    translateXEnd={10}
                  >
                    <span className="text-appPrimary">O</span>ffensiv
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={20}
                    translateXEnd={-10}
                  >
                    <span className="text-appPrimary">H</span>artnäckig
                  </ParallaxComponent>
                </div>
                <div className="sm:text-right">
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={-20}
                    translateXEnd={10}
                  >
                    <span className="text-appPrimary">O</span>rganisiert
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={20}
                    translateXEnd={-10}
                  >
                    <span className="text-appPrimary">H</span>andlungsstark
                  </ParallaxComponent>
                </div>
                <div className="sm:text-right">
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={-20}
                    translateXEnd={10}
                  >
                    <span className="text-appPrimary">O</span>rdentlich
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={20}
                    translateXEnd={-10}
                  >
                    <span className="text-appPrimary">H</span>erausragend
                  </ParallaxComponent>
                </div>
                <div className="sm:text-right">
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={-20}
                    translateXEnd={10}
                  >
                    <span className="text-appPrimary">O</span>ptimal
                  </ParallaxComponent>
                </div>
                <div>
                  <ParallaxComponent
                    speed={-20}
                    translateXStart={20}
                    translateXEnd={-10}
                  >
                    <span className="text-appPrimary">H</span>ilfsbereit
                  </ParallaxComponent>
                </div>
              </div>
            </div>
            <div className="p-10 sm:pt-50 justify-center">
              <ParallaxComponent
                speed={-25}
                scaleStart={1}
                scaleEnd={1.2}
              >
                <div className="flex flex-row sm:gap-5 place-content-center">
                  <span className="text-appPrimary text-center font-bold text-4xl sm:text-8xl">Otto & Holzmann</span>
                  <Image
                    src="/ohlogo.svg"
                    alt="OH GmbH Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </ParallaxComponent>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      {
        // Wir jagen nicht dem Preis nach, sondern der Leistung.
      }

      <div className={`${defaultPadding} px-10 w-full sm:py-150`}>
        <ParallaxComponent
          speed={-30}
        >
          {
            // Noch ein Reiter mit Versicherungen
            // Weniger Text einbauen.
          }
          <div className="flex flex-col sm:flex-row justify-evenly gap-5 sm:gap-5 my-15">
            <ParallaxComponent
              speed={-10}
            >
              <div className="bg-linear-to-t from-appPrimary via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/electric.webp" alt="Strom und Gas Bild" className="w-full h-1/3 rounded-t-xl" />

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
                </div>
              </div>
            </ParallaxComponent>

            <ParallaxComponent
              speed={-5}
            >
              <div className="bg-linear-to-t from-appPrimary via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
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
                </div>
              </div>
            </ParallaxComponent>

            <ParallaxComponent
              speed={-8}
            >
              <div className="bg-linear-to-t from-appPrimary via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/consulting.webp" alt="Strom und Gas Bild" className="w-full rounded-t-xl" />

                  <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-md rounded-t-xl">
                    Investments
                  </div>
                </div>
                <div className="p-5">
                  <b className="text-lg sm:text-xl">Ihr Geld, Ihre Zukunft.</b>

                  <ul className="list-disc pl-5 py-1.5 pt-2">
                    <li>
                      <b>
                        Individuelles Portfolio:
                      </b> Wir erstellen ein auf Sie abgestimmtes Anlageportfolio - passend zu Ihren Zielen und Ihrer Risikobereitschaft.
                    </li>
                    <li>
                      <b>
                        Professionelle Betreuung:
                      </b> Ihr Geld wird gezielt investiert, um langfristig stabile Erträge zu erzielen.
                    </li>
                    <li>
                      <b>
                        Mehr aus Ihrem Geld machen:
                      </b> Nutzen Sie die Chancen des Marktes und lassen Sie Ihr Kapital für sich arbeiten.
                    </li>
                  </ul>
                </div>
              </div>
            </ParallaxComponent>
          </div>
          <div className="flex flex-col sm:flex-row justify-center place-items-center gap-5 sm:pt-20">
            <div className="sm:text-xl text-center">
              Haben wir Ihr Interesse geweckt?
            </div>
            <Button text="Kontaktiere Uns" isPrimary={false} href="/contact" />
          </div>
        </ParallaxComponent>
      </div>

      {
        // Statistiken einbauen zahlen: Kunden, Versicherungen, Finanzierungen, Partner, 
        // Kundenrezension anzeigen nur kleiner anzeigen
      }

      <div className={`${defaultPadding} w-full py-20 relative z-2 bg-white`}>
        <div className={`text-xl sm:text-3xl text-left ${radley.className}`}>
          Unsere Kunden sind überzeugt.
        </div>
        <HCarousel
          outerDivClassName="sm:w-full"
          innerDivClassName="[&_li]:mx-4 sm:[&_li]:mx-4"
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
      </div>

      {
        // Rüberschieben in Schadenmeldungsseite.
      }

      <div className={`${defaultPadding} w-full bg-linear-to-b from-appSecondary from-10% to-white text-white sm:pb-20`}>
        <div>
          <div className="pb-10 text-2xl sm:text-5xl text-left">
            Was tun bei <span className="decoration-appPrimary underline underline-offset-8">einem Schaden?</span>
          </div>

          <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:my-15 justify-evenly text-center text-lg sm:text-2xl font-bold">
            <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
              1. Schaden melden

              <img src="/talk.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
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
              3. Zurücklehnen

              <img src="/chill.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
