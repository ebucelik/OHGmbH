import Divider from "@/components/divider";
import Button from "../components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mxauto">
      <div className="mx-5 sm:mx-10 sm:flex sm:flex-row fade-up-1s">
        <div className="flex-1 content-center sm:pl-15">
          <div className="flex flex-col">
            <p className="text-4xl sm:text-8xl font-serif">
              Stets an
            </p>
            <p className="text-4xl sm:text-8xl font-serif">
              deiner Seite.
            </p>
            <p className="text-lg sm:text-2xl pt-5">
              Dein unabhängiger Versicherungsmakler -
            </p>
            <p className="text-lg sm:text-2xl">
              sicher und zuverlässig.
            </p>

            <Button text="Jetzt Termin vereinbaren" className="my-5 sm:mt-20" isPrimary={true} />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/haraldotto3.webp" alt="Harald Otto am Arbeiten"
            className="object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="my-10 px-5 sm:px-10 flex flex-row gap-2 justify-center">
        <div>
          Unsere Partner
        </div>
        <div>
          Generali, zürich usw.
        </div>
      </div>

      <div className="px-5 sm:px-10 w-full h-screen bg-appPrimary content-center">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-lg sm:text-4xl text-black">
          <div className="sm:hidden font-serif">
            <div className="flex flex-row place-items-baseline">
              <div className="text-2xl sm:text-5xl">
                L
              </div>
              <div>
                angjährige Erfahrung,
              </div>
            </div>
            <div>
              unabhängige Marktübersicht,
            </div>
            <div>
              und maßgeschneiderte Lösungen.
            </div>
          </div>

          <div className="flex-1 content-center">
            <img className="rounded-2xl shadow-lg"
              src="/insurance1.svg"
              alt="Langjährige Erfahrung in Versicherungen"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5 justify-center">
            <div className="hidden sm:block font-serif">
              <div className="flex flex-row place-items-baseline">
                <div className="text-2xl sm:text-5xl">
                  L
                </div>
                <div>
                  angjährige Erfahrung,
                </div>
              </div>
              <div>
                unabhängige Marktübersicht,
              </div>
              <div>
                und maßgeschneiderte Lösungen.
              </div>
            </div>
            <div className="text-sm sm:text-xl">
              Seit vielen Jahren begleiten wir unsere Kundinnen und Kunden bei allen Fragen rund um Versicherungen.
              Dabei setzen wir nicht auf Standardlösungen, sondern auf persönliche Beratung und eine unabhängige Marktübersicht.
              Das bedeutet: Wir vergleichen Angebote zahlreicher Versicherer und wählen gemeinsam mit dir jene Lösung aus, die wirklich zu deinem Leben passt.
              So erhältst du eine Absicherung, die transparent, fair und auf deine individuellen Bedürfnisse zugeschnitten ist.
            </div>

            <Button text="Unser Team kontaktieren" className="my-5 sm:mt-10" isPrimary={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
