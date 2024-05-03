"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import useDetectScroll, {
  Axis,
  Direction,
} from "@smakss/react-scroll-direction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

export function Projects() {
  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="space-y-4 mx-auto px-3 text-neutral-300 max-w-4xl">
      <h1
        className="text-center font-bold text-3xl md:text-4xl mb-28"
        data-aos="fade-up"
        data-aos-once="true"
      >
        Let me walk you through my work experiences and projects
      </h1>
      <div className="flex w-full">
        <div
          style={{ backgroundImage: `url("/grass.png")` }}
          className="h-[4000px] md:h-[3000px] w-[150px] relative rounded-md"
        >
          <div className="sticky top-1/4 left-0 right-0 m-auto flex justify-center">
            {scrollDir === "up" ? (
              <Image
                className="scale-90"
                src="/backwards-walk_scaled_32x_minified.gif"
                width={100}
                height={200}
                alt="the character walking backwards"
                unoptimized={true}
              />
            ) : (
              <Image
                className="scale-90"
                src="/character-walk_scaled_32x_minified.gif"
                width={100}
                height={200}
                alt="the character walking forwards"
                unoptimized={true}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center mt-96">
          <div
            className="w-full h-full border-[#A599B5] border-[3px] px-3 py-4 lg:border-4 rounded-2xl ml-1 lg:px-10 lg:ml-8 md:py-8 grid grid-cols-1 gap-3 md:grid-cols-3"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-span-2">
              <p className="text-3xl font-bold underline-offset-4 md:underline-offset-[10px] underline decoration-[#A599B5] decoration-2">
                Software Developer at Ford
              </p>
              <ul className="list-disc pl-5 mt-6 text-lg space-y-2">
                <li>
                  Worked as an Android developer for Ford Motor Company, where
                  the teams main project was to design an app for Amazon Alexa
                  that would be used on the touch screens in their motor
                  vehicles.
                </li>
                <li>
                  Technoligies used include Java, Kotlin, Android Studio, and
                  Git.
                </li>
                <li>
                  Worked for two, four month terms; totalling eight months.
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex items-center justify-center mt-6 md:mt-0">
              <Image
                className="scale-90"
                src="/Ford-Motor-Company-Logo.png"
                width={600}
                height={229}
                alt="Ford logo"
              />
            </div>
          </div>
          <div
            className="w-full h-full border-[#A599B5] border-[3px] px-3 py-4 md:border-4 rounded-2xl ml-1 md:px-10 md:ml-8 md:py-8 grid grid-cols-1 gap-3 md:grid-cols-1 mt-40"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-span-2">
              <p className="text-3xl font-bold underline-offset-4 md:underline-offset-[10px] underline decoration-[#A599B5] decoration-2">
                Your Voice is Power Hackathon
              </p>
              <ul className="list-disc pl-5 mt-6 text-lg space-y-2">
                <li>
                  Empowered, mentored, and educated various teams of students.
                </li>
                <li>
                  Instructed groups on how to code in python with the Earsketch
                  library.
                </li>
                <li>
                  Supported students as they made Indigenous inspired music
                  through code.
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex items-center justify-center mt-6 md:mt-0">
              <Image
                className="scale-90"
                src="/your-voice-is-power.jpeg"
                width={600}
                height={229}
                alt="Your voice is power hackathon picture"
              />
            </div>
          </div>
          <div
            className="w-full h-full border-[#A599B5] border-[3px] px-3 py-4 md:border-4 rounded-2xl ml-1 md:px-10 md:ml-8 md:py-8 grid grid-cols-1 gap-3 md:grid-cols-3 mt-40"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-span-2">
              <p className="text-3xl font-bold underline-offset-4 md:underline-offset-[10px] underline decoration-[#A599B5] decoration-2">
                Royale Clan Manager
              </p>
              <ul className="list-disc pl-5 mt-6 text-lg space-y-2">
                <li>
                  Built a responsive web page that helps players of the mobile
                  game Clash Royale quickly manage their clan
                </li>
                <li>
                  Consists of a frontend built with React using the NextJS
                  framework and a backend written in python flask.
                </li>
                <li>
                  Deployed using Docker and Nginx on an Ubuntu 22.04 server.
                </li>
                <li>
                  You can check it out{" "}
                  <a
                    href="https://royaleclanmanager.com/?clan-tag=Q8UGY2V2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-blue-300 underline hover:text-blue-700"
                  >
                    here
                  </a>
                  . The search parameters are pre-filled via the URL.
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex items-center justify-center mt-6 md:mt-0">
              <Image
                className="scale-90"
                src="/War_Shield_Original.webp"
                width={259}
                height={298}
                alt="Clash Royale War Sheild"
              />
            </div>
          </div>
          <div
            className="w-full h-full border-[#A599B5] border-[3px] px-3 py-4 md:border-4 rounded-2xl ml-1 md:px-10 md:ml-8 md:py-8 grid grid-cols-1 gap-3 md:grid-cols-3 mt-40"
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-span-2">
              <p className="text-3xl font-bold underline-offset-4 md:underline-offset-[10px] underline decoration-[#A599B5] decoration-2 sm:leading-10">
                Innerphase Productions Company Website
              </p>
              <ul className="list-disc pl-5 mt-6 text-lg space-y-2">
                <li>
                  Freelanced a company website for the DJ and Entertainment
                  company Innerphase Productions
                </li>
                <li>
                  Built using the React library with the NextJS framework and
                  styled using TailwindCSS
                </li>
                <li>
                  You can check it out{" "}
                  <a
                    href="https://www.innerphaseproductions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-blue-300 underline hover:text-blue-700"
                  >
                    here
                  </a>
                  .
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex items-center justify-center mt-6 md:mt-0">
              <Image
                className="scale-90"
                src="/official-innerphase-logo-removebg-preview.png"
                width={473}
                height={396}
                alt="Innerphase Productions Company Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
