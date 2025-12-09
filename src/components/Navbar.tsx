/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import Dropbox from "./dropbox";
interface Props {
  menuclick: () => void;
  menuSkip: () => void;
  Videoshow: boolean;
  navtoggle: boolean;
  setnav: (arg0: boolean) => void;
  setInteractiveText: (arg0: boolean) => void;
  setVideoshow: (arg0: boolean) => void;
  Start: boolean;
}

// eslint-disable-next-line no-empty-pattern
const Navbar = ({ Start }: Props) => {
  const [firstclick, setfirstclick] = useState(true);
  return (
    <>
      <div
        className={`flex justify-center mt-2 transition-opacity duration-1600 ease-out
      
      ${Start ? "opacity-100" : "opacity-0 pointer-events-none"}
      
      
      
      `}
      >
        <div className="flex text-white font-bold items-center gap-3 justify-center h-20 w-5xl bg-white bg-opacity-50 rounded-full">
          <img
            className="h-12 z-10 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
            src="/test_logo.webp"
            alt="shhhh silly"
          />
          <button className=" py-2 px-8 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 ">
            About
          </button>
          <button className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 ">
            Career
          </button>
          <button className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 ">
            Projects
          </button>
          <button className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 ">
            Skills
          </button>
          <button className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 ">
            Blah
          </button>

          <div className="flex gap-2">
            <a href="https://www.coolmathgames.com/">
              <img
                className="h-12 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
                src="/test_logo.webp"
                alt="shhhh silly"
              />
            </a>
            <a href="https://www.coolmathgames.com/">
              <img
                className="h-12 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
                src="/test_logo.webp"
                alt="shhhh silly"
              />
            </a>
            <a href="https://www.coolmathgames.com/">
              <img
                className="h-12 !rounded-full scale-100 transform transition duration-150 hover:scale-120 "
                src="/test_logo.webp"
                alt="shhhh silly"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// <div className="z-1 h-10 absolute bg-blue-500 rounded-full"></div>
