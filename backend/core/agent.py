import asyncio
import os

from backend.core import env  # noqa: F401
from backend.core.company_context import load_company_context
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_groq import ChatGroq


SERVICES_EN = [
    "Autonomous AI & Intelligent Agents",
    "Predictive Analytics & Machine Learning",
    "Conversational AI & NLP",
    "Computer Vision & Visual Intelligence",
    "Strategic Analytics & Business Intelligence",
    "Full-Stack AI-Native Development",
]

SERVICES_AR = [
    "وكلاء الذكاء الاصطناعي والأنظمة الذكية",
    "التحليلات التنبؤية والتعلم الآلي",
    "الذكاء الاصطناعي التفاعلي ومعالجة اللغات الطبيعية",
    "الرؤية الحاسوبية والذكاء البصري",
    "التحليلات الاستراتيجية وذكاء الأعمال",
    "تطوير الويب المتكامل والأنظمة الذكية",
]

TOOLS = [
    "Python",
    "LangChain",
    "CrewAI",
    "Grok",
    "Scikit-learn",
    "Pandas",
    "XGBoost",
    "OpenAI",
    "NLTK",
    "FastAPI",
    "YOLOv8",
    "OpenCV",
    "PyTorch",
    "SPSS",
    "R",
    "Power BI",
    "Excel",
    "Next.js",
    "React",
    "TypeScript",
]

TEAM_LINKEDIN = [
    ("Hla Hijazi", "https://www.linkedin.com/in/hla-hijazi-a86a57369/"),
    ("Fares Alnamla", "https://www.linkedin.com/in/faresalnamla/"),
    ("Mahmoud Almodalal", "https://www.linkedin.com/in/mahmoud-almodalal-7a296a360/"),
    ("Ahmed Al-Yazouri", "https://www.linkedin.com/in/ahmed-alyazuri/"),
]


def _is_arabic(text: str) -> bool:
    return any("\u0600" <= char <= "\u06ff" for char in text)


def _is_mixed(text: str) -> bool:
    has_ar = _is_arabic(text)
    has_en = any("a" <= char.lower() <= "z" for char in text)
    return has_ar and has_en


def _format_list(items: list[str]) -> str:
    return "\n".join(f"- {item}" for item in items)


def _format_linkedin() -> str:
    return "\n".join(f"- {name}: {url}" for name, url in TEAM_LINKEDIN)


def _is_first_question_request(lowered: str) -> bool:
    return any(
        term in lowered
        for term in [
            "اول سوال",
            "أول سؤال",
            "اول سؤال",
            "first question",
            "what was my first",
            "شو اول",
            "شو أول",
        ]
    )


def _local_fallback_response(user_input: str) -> str:
    if _is_arabic(user_input):
        return (
            "أنا أعمل الآن برد محلي مؤقت لأن اتصال الذكاء الاصطناعي غير متاح.\n"
            f"وصلني سؤالك: {user_input}"
        )

    return (
        "I am using a temporary local response because the AI connection is unavailable.\n"
        f"Your question: {user_input}"
    )


def _source_answer(user_input: str, history: list[dict[str, str]] | None = None) -> str | None:
    lowered = user_input.strip().lower()
    arabic = _is_arabic(user_input)

    if _is_first_question_request(lowered):
        first_user_message = next(
            (message["content"] for message in history or [] if message["role"] == "user"),
            None,
        )
        if first_user_message:
            if arabic:
                return f"أول سؤال سألتني إياه في هذه المحادثة كان:\n{first_user_message}"
            return f"Your first question in this chat was:\n{first_user_message}"

        if arabic:
            return "لسه ما عندي سؤال سابق محفوظ في هذه المحادثة."
        return "I do not have a previous question saved in this chat yet."

    if any(term in lowered for term in ["مين انت", "من انت", "who are you", "ما اسمك", "اسمك"]):
        if arabic:
            return "أنا مساعد بصيرة Lens، أساعدك في معرفة خدمات الشركة والتواصل معها وفهم حلول الذكاء الاصطناعي والبيانات التي تقدمها."
        return "I am the BasiraLens assistant. I can help you learn about the company services, contact options, and AI/data solutions."

    if any(term in lowered for term in ["الخدمات", "خدمات", "شو بتقدم", "شو الخدمات", "services"]):
        if arabic:
            return f"خدمات بصيرة Lens هي:\n{_format_list(SERVICES_AR)}"
        return f"BasiraLens services are:\n{_format_list(SERVICES_EN)}"

    if any(term in lowered for term in ["linkedin", "linked in", "linkend", "لينكد", "لنكد", "لينكدإن"]):
        if arabic:
            return (
                "لا يظهر في معلومات الموقع رابط LinkedIn رسمي للشركة، لكن روابط LinkedIn لأعضاء الفريق هي:\n"
                f"{_format_linkedin()}"
            )
        return (
            "I do not see an official company LinkedIn link in the site information. "
            "The team LinkedIn links are:\n"
            f"{_format_linkedin()}"
        )

    if any(term in lowered for term in ["ادوات", "أدوات", "tools", "tech stack", "technologies", "تقنيات", "شو بستخدم"]):
        if arabic:
            return f"الأدوات والتقنيات المذكورة في الموقع تشمل:\n{_format_list(TOOLS)}"
        return f"The tools and technologies listed on the site include:\n{_format_list(TOOLS)}"

    if any(term in lowered for term in ["عملاء", "مشاريع مع عملاء", "clients", "client projects", "portfolio"]):
        if arabic:
            return (
                "الموقع يوضح خدمات وخبرات بصيرة Lens، لكنه لا يعرض أسماء عملاء أو دراسات حالة منشورة حالياً. "
                "للتفاصيل الدقيقة عن أعمال سابقة، الأفضل التواصل مباشرة عبر واتساب +970 597 238 788 أو البريد basiralens@gmail.com."
            )
        return (
            "The site explains BasiraLens services and expertise, but it does not currently list client names or published case studies. "
            "For exact previous-work details, please contact the team on WhatsApp +970 597 238 788 or email basiralens@gmail.com."
        )

    if any(term in lowered for term in ["تواصل", "التواصل", "contact", "email", "واتساب", "whatsapp"]):
        if arabic:
            return "يمكنك التواصل مع بصيرة Lens عبر:\n- واتساب: +970 597 238 788\n- البريد الإلكتروني: basiralens@gmail.com"
        return "You can contact BasiraLens through:\n- WhatsApp: +970 597 238 788\n- Email: basiralens@gmail.com"

    if any(
        term in lowered
        for term in ["بيانات", "داتا", "data", "تقرير", "تقارير", "dashboard", "داشبورد", "power bi"]
    ):
        if arabic:
            return (
                "نعم، بصيرة Lens تقدر تساعدك في تحليل البيانات وبناء لوحات معلومات وتقارير تفاعلية.\n"
                "الخدمات المناسبة لهذا الطلب تشمل:\n"
                "- التحليلات الاستراتيجية وذكاء الأعمال\n"
                "- التحليلات التنبؤية والتعلم الآلي\n"
                "- تطوير لوحات معلومات وتطبيقات ويب ذكية\n\n"
                "للبدء، أرسل نوع البيانات، الأعمدة الموجودة، ونوع التقرير أو المؤشرات المطلوبة."
            )

        return (
            "Yes, BasiraLens can help with data analysis, dashboards, and interactive reports.\n"
            "The most relevant services are:\n"
            "- Strategic Analytics & Business Intelligence\n"
            "- Predictive Analytics & Machine Learning\n"
            "- Full-Stack AI-Native Development\n\n"
            "To start, share the data type, available columns, and the report or KPIs you need."
        )

    return None


class BasiraAgent:
    def __init__(self):
        self.sessions: dict[str, list[dict[str, str]]] = {}
        groq_api_key = os.getenv("GROQ_API_KEY")
        if not groq_api_key:
            print("WARNING: GROQ_API_KEY not found. Using local fallback Agent.")
            self.mock_mode = True
            return

        self.mock_mode = False
        self.llm = ChatGroq(
            model="llama-3.1-8b-instant",
            temperature=0,
            api_key=groq_api_key,
            timeout=12,
            max_retries=0,
            max_tokens=600,
        )
        self.company_context = load_company_context()
        self.system_prompt = (
            "You are the website assistant for BasiraLens / بصيرة Lens. "
            "Use only the company context and recent chat history provided in the user message. "
            "Never mention internal file names, source names, PDFs, or 'Company Overview' to the user. "
            "Do not invent services, team details, contact information, tools, clients, or technologies. "
            "If the answer is not in the context, say that the information is not available. "
            "Reply in the same language as the user: Arabic for Arabic, English for English. "
            "Only answer bilingually when the user's message clearly mixes Arabic and English. "
            "Keep answers concise, friendly, and suitable for a website chat assistant. "
            "Use the exact name بصيرة Lens in Arabic answers and BasiraLens in English answers. "
            "Do not translate Lens into Arabic."
        )

    def _remember(self, session_id: str, role: str, content: str) -> None:
        history = self.sessions.setdefault(session_id, [])
        history.append({"role": role, "content": content})
        del history[:-12]

    def _history_text(self, session_id: str) -> str:
        history = self.sessions.get(session_id, [])
        return "\n".join(f"{message['role']}: {message['content']}" for message in history)

    async def chat(self, user_input: str, session_id: str = "default"):
        session_id = session_id or "default"
        history = self.sessions.get(session_id, [])

        source_answer = _source_answer(user_input, history)
        if source_answer:
            self._remember(session_id, "user", user_input)
            self._remember(session_id, "assistant", source_answer)
            return source_answer

        if getattr(self, "mock_mode", False):
            answer = _local_fallback_response(user_input)
            self._remember(session_id, "user", user_input)
            self._remember(session_id, "assistant", answer)
            return answer

        context = ""
        if os.getenv("ENABLE_RAG", "").lower() == "true":
            try:
                from backend.core.rag_engine import rag_engine

                retriever = rag_engine.get_retriever()
                docs = retriever.get_relevant_documents(user_input)
                context = "\n".join([doc.page_content for doc in docs])
            except Exception as exc:
                print(f"WARNING: RAG retrieval failed. Continuing without context. Error: {exc}")

        combined_context = "\n\n".join(part for part in [self.company_context, context] if part)
        language_instruction = (
            "The user mixed Arabic and English, so a short bilingual answer is allowed."
            if _is_mixed(user_input)
            else "Answer in Arabic only." if _is_arabic(user_input) else "Answer in English only."
        )
        enriched_input = (
            f"Company context:\n{combined_context}\n\n"
            f"Recent chat history:\n{self._history_text(session_id)}\n\n"
            f"{language_instruction}\n"
            f"User question: {user_input}"
        )

        try:
            response = await asyncio.wait_for(
                self.llm.ainvoke(
                    [
                        SystemMessage(content=self.system_prompt),
                        HumanMessage(content=enriched_input),
                    ]
                ),
                timeout=15,
            )
            self._remember(session_id, "user", user_input)
            self._remember(session_id, "assistant", response.content)
            return response.content
        except Exception as exc:
            print(f"WARNING: AI API call failed. Using local fallback. Error: {exc}")
            answer = _local_fallback_response(user_input)
            self._remember(session_id, "user", user_input)
            self._remember(session_id, "assistant", answer)
            return answer


basira_agent = BasiraAgent()
