# Save-the-Date email template

`save-the-date.html` — a single-file HTML email in the same visual language as the
conference landing page: gold letterhead bar, `Playfair Display` display type
(with a `Georgia` fallback), `Inter` body (Arial fallback), beige card, the
eyebrow-dash motif, an italic gold pull-quote, and the gold "Register" button.

A three-logo lockup opens **each language half** — **Center for Finance ·
President of Montenegro · Chamber of Commerce**, same order as the landing-page
hero strip, with a small **"Pod pokroviteljstvom" / "Under the patronage of"**
caption set directly over the President mark. The logos are bottom-aligned so
they share one baseline under that caption.

It is **bilingual**: the Montenegrin version comes first, then a hairline
separator, then the English version, then a shared footer. Each half opens with
its own logo lockup, so the language switch is obvious without a label. Both
halves carry the same structure — eyebrow ("Save the Date", kept in English in
both languages as a slogan) → kicker → title → italic subtitle set tight under
it ("Pouke, izazovi i pravci politika" / "Lessons, Issues, and Policy
Directions") → one-line lead ("Nobelovac i lideri devet evropskih integracionih
procesa dolaze u Podgoricu." / "A Nobel laureate and leaders of nine EU
accession journeys come to Podgorica.") → date | place → a wide gold rule → two
body paragraphs (context, then the longer Nobel-laureate sentence) → pull-quote
→ two emphasis lines → save-the-date badge → note → button → **"Medijski
partner:" / "Media partner:"** over the **Bankar.me** logo (it replaced the repeated organiser/patron logo blocks that used to close
each half — the same marks already sit in the lockup at the top).

It is built with tables and inline styles so it survives Gmail, Apple Mail,
Outlook (Windows + web), iOS, and the major webmail clients.

---

## 1. Preview it

Just open `save-the-date.html` in a browser — it renders as-is. For a real
inbox check, send it through a testing service (Litmus, Email on Acid, or the
free [mail-tester.com](https://www.mail-tester.com)) once you've wired it into
your sending tool.

## 2. Fill in the placeholders

Search the file for these and replace them:

| Placeholder | Replace with |
|---|---|
| The `centerforfinance.me/landing-page/assets/images/...` image URLs (`logos/cof-logo-black.png`, `partners/chamber-of-commerce.png`, `partners/president-of-montenegro.png`) | Nothing to change — all three point at live landing-page assets (verified serving `image/png`, HTTP 200). The build copies `public/assets/…` to the site root and `angular.json` sets `--base-href /landing-page/`, so they're already on HTTPS with no extra hosting. Just don't rename or move those files later, or emails already sitting in inboxes lose the images. |
| `{{unsubscribe_url}}` | Your ESP's unsubscribe merge tag (Mailchimp: `*\|UNSUB\|*`, Brevo/Sendinblue: `{{ unsubscribe }}`, Mailjet: `[[UNSUB_LINK_EN]]`). Required by law for bulk sends. |
| `https://forms.gle/pdVzHu64bUWMhnVf6` | The registration link — appears **four times**: the ME button and EN button in `save-the-date.html`, and both plain-text sections of `save-the-date.txt`. Already the current Google Form; change everywhere if it moves. |
| Body copy | Every line — titles, date, paragraphs, pull-quote, badge, footer — is plain text in the markup. Edit the Montenegrin block and the English block separately (they're two mirrored sets of table rows). |

Logos: `cof-logo-black.png` is the Center for Finance mark;
`chamber-of-commerce.png` is the Chamber of Economy of Montenegro; the patron
logo is the President of Montenegro. The media-partner logo under each button is
`bankar.png` — the source file lives with the others at
`public/assets/images/partners/bankar.png`, but the email points at the
WordPress copy, `https://centerforfinance.me/wp-content/uploads/2026/09/bankar.png`,
because that one is already on HTTPS today. If any of those should be a
different file, swap the `src` (and the `alt`) in both language blocks. Nothing
else needs touching.

## 3. Send it

**Through an email platform (recommended for anything beyond a handful of people):**
Mailchimp, Brevo, Mailjet, MailerLite, HubSpot, etc. all have a
"Code your own" / "Paste in HTML" / "Import HTML" campaign option. Paste the whole
file there. The platform handles the list, the unsubscribe tag, and delivery.

**One-off from Gmail:** Gmail's compose window has no "paste HTML" button. Either
use a browser extension that adds one, or open `save-the-date.html` in Chrome,
select-all, copy, and paste into the compose body — formatting mostly survives
for a personal send. For real campaigns, use a platform.

## 3b. Testing it without a platform

`save-the-date.eml` is the template wrapped as a ready-made email message
(HTML + plain-text parts, proper headers). Use it to see true in-client
rendering before you commit to a sending tool:

- **Thunderbird / Apple Mail / Outlook desktop:** double-click the `.eml`.
  It opens fully rendered. To send yourself a live copy, use
  *Message → Edit as New Message* (Apple Mail) / *Edit as New* (Thunderbird)
  / *Actions → Edit Message* (Outlook), set the recipient, send.
- **Gmail:** Gmail can't open a local `.eml` directly. Import it into a
  desktop client as above, or just use the render-and-copy method below.

Regenerate the `.eml` after editing the HTML:

```bash
python3 email/build-eml.py --to you@example.com
```

By default this **embeds the four logos in the message itself** as inline
`cid:` parts. That is what makes them appear in Outlook desktop immediately,
instead of sitting behind the "Click here to download pictures" bar that
Outlook shows for any externally hosted image. The script also flattens each
logo onto the cream card colour and downscales it to 2x its display size, so
the whole message lands around 60 KB.

Pass `--remote` to keep the hosted `https://` URLs instead — useful when you
want to test exactly what an ESP campaign will look like:

```bash
python3 email/build-eml.py --remote --to you@example.com
```

The plain-text half of the message lives in `save-the-date.txt`; edit it
alongside the HTML so both stay in sync.

Note: `From:` in the `.eml` is only a label. Your real send address is
whatever the sending client/platform is configured with.

### Gmail strips the formatting on send

Gmail's compose editor sanitises pasted HTML when the message is sent
(`<style>` blocks, classes, media queries all go), so browser extensions
that inject the source often look right in the window and arrive as plain
text. Two ways around it:

- **Best:** send through an email platform (section 3). They send true HTML.
- **Quick personal send:** open `save-the-date.html` in a browser, click in
  the page, `Ctrl+A`, `Ctrl+C`, paste into Gmail compose. Inline styles and
  tables survive; you lose the web fonts (fall back to Georgia/Arial, already
  the plan) and the mobile resizing rules.

## 4. Things to know

- **Fonts:** `Playfair Display` / `Inter` load only in clients that allow web
  fonts (mainly Apple Mail and iOS). Everywhere else the template falls back to
  `Georgia` (serif headings) and `Arial` (body) — that's expected and still
  on-brand.
- **Images off by default:** Outlook and Gmail hide *externally hosted*
  images until the reader clicks "show images" — this is the usual reason
  logos look missing in Outlook. Two things guard against it: the `.eml` built
  by `build-eml.py` embeds the logos in the message so they are never blocked,
  and the layout still reads fine without them (every image has descriptive
  `alt` text and no text is baked into an image). An ESP campaign always uses
  hosted images, so some recipients will still see the download bar there.
- **Every `<img>` carries both `width` and `height` attributes.** Outlook on
  Windows renders through Word, which ignores `height:auto`; with no height
  attribute it falls back to the file's native pixel height and stretches the
  logo (the Chamber mark is 950x412 natively, so it stretched badly). Keep both
  attributes in sync with the real aspect ratio if you ever swap a logo file.
- **Logo cells are `bgcolor`-ed to the cream card.** All three source PNGs have
  transparent backgrounds, and the Center for Finance mark is black artwork —
  on a client that inverts the background for dark mode it would vanish. The
  explicit cell colour keeps it on cream, and the inlined copies in the `.eml`
  are flattened onto that same colour.
- **Bilingual length:** the message is fairly tall because both languages are
  in full. If you'd rather split it, delete either the Montenegrin block or the
  English block (each is a clearly commented run of `<tr>` rows) plus the
  "English version" separator, and send two campaigns.
- **Width is 600px**, collapsing to full-width under 620px. Don't widen it.
- **Outlook (Windows)** ignores `border-radius`, so the button shows as a
  square gold block there — that's fine, it's still legible and on-palette.
- **Dark mode:** the template is locked to its light palette via
  `color-scheme` meta tags. Some clients (notably Outlook mobile) may still
  invert it; the colours stay readable if they do.
- Keep the total HTML **under ~100 KB** or Gmail will clip it and hide the
  footer behind a "View entire message" link. The current file is well under.

## 5. Reusing it for the real invitation later

The same skeleton works for the full invitation — swap the "Save the Date"
eyebrow for "You're Invited", drop in the programme highlights as extra
table rows above the footer, and keep everything else.
