"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";

export default function Header() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [hideHeaderWhileScrollingDown, setHideHeaderWhileScrollingDown] = useState("translate-y-0");
    var previousScrollY = 0

    function toggleShowNavBar() {
        setShowNavBar(!showNavBar);
    }

    React.useEffect(() => {
        window.addEventListener("wheel", (event) => {
            if (event.deltaY > 0) {
                setHideHeaderWhileScrollingDown("-translate-y-100");
            } else {
                setHideHeaderWhileScrollingDown("translate-y-0");
            }
        })

        window.addEventListener("scroll", () => {
            if (innerWidth < 768) {
                if (previousScrollY > scrollY || scrollY <= 0) {
                    setHideHeaderWhileScrollingDown("translate-y-0");
                } else {
                    setHideHeaderWhileScrollingDown("-translate-y-100");
                }
            }

            previousScrollY = scrollY
        })
    }, []);

    return (
        <nav className={`${hideHeaderWhileScrollingDown} sticky top-0 z-10 mb-5 transition duration-300 opacity-95`}>
            <div className="w-full p-5 rounded-b-2xl bg-white border-b-1 border-gray-200 shadow-lg fade-down-1s">
                <div className="flex flex-row">
                    <div className="flex-2 font-bold">
                        <div className="flex sm:flex-col-2 sm:gap-3">
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
                    </div>
                    <div className="hidden mx-auto w-2/4 sm:flex flex-row text-xl font-bold text-center">
                        <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                            <Link href="">Büros</Link>
                        </div>
                        <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                            <Link href="">Lösungen</Link>
                        </div>
                        <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                            <Link href="/services">Leistungen</Link>
                        </div>
                        <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                            <Link href="">Team</Link>
                        </div>
                    </div>
                    <div className="block content-center sm:hidden" onClick={toggleShowNavBar}>
                        <Icon icon="ri:menu-3-line" className="h-10 w-10" />
                    </div>
                </div>
                <div className={`fade-in-1s mx-auto w-2/4 pt-5 sm:hidden text-lg font-bold text-center ${showNavBar ? 'block' : 'hidden'}`}>
                    <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                        <Link href="">Büros</Link>
                    </div>
                    <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                        <Link href="">Lösungen</Link>
                    </div>
                    <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                        <Link href="/services">Leistungen</Link>
                    </div>
                    <div className="flex-1 decoration-appPrimary decoration-3 hover:underline hover:underline-offset-7 content-center rounded-lg">
                        <Link href="">Team</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}