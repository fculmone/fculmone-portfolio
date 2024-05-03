"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MultiLayeredParallax() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end start"],
  });
  const mountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

  return (
    <div className="w-full h-screen overflow-hidden relative grid text-center ">
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white mt-16 text-5xl md:text-7xl md:mt-22 relative justify-top z-10 drop-shadow-xl shadow-black underline-css"
      >
        Francesco <br />
        Culmone
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/pixel-waterfall-adobe-gif-no-eagle.gif)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/pixel-waterfall-adobe-gif-no-sky.gif)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountainsY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/only-grass-try3.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
