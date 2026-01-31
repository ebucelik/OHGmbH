import { defaultPadding } from "../../shared/style";
import ContactComponent from "../../components/contact/contactComponent";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Contact() {
    return <div className={`${defaultPadding}`}>
        <div className="flex flex-col sm:flex-row gap-15 sm:gap-0 py-0 sm:py-20 sm:justify-evenly">
            <div className="flex flex-col sm:gap-15 pt-12">
                <div className="text-2xl sm:text-4xl">
                    Kontaktformular
                </div>
                <div>
                    <ContactComponent />
                </div>
            </div>

            <div className="flex flex-col gap-10 sm:gap-15 pt-12">
                <div className="text-2xl sm:text-4xl">
                    Falls es schneller gehen muss
                </div>
                <div className="flex flex-col gap-5 sm:justify-evenly">
                    <div className="flex flex-row place-items-center gap-5 text-lg sm:text-xl 2xl:text-2xl">
                        <div className="bg-appPrimary rounded-full p-2 text-white">
                            <Icon icon="ic:baseline-call" />
                        </div>
                        <div>
                            <Link href="tel:+43 664 4113339" className="hover:text-appPrimary">+43 664 4113339</Link>
                        </div>
                    </div>
                    <div className="flex flex-row place-items-center gap-5 text-lg sm:text-xl 2xl:text-2xl">
                        <div className="bg-appPrimary rounded-full p-2 text-white">
                            <Icon icon="material-symbols:mail" />
                        </div>
                        <div>
                            <Link href="mailto:office@oh-gmbh.at" className="hover:text-appPrimary">office@oh-gmbh.at</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}