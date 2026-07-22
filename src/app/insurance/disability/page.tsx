import InsurancePage from "../../../components/insurance/insurancePage";
import { ProgressType } from "../../../components/progress/progressType";

export default function Disability() {
    return <InsurancePage
        type={ProgressType.disability}
        title="Deine Berufsunfähigkeits-Versicherung"
        intro={<>
            Kannst du deinen Beruf aus gesundheitlichen Gründen nicht mehr ausüben, springt die staatliche Invaliditätspension nur unter strengen Voraussetzungen ein. Eine <b>Berufsunfähigkeitsversicherung</b> sichert dir eine monatliche Rente, wenn genau das passiert.
        </>}
        heroIcon="mdi:briefcase-account"
        whyTitle="Warum eine BU-Versicherung"
        whyIcon="mdi:hand-heart"
        whyText={<>
            Deine Arbeitskraft ist eine der wichtigsten Grundlagen für deinen Lebensstandard - fällt sie weg, wird es schnell eng.
            <br />
            Die staatliche <b>Invaliditätspension</b> greift in Österreich nur unter strengen Voraussetzungen und deckt oft nicht das gewohnte Einkommen ab. Eine <b>Berufsunfähigkeitsversicherung</b> schließt genau diese Lücke: Sie zahlt eine vereinbarte monatliche Rente, sobald du deinen zuletzt ausgeübten Beruf gesundheitsbedingt nicht mehr ausüben kannst.
            <br />
            So bleibt dein Lebensstandard abgesichert, auch wenn du beruflich vorübergehend oder dauerhaft ausfällst.
        </>}
        covered={[
            "Monatliche BU-Rente bei Berufsunfähigkeit",
            "Absicherung bis zum vereinbarten Endalter",
            "Beitragsbefreiung während des Leistungsbezugs",
            "Nachversicherungsgarantie bei Gehaltssteigerung (je nach Tarif)",
            "Berücksichtigung von Krankheit und Unfall als Ursache",
            "Wahl der Karenzzeit (Wartefrist bis zur ersten Zahlung)",
            "Nachbesserungsgarantie bei neuen Tarifgenerationen (je nach Tarif)",
            "Weltweiter Schutz, auch im Ausland",
        ]}
    />
}
