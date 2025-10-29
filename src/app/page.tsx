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
            innerDivClassName="[&_li]:mx-5"
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

      <div className={`${defaultPadding} w-full content-center py-15 sm:py-50 bg-appPrimary`}>
        <ParallaxComponent
          speed={10}
        >
          <div className="flex flex-col gap-5 sm:gap-10">
            <div className={`text-2xl sm:text-5xl`}>
              <b>Das magische Viereck.</b>

              <div className="text-lg sm:text-2xl pt-2">
                Gemeinsam bilden diese vier Bereiche das Fundament für finanzielle Stabilität, Sicherheit und Wachstum - alles aus einer Hand.
              </div>
            </div>

            <div className="flex-2 sm:px-25 text-xl sm:text-4xl">
              <div className="grid grid-cols-2 bg-white rounded-2xl shadow-xl text-center">
                <Link href="/insurance/car">
                  <div className="bg-blue-100 hover:bg-blue-300 rounded-tl-2xl p-15 sm:p-20 w-full flex flex-col gap-2 place-items-center hover:scale-102 duration-500">
                    <div className="flex flex-row gap-2 place-content-center place-items-center font-bold">
                      <div>
                        <Icon icon="mingcute:safety-certificate-fill" />
                      </div>
                      <div>
                        Sach-Versicherung
                      </div>
                    </div>

                    <div className="hidden sm:block sm:text-lg">
                      Schutzt des Eigentums und Vermögens.
                    </div>
                  </div>
                </Link>
                <Link href="/insurance/illness">
                  <div className="bg-green-100 hover:bg-green-300 rounded-tr-2xl p-15 sm:p-20 w-full flex flex-col gap-2 place-content-center place-items-center hover:scale-102 duration-500">
                    <div className="flex flex-row gap-2 place-content-center place-items-center font-bold">
                      <div>
                        <Icon icon="solar:health-bold" />
                      </div>
                      <div>
                        Personen-Versicherung
                      </div>
                    </div>
                    <div className="hidden sm:block sm:text-lg">
                      Denken Sie heute schon an morgen.
                    </div>
                  </div>
                </Link>
                <Link href="/investment">
                  <div className="bg-yellow-100 hover:bg-yellow-300 rounded-bl-2xl p-15 sm:p-20 w-full flex flex-col gap-2 place-items-center hover:scale-102 duration-500">
                    <div className="flex flex-row gap-2 place-content-center place-items-center font-bold">
                      <div>
                        <Icon icon="mdi:finance" />
                      </div>
                      <div>
                        Investment
                      </div>
                    </div>
                    <div className="hidden sm:block sm:text-lg">
                      Geld arbeiten lassen, Kapital vermehren.
                    </div>
                  </div>
                </Link>
                <Link href="/insurance/life">
                  <div className="bg-orange-100 hover:bg-orange-300 rounded-br-2xl p-15 sm:p-20 w-full flex flex-col gap-2 place-items-center hover:scale-102 duration-500">
                    <div className="flex flex-row gap-2 place-content-center place-items-center font-bold">
                      <div>
                        <Icon icon="streamline:investment-selection" />
                      </div>
                      <div>
                        Vorsorge
                      </div>
                    </div>
                    <div className="hidden sm:block sm:text-lg">
                      Finanziell abgesichert sein in allen Lebensphasen.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ParallaxComponent>
      </div>

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

      <div className={`${defaultPadding} px-10 w-full sm:py-150`}>
        <ParallaxComponent
          speed={-30}
        >
          <ParallaxComponent
            speed={-1}
          >
            <div className={`text-2xl sm:text-5xl text-center ${radley.className} sm:pb-50`}>
              Es bleibt nicht nur bei Versicherungen.
            </div>
          </ParallaxComponent>
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

      <div className={`${defaultPadding} w-full py-20 relative z-2 bg-white`}>
        <div className={`text-xl sm:text-3xl text-left ${radley.className}`}>
          Was unsere Kunden über uns sagen.
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

      <div className={`w-full content-center sm:py-30 bg-gray-100`}>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 place-items-center p-10">
          <div className={`flex-1 text-2xl sm:text-6xl text-right`}>
            <div>
              Immer für Sie da,
            </div>
            <div>
              auch im <span className="bg-linear-to-r from-appSecondary to-appSecondary bg-clip-text text-transparent">Ernstfall</span>.
            </div>
          </div>
          <div className="flex-1 sm:text-2xl text-left">
            Unfälle und Schäden sind schon nervig genug - da braucht's keinen Papierkram-Stress obendrauf.
            <br />
            Genau da kommen wir ins Spiel: Sie rufen uns an, und wir kümmern uns um den Rest.
            <br />
            Ob Meldung, Abwicklung oder Diskussion mit der Versicherung - wir nehmen Ihnen den Aufwand ab.
            <br /><br />
            <b>Schnell, unkompliziert und mit einem Lächeln</b> - <br />
            damit Sie sich auf das Wesentliche konzentrieren können.
          </div>
        </div>
      </div>

      <div className={`${defaultPadding} w-full bg-appSecondary text-white`}>
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
