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
          className={`opacity-0 absolute my-4 flex flex-col h-4/5 w-7xl items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto transition-opacity duration-800 ease-out 
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
          <p className="font-bold text-blue-400 text-5xl p-2">My Projects</p>
          <p className="font-bold text-blue-400 text-md p-2">
            I always want to put my skills to the test- and here are the cases
            where I've done exactly that! Click to add them to the page.
          </p>
          <div className="grid grid-cols-4 gap-5 w-full h-full p-2">
            {" "}
            <button
              onClick={() => {
                button1set(true);
              }}
              className="h-4/5 border-green-800 border-5 bg-green-400 flex flex-col items-center enlargen2"
            >
              <p className="font-bold text-blue-400 text-xl py-2">TruthMeter</p>
              <img
                className="h-[150px]"
                src="\truthmeter.png"
                alt="truth_meter"
              />
              <div className="w-64 mx-auto border-4 border-transparent">
                <p className="text-center text-sm text-blue-400 font-bold">
                  An accesible browser extension that allows one to check the
                  credibility, and accuracy of a webpage, providing a summary of
                  the page and what it contains, and how credible/accurate each
                  point is.
                </p>
              </div>
              <div className="flex space-x-5 justify-center">
                <img className="h-[40px]" src="\test_logo.webp" alt="react" />
                <img className="h-[40px]" src="\test_logo.webp" alt="fastapi" />

                <img className="h-[40px]" src="\test_logo.webp" alt="python" />

                <img className="h-[40px]" src="\test_logo.webp" alt="gemini" />
              </div>
            </button>
            <button
              onClick={() => {
                button2set(true);
              }}
              className="h-4/5 border-green-800 border-5 bg-green-400 flex flex-col items-center enlargen2"
            >
              <p className="font-bold text-blue-400 text-xl p-2">PNGpal</p>
              <img
                className="h-[150px] border-5 border-green-800"
                src="\pngpalimage.png"
                alt="pngpal"
              />
              <div className="w-64 mx-auto border-4 border-transparent">
                <p className="text-center text-sm text-blue-400 font-bold">
                  A chatbot that overlays itself on the users screen, allowing
                  them to freely ask financial advice, giving back a response
                  when doing so, and recording the transcript of the
                  conversation for the user to read
                </p>
              </div>
              <div className="flex space-x-5 justify-center">
                <img className="h-[40px]" src="\test_logo.webp" alt="python" />

                <img
                  className="h-[40px]"
                  src="\test_logo.webp"
                  alt="electron"
                />

                <img className="h-[40px]" src="\test_logo.webp" alt="react" />
                <img
                  className="h-[40px]"
                  src="\test_logo.webp"
                  alt="elevenlabs"
                />
              </div>
            </button>
            <button
              onClick={() => {
                button3set(true);
              }}
              className="h-4/5 border-green-800 border-5 bg-green-400 flex flex-col items-center enlargen2"
            >
              <p className="font-bold text-blue-400 text-xl p-2">
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
