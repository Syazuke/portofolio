"use client";

import React from "react";
import LightPillar from "../atoms/LightPillar";
import ProfileCard from "../atoms/ProfileCard";

const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LightPillar>
        <ProfileCard />
      </LightPillar>
    </div>
  );
};

export default Header;
