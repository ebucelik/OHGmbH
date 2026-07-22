"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type MenuKey = "solution" | "service";

type LinkItem = { label: string; href: string; external?: boolean };
type LinkGroup = { title?: string; links: LinkItem[] };
type MegaSection = { title: string; groups: LinkGroup[] };

const rotatingWords = ["Versicherungs", "Finanzierungs", "Vermögens", "Energie"];

const solutionSections: MegaSection[] = [
    {
        title: "Versicherungen",
        groups: [
            {
                title: "Mobilität",
                links: [
                    { label: "Auto", href: "/insurance/car" },
                    { label: "LKW", href: "/insurance/lkw" },
                    { label: "Motorrad", href: "/insurance/motorcycle" },
                    { label: "Moped", href: "/insurance/moped" },
                ],
            },
            {
                title: "Wohnen",
                links: [
                    { label: "Eigenheim", href: "/insurance/ownhome" },
                    { label: "Haushalt", href: "/insurance/flat" },
                ],
            },
            {
                title: "Sicherheit",
                links: [
                    { label: "Krankenversicherung", href: "/info" },
                    { label: "Berufsunfähigkeit", href: "/info" },
                    { label: "Unfall", href: "/insurance/accident" },
                    { label: "Ableben", href: "/info" },
                ],
            },
            {
                title: "Recht",
                links: [
                    { label: "Rechtsschutz", href: "/insurance/law" },
                ],
            },
        ],
    },
    {
        title: "Finanzierungen",
        groups: [
            {
                links: [
                    { label: "Wohnbaukredit", href: "/finance/homecredit" },
                    { label: "Umschuldung", href: "/finance/debtrestructing" },
                ],
            },
        ],
    },
    {
        title: "Vermögensaufbau",
        groups: [
            {
                links: [
                    { label: "Investment-Service", href: "/investment/investmentservice" },
                    { label: "Gewinnfreibetrag", href: "/investment/profitallowance" },
                ],
            },
        ],
    },
    {
        title: "Strom & Gas",
        groups: [
            {
                links: [
                    { label: "Tarifvergleich", href: "/info" },
                    { label: "Wechsel des Anbieters", href: "/info" },
                    { label: "Öko-Tarife", href: "/info" },
                ],
            },
        ],
    },
];

const serviceSections: MegaSection[] = [
    {
        title: "Schadenmeldung",
        groups: [
            {
                links: [
                    { label: "KFZ-Schaden", href: "/services" },
                    { label: "Haushaltsschaden", href: "/services" },
                ],
            },
        ],
    },
    {
        title: "Digitale Leistungen",
        groups: [
            {
                links: [
                    { label: "KFZ-Versichererauskunft", href: "/services/kfz-versichererauskunft" },
                    { label: "WeFox (fixApp)", href: "https://www.wefox.at/fix-app", external: true },
                ],
            },
        ],
    },
];

export default function Header() {
    const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let previousY = window.scrollY;

        function onScroll() {
            const y = window.scrollY;
            setScrolled(y > 8);
            setHidden(y > previousY && y > 120);
            previousY = y;
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function closeAll() {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
    }

    function toggleMobile() {
        setMobileSection(null);
        setMobileOpen(!mobileOpen);
    }

    function menuLink(link: LinkItem) {
        return (
            <Link
                key={link.label}
                href={link.href}
                onClick={closeAll}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block py-0.5 text-[15px] text-neutral-600 transition-colors hover:text-black hover:underline underline-offset-4 decoration-2 decoration-appPrimary"
            >
                {link.label}
            </Link>
        );
    }

    function sectionTitle(title: string) {
        return (
            <div className="mb-3 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-appPrimary">
                {title}
            </div>
        );
    }

    function megaPanel(key: MenuKey) {
        const sections = key === "solution" ? solutionSections : serviceSections;
        const [first, ...rest] = sections;

        return (
            <div className="grid grid-cols-12 gap-8 px-8 py-7 fade-in-05s">
                <div className={key === "solution" ? "col-span-5" : "col-span-4"}>
                    {sectionTitle(first.title)}
                    <div className={`grid gap-x-8 gap-y-5 ${first.groups.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {first.groups.map((group) => (
                            <div key={group.title ?? first.title}>
                                {group.title && (
                                    <div className="mb-1.5 text-sm font-semibold text-neutral-900">
                                        {group.title}
                                    </div>
                                )}
                                {group.links.map(menuLink)}
                            </div>
                        ))}
                    </div>
                </div>
                {rest.map((section, index) => (
                    <div key={section.title} className={key === "solution" ? (index === 0 ? "col-span-3" : "col-span-2") : "col-span-4"}>
                        {sectionTitle(section.title)}
                        {section.groups.map((group, i) => (
                            <div key={group.title ?? i}>
                                {group.links.map(menuLink)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    function desktopTrigger(key: MenuKey, label: string) {
        const active = openMenu === key;
        return (
            <button
                type="button"
                onMouseEnter={() => setOpenMenu(key)}
                onClick={() => setOpenMenu(active ? null : key)}
                className={`flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-300 ${active ? "bg-appGray text-black" : "text-neutral-800 hover:bg-appGray/70"}`}
            >
                {label}
                <Icon
                    icon="material-symbols:keyboard-arrow-down-rounded"
                    className={`h-5 w-5 text-appPrimary transition-transform duration-300 ${active ? "rotate-180" : ""}`}
                />
            </button>
        );
    }

    function mobileAccordion(key: MenuKey, label: string) {
        const open = mobileSection === key;
        const sections = key === "solution" ? solutionSections : serviceSections;

        return (
            <div className="border-b border-black/5">
                <button
                    type="button"
                    onClick={() => setMobileSection(open ? null : key)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-neutral-900"
                >
                    {label}
                    <Icon
                        icon="material-symbols:keyboard-arrow-down-rounded"
                        className={`h-6 w-6 text-appPrimary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                </button>
                {open && (
                    <div className="flex flex-col gap-5 pb-4 fade-in-05s">
                        {sections.map((section) => (
                            <div key={section.title}>
                                {sectionTitle(section.title)}
                                <div className="flex flex-col gap-4">
                                    {section.groups.map((group, index) => (
                                        <div key={group.title ?? index}>
                                            {group.title && (
                                                <div className="mb-1 text-sm font-semibold text-neutral-900">
                                                    {group.title}
                                                </div>
                                            )}
                                            {group.links.map(menuLink)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${hidden && !mobileOpen && openMenu === null ? "-translate-y-[130%]" : "translate-y-0"}`}
        >
            <div className="mx-auto max-w-6xl px-3 pt-3 sm:px-5">
                <div
                    onMouseLeave={() => setOpenMenu(null)}
                    className={`rounded-2xl border border-black/5 backdrop-blur-lg transition-all duration-300 ${mobileOpen || openMenu !== null ? "bg-white/95" : "bg-white/80"} ${scrolled || mobileOpen || openMenu !== null ? "shadow-[0_12px_40px_rgba(0,0,0,0.12)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"}`}
                >
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:h-18">
                        <Link href="/" onClick={closeAll} className="flex items-center gap-2.5">
                            <Image
                                src="/ohlogo.svg"
                                alt="OH GmbH Logo"
                                width={44}
                                height={44}
                                priority
                            />
                            <div className="leading-tight">
                                <div className="text-lg font-bold tracking-tight text-neutral-900">
                                    OH GmbH
                                </div>
                                <div className="hidden text-sm font-medium sm:flex">
                                    <div className="tagline-window grow">
                                        <div className="tagline-inner bg-linear-to-r from-black to-appPrimary bg-clip-text text-transparent">
                                            {[...rotatingWords, ...rotatingWords].map((word, index) => (
                                                <div
                                                    key={index}
                                                    aria-hidden={index >= rotatingWords.length}
                                                    className="h-5 leading-5"
                                                >
                                                    {word}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="leading-5 text-appPrimary">berater</span>
                                </div>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-1 md:flex">
                            {desktopTrigger("solution", "Lösungen")}
                            {desktopTrigger("service", "Leistungen")}
                            <Link
                                href="/team"
                                onClick={closeAll}
                                onMouseEnter={() => setOpenMenu(null)}
                                className="rounded-full px-4 py-2 text-[15px] font-semibold text-neutral-800 transition-colors duration-300 hover:bg-appGray/70"
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeAll}
                                onMouseEnter={() => setOpenMenu(null)}
                                className="rounded-full px-4 py-2 text-[15px] font-semibold text-neutral-800 transition-colors duration-300 hover:bg-appGray/70"
                            >
                                Kontakt
                            </Link>
                        </nav>

                        <Link
                            href="/contact"
                            onClick={closeAll}
                            className="hidden items-center gap-1.5 rounded-full bg-appPrimary px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm transition duration-300 hover:shadow-md hover:brightness-95 md:flex"
                        >
                            Beratung anfragen
                            <Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" />
                        </Link>

                        <button
                            type="button"
                            onClick={toggleMobile}
                            aria-label="Menü öffnen"
                            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-appGray/70 md:hidden"
                        >
                            <Icon
                                icon={mobileOpen ? "ri:close-line" : "ri:menu-3-line"}
                                className="h-7 w-7"
                            />
                        </button>
                    </div>

                    {openMenu !== null && (
                        <div className="hidden border-t border-black/5 md:block">
                            {megaPanel(openMenu)}
                        </div>
                    )}

                    {mobileOpen && (
                        <div className="max-h-[75vh] overflow-y-auto border-t border-black/5 px-5 pb-5 fade-in-05s md:hidden">
                            {mobileAccordion("solution", "Lösungen")}
                            {mobileAccordion("service", "Leistungen")}
                            <Link
                                href="/team"
                                onClick={closeAll}
                                className="block border-b border-black/5 py-3 text-base font-semibold text-neutral-900"
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeAll}
                                className="block border-b border-black/5 py-3 text-base font-semibold text-neutral-900"
                            >
                                Kontakt
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeAll}
                                className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-appPrimary px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm"
                            >
                                Beratung anfragen
                                <Icon icon="material-symbols:arrow-forward-rounded" className="h-4 w-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
