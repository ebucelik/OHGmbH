import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import { archivo } from "../../app/layout";
import ProgressStore from "../progress/progressStore";
import { ProgressType } from "../progress/progressType";

type InsuranceInfo = {
    key: ProgressType;
    label: string;
    href: string;
    image?: string;
    icon?: string;
};

const allInsurances: InsuranceInfo[] = [
    { key: ProgressType.car, label: "Auto", href: "/insurance/car", image: "/carInsuranceInitial.webp" },
    { key: ProgressType.lkw, label: "LKW", href: "/insurance/lkw", image: "/lkwInsuranceInitial.webp" },
    { key: ProgressType.motorcycle, label: "Motorrad", href: "/insurance/motorcycle", image: "/motorcycleInsuranceInitial.webp" },
    { key: ProgressType.moped, label: "Moped", href: "/insurance/moped", image: "/mopedInsuranceInitial.webp" },
    { key: ProgressType.ownhome, label: "Eigenheim", href: "/insurance/ownhome", image: "/ownhomeInsuranceInitial.webp" },
    { key: ProgressType.flat, label: "Haushalt", href: "/insurance/flat", image: "/householdInsuranceInitial.webp" },
    { key: ProgressType.law, label: "Rechtsschutz", href: "/insurance/law", image: "/legalProtectionInsuranceInitial.webp" },
    { key: ProgressType.accident, label: "Unfall", href: "/insurance/accident", image: "/accidentInsuranceInitial.webp" },
    { key: ProgressType.health, label: "Kranken", href: "/insurance/health", icon: "solar:health-bold" },
    { key: ProgressType.disability, label: "Berufsunfähigkeit", href: "/insurance/disability", icon: "mdi:briefcase-account" },
    { key: ProgressType.life, label: "Leben", href: "/insurance/life", image: "/lifeInsuranceInitial.webp" },
];

type InsurancePageProps = {
    type: ProgressType;
    title: string;
    intro: ReactNode;
    heroImage?: string;
    heroImageAlt?: string;
    heroIcon?: string;
    whyTitle: string;
    whyImage?: string;
    whyImageAlt?: string;
    whyIcon?: string;
    whyText: ReactNode;
    covered: string[];
};

function kicker(text: string) {
    return (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-appPrimary">
            {text}
        </div>
    );
}

function iconPanel(icon: string) {
    return (
        <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-black/5 bg-linear-to-br from-appGray to-white shadow-lg sm:aspect-video">
            <Icon icon={icon} className="h-20 w-20 text-appPrimary sm:h-28 sm:w-28" />
        </div>
    );
}

function visual(image: string | undefined, alt: string | undefined, icon: string | undefined) {
    if (image) {
        return (
            <img
                src={image}
                alt={alt}
                className="w-full rounded-2xl border border-black/5 object-cover shadow-lg"
            />
        );
    }

    return iconPanel(icon ?? "material-symbols:shield-outline");
}

export default function InsurancePage({
    type,
    title,
    intro,
    heroImage,
    heroImageAlt,
    heroIcon,
    whyTitle,
    whyImage,
    whyImageAlt,
    whyIcon,
    whyText,
    covered,
}: InsurancePageProps) {
    const otherInsurances = allInsurances.filter((insurance) => insurance.key !== type);

    return (
        <div className="pt-28 sm:pt-30">
            <section className="mx-auto max-w-6xl px-3 sm:px-5">
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-linear-to-br from-white to-appGray shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col gap-8 p-6 sm:flex-row sm:items-center sm:gap-12 sm:p-14">
                        <div className="flex-1 fade-up-1s">
                            {kicker("OH GmbH · Versicherung")}
                            <h1 className={`${archivo.className} text-3xl sm:text-5xl bg-linear-to-r from-black from-35% via-appPrimary via-70% to-appPrimary bg-clip-text text-transparent`}>
                                {title}
                            </h1>
                            <div className="mt-4 text-base text-neutral-600 sm:text-lg">
                                {intro}
                            </div>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#anfrage"
                                    className="flex items-center gap-1.5 rounded-full bg-appPrimary px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm transition duration-300 hover:shadow-md hover:brightness-95"
                                >
                                    Jetzt Angebot anfragen
                                    <Icon icon="material-symbols:arrow-downward-rounded" className="h-4 w-4" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-bold text-neutral-800 transition duration-300 hover:bg-white hover:shadow-sm"
                                >
                                    Persönliche Beratung
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 fade-in-1s">
                            {visual(heroImage, heroImageAlt, heroIcon)}
                        </div>
                    </div>
                </div>
            </section>

            <section id="anfrage" className="mx-auto max-w-5xl scroll-mt-28 px-5 pt-14 sm:pt-20">
                <ProgressStore progressType={type} />
            </section>

            <motion.section
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-5xl px-5 py-14 sm:py-24"
            >
                {kicker("Gut zu wissen")}
                <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                    {whyTitle} <span className="text-appPrimary">wichtig ist.</span>
                </h2>
                <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
                    <div className="flex-1">
                        {visual(whyImage, whyImageAlt, whyIcon)}
                    </div>
                    <div className="flex-1 text-neutral-700 sm:text-lg">
                        {whyText}
                    </div>
                </div>
            </motion.section>

            <motion.section
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-6xl px-3 pb-14 sm:px-5"
            >
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-12">
                    {kicker("Leistungsumfang")}
                    <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                        Was ist eigentlich <span className="decoration-appPrimary underline underline-offset-8">versichert?</span>
                    </h2>
                    <div className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                        {covered.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <Icon
                                    icon="lets-icons:check-fill"
                                    className="mt-0.5 h-6 w-6 shrink-0 text-appPrimary"
                                />
                                <div className="text-neutral-700 sm:text-lg">
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-sm text-neutral-500">
                        Der genaue Leistungsumfang hängt vom gewählten Tarif ab.
                    </div>
                </div>
            </motion.section>

            <motion.section
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-6xl px-3 pb-16 sm:px-5 sm:pb-24"
            >
                {kicker("Weitere Versicherungen")}
                <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                    Noch mehr Schutz für dich.
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {otherInsurances.map((insurance) => (
                        <Link
                            key={insurance.key}
                            href={insurance.href}
                            className="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative h-28 overflow-hidden sm:h-40">
                                {insurance.image ? (
                                    <>
                                        <Image
                                            src={insurance.image}
                                            alt={`${insurance.label}-Versicherung`}
                                            fill
                                            sizes="(min-width: 640px) 25vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                                    </>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-appGray to-white">
                                        <Icon
                                            icon={insurance.icon ?? "material-symbols:shield-outline"}
                                            className="h-10 w-10 text-appPrimary transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-neutral-900">
                                {insurance.label}
                                <Icon
                                    icon="material-symbols:arrow-forward-rounded"
                                    className="h-4 w-4 shrink-0 text-appPrimary transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
