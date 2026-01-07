import HCarousel from "../components/hcarousel";
import Button from "../components/button";
import { archivo, radley } from "./layout";
import { defaultPadding } from "../shared/style";
import ParallaxComponent from "../components/parallaxComponent";
import Image from "next/image";
import CountUpComponent from "../components/countUpComponent";
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
    "zurich",
    "infina",
    "froots",
    "stromkreis",
    "synegetix",
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
    "infina",
    "froots",
    "stromkreis",
    "synegetix"
  ];

  return (
    <div className="relative">
      <div className="relative text-center overflow-hidden">
        <video preload="metadata" className="-z-10 overflow-hidden object-cover h-screen sm:h-screen w-full fade-in-1s"
          autoPlay loop muted playsInline>
          <source v-if="loadedVideo" src="/nsc-pv-intro.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-col gap-5 2xl:gap-10 place-content-center place-items-center absolute top-0 left-0 w-full h-screen backdrop-blur-xs fade-up-1s">
          <div className={`${archivo.className} text-6xl sm:text-9xl bg-linear-to-r from-black to-appPrimary bg-clip-text text-transparent`}>
            OH GmbH
          </div>
          <span className={`${archivo.className} flex text-2xl sm:text-5xl text-appPrimary`}>
            <div className="window">
              <div className="flex flex-col window-inner overflow-hidden">
                <div className="pb-1">
                  Versicherungen
                </div>
                <div className="pb-1">
                  Finanzierungen
                </div>
                <div className="pb-1">
                  Vermögensaufbau
                </div>
                <div aria-hidden className="pb-1">
                  Versicherungen
                </div>
                <div aria-hidden className="pb-1">
                  Finanzierungen
                </div>
                <div aria-hidden className="pb-1">
                  Vermögensaufbau
                </div>
              </div>
            </div>
          </span>

          <Button text="Jetzt Termin vereinbaren" className="my-5 px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
        </div>

        <div className="flex flex-col place-content-center absolute bottom-0 w-full sm:px-50 fade-up-1s">
          <HCarousel
            leadingTitle="Unsere Partner"
            className="my-5"
            innerDivClassName="[&_li]:mx-5"
            items={
              insuranceNames.map(
                (item, index) => (
                  <li key={index}>
                    <Image src={`/` + item + `-logo.svg`} alt={item} width={200} height={100} className={`w-16 ${item == 'roland' ? 'bg-black' : ''}`} />
                  </li>
                )
              )
            } />
        </div>
      </div>

      {
        // Harald Otto
      }
      <div className="pt-25">
        <ParallaxComponent
          speed={0}
          opacityStart={3}
          opacityEnd={0}
          scaleStart={1.1}
          scaleEnd={0.8}
        >
          <div className="flex flex-col">
            <div className="mx-3 sm:mx-[10%] 2xl:mx-[15%] flex flex-row gap-5 sm:gap-10 fade-up-1s">
              <div className="flex-1">
                <img src="/harald_intro.webp" alt="Harald Otto" className="rounded-2xl shadow-2xl object-contain" />
              </div>

              <div className="flex-1 sm:flex-2 flex flex-col gap-1 sm:gap-10 place-items-center">
                <div className="text-lg sm:text-4xl font-bold text-left w-full">
                  Harald Otto
                </div>

                <div className="text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                  Ich bin Harald Otto, Geschäftsführer und Versicherungsmakler der OH GmbH – deinem unabhängigen Partner für Versicherungen, Finanzierungen, Investments und Energie. Bei OH GmbH steht für Offenheit, hartnäckiges Engagement und kundenorientierte Lösungen – genau diese Werte lebe ich tagtäglich in meiner Arbeit.
                </div>

                <div className="hidden sm:block text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                  Mit meinem Fokus auf Versicherungsberatung helfe ich Kund:innen dabei, Risiken richtig einzuschätzen und passgenaue Absicherungen zu finden. Für mich bedeutet gute Beratung nicht nur, Produkte zu erklären, sondern Vertrauen aufzubauen und komplexe Themen verständlich zu machen. Verantwortung, Verlässlichkeit und eine strategische, langfristige Perspektive zeichnen mich als Berater aus.
                </div>
              </div>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      {
        // Manuel Holzmann
      }
      <div className="pt-25">
        <ParallaxComponent
          speed={10}
          opacityStart={3}
          opacityEnd={0}
          scaleStart={1.1}
          scaleEnd={0.8}
        >
          <div className="flex flex-col">
            <div className="mx-3 sm:mx-[10%] 2xl:mx-[15%] flex flex-row gap-5 sm:gap-10 fade-up-1s">
              <div className="flex-1 sm:flex-2 flex flex-col gap-1 sm:gap-10 place-items-center">
                <div className="text-lg sm:text-4xl font-bold text-left w-full">
                  Manuel Holzmann
                </div>

                <div className="text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                  Ich bin Manuel Holzmann, Geschäftsführer und Vermögensberater bei der OH GmbH. Mein Herz schlägt für ganzheitliche Finanzstrategien, bei denen die Ziele meiner Kund:innen im Mittelpunkt stehen. Ob Investmentplanung, Vermögensberatung oder maßgeschneiderte Finanzierungslösungen – ich begleite Menschen und Unternehmen mit Klarheit, Weitblick und fundiertem Know-how.
                </div>

                <div className="hidden sm:block text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                  Als Vermögensberater bringe ich analytisches Denken, strukturierte Planung und ein hohes Verantwortungsbewusstsein in jede Beratung ein. Mir ist wichtig, dass meine Kund:innen nicht nur gut beraten werden, sondern auch verstehen, welche Schritte sinnvoll sind und warum. Ehrlichkeit, Transparenz und eine partnerschaftliche Zusammenarbeit stehen für mich an erster Stelle.
                </div>
              </div>

              <div className="flex-1">
                <img src="/manuel_intro.webp" alt="Manuel Holzmann" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      {
        // Who we are
      }
      <div className={`w-full pt-20 sm:py-100`}>
        <ParallaxComponent
          speed={-10}
          scaleStart={0.9}
          scaleEnd={1}
        >
          <div className="flex flex-col sm:place-items-center gap-5 sm:gap-30">
            <ParallaxComponent
              speed={-20}
            >
              <div className={`${archivo.className} px-5 sm:px-10 text-2xl sm:text-7xl font-bold`}>
                Wer wir sind
              </div>
            </ParallaxComponent>
            <div className="flex flex-col text-2xl sm:text-5xl gap-1">
              <div className="grid grid-cols-2 gap-1 sm:gap-30 px-5 sm:px-10">
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
            <div className="p-5 sm:pt-150 justify-center">
              <ParallaxComponent
                speed={-20}
                scaleStart={1}
                scaleEnd={1.1}
              >
                <div className="relative flex flex-row place-content-center">
                  <img
                    src="/harald_manuel.webp"
                    alt="Harald Otto und Manuel Holzmann"
                    className="rounded-4xl shadow-2xl 2xl:w-[60%]"
                  />

                  <div className="absolute bottom-0 w-full flex flex-col place-items-center">
                    <ParallaxComponent
                      translateYStart={-900}
                      scaleStart={1}
                      scaleEnd={1.1}
                    >
                      <span className="text-appPrimary text-center font-bold text-3xl sm:text-8xl">Otto & Holzmann</span>
                    </ParallaxComponent>
                  </div>
                </div>
              </ParallaxComponent>
            </div>
            <div className="px-5 py-30 sm:p-20 sm:pt-150">
              <ParallaxComponent
                speed={0}
                scaleStart={1}
                scaleEnd={1.1}
              >
                <div className="flex flex-col font-bold text-4xl sm:text-7xl 2xl:text-8xl place-items-center text-center">
                  <span>Wir jagen nicht dem Preis nach,</span>
                  <span className="bg-linear-to-r from-black to-appPrimary bg-clip-text text-transparent pb-2">sondern der Leistung.</span>
                </div>
              </ParallaxComponent>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      {
        // Our services
      }
      <div className={`${defaultPadding} sm:px-0 w-full sm:py-100`}>
        <ParallaxComponent
          speed={-30}
        >
          <div className={`${archivo.className} sm:px-10 mb-2.5 sm:mb-10 text-2xl sm:text-7xl font-bold sm:text-center`}>
            Unsere Dienste
          </div>

          <div className="flex flex-row place-content-center">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-15 sm:w-[70%]">
              <div className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/ownhomeInsuranceInitial.webp" alt="Versicherungen Bild" className="w-full h-1/3 rounded-t-xl" />

                  <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-sm rounded-t-xl">
                    Versicherungen
                  </div>
                </div>

                <div className="p-5 flex flex-col">
                  <b className="text-lg sm:text-xl">Optimale Sicherheit mit uns.</b>

                  Als ungebundener Makler vertreten wir Ihre Interessen gegenüber allen Versicherungen. Wir filtern den Markt nach dem besten Preis-Leistungs-Verhältnis für Ihren Schutz.
                </div>
              </div>

              <div className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/finance.webp" alt="Finanzierung Bild" className="w-full rounded-t-xl" />

                  <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-sm rounded-t-xl">
                    Finanzierungen
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <b className="text-lg sm:text-xl">Maßgeschneidert für Ihre Bedürfnisse.</b>

                  Als ungebundener Kreditvermittler vergleichen wir über 120 Banken und 600 Modelle für Sie. Wir finden garantiert die beste Kondition und die passende Bank für Ihr Projekt.
                </div>
              </div>

              <div className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/consulting.webp" alt="Strom und Gas Bild" className="w-full rounded-t-xl" />

                  <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-sm rounded-t-xl">
                    Vermögensaufbau
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <b className="text-lg sm:text-xl">Ihr Geld, Ihre Zukunft.</b>

                  Wir managen Ihr Portfolio kosteneffizient, aktiv und flexibel, angepasst an Ihren persönlichen Zeithorizont. Dabei nutzen wir auch Strategien, mit denen Sie die Kapitalertragssteuer legal vermeiden können.
                </div>
              </div>

              <div className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101 duration-500">
                <div className="relative">
                  <img src="/electric.webp" alt="Strom und Gas Bild" className="w-full h-1/3 rounded-t-xl" />

                  <div className="absolute top-0 py-2 w-full text-center text-lg sm:text-2xl font-bold backdrop-blur-sm rounded-t-xl">
                    Strom und Gas
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <b className="text-lg sm:text-xl">Wir finden den besten Tarif für Sie.</b>

                  Wir vergleichen den Markt und wechseln Sie zum kostengünstigsten Anbieter. So minimieren wir Ihre monatlichen Fixkosten sofort und dauerhaft.
                </div>
              </div>
            </div>
          </div>
        </ParallaxComponent>
      </div>

      {
        // Statistics
      }
      <div className={`${defaultPadding} flex flex-col gap-15 sm:gap-30 bg-appPrimary text-white text-center`}>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-30 text-center justify-center">
          <div>
            <CountUpComponent
              countEnd={142}
              className="text-4xl sm:text-7xl font-bold"
            />
            <div>
              Zufriedene Kunden
            </div>
          </div>
          <div>
            <CountUpComponent
              countEnd={212}
              className="text-4xl sm:text-7xl font-bold"
            />
            <div>
              Abgeschlossene Versicherungen
            </div>
          </div>
          <div>
            <CountUpComponent
              countEnd={53}
              className="text-4xl sm:text-7xl font-bold"
            />
            <div>
              Finanzierungen
            </div>
          </div>
          <div>
            <CountUpComponent
              countEnd={30}
              className="text-4xl sm:text-7xl font-bold"
            />
            <div>
              Partner
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-3xl sm:pb-5">
            Unsere Zahlen sprechen Fakten.
          </div>
          <div className="text-2xl sm:text-5xl font-bold">
            Sprechen Sie mit uns.
          </div>
        </div>
        <div className="flex flex-row place-content-center">
          <Button text={"Jetzt Termin anfragen"} iconName="hugeicons:appointment-01" isPrimary={true} className="text-black bg-white" href="/contact" />
        </div>
      </div>

      {
        // Customer reviews
      }
      <div className={`${defaultPadding} w-full sm:mt-20 relative z-2 bg-white`}>
        <div className={`text-xl sm:text-2xl text-left ${radley.className}`}>
          Unsere Kunden sind überzeugt
        </div>
        <HCarousel
          className="sm:my-5"
          outerDivClassName="sm:w-full"
          innerDivClassName="[&_li]:mx-4 sm:[&_li]:mx-4"
          items={
            customerReviews.map((item, index) => (
              <li key={index} className="mb-5">
                <div className="flex flex-col gap-2 bg-appGray/30 rounded-4xl w-60 sm:w-100 h-30 sm:h-35 text-xs sm:text-sm justify-center place-items-center text-center shadow-lg">
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
    </div>
  );
}
