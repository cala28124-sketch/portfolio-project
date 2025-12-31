// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpTM = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  Mount,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("truthmeter");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("truthmeter");
        element?.classList.remove("opacity-0");
      }
    } else {
      setMount(true);
    }
  }, [isClosed]);

  return (
    <>
      <button
        className={`overlay transition-opacity duration-800 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          if (isClosed) {
            setIsOpen(true);
            setIsClosed(false);
          } else {
            setIsOpen(false);
            setIsClosed(true);
          }
        }}
      ></button>

      <div className="flex justify-center">
        <div
          id="truthmeter"
          className={`bg-opacity-20 my-[5%] mx-4 custom-scrollbar absolute flex flex-col max-h-[80dvh] max-w-[95%] md:max-h-4/5 md:max-w-5/6 lg:max-w-3/5 items-center border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
    ${isOpen ? "start pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              if (isClosed) {
                setIsOpen(true);
                setIsClosed(false);
              } else {
                setIsOpen(false);
                setIsClosed(true);
              }
            }}
          >
            <img
              className="h-[30px]"
              src="\closebutton6.png"
              alt="close button"
            />
          </button>
          <div className="flex justify-center items-center rounded-lg w-[200px] h-[200px] bg-green-400 m-5 border-5 border-green-800">
            <img
              className="h-[200px] w-[200px] my-5"
              src="truthmeter.png"
              alt="truth meter"
            ></img>
          </div>
          <div className="self-start flex flex-col w-[90%] pl-5">
            <p className="text-2xl pl-3 font-bold text-green-800">
              Truth Meter
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">Overview</p>
            <p className="text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              Made at shellhacks 2025 as my first ever project, truth meter
              exists an accesible browser extension that allows one to check the
              credibility, and accuracy of a webpage, providing a summary of the
              page and what it contains, and how credible/accurate each point
              is.
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">
              My Experience
            </p>
            <p className="text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              Due to being one of my first ever projects with a team of three
              others, truth meter was a huge learning experience for me.
              Introducing me to the general flow of making projects, it was the
              first time I had really started to use software like VScode, and
              began to be introduced to general concepts. It was also my first
              introduction to html/css along with react, and my first time using
              python in a actual project rather than just on one off
              assignments. Truth meter itself uses several factors to run,
              having both a front end and back end- the front end using react to
              display all the info, while being sent the info to display from
              the back end using fastapi. The back end uses python to strip the
              webpage link of wherever the user is using the browser extension,
              and plugs it into a google agent. The agent then creates the info
              and text, and sends it to the front end as mentioned earlier. The
              whole thing was inputted into a google chrome extension by simply
              unpacking the folder into the manager for it, which was much
              easier than our group expected. Overall it was a very fun
              introduction into programming projects for me, and I learned a lot
              from it involving connecting the front end and the back end, which
              was my main role in the team project.
            </p>
            <div className="flex flex-col">
              <p className="text-xl pl-3 font-bold text-green-800">Tech</p>
              <div className="flex gap-2 mt-2 ml-2 font text-green-800">
                <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  FastAPI
                </div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  Python
                </div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  GoogleADK
                </div>
              </div>
            </div>
            <a
              className="!no-underline"
              href="https://github.com/Calabro123/truth-meter"
              target="_blank"
            >
              <div className="bg-green-400 rounded-md w-[200px] h-[50px] mt-5 mb-5 flex justify-center items-center border-5 border-green-800 hover:bg-green-500 transition-colors duration-300">
                <img
                  src="hyperlink.png"
                  alt="hyperlink"
                  className="h-[40px] p-2 "
                />
                <p className="font font-bold text-green-800 text-base my-2">
                  View Project
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpTM;
