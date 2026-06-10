import { CardProjects } from "@/app/libs/AllArrayData";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col gap-4">
        <p className="text-primary font-sans text-xs">-- SELECTED WORK</p>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-4xl font-semibold">
            Things I"ve built
          </h2>
          <p>
            A handful of projects I'm proud of - open souce tools, experiments,
            and client work.
          </p>
        </div>
        {CardProjects.map((i) => (
          <div
            key={i.id}
            className="rounded-xl overflow-hidden border bg-black/10 hover:border-primary/40"
          >
            <Image src={i.img} className="" />
            <div className="flex flex-col gap-2 p-6">
              <h3 className="text-white text-lg font-semibold">{i.title}</h3>
              <p className="text-sm text-zinc-500">{i.desc}</p>
              <div className="flex gap-4">
                {i.tech.map((techItem, index) => (
                  <p
                    key={index}
                    className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-medium bg-primary/8 border border-primary/20 text-primary font-mono"
                  >
                    {techItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
