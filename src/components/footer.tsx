import Image from "next/image";
import Divider from "./divider";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <footer className="pb-5 sm:pb-10 px-10 sm:px-30">
            <div className="py-15 sm:py-25 flex place-content-center">
                <div className="flex flex-row gap-10 sm:gap-20">
                    <div className="hidden sm:flex sm:flex-col place-content-center">
                        <Link href="/">
                            <Image
                                src="/ohlogo.svg"
                                alt="OH GmbH Logo"
                                width={150}
                                height={150}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10">
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Dienstleistungen
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Versicherungen</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Finanzierungen</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Strom & Gas Vergleich</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Beratung vereinbaren</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Schaden melden</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Kontakt
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">office@oh-gmbh.at</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">+43 664 1817109</Link>
                            </div>
                            <div>
                                <Link href="" className="hover:text-appPrimary">Kontaktformular</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Öffnungszeiten
                            </div>

                            <div>
                                Montag - Freitag
                            </div>

                            <div>
                                09:00 - 17:00 Uhr
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Rechtliche Hinweise
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Impressum</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">Datenschutz</Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">AGB</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Soziale Medien
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">
                                    <div className="flex flex-row gap-1">
                                        <Icon icon="mdi:instagram" className="h-5 w-5" />
                                        <div>
                                            Instagram
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">
                                    <div className="flex flex-row gap-1">
                                        <Icon icon="mdi:youtube" className="h-5 w-5" />
                                        <div>
                                            YouTube
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <Link href="" className="hover:text-appPrimary">
                                    <div className="flex flex-row gap-1">
                                        <Icon icon="mdi:linkedin" className="h-5 w-5" />
                                        <div>
                                            LinkedIn
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex place-content-center text-xs text-gray-500">
                <div className="flex flex-col gap-1">
                    <div>
                        © 2025 OH GmbH. Alle Rechte vorbehalten
                    </div>
                    <div>
                        © Branding und technische Umsetzung <span className="underline underline-offset-2">
                            <Link href="" className="hover:text-appPrimary">OC GmbH</Link>
                        </span>.
                    </div>
                </div>
            </div>
        </footer>
    );
}