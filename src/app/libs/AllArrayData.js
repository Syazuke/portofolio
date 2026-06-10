import { CodeXml, Layers, Terminal, Zap } from "lucide-react";
import img1 from "../../../public/ayatulMuthmainnah.png";
import img2 from "../../../public/littleBlueming.png";

export const Myskill = [
  {
    id: 1,
    title: "Frontend Dev",
    desc: "React, Vite",
    logo: <CodeXml size={16} />,
  },
  {
    id: 2,
    title: "Full Stack",
    desc: "Nextjs",
    logo: <Layers size={16} />,
  },
  {
    id: 3,
    title: "Dev Tooling",
    desc: "CLIs, compiler, DX",
    logo: <Terminal size={16} />,
  },
  {
    id: 4,
    title: "Performance",
    desc: "Core Wen Vitals, profiling",
    logo: <Zap size={16} />,
  },
];

export const MyProject = [
  {
    label: "Project",
    value: "5+",
  },
  {
    label: "Commit",
    value: "100+",
  },
  {
    label: "Starts",
    value: "100+",
  },
];

export const NavLink = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export const SocialMedia = [
  {
    name: "Github",
    path: "https://github.com/Syazuke",
    logo: <i className="fa-brands fa-github"></i>,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/farizalwasz/",
    logo: <i className="fa-brands fa-instagram"></i>,
  },
  {
    name: "LinkId",
    path: "https://www.linkedin.com/in/fariz-alwasi-2a89a5404?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    logo: <i className="fa-brands fa-linkedin-in"></i>,
  },
];

export const CardProjects = [
  {
    id: 1,
    img: img1,
    title: "DKM Ayatul Muthmainnah",
    desc: "Platform e-commerce ringan untuk katalog buket premium Little Blueming. Memudahkan pelanggan menjelajahi produk dan melakukan pemesanan custom langsung via WhatsApp.",
    tech: ["NextJs", "React", "Tailwind Css"],
  },
  {
    id: 2,
    img: img2,
    title: "Little Blueming",
    desc: "Sistem informasi terpadu untuk DKM Ayatul Muthmainnah. Memfasilitasi digitalisasi layanan Lembaga Amil Zakat serta manajemen tagihan dan pembayaran SPP sekolah secara praktis.",
    tech: ["NextJs", "React", "Tailwind Css"],
  },
];
