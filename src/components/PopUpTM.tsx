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
          className={`my-[5%] custom-scrollbar font opacity-0 absolute flex flex-col max-h-[90%] w-[95%] md:h-4/5 md:w-5/6 lg:max-w-4/5 w-7xl items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto 
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
          <p className="font-bold text-green-800 text-5xl p-2">Placeholder</p>
          <p className="font-bold text-green-800 text-md p-2">Placeholder</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"></div>
        </div>
      </div>
    </>
  );
};

export default PopUpTM;
