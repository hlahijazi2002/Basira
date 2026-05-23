from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.core.agent import basira_agent

router = APIRouter(tags=["Chat"])

class ChatRequest(BaseModel):
    message: str
    session_id: str = "default"

class ChatResponse(BaseModel):
    response: str

@router.post("/chat", response_model=ChatResponse)
async def chat_with_agent(request: ChatRequest):
    try:
        # In a real app, you would use session_id to retrieve the correct agent/memory
        answer = await basira_agent.chat(request.message)
        return ChatResponse(response=answer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
