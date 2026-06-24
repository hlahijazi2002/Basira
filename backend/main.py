import sys
import os
from pathlib import Path

# Add the project root to PYTHONPATH programmatically
backend_path = Path(__file__).parent
root_path = str(backend_path.parent)
if root_path not in sys.path:
    sys.path.append(root_path)

from dotenv import load_dotenv

load_dotenv(backend_path / ".env")
load_dotenv(backend_path / "Basira.env", override=True)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.chat_routes import router as chat_router
import uvicorn

app = FastAPI(title="Basira Lens AI Backend", version="1.0.0")

allowed_origins = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:5173").split(",")
    if origin.strip()
]
for local_origin in ["http://localhost:3000", "http://localhost:5173"]:
    if local_origin not in allowed_origins:
        allowed_origins.append(local_origin)

# Enable CORS for the configured frontend origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(chat_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Basira Lens AI Backend is running"}

if __name__ == "__main__":
    # Use the full module path for the reloader to work correctly from the root
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8003, reload=True)
