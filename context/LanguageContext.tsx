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
    nav_case_studies: "Case Studies",
    nav_team: "Team",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_chat: "AI Assistant",
    nav_cta: "Start a Project",
    nav_cta_mobile: "Start Now",
    hero_badge: "Data Analytics & AI Solutions",
    hero_title_part1: "Transforming Data into Insight",
    hero_title_part2: "Insight into Growth",
    hero_desc_part1:
      "BasiraLens helps organizations unlock the power of data through ",
    hero_desc_part2:
      "advanced analytics, business intelligence, and AI-driven solutions ",
    hero_desc_part3: "that support smarter decisions and sustainable growth",
    hero_cta_primary: "Explore Our Services",
    hero_cta_secondary: "Book a Free Consultation",
    about_badge: "About BasiraLens",
    about_title_part1: "We Transform Data",
    about_title_part2: "Into Business Value.",
    about_desc:
      "BasiraLens is a specialized Data Analytics and Artificial Intelligence company dedicated to helping organizations transform raw data into strategic insights and measurable business value. By combining analytics expertise, business understanding, and AI technologies, we help businesses make informed decisions, improve operational efficiency, and uncover new opportunities for growth.",
    feature_1_title: "Data-Driven Intelligence",
    feature_1_desc:
      "We combine analytics expertise and deep business understanding to deliver insights that drive real impact.",
    feature_2_title: "AI-Powered Solutions",
    feature_2_desc:
      "Leveraging the latest AI technologies to build practical, scalable solutions tailored to your organization.",
    feature_3_title: "Measurable Business Value",
    feature_3_desc:
      "Every engagement ends with actionable recommendations and outcomes you can measure and build on.",
    services_badge: "Our Services",
    services_title_part1: "What We",
    services_title_part2: "Offer",

    service_1_title: "Business Analytics & Decision Intelligence",
    service_1_desc:
      "We help organizations make smarter decisions by analyzing sales, customers, and performance data to uncover actionable insights.",
    service_1_details: [
      "Sales Analytics",
      "Customer Analytics",
      "Marketing Analytics",
      "KPI Development",
      "Performance Analysis",
    ],

    service_2_title: "Business Intelligence & Data Visualization",
    service_2_desc:
      "We transform complex data into clear, interactive dashboards and executive reports that make decision-making effortless.",
    service_2_details: [
      "Power BI Dashboards",
      "Tableau Dashboards",
      "Executive Reporting",
      "Interactive Dashboards",
      "Automated Reports",
    ],
    service_3_title: "Predictive Analytics & AI Solutions",
    service_3_desc:
      "We build forecasting models and machine learning solutions that help you anticipate trends and stay ahead of the curve.",
    service_3_details: [
      "Forecasting Models",
      "Machine Learning Solutions",
      "Customer Segmentation",
      "Recommendation Systems",
      "Predictive Modeling",
    ],

    service_4_title: "AI Automation & Intelligent Agents",
    service_4_desc:
      "We design AI-powered agents and automation workflows that reduce manual effort and boost operational efficiency.",
    service_4_details: [
      "AI Chatbots",
      "WhatsApp Assistants",
      "Workflow Automation",
      "Knowledge Assistants",
      "Intelligent Agents",
    ],

    service_5_title: "Research & Academic Analytics",
    service_5_desc:
      "We support researchers and academics with professional statistical analysis, survey processing, and scientific reporting.",
    service_5_details: [
      "SPSS Analysis",
      "Python Analysis",
      "Statistical Testing",
      "Survey Analysis",
      "Academic Reporting",
    ],
    service_pillar: "Service",
    tools_label: "Tools",
    expertise_label: "What's Included",
    why_badge: "Why Choose Us",
    why_title_part1: "Why",
    why_title_part2: "BasiraLens?",
    why_1_title: "Data-Driven Decisions",
    why_1_desc:
      "We help organizations make decisions based on data, not guesswork.",
    why_2_title: "AI-Powered Innovation",
    why_2_desc:
      "We leverage the latest AI technologies to deliver practical, scalable solutions.",
    why_3_title: "Business-Focused Approach",
    why_3_desc: "We focus on real business outcomes and measurable impact.",
    why_4_title: "Specialized Analytics Team",
    why_4_desc:
      "A dedicated team of experts in data analytics, business intelligence, and AI.",
    why_5_title: "Reliable & Secure Solutions",
    why_5_desc:
      "Solutions built on best practices in data management and information security.",
    why_6_title: "Actionable Insights",
    why_6_desc:
      "Every analysis ends with practical recommendations ready to be implemented.",
    process_badge: "How We Work",
    process_title_part1: "Our",
    process_title_part2: "Process",
    process_1_title: "Discover",
    process_1_desc:
      "We start by understanding your goals, challenges, and the data landscape of your organization.",
    process_2_title: "Analyze",
    process_2_desc:
      "We dive deep into your data to extract patterns, trends, and meaningful insights.",
    process_3_title: "Visualize",
    process_3_desc:
      "We present findings through professional dashboards and interactive reports.",
    process_4_title: "Optimize",
    process_4_desc:
      "We deliver actionable recommendations and solutions that create real, measurable value.",
    industries_badge: "Industries We Serve",
    industries_title_part1: "Who We",
    industries_title_part2: "Work With",
    industry_1_title: "Retail & E-Commerce",
    industry_2_title: "Healthcare",
    industry_3_title: "Education",
    industry_4_title: "Financial Services",
    industry_5_title: "Government Sector",
    industry_6_title: "NGOs",
    industry_7_title: "Startups & SMEs",
    tech_badge: "Technologies & Tools",
    tech_title_part1: "Our",
    tech_title_part2: "Tech Stack",
    tech_group_1: "Data Analytics",
    tech_group_2: "Business Intelligence",
    tech_group_3: "Artificial Intelligence",
    vision_badge: "Vision & Mission",
    vision_title_part1: "Where We",
    vision_title_part2: "Are Headed",
    vision_card_title: "Our Vision",
    vision_card_desc:
      "To be the trusted partner for organizations across the Arab world in Data Analytics and Artificial Intelligence.",
    mission_card_title: "Our Mission",
    mission_card_desc:
      "Empowering organizations through data-driven intelligence, advanced analytics, and AI-powered innovation to unlock their full potential.",
    cases_badge: "Case Studies",
    cases_title_part1: "Real Projects,",
    cases_title_part2: "Real Results",
    cases_desc:
      "Real-world projects and measurable outcomes. Our case studies are being prepared and will be published soon.",
    cases_soon_title: "Coming Soon",
    cases_soon_desc:
      "We are currently documenting our projects and success stories. Check back soon to explore real-world examples of how we transform data into business value.",
    cases_cta: "Start Your Project",
    team_badge: "Our Talent",
    team_title_part1: "Meet the",
    team_title_part2: "Experts",
    team_desc:
      "A diverse team of engineers and designers building the future of digital lens.",
    contact_badge: "Get in Touch",
    contact_title_part1: "Let's Talk",
    contact_title_part2: " About Your Data",
    contact_desc:
      "Ready to transform your data into business value? Book a free consultation and let's explore what's possible together.",
    contact_email_us: "Email us",
    contact_chat_with_us: "Chat with us",
    contact_form_name: "Full Name",
    contact_form_company: "Company",
    contact_form_company_placeholder: "Optional",
    contact_form_email: "Email Address",
    contact_form_message: "Your Message",
    contact_form_message_placeholder: "Tell us about your project...",
    contact_form_submit: "Book a Free Consultation",
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
    nav_case_studies: "أعمالنا",
    nav_contact: "تواصل معنا",
    nav_chat: "مساعد بصيرة الذكي",
    nav_cta: "ابدأ مشروعك",
    hero_badge: "تحليل البيانات وحلول الذكاء الاصطناعي",
    hero_title_part1: "نحوّل البيانات إلى بصيرة،",
    hero_title_part2: "والبصيرة إلى نمو.",
    hero_desc_part1:
      "بصيرة لينس تساعد المؤسسات على الاستفادة القصوى من بياناتها عبر ",
    hero_desc_part2: "التحليلات المتقدمة وذكاء الأعمال وحلول الذكاء الاصطناعي ",
    hero_desc_part3: "لدعم القرارات وتحقيق النمو المستدام.",
    hero_cta_primary: "استكشف خدماتنا",
    hero_cta_secondary: "احجز استشارة مجانية",
    about_badge: "من نحن",
    about_title_part1: "نحوّل البيانات",
    about_title_part2: "إلى قيمة حقيقية.",
    about_desc:
      "بصيرة لينس شركة متخصصة في تحليل البيانات والذكاء الاصطناعي، تساعد المؤسسات على تحويل البيانات الخام إلى رؤى استراتيجية وقيمة أعمال حقيقية. نجمع بين الخبرة التحليلية والفهم العميق للأعمال وتقنيات الذكاء الاصطناعي لمساعدة المؤسسات على اتخاذ قرارات أكثر ذكاءً وتحسين الأداء واكتشاف فرص النمو.",
    feature_1_title: "ذكاء مبني على البيانات",
    feature_1_desc:
      "نجمع بين الخبرة التحليلية والفهم العميق للأعمال لتقديم رؤى تحقق أثراً حقيقياً.",
    feature_2_title: "حلول مدعومة بالذكاء الاصطناعي",
    feature_2_desc:
      "نوظف أحدث تقنيات الذكاء الاصطناعي لبناء حلول عملية وقابلة للتوسع تناسب مؤسستك.",
    feature_3_title: "قيمة أعمال قابلة للقياس",
    feature_3_desc:
      "كل مشروع ينتهي بتوصيات عملية قابلة للتنفيذ ونتائج يمكنك قياسها والبناء عليها.",

    services_badge: "خدماتنا",
    services_title_part1: "ماذا",
    services_title_part2: "نقدم",
    service_1_title: "تحليل الأعمال ودعم اتخاذ القرار",
    service_1_desc:
      "نساعد المؤسسات على اتخاذ قرارات أذكى من خلال تحليل بيانات المبيعات والعملاء والأداء للكشف عن رؤى قابلة للتنفيذ.",
    service_1_details: [
      "تحليل المبيعات",
      "تحليل العملاء",
      "تحليل التسويق",
      "تطوير مؤشرات الأداء",
      "تحليل الأداء",
    ],
    service_2_title: "ذكاء الأعمال والتقارير التفاعلية",
    service_2_desc:
      "نحوّل البيانات المعقدة إلى لوحات معلومات تفاعلية وتقارير تنفيذية واضحة تجعل اتخاذ القرار أمراً سهلاً.",
    service_2_details: [
      "لوحات Power BI",
      "لوحات Tableau",
      "التقارير التنفيذية",
      "اللوحات التفاعلية",
      "التقارير الآلية",
    ],
    service_3_title: "التحليلات التنبؤية وحلول الذكاء الاصطناعي",
    service_3_desc:
      "نبني نماذج تنبؤية وحلول تعلم آلي تساعدك على استشراف الاتجاهات والبقاء في المقدمة.",
    service_3_details: [
      "نماذج التنبؤ",
      "حلول التعلم الآلي",
      "تقسيم العملاء",
      "أنظمة التوصية",
      "النمذجة التنبؤية",
    ],
    service_4_title: "الأتمتة الذكية ووكلاء الذكاء الاصطناعي",
    service_4_desc:
      "نصمم وكلاء ذكاء اصطناعي وسير عمل آلية تقلل الجهد اليدوي وترفع كفاءة العمليات.",
    service_4_details: [
      "روبوتات المحادثة",
      "مساعدو واتساب",
      "أتمتة سير العمل",
      "مساعدو المعرفة",
      "الوكلاء الذكيون",
    ],
    service_5_title: "التحليل الإحصائي والأكاديمي",
    service_5_desc:
      "ندعم الباحثين والأكاديميين بتحليل إحصائي احترافي ومعالجة استبيانات وتقارير علمية متكاملة.",
    service_5_details: [
      "تحليل SPSS",
      "تحليل Python",
      "الاختبارات الإحصائية",
      "تحليل الاستبيانات",
      "التقارير الأكاديمية",
    ],
    service_pillar: "خدمة",
    tools_label: "الأدوات",
    expertise_label: "ما يشمله",
    why_badge: "لماذا تختارنا",
    why_title_part1: "لماذا",
    why_title_part2: "بصيرة لينس؟",
    why_1_title: "قرارات مبنية على البيانات",
    why_1_desc:
      "نساعد المؤسسات على اتخاذ قرارات مبنية على البيانات بدلاً من التخمين.",
    why_2_title: "ابتكار مدعوم بالذكاء الاصطناعي",
    why_2_desc:
      "نوظف أحدث تقنيات الذكاء الاصطناعي لتقديم حلول عملية وقابلة للتوسع.",
    why_3_title: "نهج موجّه نحو الأعمال",
    why_3_desc: "نركز على النتائج التجارية والأثر الحقيقي القابل للقياس.",
    why_4_title: "فريق تحليلات متخصص",
    why_4_desc: "فريق متخصص في تحليل البيانات وذكاء الأعمال والذكاء الاصطناعي.",
    why_5_title: "حلول موثوقة وآمنة",
    why_5_desc:
      "حلول مبنية على أفضل الممارسات في إدارة البيانات وأمن المعلومات.",
    why_6_title: "رؤى قابلة للتنفيذ",
    why_6_desc: "كل تحليل ينتهي بتوصيات عملية جاهزة للتطبيق الفوري.",
    process_badge: "منهجية العمل",
    process_title_part1: "كيف",
    process_title_part2: "نعمل؟",
    process_1_title: "الاستكشاف",
    process_1_desc: "نبدأ بفهم أهدافك وتحدياتك وطبيعة البيانات في مؤسستك.",
    process_2_title: "التحليل",
    process_2_desc:
      "نتعمق في بياناتك لاستخراج الأنماط والتوجهات والرؤى ذات المعنى.",
    process_3_title: "التصور",
    process_3_desc: "نعرض النتائج عبر لوحات معلومات احترافية وتقارير تفاعلية.",
    process_4_title: "التحسين",
    process_4_desc:
      "نقدم توصيات وحلول قابلة للتنفيذ تحقق قيمة حقيقية وقابلة للقياس.",
    industries_badge: "القطاعات التي نخدمها",
    industries_title_part1: "مع من",
    industries_title_part2: "نعمل؟",
    industry_1_title: "التجزئة والتجارة الإلكترونية",
    industry_2_title: "الرعاية الصحية",
    industry_3_title: "التعليم",
    industry_4_title: "الخدمات المالية",
    industry_5_title: "القطاع الحكومي",
    industry_6_title: "المنظمات غير الربحية",
    industry_7_title: "الشركات الناشئة والمتوسطة",
    tech_badge: "الأدوات والتقنيات",
    tech_title_part1: "أدواتنا",
    tech_title_part2: "التقنية",
    tech_group_1: "تحليل البيانات",
    tech_group_2: "ذكاء الأعمال",
    tech_group_3: "الذكاء الاصطناعي",
    vision_badge: "الرؤية والرسالة",
    vision_title_part1: "إلى أين",
    vision_title_part2: "نتجه؟",
    vision_card_title: "رؤيتنا",
    vision_card_desc:
      "أن نكون الشريك الموثوق للمؤسسات في العالم العربي في مجال تحليل البيانات والذكاء الاصطناعي.",
    mission_card_title: "رسالتنا",
    mission_card_desc:
      "تمكين المؤسسات من اتخاذ قرارات أكثر ذكاءً من خلال التحليلات المتقدمة والرؤى المستندة إلى البيانات وحلول الذكاء الاصطناعي للوصول إلى كامل إمكاناتها.",
    cases_badge: "أعمالنا",
    cases_title_part1: "مشاريع حقيقية،",
    cases_title_part2: "نتائج قابلة للقياس",
    cases_desc:
      "مشاريع حقيقية ونتائج ملموسة. دراسات الحالة لدينا قيد الإعداد وستُنشر قريباً.",
    cases_soon_title: "قريباً",
    cases_soon_desc:
      "نعمل حالياً على توثيق مشاريعنا وقصص نجاحنا. تابعنا قريباً لاستعراض أمثلة حقيقية على كيفية تحويلنا للبيانات إلى قيمة أعمال.",
    cases_cta: "ابدأ مشروعك",
    team_badge: "نخبة الخبراء",
    team_title_part1: "فريق العمل",
    team_title_part2: "المبدع",
    team_desc:
      "مجموعة متميزة من المهندسين والمبتكرين الملتزمين بصياغة مستقبل الحلول الرقمية.",
    contact_badge: "تواصل معنا",
    contact_title_part1: "لنتحدث",
    contact_title_part2: " عن بياناتك",
    contact_desc:
      "هل أنت مستعد لتحويل بياناتك إلى قيمة حقيقية لأعمالك؟ احجز استشارة مجانية ولنستكشف الإمكانيات معاً.",
    contact_email_us: "عبر البريد الإلكتروني",
    contact_chat_with_us: "عبر واتساب",
    contact_form_name: "الاسم الكامل",
    contact_form_company: "اسم الشركة",
    contact_form_company_placeholder: "اختياري",
    contact_form_email: "البريد الإلكتروني",
    contact_form_message: "نص الرسالة",
    contact_form_message_placeholder: "أخبرنا المزيد عن مشروعك أو استفسارك...",
    contact_form_submit: "احجز استشارة مجانية",
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
