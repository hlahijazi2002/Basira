from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.chat_routes import router as chat_router
import uvicorn
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Basira Lens AI Backend", version="1.0.0")

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
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
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
