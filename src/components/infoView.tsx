import { defaultPadding } from "../shared/style";
import { radley } from "../app/layout";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function InfoView() {
    return <div className={`${defaultPadding} flex flex-col gap-5 justify-center text-center`}>
        <div className={`text-2xl sm:text-6xl ${radley.className} font-bold`}>
            Seite nicht gefunden
        </div>
        <div className="text-sm sm:text-xl">
            Diese Seite existiert nicht mehr. Bitte nutze unsere Navigation um die gewünschten Informationen zu finden.
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
            <div className="hover:scale-101 duration-500">
                <Link href="/energy/compare">
                    <div className="relative">
                        <img src="/energyCompareInitial.webp" alt="Strom & Gas Vergleich" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                        <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                            <div className="text-lg text-center">
                                Strom & Gas Vergleich
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="hover:scale-101 duration-500">
                <Link href="/insurance/life">
                    <div className="relative">
                        <img src="/lifeInsuranceInitial.webp" alt="Lebens-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                        <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                            <div className="text-lg text-center">
                                Lebens-Versicherung
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="hover:scale-101 duration-500">
                <Link href="/insurance/health">
                    <div className="relative">
                        <img src="/healthInsuranceInitial.webp" alt="Kranken-Versicherung" className="object-cover rounded-2xl shadow-xl shadow-gray-600 h-50 sm:h-80 w-50 sm:w-80" />
                        <div className="absolute p-3 bottom-0 left-0 flex flex-col text-white w-full backdrop-blur-md rounded-b-xl">
                            <div className="text-lg text-center">
                                Kranken-Versicherung
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex gap-5 justify-center">
            <div className="flex gap-2">
                <Icon icon="mdi:phone-outline" className="text-appPrimary text-xl" />
                <span className="text-sm sm:text-base">+43 123 456 789</span>
            </div>
            <div className="flex gap-2">
                <Icon icon="mdi:email-outline" className="text-appPrimary text-xl" />
                <span className="text-sm sm:text-base">info@ohgmbh.at</span>
            </div>
        </div>
    </div>
}