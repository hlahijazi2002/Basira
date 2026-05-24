from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
from backend.core import env  # noqa: F401
from backend.core.agent import basira_agent

router = APIRouter(tags=["Chat"])

class ChatRequest(BaseModel):
    message: str
    session_id: str = "default"

class ChatResponse(BaseModel):
    response: str

class StatusResponse(BaseModel):
    groq_api_key_loaded: bool
    pinecone_api_key_loaded: bool
    pinecone_index_name: str | None
    openai_api_key_loaded: bool
    agent_mode: str

def _loaded(name: str) -> bool:
    return bool(os.getenv(name, "").strip())

@router.post("/chat", response_model=ChatResponse)
async def chat_with_agent(request: ChatRequest):
    try:
        answer = await basira_agent.chat(request.message, request.session_id)
        return ChatResponse(response=answer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/status", response_model=StatusResponse)
async def status():
    return StatusResponse(
        groq_api_key_loaded=_loaded("GROQ_API_KEY"),
        pinecone_api_key_loaded=_loaded("PINECONE_API_KEY"),
        pinecone_index_name=os.getenv("PINECONE_INDEX_NAME"),
        openai_api_key_loaded=_loaded("OPENAI_API_KEY"),
        agent_mode="mock" if getattr(basira_agent, "mock_mode", False) else "api",
    )
