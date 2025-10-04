"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";

export default function Header() {
    enum Menu {
        solution = "Lösungen",
        service = "Leistungen",
        team = "Team",
        contact = "Kontakt",
        default = ""
    }
    const [showNavBar, setShowNavBar] = useState(false);
    const [hideHeaderWhileScrollingDown, setHideHeaderWhileScrollingDown] = useState("sm:translate-y-0");
    const [menu, setMenu] = useState(Menu.default);

    var previousScrollY = 0

    function toggleShowNavBar() {
        setMenu(Menu.default);
        setShowNavBar(!showNavBar);
    }

    React.useEffect(() => {
        window.addEventListener("wheel", (event) => {
            if (event.deltaY > 0) {
                setHideHeaderWhileScrollingDown("sm:-translate-y-100");
            } else {
                setHideHeaderWhileScrollingDown("sm:translate-y-0");
            }
        })

        window.addEventListener("scroll", () => {
            if (innerWidth < 768) {
                if (previousScrollY > scrollY || scrollY <= 0) {
                    setHideHeaderWhileScrollingDown("sm:translate-y-0");
                } else {
                    setHideHeaderWhileScrollingDown("sm:-translate-y-100");
                }
            }

            previousScrollY = scrollY
        })
    }, []);

    function menuBody(): ReactElement {
        return <div
            className={`flex flex-col sm:flex-row sm:block ${menu == Menu.default ? 'hidden' : 'pt-5'}`}
            onMouseEnter={() => setMenu(menu)}
            onMouseLeave={() => setMenu(Menu.default)}
        >
            <div className="flex flex-row sm:hidden" onClick={() => setMenu(Menu.default)}>
                <div>
                    <Icon icon="material-symbols:chevron-left-rounded" className="h-8 w-8" />
                </div>
                <div className="text-xs place-content-center">
                    {
                        menu
                    }
                </div>
            </div>

            {
                menuBodies()
            }
        </div>;
    }

    function menuBodies(): ReactElement {
        switch (menu) {
            case Menu.solution:
                return <div className="flex flex-col sm:flex-row fade-in-05s gap-1 sm:gap-10">
                    <div className="sm:flex-1"></div>
                    <div className="flex-2">
                        <div className="font-bold sm:text-lg">
                            Versicherungen
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Mobilität
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Auto
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Motorrad
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Fahrrad
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Wohnung
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Eigenheim
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Haushalt
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Sicherheit
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Unfall
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Berufsunfähigkeit
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Ableben
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Gesundheit
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Krankenvers.
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Unfall
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Recht
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Rechtsschutz
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Freizeit
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Reise
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Unfall
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Fahrrad
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="font-bold sm:text-lg">
                            Finanzierungen
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Klassisch
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Wohnbaukredit
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Konsumkredit
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Leasing
                                    </Link>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="font-bold pb-2">
                                    Speziell
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Umschuldung
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="font-bold sm:text-lg">
                            Strom & Gas
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="py-2">
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Tarifvergleich
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Wechsel des Anbieters
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" className="hover:text-appPrimary">
                                        Öko-Tarife
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            default:
                return <div></div>;
        };
    }

    return (
        <nav className={`${hideHeaderWhileScrollingDown} sticky top-0 z-10 mb-5 easeIn transition duration-300 opacity-95`}>
            <div className="w-full p-5 rounded-b-2xl bg-white border-b-1 border-gray-200 shadow-lg fade-down-1s">
                <div className="flex flex-row">
                    <div className="flex-2 font-bold">
                        <Link href="/">
                            <div className="flex sm:flex-col-2 gap-1 sm:gap-3">
                                <Image
                                    src="/ohlogo.svg"
                                    alt="OH GmbH Logo"
                                    width={80}
                                    height={80}
                                    priority
                                />
                                <div className="content-center">
                                    <p className="text-xl sm:text-3xl">
                                        OH GmbH
                                    </p>
                                    <span className="flex flex-row">
                                        <div className="window">
                                            <div className="flex flex-col window-inner overflow-hidden text-right">
                                                <div className="text-lg sm:text-xl">
                                                    Versicherungs
                                                </div>
                                                <div className="text-lg sm:text-xl">
                                                    Finanzierungs
                                                </div>
                                                <div className="text-lg sm:text-xl">
                                                    Energie
                                                </div>
                                                <div aria-hidden className="text-lg sm:text-xl">
                                                    Versicherungs
                                                </div>
                                                <div aria-hidden className="text-lg sm:text-xl">
                                                    Finanzierungs
                                                </div>
                                                <div aria-hidden className="text-lg sm:text-xl">
                                                    Energie
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-lg sm:text-xl text-appPrimary">
                                            makler
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden mx-auto w-2/4 sm:flex flex-row text-xl font-bold text-center">
                        <div
                            className={`flex-1 decoration-appPrimary content-center rounded-lg duration-500 cursor-pointer ${menu == Menu.solution ? 'decoration-3 underline underline-offset-7 scale-104' : ''}`}
                            onMouseEnter={() => setMenu(Menu.solution)}
                            onMouseLeave={() => setMenu(Menu.default)}
                        >
                            Lösungen
                        </div>
                        <div
                            className={`flex-1 decoration-appPrimary content-center rounded-lg duration-500 cursor-pointer ${menu == Menu.service ? 'decoration-3 underline underline-offset-7 scale-104' : ''}`}
                            onMouseEnter={() => setMenu(Menu.service)}
                            onMouseLeave={() => setMenu(Menu.default)}
                        >
                            Leistungen
                        </div>
                        <div
                            className={`flex-1 decoration-appPrimary content-center rounded-lg duration-500 cursor-pointer ${menu == Menu.team ? 'decoration-3 underline underline-offset-7 scale-104' : ''}`}
                            onMouseEnter={() => setMenu(Menu.team)}
                            onMouseLeave={() => setMenu(Menu.default)}
                        >
                            Team
                        </div>
                        <div
                            className={`flex-1 decoration-appPrimary content-center rounded-lg duration-500 cursor-pointer ${menu == Menu.contact ? 'decoration-3 underline underline-offset-7 scale-104' : ''}`}
                            onMouseEnter={() => setMenu(Menu.contact)}
                            onMouseLeave={() => setMenu(Menu.default)}
                        >
                            Kontakt
                        </div>
                    </div>
                    <div className="block content-center sm:hidden" onClick={toggleShowNavBar}>
                        <Icon icon="ri:menu-3-line" className="h-10 w-10" />
                    </div>
                </div>
                <div className="hidden sm:block">
                    {
                        menuBody()
                    }
                </div>
                <div className={`fade-in-05s flex flex-col gap-3 pt-5 sm:hidden text-lg font-bold text-left ${showNavBar ? 'block' : 'hidden'} ${menu != Menu.default ? 'hidden' : ''}`}>
                    <div
                        className={`decoration-appPrimary content-center rounded-lg ${menu == Menu.solution ? 'decoration-3 underline underline-offset-7' : ''}`}
                        onClick={() => setMenu(menu != Menu.solution ? Menu.solution : Menu.default)}
                    >
                        <Link href="">Lösungen</Link>
                    </div>
                    <div
                        className={`decoration-appPrimary content-center rounded-lg ${menu == Menu.service ? 'decoration-3 underline underline-offset-7' : ''}`}
                        onClick={() => setMenu(menu != Menu.service ? Menu.service : Menu.default)}
                    >
                        <Link href="">Leistungen</Link>
                    </div>
                    <div
                        className={`decoration-appPrimary content-center rounded-lg ${menu == Menu.team ? 'decoration-3 underline underline-offset-7' : ''}`}
                        onClick={() => setMenu(menu != Menu.team ? Menu.team : Menu.default)}
                    >
                        <Link href="">Team</Link>
                    </div>
                    <div
                        className={`decoration-appPrimary content-center rounded-lg ${menu == Menu.contact ? 'decoration-3 underline underline-offset-7' : ''}`}
                        onClick={() => setMenu(menu != Menu.contact ? Menu.contact : Menu.default)}
                    >
                        <Link href="">Kontakt</Link>
                    </div>
                </div>
                <div className="sm:hidden">
                    {
                        menuBody()
                    }
                </div>
            </div>
        </nav>
    );
}