import { useEffect } from "react";
import { useState } from "react";
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
  setaboutme1: (arg0: boolean) => void;
  setaboutme2: (arg0: boolean) => void;
  setaboutme3: (arg0: boolean) => void;
  setaboutme4: (arg0: boolean) => void;
  setproject1: (arg0: boolean) => void;
  setproject2: (arg0: boolean) => void;
  setproject3: (arg0: boolean) => void;
  setproject4: (arg0: boolean) => void;
  setproject5: (arg0: boolean) => void;
  setproject6: (arg0: boolean) => void;
  setcareer1: (arg0: boolean) => void;
  setcareer2: (arg0: boolean) => void;
  setcareer3: (arg0: boolean) => void;
}

const Navbar = ({
  Start,
  setspawnabout,
  setspawnproject,
  setspawncareer,
  setaboutme1,
  setaboutme2,
  setaboutme3,
  setaboutme4,
  setproject1,
  setproject2,
  setproject3,
  setproject4,
  setproject5,
  setproject6,
  setcareer1,
  setcareer2,
  setcareer3,
}: Props) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className={`md:hidden flex items-center justify-center absolute top-2 right-2 w-[12%] !rounded-lg bg-white bg-opacity-50 z-20 opacity-0 transform transition duration-300 scale-100 active:scale-110 ${
          Start ? "startslow" : "pointer-events-none"
        }`}
      >
        <img className="p-2" src="/menulines.png" alt="menubutton" />
      </button>
      <div className=" flex justify-center pointer-events-auto">
        <div
          id="dropdownbox"
          className={`p-3 !text-grey-300 font z-20 flex flex-col items-center justify-center rounded-lg md:hidden absolute top-15 h-fit w-fit bg-white bg-opacity-50 opacity-0 ${
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
            className=" w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110  "
          >
            Career
          </button>
          <button
            onClick={() => {
              setspawnproject(true);
            }}
            className=" w-fit py-2 px-4 !rounded-full scale-100 transform transition duration-300 active:!bg-white active:text-gray-400 active:scale-110 "
          >
            Projects
          </button>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                setspawnabout(false);
                setspawnproject(false);
                setspawncareer(false);
                setaboutme1(false);
                setaboutme2(false);
                setaboutme3(false);
                setaboutme4(false);
                setproject1(false);
                setproject2(false);
                setproject3(false);
                setproject4(false);
                setproject5(false);
                setproject6(false);
                setcareer1(false);
                setcareer2(false);
                setcareer3(false);
              }}
            >
              <img
                className="h-10 scale-100 transform transition duration-150 hover:scale-120"
                src="/logo.png"
                alt="logo"
              />
            </button>
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
            <a href="/rsm.pdf" target="_blank">
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
          className={`max-md:hidden w-[90%] lg:w-[900px] pointer-events-auto flex justify-center mt-2 z-20 opacity-0 font
      
      ${Start ? "startslow" : "pointer-events-none"}
      
      
      
      `}
        >
          <div className="flex text-white font-bold items-center gap-3 justify-center h-20 w-full bg-white bg-opacity-50 rounded-full">
            <button
              onClick={() => {
                setspawnabout(false);
                setspawnproject(false);
                setspawncareer(false);
                setaboutme1(false);
                setaboutme2(false);
                setaboutme3(false);
                setaboutme4(false);
                setproject1(false);
                setproject2(false);
                setproject3(false);
                setproject4(false);
                setproject5(false);
                setproject6(false);
                setcareer1(false);
                setcareer2(false);
                setcareer3(false);
              }}
            >
              <img
                className="h-12 scale-100 transform transition duration-150 hover:scale-120"
                src="/logo.png"
                alt="logo"
              />
            </button>
            <button
              onClick={() => {
                setspawnabout(true);
              }}
              className="py-2 px-8 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:scale-125 "
            >
              <div className="!text-lg gradient-text">About</div>
            </button>
            <button
              onClick={() => {
                setspawncareer(true);
              }}
              className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:scale-125 "
            >
              <div className="!text-lg gradient-text">Career</div>
            </button>
            <button
              onClick={() => {
                setspawnproject(true);
              }}
              className="py-2 px-4 !rounded-full scale-100 transform transition duration-150 hover:!bg-white hover:scale-125 "
            >
              <div className="!text-lg gradient-text">Projects</div>
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
              <a href="/rsm.pdf" target="_blank">
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
