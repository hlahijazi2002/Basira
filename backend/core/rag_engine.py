import os
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

class RAGEngine:
    def __init__(self):
        self.pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
        self.index_name = os.getenv("PINECONE_INDEX_NAME")
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        
        # Connect to existing index or create placeholder
        self.vectorstore = PineconeVectorStore(
            index_name=self.index_name, 
            embedding=self.embeddings
        )

    def get_retriever(self):
        return self.vectorstore.as_retriever(search_kwargs={"k": 3})

# Singleton instance
rag_engine = RAGEngine()
