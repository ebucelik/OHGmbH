import { defaultPadding } from "../../shared/style";
import Link from "next/link";

export default function Impressum() {
    return <div className={`${defaultPadding} flex flex-col gap-10 sm:gap-20 text-left place-items-center`}>
        <div className="text-xl sm:text-3xl font-bold">
            Impressum & Informationen nach §5 ECG, §24 und § 25 MedienG
        </div>

        <div className="flex flex-col gap-5 text-lg sm:text-2xl">
            <div className="font-bold">
                OH Ges.m.b.H
            </div>
            <div>
                Versicherungs-, Vermögens-, Finanzierungs- und Energieberater
            </div>
            <div>
                2550 Enzesfeld, Neugasse 9
            </div>
            <div>
                <Link href="tel:+43 664 1817109" className="hover:text-appPrimary">+43 664 1817109</Link>
            </div>
            <div>
                <Link href="mailto:office@oh-gmbh.at" className="hover:text-appPrimary">office@oh-gmbh.at</Link>
            </div>
            <div>
                ATU123456
            </div>
            <div>
                <b>Geschäftsführer:</b> Harald Otto
            </div>

            <div className="font-bold pt-5">
                Fotocredits
            </div>
            <div>
                <Link href="https://www.freepik.com" className="hover:text-appPrimary">www.freepik.com</Link>
            </div>
            <div>
                <Link href="https://www.pexels.com" className="hover:text-appPrimary">www.pexels.com</Link>
            </div>
            <div>
                <Link href="https://www.vrano-pictures.at" className="hover:text-appPrimary">© Vrano Pictures - Patrick Vranovsky</Link>
            </div>

            <div className="font-bold pt-5">
                Branding und Technische Umsetzung
            </div>
            <div>
                <Link href="https://www.ebucelik.dev" className="hover:text-appPrimary">www.ebucelik.dev</Link>
            </div>
        </div>
    </div>
}