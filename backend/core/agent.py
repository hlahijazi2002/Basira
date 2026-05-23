from langchain_xai import ChatXAI
import os
from langchain.agents import create_openai_functions_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ConversationBufferMemory
from backend.core.rag_engine import rag_engine

class BasiraAgent:
    def __init__(self):
        self.llm = ChatXAI(
            model="grok-beta", 
            temperature=0,
            xai_api_key=os.getenv("XAI_API_KEY")
        )
        
        # System Prompt
        self.prompt = ChatPromptTemplate.from_messages([
            ("system", "You are Basira Lens AI, an expert technical assistant for Basira Agency. "
                       "Use the provided context to answer questions about the agency's services, team, and expertise. "
                       "If you don't know the answer, say you don't know. Be professional and helpful."),
            MessagesPlaceholder(variable_name="chat_history"),
            ("human", "{input}"),
            MessagesPlaceholder(variable_name="agent_scratchpad"),
        ])

        # Memory (Persistent per session - simplified for now)
        self.memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

        # Agent Setup (Can be expanded with more tools later)
        self.agent = create_openai_functions_agent(self.llm, [], self.prompt)
        self.executor = AgentExecutor(
            agent=self.agent, 
            tools=[], 
            memory=self.memory, 
            verbose=True
        )

    async def chat(self, user_input: str):
        # We can integrate retrieval logic here or as a tool
        retriever = rag_engine.get_retriever()
        docs = retriever.get_relevant_documents(user_input)
        context = "\n".join([doc.page_content for doc in docs])
        
        # Inject context into input for now (Simple RAG pattern)
        enriched_input = f"Context: {context}\n\nUser Question: {user_input}"
        
        response = await self.executor.ainvoke({"input": enriched_input})
        return response["output"]

# Note: In production, memory should be handled per session_id (Redis/Postgres)
basira_agent = BasiraAgent()
