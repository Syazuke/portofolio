"use client";

import { Myskill } from "@/app/libs/AllArrayData";
import { HolographicCard } from "../atoms/ProfilCard";
import TextType from "../atoms/TextType";
import SideRays from "../atoms/SideRays";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <SideRays className="min-h-screen">
        <div>
          <div id="about" className="flex flex-col gap-10 items-center p-6">
            <div className="w-full flex flex-col gap-6">
              <p className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-medium bg-[#22d3ee]/8 border border-[#22d3ee]/20 text-[#22d3ee] font-mono">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>{" "}
                Available for freelance - Remote
              </p>
              <div className="font-bold font-sans text-3xl md:text-6xl p-2">
                <h1 className="text-white">Hi, I'm Fariz Alwasi</h1>
                <TextType
                  text={["i build the web", ""]}
                  className="text-primary"
                />
              </div>
              <p className="text-zinc-500">
                Senior software engineer obsessed with performance, developer
                experience, and the intersection of code and craft. 8 years
                building products that ship.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {Myskill.map((i) => (
                  <div
                    key={i.id}
                    className="flex flex-row items-center gap-3 rounded-2xl px-2 py-4 bg-white/2.5 border border-white/6"
                  >
                    <p className="text-primary">{i.logo}</p>
                    <div className="flex flex-col leading-4">
                      <h3 className="text-white text-sm font-semibold">
                        {i.title}
                      </h3>
                      <p className="text-xs text-zinc-500">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4 px-6 pb-16"
          >
            <Link
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-[#09090b] transition-all hover:scale-[1.02] active:scale-[0.98] bg-linear-to-br from-[#22d3ee] via-[#06b6d4] to-[#0891b2] shadow-[0_0_30px_rgba(34,211,238,0.35)] font-sans text-[0.9rem]"
            >
              <Mail size={16} />
              Get in touch
            </Link>
            <Link
              href="#project"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/4 border border-white/10 font-sans text-[0.9rem]"
            >
              View work
              <ArrowDown size={16} className="opacity-60" />
            </Link>
          </motion.div>
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full pointer-events-none bg-black/20 border border-[#22d3ee]/6 shadow-[0_0_80px_rgba(34,211,238,0.04),inset_0_0_80px_rgba(168,85,247,0.04)] animate-[spin_20s_linear_infinite]" />
            <HolographicCard />
          </div>
        </div>
      </SideRays>
    </>
  );
};

export default Header;
