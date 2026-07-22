import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Life() {
    return <InsurancePage
        type={ProgressType.life}
        title="Deine Lebensversicherung"
        intro={<>
            Eine <b>Lebensversicherung</b> sichert deine Familie finanziell ab, wenn du nicht mehr für sie sorgen kannst - und lässt sich je nach Bedarf auch zur Kreditabsicherung oder zum Vermögensaufbau nutzen.
        </>}
        heroImage="/lifeInsuranceInitial.webp"
        heroImageAlt="Eine Familie, symbolisch für finanzielle Absicherung durch eine Lebensversicherung."
        whyTitle="Warum eine Lebensversicherung"
        whyIcon="mdi:account-heart"
        whyText={<>
            Niemand denkt gerne an den eigenen Ausfall - trotzdem ist die finanzielle Absicherung der eigenen Familie eine der wichtigsten Entscheidungen, die du treffen kannst.
            <br />
            Eine <b>Lebensversicherung</b> zahlt im Ablebensfall eine vereinbarte Summe an deine Angehörigen aus. So bleibt zum Beispiel ein laufender Kredit für das Eigenheim abgesichert, oder deine Familie kann den gewohnten Lebensstandard halten.
            <br />
            Je nach Tarifart lässt sich eine Lebensversicherung auch mit einer Erlebensfall-Leistung kombinieren - dann dient sie zusätzlich dem langfristigen Vermögensaufbau.
        </>}
        covered={[
            "Ablebensschutz: vereinbarte Summe für deine Hinterbliebenen",
            "Kreditabsicherung, z. B. für einen Wohnbaukredit",
            "Frei wählbare Begünstigte",
            "Erlebensfall-Leistung bei entsprechender Tarifart",
            "Wahl zwischen Kapitalauszahlung oder Rente",
            "Kombination mit Berufsunfähigkeits-Zusatzversicherung möglich",
            "Weltweiter Schutz",
            "Frei wählbare Laufzeit und Versicherungssumme",
        ]}
    />
}
