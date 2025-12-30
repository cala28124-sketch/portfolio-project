// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
  button1: boolean;
  button1set: (arg0: boolean) => void;
  button2: boolean;
  button2set: (arg0: boolean) => void;
  button3: boolean;
  button3set: (arg0: boolean) => void;
}

const PopUpProject = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  Mount,
  button1,
  button1set,
  button2,
  button2set,
  button3,
  button3set,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("project");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("project");
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
          id="project"
          className={`my-[5%] custom-scrollbar font opacity-0 absolute flex flex-col max-h-[90%] w-[95%] md:h-4/5 md:w-5/6 lg:max-w-4/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto 
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
          <p className="font-bold text-green-800 text-5xl p-2">My Projects</p>
          <p className="font-bold text-green-800 text-md p-2">
            I always want to put my skills to the test- and here are the cases
            where I've done exactly that! Click the image to add them to the
            page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-fit h-fit p-2">
            <div className="min-h-4/5 w-fit border-green-800 border-5 bg-green-400 flex flex-col items-center">
              <p className="font-bold text-green-800 text-xl py-2">
                TruthMeter
              </p>

              <div
                className={`transition-opacity duration-800
                
                ${button1 ? "opacity-0" : "opacity-100"}

                `}
              >
                <button
                  onClick={() => {
                    button1set(true);
                  }}
                >
                  <img
                    className="block h-[150px] enlargen2 size-auto"
                    src="\truthmeter.png"
                    alt="truth_meter"
                  ></img>
                </button>
              </div>

              <div className="mx-auto border-4 border-transparent">
                <p className="text-center text-sm text-green-800 font-bold">
                  An accesible browser extension that allows one to check the
                  credibility, and accuracy of a webpage, providing a summary of
                  the page and what it contains, and how credible/accurate each
                  point is. This project was made by me and three others at
                  shellhacks 2025.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\reactlogo.png"
                  alt="react"
                />
                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\fastapi.png"
                  alt="fastapi"
                />

                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\python.png"
                  alt="python"
                />

                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\googleadk.png"
                  alt="gemini"
                />
              </div>
              <a
                className="!no-underline"
                href="https://github.com/JustinTeape/factCheck"
                target="_blank"
              >
                <div className="my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 hover:bg-green-500 transition-colors duration-300">
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
            <div className="w-fit min-h-4/5 border-green-800 border-5 bg-green-400 flex flex-col items-center">
              <p className="font-bold text-green-800 text-xl p-2">PNGpal</p>
              <div
                className={`transition-opacity duration-800
                
                ${button2 ? "opacity-0" : "opacity-100"}

                `}
              >
                <button
                  onClick={() => {
                    button2set(true);
                  }}
                >
                  <img
                    className="h-[150px] border-5 border-green-800 block enlargen2"
                    src="\pngpalimage.png"
                    alt="pngpal"
                  />
                </button>
              </div>

              <div className=" mx-auto border-4 border-transparent">
                <p className="text-center text-sm text-green-800 font-bold">
                  A chatbot that overlays itself on the users screen, allowing
                  them to freely ask financial advice, giving back a response
                  when doing so, and recording the transcript of the
                  conversation for the user to read. This was a project made by
                  me and three others at KnightHacks 2025.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\python.png"
                  alt="python"
                />

                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\reactlogo.png"
                  alt="electron"
                />

                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\reactlogo.png"
                  alt="flask"
                />
                <img
                  className="h-[50px] enlargen2 p-2"
                  src="\test_logo.webp"
                  alt="elevenlabs"
                />
              </div>
              <a
                className="!no-underline"
                href="https://github.com/cala28124-sketch/pngPalme"
                target="_blank"
              >
                <div className="my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 hover:bg-green-500 transition-colors duration-300">
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
            <button
              onClick={() => {
                button3set(true);
              }}
              className="w-fit min-h-4/5 border-green-800 border-5 bg-green-400 flex flex-col items-center enlargen2"
            >
              <p className="font-bold text-green-800 text-xl p-2">
                Portfolio Project
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpProject;

/* 

<button
                onClick={() => {
                  button1set(true);
                }}
              >
                <img
                  className={`h-[150px] enlargen2
                
                ${button1 ? "opacity-0" : "opacity-100"}

                `}
                  src="\truthmeter.png"
                  alt="truth_meter"
                />
              </button>

              */
