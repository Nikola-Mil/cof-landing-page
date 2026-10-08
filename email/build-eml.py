#!/usr/bin/env python3
"""Build save-the-date.eml from save-the-date.html.

By default the logos are embedded in the message itself (CID parts), which is
what makes them appear in Outlook desktop without the reader first clicking
"Download pictures". Pass --remote to keep the hosted https:// URLs instead
(that is what an ESP campaign will use, since ESPs re-host images on import).

  python3 email/build-eml.py                       # inline logos (default)
  python3 email/build-eml.py --remote              # hosted URLs
  python3 email/build-eml.py --to you@example.com
"""
import argparse, pathlib, sys
from email.message import EmailMessage
from email.utils import formatdate, make_msgid

ROOT = pathlib.Path(__file__).resolve().parent.parent
HTML = ROOT / "email/save-the-date.html"
TEXT = ROOT / "email/save-the-date.txt"
OUT  = ROOT / "email/save-the-date.eml"

BASE = "https://centerforfinance.me/landing-page/assets/images/"
UPLOADS = "https://centerforfinance.me/wp-content/uploads/2026/09/"
CANVAS = (0xFC, 0xF3, 0xE9)  # the email's cream card colour

# url -> (source file, cid token, widest place it is displayed)
LOGOS = {
    BASE + "logos/cof-logo-black.png":
        ("public/assets/images/logos/cof-logo-black.png", "cof", 62),
    BASE + "partners/president-of-montenegro.png":
        ("public/assets/images/partners/president-of-montenegro.png", "pres", 62),
    BASE + "partners/chamber-of-commerce.png":
        ("public/assets/images/partners/chamber-of-commerce.png", "cham", 134),
    UPLOADS + "bankar.png":
        ("public/assets/images/partners/bankar.png", "bankar", 150),
}


def prepare(path: pathlib.Path, display_w: int) -> bytes:
    """Flatten alpha onto the cream card and downscale to 2x display width.

    Flattening matters twice over: Outlook's Word renderer has long-standing
    trouble compositing PNG alpha, and a black-on-transparent mark disappears
    in clients that invert the background for dark mode.
    """
    from PIL import Image
    import io

    im = Image.open(path).convert("RGBA")
    target = display_w * 2
    if im.width > target:
        im = im.resize((target, round(im.height * target / im.width)), Image.LANCZOS)
    bg = Image.new("RGB", im.size, CANVAS)
    bg.paste(im, mask=im.split()[3])
    # 256-colour palette: visually identical on flat logo art and roughly half
    # the bytes, which keeps the whole message under Gmail's ~102 KB clip point.
    bg = bg.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG)
    buf = io.BytesIO()
    bg.save(buf, format="PNG", optimize=True)
    return buf.getvalue()


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--to", default="you@example.com")
    ap.add_argument("--subject",
                    default="Save the Date | Crna Gora u EU — 16. oktobar 2026.")
    ap.add_argument("--from", dest="sender",
                    default="Center for Finance <events@centerforfinance.me>")
    ap.add_argument("--remote", action="store_true",
                    help="keep hosted https:// image URLs instead of inlining")
    args = ap.parse_args()

    html = HTML.read_text(encoding="utf-8")
    text = TEXT.read_text(encoding="utf-8")

    cids = {}
    if not args.remote:
        for url, (_, token, _) in LOGOS.items():
            cids[token] = make_msgid(idstring=token, domain="centerforfinance.me")
            # <a@b> -> a@b for the cid: URI
            html = html.replace(url, "cid:" + cids[token][1:-1])

    msg = EmailMessage()
    msg["Subject"] = args.subject
    msg["From"] = args.sender
    msg["To"] = args.to
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain="centerforfinance.me")
    msg.set_content(text)
    msg.add_alternative(html, subtype="html")

    if not args.remote:
        html_part = msg.get_payload()[1]          # the text/html alternative
        html_part.make_related()
        for url, (rel, token, width) in LOGOS.items():
            data = prepare(ROOT / rel, width)
            html_part.add_related(data, "image", "png",
                                  cid=cids[token],
                                  filename=pathlib.Path(rel).name,
                                  disposition="inline")
            print(f"  inlined {pathlib.Path(rel).name:32s} {len(data)/1024:6.1f} KB")

    OUT.write_bytes(bytes(msg))
    print(f"\nwrote {OUT.relative_to(ROOT)}  ({OUT.stat().st_size/1024:.1f} KB, "
          f"{'hosted URLs' if args.remote else 'inline logos'})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
