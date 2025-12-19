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

const PopUpCareer = ({
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
        const element = document.getElementById("career");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("career");
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
          id="career"
          className={`font opacity-0 absolute my-4 flex flex-col h-4/5 w-7xl items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto transition-opacity duration-800 ease-out 
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
          <p className="font-bold text-green-800 text-5xl p-2">My Career</p>
          <p className="font-bold text-green-800 text-md p-2">
            blah blah blah placeholder text placeholder text im talking here to
            take up space
          </p>
          <div className="flex flex-col gap-5 w-full h-full p-2">
            <div className="min-h-2/5 border-green-800 border-5 bg-green-400 flex">
              <div className="flex flex-col p-3 w-4/5">
                <p className="font-bold text-green-800 text-xl m-0">
                  Pinch a Penny Pool Supply Store
                </p>
                <p className="font-bold text-green-800 text-sm">
                  Sales Associate
                </p>

                <ul className="list-disc list-inside p-0">
                  <li>5 cups chopped Porcini mushrooms</li>
                  <li>5 cups chopped Porcini mushrooms</li>
                  <li>5 cups chopped Porcini mushrooms</li>
                  <li>5 cups chopped Porcini mushrooms</li>
                </ul>
              </div>
              <div className="flex flex-col p-3 w-1/5 items-center">
                <img
                  className="block mx-auto p-2 h-3/5 bg-green-800"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
                <p className="text-center text-sm text-green-800 m-0 p-0">
                  fake date
                </p>
                <p className="text-center text-sm text-green-800 font-bold">
                  location location, state
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpCareer;
