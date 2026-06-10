"use client";

import { MyProject } from "@/app/libs/AllArrayData";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import riz from "../../../../public/riz.jpeg";

export function HolographicCard({ avatarUrl, name, title, status, stats }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glowY = useTransform(mouseY, [-150, 150], [0, 100]);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <div
      ref={ref}
      className="relative w-full max-w-90 mx-auto perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`absolute -inset-0.5 rounded-2xl z-0 bg-size-[300%_300%] ${
          hovered
            ? "bg-[linear-gradient(135deg,#22d3ee,#a855f7,#ec4899,#22d3ee,#a855f7)]"
            : "bg-[linear-gradient(135deg,#22d3ee44,#a855f744,#ec489944,#22d3ee44)]"
        }`}
        animate={{
          backgroundPosition: hovered
            ? ["0% 0%", "100% 100%", "0% 0%"]
            : "0% 0%",
          filter: hovered
            ? "blur(0px) drop-shadow(0 0 20px rgba(34,211,238,0.53)) drop-shadow(0 0 40px rgba(168,85,247,0.27))"
            : "blur(0px)",
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          filter: { duration: 0.3 },
        }}
      />

      <motion.div
        className={`relative z-10 rounded-2xl overflow-hidden bg-linear-to-br from-[#18181b] via-[#111113] to-[#0d0d10] transform-3d ${
          hovered
            ? "shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]"
            : "shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)]"
        }`}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Holographic shimmer overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{
            backgroundImage: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(ellipse at ${x}% ${y}%, rgba(34,211,238,0.12) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)`,
            ),
            opacity: hovered ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.2 } }}
        />

        {/* Rainbow scan line */}
        {hovered && (
          <motion.div
            className="absolute inset-x-0 h-0.5 z-30 pointer-events-none bg-linear-to-r from-transparent via-[#22d3ee] to-transparent via-50% [&>div]:bg-linear-to-r [&>div]:from-[#a855f7] [&>div]:to-[#ec4899]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, #22d3ee, #a855f7, #ec4899, transparent)",
            }}
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        )}

        <div className="p-8 flex flex-col gap-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-[0_0_0_2px_rgba(34,211,238,0.3),0_0_20px_rgba(34,211,238,0.2)]">
                <Image
                  src={riz}
                  fill
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      name || "Fariz Alwasi",
                    )}&background=18181b&color=22d3ee&size=80&bold=true`;
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#111113] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-white font-semibold tracking-tight">
                Fariz Alwasi
              </span>
              <span className="text-[#22d3ee] font-mono text-xs tracking-widest uppercase opacity-90">
                Web Developer
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#71717a] mt-1 text-[0.72rem] font-mono">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                Mahasiswa Aktif
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#22d3ee]/20 to-[#a855f7]/20 via-50%" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {MyProject?.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-xl p-3 bg-white/3 border border-white/6"
              >
                <span className="font-bold text-white tracking-tight text-[1.1rem] font-sans">
                  {stat.value}
                </span>
                <span className="text-[#52525b] uppercase tracking-widest text-[0.6rem] font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "Tailwind", "Next.js", "MySQL"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-[#22d3ee] border border-[#22d3ee]/22 bg-[#22d3ee]/[0.0a] text-[0.7rem] font-mono tracking-[0.04em]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full py-3 rounded-xl font-semibold tracking-wide relative overflow-hidden bg-linear-to-br from-[#22d3ee]/22 to-[#a855f7]/22 border border-[#22d3ee]/25 text-[#22d3ee] font-sans text-[0.85rem]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Full Profile →</span>
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-[#22d3ee]/11 to-[#a855f7]/11"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
