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
  const [dropdownopen, setdropdownopen] = useState(false);
  const [dropdownclose, setdropdownclose] = useState(true);

  useEffect(() => {
    if (Mount) {
      const element = document.getElementById("navbar");
      const element2 = document.getElementById("mobiledrop");
      element?.classList.remove("opacity-0");
      element2?.classList.remove("opacity-0");
    } else {
      setMount(true);
    }
  }, [Start]);

  useEffect(() => {
    if (Mount) {
      if (dropdownclose) {
        const element = document.getElementById("dropdownbox");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("dropdownbox");
        element?.classList.remove("opacity-0");
      }
    } else {
      setMount(true);
    }
  }, [dropdownclose]);

  return (
    <>
      <button
        id="mobiledrop"
        onClick={() => {
          if (dropdownclose) {
            setdropdownopen(true);
            setdropdownclose(false);
          } else {
            setdropdownopen(false);
            setdropdownclose(true);
          }
        }}
        className={`lg:hidden absolute top-2 right-2 w-[12%] !rounded-lg !bg-red-500 z-20 opacity-0 transform transition duration-300 scale-100 active:scale-110 ${
          Start ? "startslow" : "pointer-events-none"
        }`}
      >
        <img className="p-2" src="/test_logo.webp" alt="shhhh silly" />
      </button>
      <div className=" flex justify-center pointer-events-auto">
        <div
          id="dropdownbox"
          className={`!text-grey-300 font z-20 flex flex-col items-center justify-center rounded-lg lg:hidden absolute top-15 h-[40%] w-[75%] bg-white bg-opacity-50 opacity-0 ${
            dropdownopen ? "start pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            onClick={() => {
              setspawnabout(true);
            }}
            className=" w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110 "
          >
            About
          </button>
          <button
            onClick={() => {
              setspawncareer(true);
            }}
            className="w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110  "
          >
            Career
          </button>
          <button
            onClick={() => {
              setspawnproject(true);
            }}
            className="w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110 "
          >
            Projects
          </button>

          <div className="flex justify-center gap-2">
            <img
              className="h-10 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
              src="/test_logo.webp"
              alt="shhhh silly"
            />
            <a href="https://github.com/cala28124-sketch" target="_blank">
              <img
                className="h-10 !rounded-full scale-100 transform transition duration-150 hover:scale-120"
                src="/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-calabrese-b4453930b/"
              target="_blank"
            >
              <img
                className="h-10 scale-100 transform transition duration-150 hover:scale-120"
                src="/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="/resume.pdf" target="_blank">
              <img
                className="h-10 scale-100 transform transition duration-150 hover:scale-120 "
                src="/resume.png"
                alt="resume"
              />
            </a>
          </div>
        </div>
      </div>

      <div className=" flex justify-center pointer-events-auto">
        <div
          id="navbar"
          className={`max-lg:hidden w-[90%] lg:w-[900px] pointer-events-auto flex justify-center mt-2 z-20 opacity-0 font
      
      ${Start ? "startslow" : "pointer-events-none"}
      
      
      
      `}
        >
          <div className="flex text-white font-bold items-center gap-3 justify-center h-20 w-full bg-white bg-opacity-50 rounded-full">
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
              <a href="/resume.pdf" target="_blank">
                <img
                  className="h-12 scale-100 transform transition duration-150 hover:scale-120 "
                  src="/resume.png"
                  alt="resume"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// <div className="z-1 h-10 absolute bg-blue-500 rounded-full"></div>

/*

old nav buttons

<button
            onClick={() => {
              setspawnmisc(true);
            }}
            className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
          >
            Features
          </button>





          <button
            onClick={() => {
              setspawnskills(true);
            }}
            className="w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110  "
          >
            Skills
          </button>


          <button
              onClick={() => {
                setspawnskills(true);
              }}
              className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:text-gray-400 hover:scale-110 "
            >
              Skills
            </button>

          */
