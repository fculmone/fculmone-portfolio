import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MultiLayeredParallax() {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <h1 className="font-bold text-white text-7xl md:text-9xl relative z-10">
        PARALLAX
      </h1>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/pixel-waterfall-adobe-gif.gif)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/pixel-waterfall-adobe-gif.gif)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
