"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
    const [showNavBar, setShowNavBar] = useState(false);

    function toggleShowNavBar() {
        setShowNavBar(!showNavBar);
    }

    return (
        <nav className="m-5 sticky top-0 z-10">
            <div className="w-full p-5 rounded-md bg-white border-1 shadow-xl fade-down-1s">
                <div className="flex flex-row">
                    <div className="flex-2 font-bold">
                        <div className="sm:flex sm:flex-col-2 gap-3">
                            <Image
                                className="rounded-md hidden sm:block"
                                src="/haraldotto_logo.svg"
                                alt="Harald Otto Logo"
                                width={70}
                                height={70}
                                priority
                            />
                            <div className="content-center">
                                <p className="text-xl sm:text-3xl">
                                    Harald Otto
                                </p>
                                <div className="flex flex-row">
                                    <p className="text-sm sm:text-xl">
                                        Versicherungs
                                    </p>
                                    <p className="text-sm sm:text-xl text-appPrimary">
                                        makler
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden mx-auto w-2/4 sm:flex flex-row text-lg font-bold text-center">
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