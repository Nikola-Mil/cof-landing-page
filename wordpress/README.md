# WordPress code-module blok

`conference-hero.html` — pojednostavljena verzija gornjeg dijela landing
stranice, spremna za WordPress "Custom HTML" / code modul. Jedan fajl:
HTML + CSS + JS, **bez ijedne eksterne biblioteke ili build koraka**.

## Kako se ubacuje

1. U WordPress editoru dodajte **Custom HTML** blok (ili code modul vašeg
   page buildera — Elementor "HTML", Divi "Code", WPBakery "Raw HTML").
2. Otvorite `conference-hero.html`, kopirajte **cijeli sadržaj** i nalijepite ga.
3. Sačuvajte i pogledajte stranicu (u editoru se često ne vidi tačan prikaz).

## Šta blok sadrži

Sve je centrirano. Redom: logotipi pokrovitelja (Centar za finansije ·
Predsjednik Crne Gore · Privredna komora) → "Međunarodna konferencija" → naslov
**Montenegro in the EU** → podnaslov **Lessons, challenges and policy
directions** → jedna uvodna rečenica → datum i lokacija → dugme **Registrujte se
ovdje**.

U odnosu na landing stranicu izostavljeni su: navigacija, drugo dugme, red sa
domaćinima, statistika, govornici, program i sve sekcije ispod hero-a.

## Slike

Sve tri logotipa i pozadinska fotografija učitavaju se sa već objavljene
landing stranice:

```
https://centerforfinance.me/landing-page/assets/images/logos/cof-logo-black.png
https://centerforfinance.me/landing-page/assets/images/partners/president-of-montenegro.png
https://centerforfinance.me/landing-page/assets/images/partners/chamber-of-commerce.png
https://centerforfinance.me/landing-page/assets/images/backgrounds/hero-kotor.jpg
```

Ništa se ne uploaduje u WordPress. **Ali:** ako se ti fajlovi kasnije preimenuju
ili premjeste, slike u ovom bloku nestaju — isto važi i za `email/save-the-date.html`.

## Izolacija od teme

Svi CSS selektori počinju sa `.cofw`, pa blok ne može promijeniti izgled ostatka
sajta. U suprotnom smjeru, stilovi teme su neutralisani preko
`.cofw :where(...)` — `:where()` drži specifičnost na nuli, pa pravila bloka
pobjeđuju bez ijednog `!important`. Testirano protiv teme koja agresivno
postavlja `text-transform`, `margin`, `border`, `font-family` i `box-sizing`.

## Podešavanja

Na vrhu `<style>` bloka, u `.cofw { ... }`, stoje CSS varijable:

| Varijabla | Čemu služi |
|---|---|
| `--cofw-min-height` | Visina bloka. Sada je `100vh` (puna visina ekrana). Ako fiksno zaglavlje teme prekriva vrh, stavite npr. `calc(100vh - 80px)`. |
| `--cofw-gold-deep` | Boja dugmeta za registraciju. |
| `--cofw-gold`, `--cofw-beige`, `--cofw-black`, … | Paleta konferencije. |

Link za registraciju (`https://forms.gle/pdVzHu64bUWMhnVf6`) je isti Google
formular koji koristi i landing stranica; pojavljuje se **jednom**, u `href`
dugmeta.

## Jezik i prevod

Tekst je napisan na crnogorskom i stoji kao običan tekst u HTML-u (ne generiše
ga JavaScript), pa ga WordPress plugin za prevod može pročitati i prevesti.
Prevodivi su i `alt`, `title` i `aria-label` atributi.

**Izuzetak — naslov i podnaslov ostaju na engleskom**, jer je to zvanični naziv
konferencije:

> **Montenegro in the EU** — *Lessons, challenges and policy directions*

Da ih plugin za prevod ne bi dirao, oba elementa nose sve uobičajene oznake
odjednom (ne znamo koji je plugin u upotrebi, pa su naslagane sve):

| Oznaka | Plugin koji je poštuje |
|---|---|
| `translate="no"` | HTML5 standard — Google Translate, Weglot, Bing |
| `class="notranslate"` | Google Translate, GTranslate, WPML |
| `class="wg-notranslate"` | Weglot |
| `data-no-translation` | TranslatePress |
| `lang="en"` | semantika; više plugina preskače označeni jezik |

Ako se ipak pojavi prevedena verzija, provjerite u podešavanjima plugina da li
postoji lista "ne prevodi" — tamo dodajte obje rečenice doslovno.

## JavaScript

Jedini JS je kratka ulazna animacija (elementi se blago pojavljuju pri skrolu).
Potpuno je opciona:

- ako je JS isključen ili blokiran, sadržaj je **odmah vidljiv** (klasu za
  animaciju dodaje sam JS);
- poštuje `prefers-reduced-motion`;
- ne radi ništa ako je blok već inicijalizovan (bezbjedno ako se modul duplira).

Ako animacija nije potrebna, obrišite cijeli `<script>` blok na dnu fajla.

## Datum

Blok prikazuje **16. oktobar 2026.** (jedan dan). Mijenja se na jednom mjestu —
potražite `16. oktobar 2026.` u HTML-u.
