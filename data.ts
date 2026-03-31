import {
  BarChart3,
  BrainCircuit,
  CodeXml,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Target, Cpu, LineChart } from "lucide-react";

export const features = [
  {
    icon: Target,
    title: "رؤيتنا",
    desc: "أن نكون الشريك التقني الأول في تحويل البيانات المعقدة إلى قرارات ذكية.",
    color: "text-blue-400",
    bg: "bg-blue-400/5",
  },
  {
    icon: Cpu,
    title: "مهمتنا",
    desc: "تمكين المؤسسات من خلال حلول ذكاء اصطناعي مبتكرة تجمع بين القوة والبساطة.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/5",
  },
  {
    icon: LineChart,
    title: "هدفنا",
    desc: "دفع عجلة التحول الرقمي وبناء مستقبل يعتمد على دقة الأرقام والنتائج.",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
];
export const services = [
  { title: "تحليل البيانات", icon: BarChart3, color: "from-blue-500/20" },
  { title: "الذكاء الاصطناعي", icon: BrainCircuit, color: "from-cyan-500/20" },
  { title: "المنصات الرقمية", icon: CodeXml, color: "from-blue-400/20" },
  { title: "أمن البيانات", icon: ShieldCheck, color: "from-blue-600/20" },
  { title: "تطبيقات الموبايل", icon: Smartphone, color: "from-cyan-600/20" },
  { title: "التسويق الذكي", icon: LineChart, color: "from-blue-700/20" },
];
