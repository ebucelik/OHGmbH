import { radley } from "../../../../app/layout";

export default function Car() {
    return <div>
        <div className="bg-appGray rounded-2xl flex flex-col sm:flex-row gap-5 px-10 py-5 sm:py-25 sm:p-25 sm:mx-25">
            <div className="flex-1 flex flex-col gap-2 place-content-center text-center">
                <div className={`text-xl sm:text-4xl ${radley.className} font-bold`}>
                    Deine Auto-Versicherung
                </div>
                <div className="text-xs sm:text-lg">
                    In Österreich ist die Kfz-Haftpflichtversicherung <b>gesetzlich vorgeschrieben</b> - sie schützt dich, wenn du mit deinem Fahrzeug einen Schaden verursachst.
                    Wir helfen dir, den passenden Tarif zu finden, der nicht nur alle gesetzlichen Anforderungen erfüllt, sondern auch zu deinem Budget passt.
                    Durch unseren Vergleich verschiedener Versicherer bekommst du optimalen Schutz zum besten Preis - schnell, transparent und unkompliziert.
                </div>
            </div>
            <div className="flex-1">
                <img src="/driving.webp" alt="Eine Frau fährt ein Auto." className="object-cover rounded-2xl shadow-xl" />
            </div>
        </div>
        <div>

        </div>
    </div>
}