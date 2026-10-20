#!/usr/bin/env python3
"""Comprueba que cada texto marcado en index.html tiene traducción al inglés en assets/site.js, y al revés."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
html = (ROOT / "index.html").read_text(encoding="utf-8")
js = (ROOT / "assets" / "site.js").read_text(encoding="utf-8")

used = set(re.findall(r'data-i18n(?:-aria|-alt)?="([a-z0-9_]+)"', html))
block = re.search(r"var EN = \{(.*?)\n  \};", js, re.S)
if not block:
    sys.exit("No encuentro el diccionario EN en assets/site.js")
defined = set(re.findall(r"^\s*([a-z0-9_]+):", block.group(1), re.M))

missing = sorted(used - defined)
unused = sorted(defined - used)
for key in missing:
    print(f"Falta la traducción al inglés de «{key}»")
for key in unused:
    print(f"La clave «{key}» está en el diccionario pero no en index.html")
if missing or unused:
    sys.exit(1)
print(f"Traducciones correctas: {len(used)} textos en español e inglés.")
