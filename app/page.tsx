"use client";
import { MultiLayeredParallax } from "./components/MultiLayerParallax";
import { AboutMeText } from "./components/AboutMeText";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <MultiLayeredParallax />
      <div className="h-24 w-full bg-gradient-to-b from-black to-[#06141D] " />
      <div className="w-full bg-[#06141D]">
        <AboutMeText />
      </div>
      <div className="w-full bg-[#06141D]">
        <div className="pt-20 sm:pt-32">
          <Projects />
        </div>
      </div>
      <div className="w-full bg-[#06141D]">
        <div className="pt-20 sm:pt-32">
          <Contact />
        </div>
      </div>
    </div>
  );
}
