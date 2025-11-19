import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
    {
        name: "Harald Otto",
        role: "Geschäftsführer & Gründer",
        image: "/haraldotto1.webp",
        email: "office@oh-gmbh.at",
        linkedin: "",
    },
    {
        name: "Manuel Holzmann",
        role: "Geschäftsführer & Gründer",
        image: "/holzmannmanuel.png",
        email: "office@oh-gmbh.at",
        linkedin: "",
    }
];

export default function Team() {
    return <div>
        <section className="relative bg-gray-50 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Unser Team
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir sind ein eingespieltes Team aus Experten, die mit Leidenschaft
                    und Präzision an deinen Projekten arbeiten.
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Infos */}
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-appPrimary font-medium mt-1">{member.role}</p>

                                {/* Social Links */}
                                <div className="flex justify-center gap-4 mt-6">
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
            </div>
        </section>
    </div>
}