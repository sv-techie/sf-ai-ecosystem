"""Build a portable HTML page from local source and data files."""
from pathlib import Path
import base64
import csv
import json

ROOT = Path(__file__).resolve().parent
files = {}
for name in ["companies.csv", "excluded-records.csv", "product-exceptions.csv", "methodology.md", "search-coverage-audit.json"]:
    data = (ROOT / "data" / name).read_bytes()
    mime = "text/csv;charset=utf-8" if name.endswith(".csv") else "text/plain;charset=utf-8"
    files["data/" + name] = {"name": name, "type": mime, "content": base64.b64encode(data).decode("ascii")}
payload = {
    "records": list(csv.DictReader((ROOT / "data/companies.csv").open())),
    "geo": json.loads((ROOT / "data/bay-area.geojson").read_text()),
    "files": files,
}
# Escaping < prevents source text from closing the inert script element.
embedded = json.dumps(payload, ensure_ascii=True, separators=(",", ":")).replace("<", "\\u003c")
html = (ROOT / "index.template.html").read_text()
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>' + (ROOT / "styles.css").read_text() + '</style>')
html = html.replace('  <script src="app.js" defer></script>\n', '')
html = html.replace('</body>', '<script id="ecosystem-data" type="application/json">' + embedded + '</script>\n<script>' + (ROOT / "app.js").read_text() + '</script>\n</body>')
(ROOT / "index.html").write_text(html)
print(f"Built index.html: {len(payload['records']):,} records, {len(html.encode()):,} bytes")
