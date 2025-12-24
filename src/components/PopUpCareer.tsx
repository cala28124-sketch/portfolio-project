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
          className={`my-4 custom-scrollbar font opacity-0 absolute z-50 flex h-[80dvh] w-[95%] flex-col items-center overflow-y-auto rounded-md border-4 border-green-800 bg-green-300 md:h-4/5 md:w-5/6 md:border-8 lg:w-4/5 lg:border-10 
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
            My Career
          </p>
          <p className="font-bold text-green-800 text-md p-2 text-center">
            blah blah blah placeholder text placeholder text im talking here to
            take up space
          </p>
          <div className="flex flex-col items-center w-full p-2">
            <div className="h-fit w-[90%] border-green-800 border-5 bg-green-400 flex flex-col md:flex-row-reverse ">
              <div className="flex flex-col items-center justify-center p-3">
                <button
                  onClick={() => {
                    button1set(true);
                  }}
                  className={`p-2 transition-opacity duration-800
                    ${button1 ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    className="enlargen2 block mx-auto p-2 h-[150px] bg-green-800"
                    src="/Pinchlogo.png"
                    alt="pinchapenny"
                  ></img>
                </button>
                <p className="text-center text-sm text-green-800 m-0 p-0">
                  June 2023-August 2025
                </p>
                <p className="text-center text-sm text-green-800 font-bold">
                  Miramar, Florida
                </p>
              </div>
              <div className="flex flex-col p-3 w-full md:w-4/5">
                <p className="font-bold text-green-800 text-l md:text-xl m-0">
                  Pinch a Penny Pool Supply Store
                </p>
                <p className="font-bold text-green-800 text-sm">
                  Sales Associate
                </p>

                <ul className="list-disc list-inside p-0 text-green-800">
                  <p className="font-bold text-green-800 m-0">My Work</p>
                  <li>
                    Assisting Customers with pool related needs and questions,
                    while selling and maintaining product stock
                  </li>
                  <li>
                    Worked with coworkers to maintain store, while helping with
                    store remodeling, fixing vaccuum products, and unloading
                    stock into store
                  </li>
                </ul>
                <div className="flex items-center">
                  <p className="text-green-1000 m-0 text-xs">My first job...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 w-full h-full p-2">
            <div className="h-fit w-[90%] border-green-800 border-5 bg-green-400 flex flex-col md:flex-row-reverse ">
              <div className="flex flex-col items-center justify-center p-3">
                <button
                  onClick={() => {
                    button2set(true);
                  }}
                  className={`p-2 transition-opacity duration-800
                    ${button2 ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    className="enlargen2 block mx-auto p-2 h-[150px] bg-green-800"
                    src="/ucflogo.png"
                    alt="UCF"
                  ></img>
                </button>
                <p className="text-center text-sm text-green-800 m-0 p-0">
                  August 2025-June 2029
                </p>
                <p className="text-center text-sm text-green-800 font-bold">
                  Orlando, Florida
                </p>
              </div>
              <div className="flex flex-col p-3 w-full md:w-4/5">
                <p className="font-bold text-green-800 text-l md:text-xl m-0">
                  University of Central Florida
                </p>
                <p className="font-bold text-green-800 text-sm">
                  Undergraduate Computer Science Major
                </p>

                <ul className="list-disc list-inside p-0 text-green-800">
                  <p className="font-bold text-green-800 m-0">My Work</p>
                  <li>
                    My current institute of study, where I reside as a freshmen
                    going into my spring semester.
                  </li>
                  <li>
                    I currently have a cumulative GPA of 3.884, maintaing solid
                    grades and community activity with clubs like Knight Hacks
                  </li>
                </ul>
                <div className="flex items-center">
                  <p className="text-green-1000 m-0 text-xs">
                    This is where I go to school!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpCareer;
