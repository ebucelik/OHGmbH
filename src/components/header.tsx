"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const rotatingWords = ["Versicherungs", "Finanzierungs", "Vermögens", "Energie"];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
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
        setMobileOpen(false);
    }

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${hidden && !mobileOpen ? "-translate-y-[130%]" : "translate-y-0"}`}
        >
            <div className="mx-auto max-w-6xl px-3 pt-3 sm:px-5">
                <div
                    className={`rounded-2xl border border-black/5 backdrop-blur-lg transition-all duration-300 ${mobileOpen ? "bg-white/95" : "bg-white/80"} ${scrolled || mobileOpen ? "shadow-[0_12px_40px_rgba(0,0,0,0.12)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"}`}
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
                            <Link
                                href="/team"
                                onClick={closeAll}
                                className="rounded-full px-4 py-2 text-[15px] font-semibold text-neutral-800 transition-colors duration-300 hover:bg-appGray/70"
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeAll}
                                className="rounded-full px-4 py-2 text-[15px] font-semibold text-neutral-800 transition-colors duration-300 hover:bg-appGray/70"
                            >
                                Kontakt
                            </Link>
                        </nav>

                        <Link
                            href="/contact"
                            onClick={closeAll}
                            aria-label="Beratung anfragen"
                            className="hidden items-center justify-center rounded-full bg-appPrimary h-11 w-11 shadow-sm transition duration-300 hover:shadow-md hover:brightness-95 md:flex"
                        >
                            <Icon icon="material-symbols:calendar-month-rounded" className="h-6 w-6 text-neutral-900" />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menü öffnen"
                            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-appGray/70 md:hidden"
                        >
                            <Icon
                                icon={mobileOpen ? "ri:close-line" : "ri:menu-3-line"}
                                className="h-7 w-7"
                            />
                        </button>
                    </div>

                    {mobileOpen && (
                        <div className="border-t border-black/5 px-5 pb-5 fade-in-05s md:hidden">
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
