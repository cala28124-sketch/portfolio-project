/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
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
  setspawnabout: (arg0: boolean) => void;
  spawnabout: boolean;
  spawnproject: boolean;
  setspawnproject: (arg0: boolean) => void;
  spawncareer: boolean;
  setspawncareer: (arg0: boolean) => void;
  spawnskills: boolean;
  setspawnskills: (arg0: boolean) => void;
  spawnmisc: boolean;
  setspawnmisc: (arg0: boolean) => void;
}

// eslint-disable-next-line no-empty-pattern
const Navbar = ({
  Start,
  setspawnabout,
  spawnabout,
  spawnproject,
  setspawnproject,
  spawncareer,
  setspawncareer,
  spawnskills,
  setspawnskills,
  spawnmisc,
  setspawnmisc,
}: Props) => {
  const [firstclick, setfirstclick] = useState(true);
  const [Mount, setMount] = useState(false);

  useEffect(() => {
    if (Mount) {
      const element = document.getElementById("navbar");
      element?.classList.remove("opacity-0");
    } else {
      setMount(true);
    }
  }, [Start]);
  return (
    <>
      <div
        id="navbar"
        className={`flex justify-center mt-2 transition-opacity duration-1600 ease-out z-10 opacity-0
      
      ${Start ? "startslow" : "pointer-events-none"}
      
      
      
      `}
      >
        <div className="flex text-white font-bold items-center gap-3 justify-center h-20 w-5xl bg-white bg-opacity-50 rounded-full">
          <img
            className="h-12 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
            src="/test_logo.webp"
            alt="shhhh silly"
          />
          <button
            onClick={() => {
              setspawnabout(true);
            }}
            className=" py-2 px-8 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            About
          </button>
          <button
            onClick={() => {
              setspawncareer(true);
            }}
            className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            Career
          </button>
          <button
            onClick={() => {
              setspawnproject(true);
            }}
            className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            Projects
          </button>
          <button
            onClick={() => {
              setspawnskills(true);
            }}
            className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            Skills
          </button>
          <button
            onClick={() => {
              setspawnmisc(true);
            }}
            className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            Features
          </button>

          <div className="flex gap-2">
            <a href="https://github.com/cala28124-sketch" target="_blank">
              <img
                className="h-12 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
                src="/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-calabrese-b4453930b/"
              target="_blank"
            >
              <img
                className="h-12 scale-100 transform transition duration-150 hover:scale-120"
                src="/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="https://www.coolmathgames.com/" target="_blank">
              <img
                className="h-12 scale-100 transform transition duration-150 hover:scale-120 "
                src="/resume.png"
                alt="resume"
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
