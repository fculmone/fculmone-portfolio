"use client";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ui/ContactForm";
import { TfiEmail } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";

export function Contact() {
  return (
    <div className="max-w-2xl space-y-4 mx-auto py-20 text-lg text-neutral-300 px-3">
      <div data-aos="fade-up" data-aos-once="true">
        <p className="text-center font-bold text-3xl md:text-4xl mb-6">
          Contact
        </p>
        <p>
          If you would like to get in touch with me, please do so using either
          the contact form below or one of the methods listed at the bottom of
          the page. I will get back to you as soon as possible.
        </p>
        <div className="text-black ">
          <ContactForm />
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col mt-20 md:mb-24">
          <div data-aos="fade-up" data-aos-once="true">
            <a
              className="flex items-center mt-8 hover:cursor-pointer"
              href="mailto:fculmone@uwaterloo.ca"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TfiEmail className="fill-white w-12 h-12 mr-10" />
              <p className="text-white mt-0 text-sm md:text-lg">
                fculmone@uwaterloo.ca
              </p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-once="true">
            <a
              className="flex items-center mt-8 hover:cursor-pointer"
              href="https://www.linkedin.com/in/francesco-culmone-34562823a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="fill-white w-12 h-12 mr-10" />
              <p className="text-white text-sm md:text-lg">Francesco Culmone</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-once="true">
            <a
              className="flex items-center mt-8 hover:cursor-pointer"
              href="https://github.com/fculmone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="fill-white w-12 h-12 mr-10" />
              <p className="text-white text-sm md:text-lg">fculmone</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
