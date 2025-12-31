// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  button1: boolean;
  button1set: (arg0: boolean) => void;
  button2: boolean;
  button2set: (arg0: boolean) => void;
  button3: boolean;
  button3set: (arg0: boolean) => void;
  button4: boolean;
  button4set: (arg0: boolean) => void;
  Mount: boolean;
}

const PopUp = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  button1,
  button1set,
  button2,
  button2set,
  button3,
  button3set,
  button4,
  button4set,
  Mount,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("aboutme");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("aboutme");
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
          id="aboutme"
          className={`my-[5%] custom-scrollbar font opacity-0 absolute z-50 flex max-h-[80dvh] max-w-[95%] flex-col items-center overflow-y-auto rounded-md border-10 border-green-800 bg-green-300 md:h-4/5 md:w-5/6 lg:w-4/5 
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
          <p className="text-xl mt-4 font-bold text-green-800 py-4 mb-0">
            Hi, my name is...
          </p>
          <div className="p-3 mb-0">
            <img
              className="block mx-auto p-3 w-[300px] bg-green-800"
              src="/headshotme.jpg"
              alt="source"
            ></img>
          </div>

          <p className="!font-extrabold !text-green-800 text-center py-4 text-4xl md:text-4xl mb-0">
            ANTHONY CALABRESE!
          </p>
          <div className="flex flex-col items-center w-[90%]">
            <p className="font-bold text-base text-green-800 mx-auto text-center mx-auto">
              I'm a computer science student here at the University of Central
              Florida! Growing up, I've constantly held a fascination for
              programming and the many things its used to make. Now, I work
              towards improving and using my Software Engineering skills to not
              only better myself, but create tools that I and others can benefit
              from!
            </p>
            <div>
              <p className="font-extrabold text-green-800 text-center text-2xl">
                What I build with
              </p>
              <div className="flex gap-1 md:gap-3 flex-wrap w-full justify-center">
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/python.png"
                  alt="python"
                ></img>

                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/cprogramming.png"
                  alt="c programming"
                ></img>
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/java.png"
                  alt="java"
                ></img>
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/reactlogo.png"
                  alt="react"
                ></img>
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/javascript.png"
                  alt="javascript"
                ></img>
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/typescript.png"
                  alt="typescript"
                ></img>
                <img
                  className="block mx-auto w-[50px] md:w-[75px] enlargen"
                  src="/tailwind.png"
                  alt="tailwind"
                ></img>
              </div>
            </div>

            <p className="text-center pt-5">
              cick on these boxes to find out more!
            </p>
            <div className="flex flex-wrap md:gap-10 p-2 w-full justify-center text-sm">
              <div
                className={`flex flex-col items-center transition-opacity duration-800
                
                ${button1 ? "opacity-0" : "opacity-100"}

                `}
              >
                More Me
                <button
                  className="p-2"
                  onClick={() => {
                    button1set(true);
                  }}
                >
                  <img
                    className="block mx-auto p-2 w-[100px] h-[100px] enlargen bg-green-800 size-auto"
                    src="/medog.jpg"
                    alt="moreme"
                  ></img>
                </button>
              </div>
              <div
                className={`flex flex-col items-center transition-opacity duration-800
                
                ${button2 ? "opacity-0" : "opacity-100"}

                `}
              >
                Life
                <button
                  className="p-2"
                  onClick={() => {
                    button2set(true);
                  }}
                >
                  <img
                    className="block mx-auto p-2 w-[100px] h-[100px] enlargen bg-green-800 size-auto"
                    src="/legome.jpg"
                    alt="lego"
                  ></img>
                </button>
              </div>
              <div
                className={` flex flex-col items-center transition-opacity duration-800
                
                ${button3 ? "opacity-0" : "opacity-100"}

                `}
              >
                Drive
                <button
                  className="p-2"
                  onClick={() => {
                    button3set(true);
                  }}
                >
                  <img
                    className="enlargen block mx-auto p-2 w-[100px] h-[100px] bg-green-800 size-auto"
                    src="/familyme.jpg"
                    alt="family"
                  ></img>
                </button>
              </div>
              <div
                className={`flex flex-col items-center transition-opacity duration-800
                
                ${button4 ? "opacity-0" : "opacity-100"}

                `}
              >
                Hobbies
                <button
                  className="p-2"
                  onClick={() => {
                    button4set(true);
                  }}
                >
                  <img
                    className="mx-auto p-1 w-[100px] h-[100px] enlargen bg-green-800 size-auto"
                    src="/dice.png"
                    alt="source"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;

/*

add this later

           <div>
              <p className="font-extrabold text-green-800 text-center text-2xl">
                What I'm learning
              </p>
              <div className="flex flex-wrap w-full justify-center">
                <img
                  className="block mx-auto p-2 w-[50px] enlargen bg-green-800"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
                <img
                  className="block mx-auto p-2 w-[50px] enlargen bg-green-800"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
                <img
                  className="block mx-auto p-2 w-[50px] enlargen bg-green-800"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
                <img
                  className="block mx-auto p-2 w-[50px] enlargen bg-green-800"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
              </div>
            </div>

            */
