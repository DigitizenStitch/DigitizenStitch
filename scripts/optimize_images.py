"""Create web-optimized WebP copies of portfolio images.

Usage (needs Python 3 + Pillow):
    python3 scripts/optimize_images.py <source-image> <category> [<source-image> ...]

category: embroidery | vector | patches
Originals are never modified. Outputs go to
src/assets/portfolio/<category>/<name>.webp  (large, for the lightbox)
src/assets/portfolio-thumbs/<category>/<name>.webp  (grid thumbnail)
New files are picked up by the gallery automatically.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent / "src" / "assets"
SIZES = {"portfolio": (1400, 74), "portfolio-thumbs": (600, 72)}


def optimize(src: Path, category: str) -> None:
    img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    for folder, (max_side, quality) in SIZES.items():
        out = ROOT / folder / category / (src.stem + ".webp")
        out.parent.mkdir(parents=True, exist_ok=True)
        copy = img.copy()
        copy.thumbnail((max_side, max_side), Image.LANCZOS)
        copy.save(out, "WEBP", quality=quality, method=6)
        print(f"{out.relative_to(ROOT.parent.parent)}  {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    *files, category = sys.argv[1:]
    if category not in ("embroidery", "vector", "patches"):
        sys.exit("category must be embroidery, vector or patches")
    for f in files:
        optimize(Path(f), category)
