import Button from "../../components/button";
import { defaultPadding } from "../../shared/style";

export default function Service() {
    return (
        <div className="pt-30">
            <div className={`${defaultPadding} w-full sm:pb-20`}>
                <div>
                    <div className="pb-10 text-2xl sm:text-5xl text-left">
                        Was tun bei <span className="decoration-appPrimary underline underline-offset-8">einem Schaden?</span>
                    </div>

                    <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:my-15 justify-evenly text-center text-lg sm:text-2xl font-bold">
                        <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
                            1. Schaden melden

                            <img src="/talk.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
                        </div>
                        <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
                            <span className="sm:hidden">
                                2. Unterlagen bereitstellen
                            </span>

                            <img src="/documents.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500" />

                            <span className="hidden sm:block">
                                2. Unterlagen bereitstellen
                            </span>
                        </div>
                        <div className="flex flex-col gap-5 sm:gap-10 hover:scale-101 duration-500 place-items-center">
                            3. Zurücklehnen

                            <img src="/chill.svg" className="object-cover w-50 sm:w-100 h-50 sm:h-100 rounded-2xl shadow-lg shadow-gray-500 sm:mt-5" />
                        </div>
                    </div>

                    <div className="sm:pt-10 flex flex-row place-content-center">
                        <Button text="Jetzt Schaden melden" className="sm:px-10 bg-appPrimary/80" isPrimary={true} href="/contact" />
                    </div>
                </div>
            </div>
        </div>
    );
}