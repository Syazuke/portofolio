"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import riz from "../../../../public/riz.jpeg";
import { MyProject } from "@/app/libs/Myskill";

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
      className="relative w-full max-w-90 mx-auto"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute -inset-0.5 rounded-2xl z-0"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899, #22d3ee, #a855f7)"
            : "linear-gradient(135deg, #22d3ee44, #a855f744, #ec489944, #22d3ee44)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: hovered
            ? ["0% 0%", "100% 100%", "0% 0%"]
            : "0% 0%",
          filter: hovered
            ? "blur(0px) drop-shadow(0 0 20px #22d3ee88) drop-shadow(0 0 40px #a855f744)"
            : "blur(0px)",
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          filter: { duration: 0.3 },
        }}
      />

      <motion.div
        className="relative z-10 rounded-2xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(135deg, #18181b 0%, #111113 50%, #0d0d10 100%)",
          boxShadow: hovered
            ? "0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Holographic shimmer overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{
            background: useTransform(
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
            className="absolute inset-x-0 h-0.5 z-30 pointer-events-none"
            style={{
              background:
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
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 2px rgba(34,211,238,0.3), 0 0 20px rgba(34,211,238,0.2)",
                }}
              >
                <Image
                  src={riz}
                  fill
                  alt="asd"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=18181b&color=22d3ee&size=80&bold=true`;
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#111113] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-white font-semibold tracking-tight">
                Fariz Alwasi
              </span>
              <span className="text-primary font-mono text-xs tracking-widest uppercase opacity-90">
                Web Developer
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[#71717a] mt-1"
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                Mahasiswa Aktif
              </span>
            </div>
          </div>

          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), rgba(168,85,247,0.2), transparent)",
            }}
          />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {MyProject.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-xl p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="font-bold text-white tracking-tight"
                  style={{
                    fontSize: "1.1rem",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#52525b] uppercase tracking-widest"
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
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
                  className="px-2.5 py-1 rounded-lg text-[#22d3ee] border border-[#22d3ee22] bg-[#22d3ee0a]"
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full py-3 rounded-xl font-semibold tracking-wide relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #22d3ee22, #a855f722)",
              border: "1px solid rgba(34,211,238,0.25)",
              color: "#22d3ee",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Full Profile →</span>
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #22d3ee11, #a855f711)",
              }}
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
