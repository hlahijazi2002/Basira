import { Brain, Code2, Layout, LineChart } from "lucide-react";

export const features = [
  {
    title: "Our Vision",
    desc: "To be the primary technical partner transforming complex data into smart, actionable decisions.",
  },
  {
    title: "Our Mission",
    desc: "Empowering organizations through innovative AI solutions that balance power and simplicity.",
  },
  {
    title: "Our Goal",
    desc: "Accelerating digital transformation and building a future based on data precision and results.",
  },
];

export const services = [
  {
    title: "AI Development",
    desc: "Custom machine learning models tailored to your business data.",
    icon: Brain,
  },
  {
    title: "Full-Stack Web",
    desc: "Scalable web applications built with Next.js and TypeScript.",
    icon: Code2,
  },
  {
    title: "Data Analytics",
    desc: "Transforming raw data into strategic business intelligence.",
    icon: LineChart,
  },
  {
    title: "UI/UX Engineering",
    desc: "Intuitive digital experiences centered around user behavior.",
    icon: Layout,
  },
];

export const team = [
  {
    id: "1",
    name: "Hla Hijazi",
    role: "Full-Stack Developer & Software Engineer",
    image: "/HlaHijazi.jpeg",
    bio: `A Software Engineer and Full-Stack Developer driven by the challenge of transforming complex ideas into seamless digital solutions. 

Specializing in modern web technologies like Next.js and TypeScript, I focus on building scalable architectures and intuitive user experiences. 

I am committed to clean code, performance optimization, and staying at the forefront of technical innovation. With a strategic approach to problem-solving, I strive to deliver high-quality software that balances technical excellence with functional design.`,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "App Router",
      "AI Integration",
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/hla-hijazi-a86a57369/",
      whatsApp: "00970594814452",
      email: "hlahijazi22@gmail.com",
      upwork: "https://www.upwork.com/freelancers/~0149f3bb3024a2bd39",
    },
  },
  {
    id: "2",
    name: "Fares Alnamla",
    role: "Data Scientist & AI Engineer",
    image: "/FaresAlnamla.jpg",

    bio: `A Data Scientist & AI Engineer who builds machine learning and NLP systems that turn complex data into real, measurable outcomes.

My core skills:
✅ Machine Learning & Predictive Modeling — classification, feature engineering, from raw data to production-ready models
✅ Natural Language Processing — text preprocessing, TF-IDF, embeddings, text classification
✅ Semantic Search & Retrieval — vector indexing, context-aware search pipelines
✅ Python-first development — clean, structured, production-aware code

Projects I've built:
• RecipaAI — RAG-based AI assistant with retrieval pipelines and semantic search over unstructured data
• Email Spam Detection — Naive Bayes & Logistic Regression with TF-IDF feature extraction
• Palestine Fake News Detector — full NLP pipeline with Decision Tree & Logistic Regression

Tools I work with: Python, FastAPI, PostgreSQL, Docker, Git, Scikit-learn

I take time to understand the problem before writing a single line of code — and I deliver work I can stand behind.

If you need someone who understands both the data and the decision-making behind it, let's talk.`,
    skills: [
      "Machine Learning",
      "NLP (Natural Language Processing)",
      "RAG Systems",
      "Predictive Modeling",
      "Semantic Search",
      "FastAPI",
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/faresalnamla/",
      whatsApp: "00972597451658",
      email: "faresalnam@gmail.com",
      upwork: "https://www.upwork.com/freelancers/~01e1282e9ca572f3f5",
    },
  },
  {
    id: "3",
    name: "Mahmoud Almodalal",
    role: "Backend Developer | Computer Vision Engineer",
    image: "/MahmoudModalal.jpg",
    bio: `Computer Engineer specializing in Python backend development and AI-powered computer vision, with a GPA of 91%. Builds production-grade SaaS platforms using Django, DRF, and Clean Architecture, and develops real-world CV systems with YOLOv8, DeepSort, and InsightFace. Passionate about scalable systems and intelligent solutions — from database design to model optimization.`,
    skills: [
      "Django & DRF",
      "Computer Vision",
      "YOLOv8 & DeepSort",
      "Clean Architecture",
      "SaaS Development",
      "Model Optimization",
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/mahmoud-almodalal-7a296a360/",
      whatsApp: "00970597747084",
      email: "ghg17273@gmail.com",
      upwork:
        "https://www.upwork.com/freelancers/~013d2e8e1fda1328b7?mp_source=share",
    },
  },
  {
    id: "4",
    name: "Ahmed Al-Yazouri",
    role: "Data Science and Artificial Intelligence",
    image: "/AhmedYazouri.jpg",
    bio: `Ahmed Al-Yazouri is a Data Science and Artificial Intelligence expert focused on delivering intelligent, data-driven solutions that transform complex data into actionable insights.

He specializes in data analysis, database architecture, and scalable system design, with hands-on experience in SQL and PostgreSQL. His expertise extends to building advanced AI systems using Machine Learning, Retrieval-Augmented Generation (RAG), and Multi-Agent architectures, enabling high-performance and intelligent decision-support systems.`,
    skills: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "PostgreSQL",
      "RAG",
      "Multi-Agent Systems",
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/ahmed-alyazuri/",
      whatsApp: "00972594869397",
      email: "ahmedalyazuri@gmail.com",
      upwork: "https://www.upwork.com/freelancers/~01fbb639d74e905612",
    },
  },
];

//Icons

export const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const UpworkIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.561 3.235c-3.058 0-4.907 1.467-5.618 4.103l-1.125 5.253c-1.161-1.63-2.001-3.565-2.52-5.498H5.975v6.52c0 1.583-1.288 2.872-2.871 2.872s-2.871-1.289-2.871-2.872V3.235H0v6.52c0 2.817 2.29 5.106 5.106 5.106 1.488 0 2.827-.639 3.754-1.664.444.801.996 1.584 1.662 2.333l-1.353 6.307h2.235l1.353-6.307c1.332 1.341 3.125 2.164 5.103 2.164 3.058 0 5.539-2.481 5.539-5.539V3.235h-4.397zm0 10.66c-1.137 0-2.062-.925-2.062-2.062V3.235h4.125v8.598c0 1.137-.925 2.062-2.063 2.062z" />
  </svg>
);

export const LinkedInIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
