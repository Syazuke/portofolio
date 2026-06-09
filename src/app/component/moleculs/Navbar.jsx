"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1>My Portofolio</h1>
        <div>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/stack">Stack</Link>
          <Link href="contact">Contact</Link>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>{" "}
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
