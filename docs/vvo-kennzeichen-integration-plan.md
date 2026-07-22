# Plan: VVO-Kennzeichen-Auskunft

## Ziel

Die bestehende VVO-Kennzeichen-Auskunft wird als eigenständige Seite in die OH-GmbH-Website eingebaut. Nutzer können nach einem Schaden den Haftpflichtversicherer eines in Österreich zugelassenen Fahrzeugs ermitteln.

Die erste Version umfasst:

- österreichische Kennzeichen
- frei wählbares Unfalldatum, standardmäßig das aktuelle Datum
- ausschließlich zwei Nutzereingaben: Kennzeichen und Unfalldatum
- Anzeige des zuständigen Haftpflichtversicherers und seiner Kontaktdaten
- verständliche Fehlermeldungen bei ungültigen Eingaben oder fehlenden Treffern

## Vorgesehener Aufbau

### Seite

- Eigenständige Seite mit eigener URL: `/services/kfz-versichererauskunft`
- Kein eingebetteter Abschnitt innerhalb der allgemeinen Leistungsseite
- Verlinkung unter `Leistungen > Digitale Leistungen`
- Formularfelder:
  - österreichisches Kennzeichen
  - Unfalldatum
- Keine weiteren Eingabefelder und keine zusätzliche Checkbox
- Direkt beim Absende-Button steht der feste Hinweis, dass die Abfrage nur für einen Schadenfall des Nutzers oder einer von ihm vertretenen Person vorgesehen ist.
- Der Absende-Button wird eindeutig mit `Versicherer abfragen` beschriftet.
- Ergebnisbereich:
  - Versicherungsunternehmen
  - Adresse
  - Telefon
  - E-Mail
  - Website
  - Hinweis auf die VVO als Datenquelle

### Technische Anbindung

- Neue serverseitige Route: `POST /api/vvo-lookup`
- Der Browser spricht nur mit der OH-GmbH-Route.
- Die OH-GmbH-Route validiert ausschließlich Kennzeichen und Datum.
- Erst danach fragt der Server den VVO-Endpunkt ab.
- Die Antwort wird auf die benötigten Versichererdaten reduziert.
- Es werden keine Ergebnisdateien wie im Desktop-Skript geschrieben.
- Der VVO-Aufruf erhält ein kurzes Zeitlimit und eine klare Fehlerbehandlung.

### Wiederverwendung aus dem bestehenden Skript

Folgende Logik kann in angepasster Form übernommen werden:

- Normalisierung des Kennzeichens
- Prüfung und Normalisierung des Datums
- Aufbau der VVO-Anfrage
- Zuordnung der VVO-Statusmeldungen
- Ergänzung von `https://` bei Website-Adressen

Kommandozeilen-Ausgabe, Desktop-Start und lokale JSON-Dateien werden nicht übernommen.

## Datenschutz und Schutz vor Missbrauch

- Kennzeichen und Ergebnisse werden nicht dauerhaft gespeichert.
- Kennzeichen werden nicht in Server- oder Fehlerlogs geschrieben.
- Antworten werden nicht gecacht.
- Eine einfache Begrenzung der Abfragen pro IP/Zeitraum wird vorgesehen.
- Bei auffälligem Missbrauch kann zusätzlich eine Bot-Prüfung aktiviert werden.
- Daten eines Fahrzeughalters werden nicht angezeigt; vorgesehen sind nur Versichererdaten.
- Die Datenschutzerklärung der OH GmbH wird um die VVO-Abfrage ergänzt.
- Auf der Seite werden die VVO-Datenschutzhinweise und der Haftungshinweis verlinkt.

Vor einer öffentlichen Freischaltung wird mit dem VVO geklärt, ob der direkte technische Endpunkt durch eine fremde Website automatisiert aufgerufen werden darf. Falls nicht, wird statt der eingebetteten Abfrage eine Weiterleitung zur offiziellen VVO-Auskunft umgesetzt.

## Umsetzungsschritte

1. Gemeinsame Validierungs- und VVO-Abfragelogik als serverseitiges Modul anlegen.
2. API-Route mit Eingabeprüfung, Zeitlimit, Datenfilterung und Fehlercodes bauen.
3. Formular und Ergebnisanzeige im bestehenden OH-GmbH-Design erstellen.
4. Menüpunkt unter den digitalen Leistungen ergänzen.
5. Datenschutz- und Quellenhinweise ergänzen.
6. Schutz gegen automatisierte Massenabfragen einbauen.
7. Tests für Kennzeichen, Datum und VVO-Statusmeldungen erstellen.
8. Build und Darstellung auf Mobilgeräten sowie Desktop prüfen.
9. Nach VVO-Klärung die direkte Abfrage freischalten oder auf eine Weiterleitung umstellen.

## Abnahmekriterien

- Ohne gültiges Kennzeichen und Datum erfolgt keine VVO-Abfrage.
- Der Nutzer muss für die vollständige Abfrage keine weiteren Angaben machen.
- Gültige Treffer zeigen ausschließlich die vorgesehenen Versichererdaten.
- Kennzeichen erscheinen weder in Dateien noch in Anwendungslogs.
- Fehler der VVO-Seite führen zu einer verständlichen Meldung und nicht zu einem Website-Absturz.
- Die neue Seite funktioniert auf Mobilgeräten und Desktop.
- Navigation, Datenschutz und Quellenangabe sind vollständig.
- Der Produktions-Build läuft fehlerfrei durch.

## Noch zu entscheiden

- Soll die Funktion öffentlich für alle Besucher oder nur intern beziehungsweise nach Anmeldung verfügbar sein?
- Soll nach dem Ergebnis direkt eine OH-GmbH-Schadenmeldung angeboten werden?
- Soll die erste Version bereits eine Bot-Prüfung enthalten oder zunächst nur eine Abfragebegrenzung?
