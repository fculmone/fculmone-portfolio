import Image from "next/image";
import { MultiLayeredParallax } from "./components/MultiLayerParallax";
import { AboutMeText } from "./components/AboutMeText";

export default function Home() {
  return (
    <div>
      <MultiLayeredParallax />
      <div className="h-24 w-full bg-gradient-to-b from-black to-[#06141D] " />
      <div className="w-full bg-[#06141D]">
        <AboutMeText />
      </div>
    </div>
  );
}
