import * as motion from "motion/react-client";
import Link from "next/link";
import HCarousel from "../components/hcarousel";
import Button from "../components/button";
import FaqAccordion from "../components/faqAccordion";
import { defaultPadding } from "../shared/style";
import Image from "next/image";
import CountUpComponent from "../components/countUpComponent";
import PromptInput from "../components/promptInput";
import { archivo, radley } from "./layout";

type FieldLink = { label: string; href: string };
type Field = {
    title: string;
    image: string;
    alt: string;
    headline: string;
    text: string;
    links: FieldLink[];
};

const fields: Field[] = [
    {
        title: "Versicherungen",
        image: "/ownhomeInsuranceInitial.webp",
        alt: "Modernes Einfamilienhaus als Sinnbild für unsere Eigenheim- und Versicherungsberatung",
        headline: "Optimale Sicherheit mit uns.",
        text: "Als ungebundener Makler vertreten wir Ihre Interessen gegenüber allen Versicherungen. Wir filtern den Markt nach dem besten Preis-Leistungs-Verhältnis für Ihren Schutz.",
        links: [
            { label: "Auto", href: "/insurance/car" },
            { label: "LKW", href: "/insurance/lkw" },
            { label: "Motorrad", href: "/insurance/motorcycle" },
            { label: "Moped", href: "/insurance/moped" },
            { label: "Eigenheim", href: "/insurance/ownhome" },
            { label: "Haushalt", href: "/insurance/flat" },
            { label: "Unfall", href: "/insurance/accident" },
            { label: "Rechtsschutz", href: "/insurance/law" },
        ],
    },
    {
        title: "Finanzierungen",
        image: "/finance.webp",
        alt: "Beratungsgespräch zu Finanzierungen und Krediten",
        headline: "Maßgeschneidert für Ihre Bedürfnisse.",
        text: "Als ungebundener Kreditvermittler vergleichen wir über 120 Banken und 600 Modelle für Sie. Wir finden garantiert die beste Kondition und die passende Bank für Ihr Projekt.",
        links: [
            { label: "Wohnbaukredit", href: "/finance/homecredit" },
            { label: "Umschuldung", href: "/finance/debtrestructing" },
        ],
    },
    {
        title: "Vermögensaufbau",
        image: "/consulting.webp",
        alt: "Individuelle Beratung zum Vermögensaufbau und Investment",
        headline: "Ihr Geld, Ihre Zukunft.",
        text: "Wir managen Ihr Portfolio kosteneffizient, aktiv und flexibel, angepasst an Ihren persönlichen Zeithorizont. Dabei nutzen wir auch Strategien, mit denen Sie die Kapitalertragssteuer legal vermeiden können.",
        links: [
            { label: "Investment-Service", href: "/investment/investmentservice" },
            { label: "Gewinnfreibetrag", href: "/investment/profitallowance" },
        ],
    },
    {
        title: "Strom & Gas",
        image: "/electric.webp",
        alt: "Strom- und Gastarife im Vergleich",
        headline: "Wir finden den besten Tarif für Sie.",
        text: "Wir vergleichen den Markt und wechseln Sie zum kostengünstigsten Anbieter. So minimieren wir Ihre monatlichen Fixkosten sofort und dauerhaft.",
        links: [
            { label: "Beratung anfragen", href: "/contact" },
        ],
    },
];

const faqItems = [
    {
        question: "Was kostet mich die Beratung?",
        answer: "Unsere Beratung ist für Sie in der Regel kostenlos. Wir werden von den Versicherungen bzw. Partnern über eine Provision vergütet – Sie zahlen dafür nicht mehr, als wenn Sie direkt abschließen würden.",
    },
    {
        question: "Warum ein Makler statt direkt zur Versicherung?",
        answer: "Als ungebundener Makler vertreten wir ausschließlich Ihre Interessen und vergleichen den gesamten Markt für Sie. Eine einzelne Versicherung bietet immer nur ihre eigenen Produkte an – wir finden die beste Lösung für Ihre Situation.",
    },
    {
        question: "Bin ich vertraglich an Sie gebunden?",
        answer: "Nein. Unsere Beratung ist unverbindlich, und Sie entscheiden am Ende frei, ob und mit wem Sie abschließen möchten.",
    },
    {
        question: "Wie läuft der erste Termin ab?",
        answer: "Im ersten Gespräch analysieren wir gemeinsam Ihre aktuelle Situation und Ihre Ziele. Danach erhalten Sie von uns ein individuelles Angebot, das genau auf Sie zugeschnitten ist.",
    },
    {
        question: "Unterstützen Sie mich auch im Schadensfall?",
        answer: "Ja. Auch nach Vertragsabschluss stehen wir Ihnen bei der Schadensmeldung und der Kommunikation mit der Versicherung zur Seite.",
    },
];

const partnerLogos = [
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
    "synegetix",
];

export default function Home() {
    return (
        <div className="relative">
            <div className="relative text-center overflow-hidden">
                <video preload="metadata" poster="/intro-poster.webp" className="-z-10 overflow-hidden object-cover h-screen sm:h-screen w-full fade-in-1s"
                       autoPlay loop muted playsInline>
                    <source v-if="loadedVideo" src="/intro.mp4" type="video/mp4" />
                </video>

                <div className="flex flex-col gap-5 2xl:gap-10 place-content-center place-items-center absolute top-0 left-0 w-full h-screen backdrop-blur-xs bg-linear-to-b from-black/25 via-black/5 to-black/40 fade-up-1s">
                    <div className={`${archivo.className} text-7xl sm:text-9xl`}>
                        <span className="text-black">OH</span> <span className="text-appPrimary">GmbH</span>
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

                    <PromptInput />
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
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/harald_intro.webp"
                                    alt="Harald Otto, Geschäftsführer und Versicherungsmakler der OH GmbH"
                                    fill
                                    sizes="(min-width: 640px) 45vw, 90vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-appPrimary sm:mx-0" />
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
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/manuel_intro.webp"
                                    alt="Manuel Holzmann, Geschäftsführer und Vermögensberater der OH GmbH"
                                    fill
                                    sizes="(min-width: 640px) 45vw, 90vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="mx-auto h-1.5 w-16 rounded-full bg-appPrimary sm:mx-0" />
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
                        {fields.map((field) => (
                            <motion.div
                                key={field.title}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="group flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                            >
                                <div className="relative h-40 sm:h-48 overflow-hidden">
                                    <Image
                                        src={field.image}
                                        alt={field.alt}
                                        fill
                                        sizes="(min-width: 1024px) 500px, (min-width: 640px) 45vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 py-3 px-5 text-lg sm:text-2xl font-bold text-white">
                                        {field.title}
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col gap-3 grow">
                                    <div>
                                        <b className="text-lg sm:text-xl">{field.headline}</b>
                                        <p className="mt-1">{field.text}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        {field.links.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="rounded-full border border-appPrimary/40 px-3 py-1.5 text-xs sm:text-sm font-semibold text-neutral-800 transition-colors duration-200 hover:bg-appPrimary hover:border-appPrimary"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >

            {
                // Partner
            }
            < div className={`${defaultPadding} sm:px-0 w-full`}>
                <div className={`${archivo.className} px-5 sm:px-10 mb-8 sm:mb-12 text-3xl sm:text-5xl font-bold text-center`}>
                    Über 30 starke Partner im Vergleich
                </div>

                <HCarousel
                    leadingTitle=""
                    className="my-5"
                    innerDivClassName="[&_li]:mx-8 [&_img]:grayscale [&_img]:opacity-70 [&_img]:hover:grayscale-0 [&_img]:hover:opacity-100 [&_img]:transition [&_img]:duration-300"
                    items={
                        partnerLogos.map(
                            (item, index) => (
                                <li key={index}>
                                    <Image src={`/` + item + `-logo.svg`} alt={`${item} Logo`} width={300} height={200} className={`w-30`} />
                                </li>
                            )
                        )
                    } />
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

            {
                // FAQ
            }
            < div className={`${defaultPadding} w-full`}>
                <div className={`${archivo.className} mb-8 sm:mb-12 text-3xl sm:text-5xl font-bold text-center`}>
                    Häufige Fragen
                </div>

                <div className="flex flex-row place-content-center">
                    <div className="w-full sm:w-[70%] lg:w-[60%]">
                        <FaqAccordion items={faqItems} />
                    </div>
                </div>
            </div >
        </div >
    );
}
