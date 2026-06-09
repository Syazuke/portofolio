import { CodeXml, Layers, Terminal, Zap } from "lucide-react";

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
