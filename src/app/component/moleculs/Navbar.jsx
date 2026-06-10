"use client";

import { NavLink, SocialMedia } from "@/app/libs/AllArrayData";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">My Portofolio</h1>
        <div className="flex">
          {NavLink.map((i) => (
            <Link
              key={i.name}
              href={i.href}
              onClick={() => {
                setIsActive(i);
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium border hidden md:inline ${
                isActive === i
                  ? "text-primary bg-cyan-400/10 border-cyan-400/15"
                  : "text-white bg-transparent border-transparent hover:text-primary"
              }`}
            >
              <p>{i.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          {SocialMedia.map((i) => (
            <a
              key={i.name}
              href={i.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xl cursor-pointer text-white hover:text-primary">
                {i.logo}
              </p>
            </a>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white md:hidden inline"
          >
            {isOpen ? <X /> : <Menu className="" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="text-white pt-4 text-center flex flex-col gap-2">
          {NavLink.map((i) => (
            <Link key={i.name} href={i.href} className="">
              <p className="hover:text-primary">{i.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
