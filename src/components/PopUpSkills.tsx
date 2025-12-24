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

const PopUpSkills = ({
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
        const element = document.getElementById("skills");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("skills");
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
          id="skills"
          className={`my-4 custom-scrollbar font opacity-0 absolute z-50 flex h-[80dvh] w-[95%] flex-col items-center overflow-y-auto rounded-md border-4 border-green-800 bg-green-300 md:h-4/5 md:w-4/6 md:border-8 lg:w-4/5 lg:border-10 
    ${isOpen ? "start pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            className="absolute top-2 right-0 md:top-2 md:right-2"
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
              className="w-[80%] lg:w-full"
              src="\closebutton6.png"
              alt="close button"
            />
          </button>
          <p className="font-bold text-green-800 text-5xl p-2 mt-5">
            My Skills
          </p>
          <p className="font-bold text-green-800 text-md p-2 text-center">
            A small overview of my skills and technical expertise.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full border-5">
            <div className="m-2 border-10 border-green-800 bg-green-400 max-h-full lg:max-h-1/4 min-w-1/2">
              <p>test</p>
              <ul className="border-10 lg:h-full list-disc list-inside p-0 text-green-800 grid grid-cols-3 gap-x-2 gap-y-5 lg:gap-y-0">
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
              </ul>
            </div>
            <div className="m-2 border-10 border-green-800 bg-green-400 max-h-full lg:max-h-1/4 min-w-1/2">
              <p>test</p>
              <ul className="border-10 lg:h-full list-disc list-inside p-0 text-green-800 grid grid-cols-3 gap-x-2 gap-y-5 lg:gap-y-0">
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
              </ul>
            </div>
            <div className="m-2 border-10 border-green-800 bg-green-400 max-h-full lg:max-h-1/4 min-w-1/2">
              <p>test</p>
              <ul className="border-10 lg:h-full list-disc list-inside p-0 text-green-800 grid grid-cols-3 gap-x-2 gap-y-5 lg:gap-y-0">
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
              </ul>
            </div>
            <div className="m-2 border-10 border-green-800 bg-green-400 max-h-full lg:max-h-1/4 min-w-1/2">
              <p>test</p>
              <ul className="border-10 lg:h-full list-disc list-inside p-0 text-green-800 grid grid-cols-3 gap-x-2 gap-y-5 lg:gap-y-0">
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
                <li className="px-1">react</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpSkills;
