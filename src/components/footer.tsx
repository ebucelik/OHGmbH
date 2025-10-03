import Image from "next/image";
import Divider from "./divider";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-15 sm:py-25 px-10 sm:px-30">
            <div className="flex place-content-center">
                <div className="flex flex-row gap-10 sm:gap-20">
                    <div className="hidden sm:flex sm:flex-col place-content-center">
                        <Image
                            src="/ohlogo.svg"
                            alt="OH GmbH Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-20">
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
                                Dienstleistungen
                            </div>

                            <div>
                                <Link href="">Versicherungen</Link>
                            </div>

                            <div>
                                <Link href="">Finanzierungen</Link>
                            </div>

                            <div>
                                <Link href="">Strom & Gas</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Kontakt
                            </div>

                            <div>
                                <Link href="">haraldotto@oh.at</Link>
                            </div>

                            <div>
                                <Link href="">manuelholzmann@oh.at</Link>
                            </div>

                            <div>
                                <Link href="">+43 664 1817109</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Im Notfall
                            </div>

                            <div>
                                24/7 telefonisch erreichbar
                            </div>
                            <div>
                                <Link href="">+43 664 1817109</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="font-bold py-2 sm:text-lg">
                                Rechtliches
                            </div>

                            <div>
                                <Link href="">Impressum</Link>
                            </div>

                            <div>
                                <Link href="">Datenschutz</Link>
                            </div>

                            <div>
                                <Link href="">AGB</Link>
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
                            <Link href="">OC GmbH</Link>
                        </span>.
                    </div>
                </div>
            </div>
        </footer>
    );
}