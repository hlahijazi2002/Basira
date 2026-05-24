from pathlib import Path
import re

from pypdf import PdfReader


DATA_DIR = Path(__file__).resolve().parents[1] / "data"


def _clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def load_company_context() -> str:
    parts: list[str] = []

    for pdf_path in sorted(DATA_DIR.glob("*.pdf")):
        try:
            reader = PdfReader(str(pdf_path))
            text = "\n".join(page.extract_text() or "" for page in reader.pages)
            if text.strip():
                parts.append(_clean_text(text))
        except Exception as exc:
            print(f"WARNING: Could not read {pdf_path.name}: {exc}")

    return "\n\n".join(parts)
