import { defaultPadding } from "@/shared/style";

export default function InfoView() {
    return <div className={`${defaultPadding} flex flex-col gap-5 justfiy-center text-center`}>
        <div className="text-xl sm:text-4xl">
            Diese Seite ist noch in Arbeit.
        </div>
        <div className="text-sm sm:text-xl">
            Kommen Sie später vorbei.
        </div>
    </div>
}