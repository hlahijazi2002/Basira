import os
from backend.core import env  # noqa: F401
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

class RAGEngine:
    def __init__(self):
        api_key = os.getenv("PINECONE_API_KEY")
        if not api_key:
            print("WARNING: PINECONE_API_KEY not found. Using Mock RAG Engine.")
            self.mock_mode = True
            return
            
        self.mock_mode = False
        self.pc = Pinecone(api_key=api_key)
        self.index_name = os.getenv("PINECONE_INDEX_NAME")
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        
        # Connect to existing index or create placeholder
        self.vectorstore = PineconeVectorStore(
            index_name=self.index_name, 
            embedding=self.embeddings
        )

    def get_retriever(self):
        if getattr(self, "mock_mode", False):
            class MockRetriever:
                def get_relevant_documents(self, query):
                    class MockDoc:
                        def __init__(self, content):
                            self.page_content = content
                    return [MockDoc("Basira Lens is a leading AI agency specializing in data analysis and smart web development.")]
            return MockRetriever()
        return self.vectorstore.as_retriever(search_kwargs={"k": 3})

# Singleton instance
rag_engine = RAGEngine()
