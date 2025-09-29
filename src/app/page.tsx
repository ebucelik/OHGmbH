import Button from "./button";


export default function Home() {
  return (
    <div className="mxauto mx-5 sm:mx-10">
      <div>
        <div className="sm:flex sm:flex-row fade-up-1s">
          <div className="flex-1 content-center">
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
              <Button text="Jetzt Termin vereinbaren" />
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/haraldotto3.webp" alt="Harald Otto am Arbeiten"
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
