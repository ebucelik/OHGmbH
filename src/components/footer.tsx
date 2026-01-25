import Image from "next/image";
import Divider from "./divider";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <footer className="relative z-1 overflow-y-hidden">
            <div className="py-5 flex place-content-center pb-5 sm:pb-10 px-10 sm:px-30 mt-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-x-100">
                    <div className="flex flex-col gap-1 text-sm sm:text-lg">
                        <div className="font-bold py-2 text-lg sm:text-xl">
                            Dienstleistungen
                        </div>

                        <div>
                            <Link href="/insurance/car" className="hover:text-appPrimary">Versicherungen</Link>
                        </div>

                        <div>
                            <Link href="/finance/homecredit" className="hover:text-appPrimary">Finanzierungen</Link>
                        </div>

                        <div>
                            <Link href="/energy/compare" className="hover:text-appPrimary">Strom & Gas Vergleich</Link>
                        </div>

                        <div>
                            <Link href="/contact" className="hover:text-appPrimary">Beratung vereinbaren</Link>
                        </div>

                        <div>
                            <Link href="/services" className="hover:text-appPrimary">Schaden melden</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm sm:text-lg">
                        <div className="font-bold py-2 text-lg sm:text-xl">
                            Rechtliche Hinweise
                        </div>

                        <div>
                            <Link href="/impressum" className="hover:text-appPrimary">Impressum</Link>
                        </div>

                        <div>
                            <Link href="/dataprotection" className="hover:text-appPrimary">Datenschutz</Link>
                        </div>

                        <div>
                            <Link href="/agb" className="hover:text-appPrimary">AGB</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm sm:text-lg">
                        <div className="font-bold py-2 text-lg sm:text-xl">
                            Soziale Medien
                        </div>

                        <div>
                            <Link href="https://www.instagram.com/oh_gmbh/?igsh=d3psbHd4MHRuY2Fz" target="_blank" className="hover:text-appPrimary">
                                <div className="flex flex-row gap-1 place-items-center">
                                    <Icon icon="mdi:instagram" className="h-5 w-5" />
                                    <div>
                                        Instagram
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link href="https://www.linkedin.com/in/harald-otto-658478284/" target="_blank" className="hover:text-appPrimary">
                                <div className="flex flex-row gap-1 place-items-center">
                                    <Icon icon="mdi:linkedin" className="h-5 w-5" />
                                    <div>
                                        LinkedIn
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm sm:text-lg">
                        <div className="font-bold py-2 text-lg sm:text-xl">
                            Kontakt
                        </div>

                        <div>
                            <Link href="mailto:office@oh-gmbh.at" className="hover:text-appPrimary">office@oh-gmbh.at</Link>
                        </div>

                        <div>
                            <Link href="tel:+43 664 1817109" className="hover:text-appPrimary">+43 664 1817109</Link>
                        </div>
                        <div>
                            <Link href="/contact" className="hover:text-appPrimary">Kontaktformular</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm sm:text-lg">
                        <div className="font-bold py-2 text-lg sm:text-xl">
                            Öffnungszeiten
                        </div>

                        <div>
                            Montag - Freitag
                        </div>

                        <div>
                            09:00 - 17:00 Uhr
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:absolute top-25 w-full -z-1 sm:flex flex-row place-content-center place-items-end">
                <Image
                    src="/bglogo.svg"
                    alt="OH GmbH Logo"
                    width={300}
                    height={300}
                    priority
                    className="opacity-20 grayscale w-325"
                />
            </div>
            <Divider />
            <div className="flex place-content-center text-xs text-gray-500 pb-5 sm:pb-10">
                <div className="flex flex-col gap-1">
                    <div>
                        © 2025 OH GmbH. Alle Rechte vorbehalten
                    </div>
                    <div>
                        © Branding und technische Umsetzung <span className="underline underline-offset-2">
                            <Link href="https://ebucelik.dev" target="_blank" className="hover:text-appPrimary">ebucelik.dev</Link>
                        </span>.
                    </div>
                </div>
            </div>
        </footer>
    );
}