# AGENTS.md – OH GmbH Website

Einheitliche Anleitung für alle KI-Agenten (Claude Code, Cursor, Codex etc.),
die an diesem Projekt arbeiten. **Diese Datei ist die einzige Quelle der Wahrheit.**

---

## Unternehmen

OH GmbH ist ein österreichisches Versicherungsmaklerunternehmen mit Sitz in Wien.
Diese Website (oh-gmbh) ist der offizielle Webauftritt: Versicherung, Finanzierung,
Investment, Energie und weitere Services für Privat- und Geschäftskunden.

- **Rechtssystem:** Österreichisches Recht (VersVG, VAG)
- **Zielgruppen:** Privatkunden, KMU, gelegentlich Fachpublikum

---

## Sprache & Ton

- **Website-Texte & Antworten:** Deutsch (österreichisches Deutsch), professionell, klar, kundenfreundlich
- **Code, Dateinamen, Commits:** Englisch
- **Rechtliche Formulierungen:** präzise und eindeutig, keine abgeschwächten Formulierungen
  - ✅ „Die Versicherung **verweigert** die Leistung"
  - ❌ „Die Versicherung **kann** die Leistung verweigern"

### Fachliche Leitplanken
- **Grobe Fahrlässigkeit (§ 61 VersVG):** gute Beispiele sind unbeaufsichtigte Kerze
  oder vergessener Herd. **Nicht** Alkohol am Steuer (das ist eine Obliegenheitsverletzung).
- **Beratungsprotokoll (§ 137 VAG):** Pflichtdokument nach österreichischem
  Versicherungsaufsichtsgesetz.

---

## Branding

- **Marke:** OH GmbH — keine wefox- oder sonstigen Drittmarken-Elemente
- **Primärfarbe:** Schwarz `#1A1A1A`
- **Akzentfarbe Website:** Gold `#e1b964` (Tailwind-Token `appPrimary` — auf der Website immer diesen verwenden)
- **Akzentfarbe Dokumente/Canva:** Gold (dunkel) `#B8892F` (Brand Kit für Beratungsdokumente)
- **Hintergrund:** Weiß `#FFFFFF`

### Design-Sprache der Website
- Headlines in `archivo` (Archivo Black) mit Verlauf `from-black via-appPrimary`
- Karten: `rounded-2xl`, `border-black/5`, weiche Schatten; Gold-Pills als Akzente
- Animationen mit `motion/react-client` und `whileInView`
- Gemeinsame Seitenvorlagen: `src/components/insurance/insurancePage.tsx` und `src/components/energy/energyPage.tsx`

---

## Tech-Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **State:** Redux Toolkit (`src/app/store.ts`)
- **E-Mail:** Resend + @react-email/render
- **Animationen:** motion, typed.js, react-countup, embla-carousel

### Befehle

```bash
npm run dev     # Dev-Server (Turbopack)
npm run build   # Produktions-Build
npm run start   # Produktions-Server
```

### ⚠️ Richtiger Projektordner

Das echte Projekt ist **`~/Downloads/OHGmbH-git`** (dieses Git-Repo).
`~/Downloads/OHGmbH-main` ist eine veraltete Kopie ohne Git — **dort niemals arbeiten!**

### Projektstruktur

- `src/app/` – Seiten (App Router): insurance, finance, investment, energy, team, contact, impressum, agb, dataprotection …
- `src/components/` – wiederverwendbare Komponenten
- `src/core/` – Fachlogik (z. B. `insuranceCore.tsx`)
- `src/shared/` – gemeinsame Styles/Utilities
- `src/model/` – Datenmodelle
- `docs/` – Planungs- und Integrationsdokumente

---

## Arbeitsweise

- Änderungen einfach umsetzen, danach kurz berichten (inkl. betroffener Branch)
- Status-Updates kurz halten
- Bei destruktiven Aktionen (Löschen, große Umbauten) vorher kurz erwähnen

### Git-Regeln
- **Nie direkt auf `main` arbeiten** — immer Feature-Branch anlegen, Änderungen per Pull Request
- Branch-Namen englisch, z. B. `feat/...`, `fix/...`, `redesign/...`
- Commit-Messages englisch und aussagekräftig
- Remote ist `ebucelik/OHGmbH`; Branches löschen kann nur der Repo-Admin

### Secrets
- **Niemals API-Schlüssel oder Passwörter in den Code schreiben oder committen**
- Schlüssel (z. B. Resend) gehören in `.env.local` — `.env*` ist bereits im `.gitignore` und bleibt dort

### Definition von „fertig"
1. `npm run build` läuft ohne Fehler durch
2. Betroffene Seiten im Browser geprüft (Desktop **und** Mobil-Ansicht)
3. Texte auf korrektes Deutsch und präzise Rechtsformulierungen geprüft
4. Kurzer Bericht: was geändert, welcher Branch

## Was NICHT tun

- Keine wefox-Branding-Elemente
- Keine abgeschwächten Formulierungen bei Rechts- und Worst-Case-Themen
- Keine falschen Rechtsbeispiele (Alkohol am Steuer ≠ grobe Fahrlässigkeit)
- Keine englischen Begriffe in Website-Texten, wo deutsche Standard sind
