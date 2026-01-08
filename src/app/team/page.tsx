import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
    {
        name: "Harald Otto",
        role: "Geschäftsführer & Gründer",
        image: "/harry.webp",
        email: "office@oh-gmbh.at",
        linkedin: "https://www.linkedin.com/in/harald-otto-658478284/",
        phone: "+43 664 4113339",
        certifications: [
            "Staatlich geprüfter Versicherungsmakler",
            "Unabhängige Versicherungsberatung",
            "Risikoanalyse für Privat- & Firmenkunden"
        ]
    },
    {
        name: "Manuel Holzmann",
        role: "Geschäftsführer & Gründer",
        image: "/manuel.webp",
        email: "office@oh-gmbh.at",
        linkedin: "https://www.linkedin.com/in/manuel-holzmann-076519270/",
        phone: "+43 664 1519170",
        certifications: [
            "Zertifizierter Vermögensberater",
            "Ganzheitliche Finanz- & Investmentstrategien",
            "Individuelle Finanzierungsberatung"
        ]
    }
];

export default function Team() {
    return <div className="pt-30">
        <section className="relative bg-gray-50 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Unser Team
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir sind ein eingespieltes Team aus spezialisierten Expert:innen, das fachliche Kompetenz, langjährige Erfahrung und persönliches Engagement vereint. Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die genau auf die individuellen Bedürfnisse und Ziele unserer Kund:innen abgestimmt sind. Dabei legen wir großen Wert auf transparente Beratung, nachhaltige Strategien und eine vertrauensvolle Zusammenarbeit – als verlässlicher Partner in den Bereichen Versicherung, Vermögen und Finanzierung.
                </p>
            </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
            <div className="mx-auto px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-center gap-10">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group relative w-full sm:w-1/3 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Bild */}
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Infos */}
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-appPrimary font-medium mt-1">{member.role}</p>

                                <div className="flex flex-col place-items-center mt-6">
                                    <div className="flex flex-col">
                                        {member.certifications.map((certification) => (
                                            <div key={certification} className="flex text-xs sm:text-lg items-center gap-2 text-gray-700">
                                                <Icon icon="ph:seal-check-fill" className="h-5 w-5 text-appPrimary" />
                                                {certification}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 text-xs lg:text-sm place-items-start sm:place-items-center gap-2 mt-6">
                                    <Link
                                        href={`mailto:${member.email}`}
                                        className="text-gray-600 hover:text-appPrimary transition"
                                        aria-label="E-Mail"
                                    >
                                        <div className="flex flex-row gap-1 place-items-center">
                                            <Icon icon="material-symbols:mail" className="h-5 w-5" />
                                            <div>
                                                office@oh-gmbh.at
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        href={`tel:${member.phone}`}
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-appPrimary transition"
                                        aria-label="Telefonnummer"
                                    >
                                        <div className="flex flex-row gap-1 place-items-center">
                                            <Icon icon="mdi:phone" className="h-5 w-5" />
                                            <div>
                                                {member.phone}
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-appPrimary transition"
                                        aria-label="LinkedIn"
                                    >
                                        <div className="flex flex-row gap-1 place-items-center">
                                            <Icon icon="mdi:linkedin" className="h-5 w-5" />
                                            <div>
                                                LinkedIn
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-5 place-items-start mt-20 sm:mx-30 lg:mx-70">
                    <div className="text-lg sm:text-2xl">
                        Unsere GISA Zahlen
                    </div>

                    <div className="flex flex-col gap-2">
                        <div>
                            <b>38712760</b>
                        </div>

                        <div>
                            Versicherungsvermittlung in der Form Versicherungsmakler und Beratung in Versicherungsangelegenheiten
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <b>38781612</b>
                        </div>

                        <div>
                            Vermittlung von Werk- und Dienstleistungsverträgen an Befugte unter Ausschluss der Übernahme von
                            Aufträgen im eigenen Namen und auf eigene Rechnung sowie ausgenommen der den
                            Immobilientreuhändern, Reisebüros, Transportagenten, Spediteuren, Vermögensberatern,
                            Versicherungsvermittlern und Wertpapiervermittlern vorbehaltenen Tätigkeiten
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <b>38923609</b>
                        </div>

                        <div>
                            Gewerbliche Vermögensberatung mit Berechtigung nach § 1 Z 44 WAG 2018 als vertraglich
                            gebundener Vermittler ohne Berechtigung zur Vermittlung von Lebens- und Unfallversicherungen
                            Berechtigung zu Tätigkeiten der ungebundenen Kreditvermittlung
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}