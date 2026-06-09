"use client";

import { Myskill } from "@/app/libs/Myskill";
import { HolographicCard } from "../atoms/ProfilCard";
import TextType from "../atoms/TextType";
import SideRays from "../atoms/SideRays";

const Header = () => {
  return (
    <>
      <SideRays className="min-h-screen">
        <div className="flex flex-col gap-10 items-center p-6">
          <div className="w-full flex flex-col gap-6">
            <p
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(34,211,238,0.2)",
                color: "#22d3ee",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
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
                  className="flex flex-row items-center gap-3 rounded-2xl p-2"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
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
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eius quisquam distinctio quidem mollitia accusantium, unde sint
              laborum tenetur asperiores laboriosam libero. Repellendus quae
              quis culpa quo temporibus a tempora!
            </h1>
          </div>
          <div className="relative w-120">
            <div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full pointer-events-none bg-black/20"
              style={{
                border: "1px solid rgba(34,211,238,0.06)",
                boxShadow:
                  "0 0 80px rgba(34,211,238,0.04), inset 0 0 80px rgba(168,85,247,0.04)",
                animation: "spin-slow 20s linear infinite",
              }}
            />
            <HolographicCard />
          </div>
        </div>
      </SideRays>
    </>
  );
};

export default Header;
