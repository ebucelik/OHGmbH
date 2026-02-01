import * as motion from "motion/react-client";
import HCarousel from "../components/hcarousel";
import Button from "../components/button";
import { defaultPadding } from "../shared/style";
import Image from "next/image";
import CountUpComponent from "../components/countUpComponent";
import { archivo, radley } from "./layout";

export default function Home() {
    const insuranceNames = [
        "allianz",
        "donau",
        "ergo",
        "generali",
        "hdi",
        "helvetia",
        "muki",
        "uniqa",
        "wustenrot",
        "zurich",
        "infina",
        "froots",
        "stromkreis",
        "synegetix",
        "allianz",
        "donau",
        "ergo",
        "garanta",
        "generali",
        "hdi",
        "helvetia",
        "muki",
        "uniqa",
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
                    <source v-if="loadedVideo" src="/intro.mp4" type="video/mp4" />
                </video>

                <div className="flex flex-col gap-5 2xl:gap-10 place-content-center place-items-center absolute top-0 left-0 w-full h-screen backdrop-blur-xs fade-up-1s">
                    <div className={`${archivo.className} text-7xl sm:text-9xl bg-linear-to-r from-black from-35% via-appPrimary via-50% to-appPrimary to-100% bg-clip-text text-transparent`}>
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
                        leadingTitle=""
                        className="my-20"
                        innerDivClassName="[&_li]:mx-5"
                        items={
                            insuranceNames.map(
                                (item, index) => (
                                    <li key={index}>
                                        <Image src={`/` + item + `-logo.svg`} alt={item} width={300} height={200} className={`w-30`} />
                                    </li>
                                )
                            )
                        } />
                </div>
            </div>


            <motion.div
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="pt-25"
            >
                <div className="flex flex-col p-6 sm:p-10 mx-3 sm:mx-[10%] 2xl:mx-[15%] gap-5">

                    <div className={`${archivo.className} text-center text-4xl sm:text-8xl bg-linear-to-r from-black from-35% via-appPrimary via-50% to-appPrimary to-100% bg-clip-text text-transparent`}>
                        Harald Otto
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">

                        {/* BILD */}
                        <div className="w-full sm:flex-1">
                            <img
                                src="/harald_intro.webp"
                                alt="Harald Otto"
                                className="rounded-2xl shadow-2xl object-contain w-full"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="w-full sm:flex-1 flex flex-col gap-4 sm:gap-10 text-sm lg:text-base xl:text-2xl">

                            <div>
                                Ich bin Harald Otto, Geschäftsführer und Versicherungsmakler der OH GmbH – deinem
                                unabhängigen Partner für Versicherungen, Finanzierungen, Investments und Energie.
                                Bei OH GmbH steht für Offenheit, hartnäckiges Engagement und kundenorientierte
                                Lösungen – genau diese Werte lebe ich tagtäglich in meiner Arbeit.
                            </div>

                            {/* nur Desktop sichtbar */}
                            <div className="hidden sm:block">
                                Mit meinem Fokus auf Versicherungsberatung helfe ich Kund:innen dabei,
                                Risiken richtig einzuschätzen und passgenaue Absicherungen zu finden.
                                Für mich bedeutet gute Beratung nicht nur, Produkte zu erklären,
                                sondern Vertrauen aufzubauen und komplexe Themen verständlich zu machen.
                                Verantwortung, Verlässlichkeit und eine strategische, langfristige Perspektive
                                zeichnen mich als Berater aus.
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>



            {
                // Manuel Holzmann
            }
            {/* Platzhalter nur Desktop */}
            <div className="hidden sm:block invisible text-2xl sm:text-4xl font-bold">
                Manuel Holzmann
            </div>
            <motion.div
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="pt-25"
            >
                <div className="flex flex-col p-6 sm:p-10 mx-3 sm:mx-[10%] 2xl:mx-[15%] gap-5">

                    {/* NAME – NUR MOBILE GANZ OBEN */}
                    <div className={`${archivo.className} text-center text-4xl sm:text-8xl bg-linear-to-r from-black from-35% via-appPrimary via-50% to-appPrimary to-100% bg-clip-text text-transparent`}>
                        Manuel Holzmann
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">

                        {/* TEXT */}
                        <div className="w-full sm:flex-1 flex flex-col gap-4 sm:gap-10 text-sm lg:text-base xl:text-2xl">



                            <div>
                                Ich bin Manuel Holzmann, Geschäftsführer und Vermögensberater bei der OH GmbH.
                                Mein Herz schlägt für ganzheitliche Finanzstrategien, bei denen die Ziele meiner
                                Kund:innen im Mittelpunkt stehen. Ob Investmentplanung, Vermögensberatung oder
                                maßgeschneiderte Finanzierungslösungen – ich begleite Menschen und Unternehmen
                                mit Klarheit, Weitblick und fundiertem Know-how.
                            </div>

                            <div className="hidden sm:block">
                                Als Vermögensberater bringe ich analytisches Denken, strukturierte Planung und ein
                                hohes Verantwortungsbewusstsein in jede Beratung ein. Mir ist wichtig, dass meine
                                Kund:innen nicht nur gut beraten werden, sondern auch verstehen, welche Schritte
                                sinnvoll sind und warum. Ehrlichkeit, Transparenz und eine partnerschaftliche
                                Zusammenarbeit stehen für mich an erster Stelle.
                            </div>
                        </div>

                        {/* BILD + NAME (DESKTOP) */}
                        <div className="w-full sm:flex-1 flex flex-col gap-3">

                            <img
                                src="/manuel_intro.webp"
                                alt="Manuel Holzmann"
                                className="rounded-2xl shadow-2xl object-contain w-full"
                            />
                        </div>

                    </div>
                </div>
            </motion.div>




            {
                // Our services
            }
            < div className={`${defaultPadding} sm:px-0 w-full sm:py-25`}>
                <div className={`${archivo.className} sm:px-10 mb-2.5 sm:mb-10 text-4xl sm:text-7xl font-bold sm:text-center `}>
                    <div className={`${archivo.className} text-5xl sm:text-7xl bg-linear-to-r from-black from-35% via-appPrimary via-50% to-appPrimary to-100% bg-clip-text text-transparent`}>
                        Unsere Fachgebiete
                    </div>
                </div>

                <div className="flex flex-row place-content-center">
                    <div className="grid sm:grid-cols-2 mt-15 gap-5 sm:gap-15 sm:w-[70%]">
                        <motion.div transition={{ duration: 0.5, ease: "circOut" }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101">
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
                        </motion.div>

                        <motion.div transition={{ duration: 0.5, ease: "circOut" }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101">
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
                        </motion.div>

                        <motion.div transition={{ duration: 0.5, ease: "circOut" }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101">
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
                        </motion.div>

                        <motion.div transition={{ duration: 0.5, ease: "circOut" }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-linear-to-t from-appPrimary/40 via-appPrimaryLight to-white rounded-xl shadow-lg hover:scale-101">
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
                        </motion.div>
                    </div>
                </div>
            </div >

            {
                // Statistics
            }
            < div className={`${defaultPadding} flex flex-col gap-15 sm:gap-20 bg-appPrimary text-white text-center`}>
                <div className="flex flex-col mt-30 sm:flex-row gap-10 sm:gap-30 text-center justify-center">
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
            </div >
        </div >
    );
}