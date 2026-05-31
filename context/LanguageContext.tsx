"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

export const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_team: "Team",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_chat: "AI Assistant",
    nav_cta: "Start a Project",
    nav_cta_mobile: "Start Now",
    hero_badge: "The Future of Intelligence",
    hero_title_part1: "Digital Visions",
    hero_title_part2: "Beyond Boundaries",
    hero_desc_part1: "At ",
    hero_desc_part2: "Basira",
    hero_desc_part3:
      ", we weave code into magic and data into wisdom. Building intelligent ecosystems that don't just solve problems, but evolve with your ambitions.",
    hero_cta_primary: "Explore Our Craft",
    hero_cta_secondary: "Get in Touch",
    about_badge: "Beyond the Code",
    about_title_part1: "We don't just build apps.",
    about_title_part2: "We engineer growth.",
    about_desc:
      "Basira Lens is a high-performance collective of engineers. We transform raw data into strategic intelligence.",
    feature_1_title: "Our Vision",
    feature_1_desc:
      "To be the primary technical partner transforming complex data into smart, actionable decisions.",
    feature_2_title: "Our Mission",
    feature_2_desc:
      "Empowering organizations through innovative AI solutions that balance power and simplicity.",
    feature_3_title: "Our Goal",
    feature_3_desc:
      "Accelerating digital transformation and building a future based on data precision and results.",
    services_badge: "Expertise",
    services_title_part1: "Our",
    services_title_part2: "Capabilities",
    service_1_title: "Autonomous AI & Intelligent Agents",
    service_1_desc:
      "Designing self-operating AI agents capable of executing complex workflows and autonomous reasoning.",
    service_1_details: [
      "Agentic Workflows",
      "Multi-Agent Systems",
      "Autonomous Reasoning",
      "API & Tool Integration",
    ],
    service_2_title: "Predictive Analytics & Machine Learning",
    service_2_desc:
      "Forecasting sales, customer behavior, and patterns using high-precision neural networks and ML models.",
    service_2_details: [
      "Demand Forecasting",
      "Churn Prediction",
      "Fraud Detection",
      "Neural Network Design",
    ],
    service_3_title: "Conversational AI & NLP",
    service_3_desc:
      "Building semantic search engines and intelligent chatbots for human-like interaction and text analysis.",
    service_3_details: [
      "Custom Chatbots",
      "Semantic Search",
      "Sentiment Analysis",
      "Entity Extraction",
    ],
    service_4_title: "Computer Vision & Visual Intelligence",
    service_4_desc:
      "Developing real-time monitoring and object detection systems through advanced visual AI models.",
    service_4_details: [
      "Object Recognition",
      "Facial Analysis",
      "OCR Systems",
      "Real-time Video Analytics",
    ],
    service_5_title: "Strategic Analytics & Business Intelligence",
    service_5_desc:
      "Transforming complex data into actionable intelligence through SPSS analysis, Power BI dashboards, and advanced statistical modeling.",
    service_5_details: [
      "Survey Analytics (SPSS)",
      "Interactive Dashboards",
      "KPI Engineering",
      "Strategic Data Storytelling",
    ],
    service_6_title: "Full-Stack AI-Native Development",
    service_6_desc:
      "Architecting scalable, high-performance web ecosystems seamlessly integrated with intelligent AI backends.",
    service_6_details: [
      "Custom Web Apps",
      "AI Integration",
      "Cloud-Native Systems",
      "Performance Optimization",
    ],
    service_pillar: "Pillar",
    expertise_label: "Expertise",
    team_badge: "Our Talent",
    team_title_part1: "Meet the",
    team_title_part2: "Experts",
    team_desc:
      "A diverse team of engineers and designers building the future of digital lens.",
    contact_badge: "Get in Touch",
    contact_title_part1: "Let's build",
    contact_title_part2: " the future",
    contact_desc:
      "Whether you have a groundbreaking idea or a technical challenge, Basira is here to engineer your digital success.",
    contact_email_us: "Email us",
    contact_chat_with_us: "Chat with us",
    contact_form_name: "Full Name",
    contact_form_company: "Company",
    contact_form_company_placeholder: "Optional",
    contact_form_email: "Email Address",
    contact_form_message: "Your Message",
    contact_form_message_placeholder: "Tell us about your project...",
    contact_form_submit: "Launch Inquiry",
    footer_desc:
      "The primary technical partner transforming complex data into smart, actionable decisions.",
    footer_rights: "All rights reserved.",
    back_to_team: "Back to Team",
    about_member: "About",
    core_stack: "Core Stack",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_team: "الفريق",
    nav_services: "خدماتنا",
    nav_contact: "تواصل معنا",
    nav_chat: "مساعد بصيرة الذكي",
    nav_cta: "ابدأ مشروعك",
    nav_cta_mobile: "ابدأ الآن",
    hero_badge: "مستقبل الذكاء الاصطناعي",
    hero_title_part1: "رؤى رقمية",
    hero_title_part2: "تتخطى الحدود",
    hero_desc_part1: "في ",
    hero_desc_part2: "بصيرة",
    hero_desc_part3:
      "، نبتكر حلولاً برمجية ذكية ونحول البيانات المعقدة إلى رؤى استراتيجية ملهمة. نبني أنظمة متطورة لا تكتفي بحل المشكلات، بل تتطور مع طموحاتك المستقبلية.",
    hero_cta_primary: "استكشف خدماتنا",
    hero_cta_secondary: "تواصل معنا",
    about_badge: "ما وراء هندسة البرمجيات",
    about_title_part1: "لا نكتفي ببناء التطبيقات فحسب،",
    about_title_part2: "بل نصمم مسارات النمو.",
    about_desc:
      "بصيرة لينس هي نخبة من المهندسين المبدعين، نعمل على تحويل البيانات الخام إلى قوة استراتيجية تدفع أعمالك نحو المستقبل.",
    feature_1_title: "رؤيتنا",
    feature_1_desc:
      "أن نكون الشريك التقني الرائد في تحويل تعقيدات البيانات إلى قرارات ذكية ومؤثرة.",
    feature_2_title: "مهمتنا",
    feature_2_desc:
      "تمكين المؤسسات عبر تحليل البيانات وحلول الذكاء الاصطناعي المبتكرة التي تدمج بين الكفاءة العالية والبساطة المتناهية.",
    feature_3_title: "هدفنا",
    feature_3_desc:
      "تسريع وتيرة التحول الرقمي وبناء مستقبل يرتكز على دقة البيانات وتحقيق النتائج الملموسة.",
    services_badge: "مجالات الخبرة",
    services_title_part1: "قدراتنا",
    services_title_part2: "التقنية المتطورة",
    service_1_title: "الأنظمة المستقلة ووكلاء الذكاء الاصطناعي",
    service_1_desc:
      "تطوير وكلاء ذكاء اصطناعي قادرة على تنفيذ عمليات معقدة واتخاذ قرارات مستقلة لتعزيز كفاءة العمل.",
    service_1_details: [
      "سير العمل المعتمد على الوكلاء",
      "أنظمة الوكلاء المتعددين",
      "الاستدلال والمنطق المستقل",
      "تكامل البرمجيات والأدوات",
    ],
    service_2_title: "التحليلات التنبؤية وتعلّم الآلة",
    service_2_desc:
      "التنبؤ بالتوجهات المستقبلية وسلوك العملاء باستخدام شبكات عصبية ونماذج تعلم آلي متقدمة.",
    service_2_details: [
      "التنبؤ بالطلب والاحتياجات",
      "تحليل معدلات انصراف العملاء",
      "أنظمة كشف الاحتيال",
      "تصميم البنى العصبية",
    ],
    service_3_title: "الذكاء الاصطناعي التوليدي ومعالجة اللغات",
    service_3_desc:
      "بناء محركات بحث دلالية ومساعدات ذكية توفر تجربة تفاعلية طبيعية وتحليلاً عميقاً للنصوص.",
    service_3_details: [
      "أنظمة الدردشة المخصصة",
      "البحث الدلالي المتقدم",
      "تحليل مشاعر النصوص",
      "استخراج البيانات والمعلومات",
    ],
    service_4_title: "الرؤية الحاسوبية والذكاء البصري",
    service_4_desc:
      "تطوير أنظمة مراقبة وتحليل بصري فوري باستخدام أحدث نماذج التعرف على الأشياء والأنماط.",
    service_4_details: [
      "التعرف الذكي على الأشياء",
      "التحليل الحيوي والمكاني",
      "أنظمة القراءة الآلية (OCR)",
      "تحليل الفيديو بالوقت الفعلي",
    ],
    service_5_title: "تحليل البيانات المتقدم وذكاء الأعمال",
    service_5_desc:
      "تحويل البيانات الضخمة إلى رؤى استراتيجية عبر تحليل SPSS، لوحات تحكم تفاعلية، ونمذجة إحصائية احترافية.",
    service_5_details: [
      "تحليلات الاستبيانات المتقدمة",
      "الحوسبة الإحصائية (R)",
      "لوحات البيانات التفاعلية",
      "صناعة القصة عبر البيانات",
    ],
    service_6_title: "هندسة تطبيقات الويب والأنظمة الذكية",
    service_6_desc:
      "بناء منصات ويب متكاملة وعالية الأداء مدمجة بسلاسة مع أنظمة الذكاء الاصطناعي لضمان تجربة مستخدم فريدة.",
    service_6_details: [
      "تطبيقات الويب المخصصة",
      "دمج الذكاء الاصطناعي",
      "الأنظمة السحابية الأصلية",
      "تحسين الأداء والكفاءة",
    ],
    service_pillar: "ركيزة",
    expertise_label: "التخصصات",
    team_badge: "نخبة الخبراء",
    team_title_part1: "فريق العمل",
    team_title_part2: "المبدع",
    team_desc:
      "مجموعة متميزة من المهندسين والمبتكرين الملتزمين بصياغة مستقبل الحلول الرقمية.",
    contact_badge: "تواصل معنا",
    contact_title_part1: "لنبني معاً",
    contact_title_part2: " مستقبل أعمالك",
    contact_desc:
      "سواء كنت تسعى لتحقيق فكرة مبتكرة أو تواجه تحدياً تقنياً معقداً، فإن فريق بصيرة جاهز لهندسة نجاحك.",
    contact_email_us: "عبر البريد الإلكتروني",
    contact_chat_with_us: "عبر واتساب",
    contact_form_name: "الاسم الكامل",
    contact_form_company: "اسم الشركة",
    contact_form_company_placeholder: "اختياري",
    contact_form_email: "البريد الإلكتروني",
    contact_form_message: "نص الرسالة",
    contact_form_message_placeholder: "أخبرنا المزيد عن مشروعك أو استفسارك...",
    contact_form_submit: "إرسال الاستفسار",
    footer_rights: "جميع الحقوق محفوظة",
    footer_global: "بصيرة العالمية",
    back_to_team: "العودة للفريق",
    about_member: "نبذة عن",
    core_stack: "التقنيات الأساسية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang);
    } else if (typeof window !== "undefined") {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "ar") {
        setLanguageState("ar");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir} className={language === "ar" ? "font-cairo" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
