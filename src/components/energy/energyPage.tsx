import * as motion from "motion/react-client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import { archivo } from "../../app/layout";

type EnergyInfo = {
    key: string;
    label: string;
    href: string;
};

const allEnergyPages: EnergyInfo[] = [
    { key: "compare", label: "Tarifvergleich", href: "/energy/compare" },
    { key: "eco", label: "Öko-Tarife", href: "/energy/eco" },
    { key: "switch", label: "Anbieterwechsel", href: "/energy/switch" },
];

type EnergyStep = { icon: string; title: string; text: string };

type EnergyPageProps = {
    pageKey: string;
    title: string;
    intro: ReactNode;
    steps: EnergyStep[];
    benefits: string[];
    ctaNote: string;
};

function kicker(text: string) {
    return (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-appPrimary">
            {text}
        </div>
    );
}

export default function EnergyPage({ pageKey, title, intro, steps, benefits, ctaNote }: EnergyPageProps) {
    const otherPages = allEnergyPages.filter((page) => page.key !== pageKey);
    const contactHref = `/contact?note=${encodeURIComponent(ctaNote)}`;

    return (
        <div className="pt-28 sm:pt-30">
            <section className="mx-auto max-w-6xl px-3 sm:px-5">
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-linear-to-br from-white to-appGray shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col gap-8 p-6 sm:flex-row sm:items-center sm:gap-12 sm:p-14">
                        <div className="flex-1 fade-up-1s">
                            {kicker("OH GmbH · Strom & Gas")}
                            <h1 className={`${archivo.className} text-3xl sm:text-5xl bg-linear-to-r from-black from-35% via-appPrimary via-70% to-appPrimary bg-clip-text text-transparent`}>
                                {title}
                            </h1>
                            <div className="mt-4 text-base text-neutral-600 sm:text-lg">
                                {intro}
                            </div>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href={contactHref}
                                    className="flex items-center gap-1.5 rounded-full bg-appPrimary px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm transition duration-300 hover:shadow-md hover:brightness-95"
                                >
                                    Jetzt Angebot anfragen
                                    <Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 fade-in-1s">
                            <img
                                src="/electric.webp"
                                alt="Strom- und Gasversorgung."
                                className="w-full rounded-2xl border border-black/5 object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <motion.section
                transition={{ duration: 0.5, ease: "circOut" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-5xl px-5 py-14 sm:py-24"
            >
                {kicker("So einfach geht's")}
                <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                    In wenigen Schritten <span className="text-appPrimary">zum besten Tarif.</span>
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={step.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                            <div className="flex items-center gap-2 text-appPrimary">
                                <Icon icon={step.icon} className="h-8 w-8" />
                                <span className="text-sm font-bold uppercase tracking-wider text-neutral-400">Schritt {index + 1}</span>
                            </div>
                            <div className="mt-3 text-lg font-bold text-neutral-900">{step.title}</div>
                            <div className="mt-1 text-neutral-600">{step.text}</div>
                        </div>
                    ))}
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
                    {kicker("Deine Vorteile")}
                    <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                        Was du <span className="decoration-appPrimary underline underline-offset-8">davon hast.</span>
                    </h2>
                    <div className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                        {benefits.map((item) => (
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
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href={contactHref}
                            className="flex items-center gap-1.5 rounded-full bg-appPrimary px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm transition duration-300 hover:shadow-md hover:brightness-95"
                        >
                            Jetzt Angebot anfragen
                            <Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" />
                        </Link>
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
                {kicker("Weitere Themen")}
                <h2 className={`${archivo.className} text-2xl text-neutral-900 sm:text-4xl`}>
                    Rund um Strom & Gas.
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {otherPages.map((page) => (
                        <Link
                            key={page.key}
                            href={page.href}
                            className="group flex items-center justify-between gap-2 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                        >
                            <span className="text-lg font-semibold text-neutral-900">{page.label}</span>
                            <Icon
                                icon="material-symbols:arrow-forward-rounded"
                                className="h-5 w-5 shrink-0 text-appPrimary transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
