// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

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
}: Props) => {
  return (
    <>
      {isOpen && (
        <button
          className={"overlay"}
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
      )}
      <div className="flex justify-center">
        <div
          className={
            isOpen
              ? "absolute my-4 flex flex-col min-h-4/5 w-7xl items-center rounded-md border-5 border-green-800 bg-green-300 z-30 overflow-y-auto fade-box visible"
              : "absolute my-4 flex flex-col min-h-4/5 w-7xl items-center rounded-md border-5 border-green-800 bg-green-300 z-30 overflow-y-auto fade-box invisible"
          }
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
            closeplaceholder
          </button>
          <p className="text-xl font-bold text-green-800 py-4">
            Hi, my name is...
          </p>
          <div className="bg-green-800 size-auto">
            <img
              className="block mx-auto p-3 w-96"
              src="/headshotme.jpg"
              alt="source"
            ></img>
          </div>
          <h1 className="!font-extrabold !text-green-800 py-4">
            ANTHONY CALABRESE!
          </h1>
          <p className="text-base font-bold text-green-800 text-center px-24 max-md:px-100">
            I'm a computer science student here at the University of Central
            Florida! Growing up, I've constantly held a fascination for
            programming and the many things its used to make. Now, I work
            towards improving and using my Software Engineering skills to not
            only better myself, but create tools that I and others can benefit
            from!
          </p>
          <div className="grid grid-cols-4 gap-5 mt-2 mx-2">
            <div
              className={
                button1
                  ? "flex flex-col items-center fade-box invisible"
                  : "flex flex-col items-center fade-box visible"
              }
            >
              Who am I?
              <button
                onClick={() => {
                  button1set(true);
                }}
              >
                <img
                  className="block mx-auto p-3 w-28 enlargen bg-green-800 size-auto"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
              </button>
            </div>
            <div
              className={
                button2
                  ? "flex flex-col items-center fade-box invisible"
                  : "flex flex-col items-center fade-box visible"
              }
            >
              What do I do?
              <button
                onClick={() => {
                  button2set(true);
                }}
              >
                <img
                  className="block mx-auto p-3 w-28 enlargen bg-green-800 size-auto"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
              </button>
            </div>
            <div
              className={
                button3
                  ? "flex flex-col items-center fade-box invisible"
                  : "flex flex-col items-center fade-box visible"
              }
            >
              What's my drive?
              <button
                onClick={() => {
                  button3set(true);
                }}
              >
                <img
                  className="block mx-auto p-3 w-28 enlargen bg-green-800 size-auto"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
              </button>
            </div>
            <div
              className={
                button4
                  ? "flex flex-col items-center fade-box invisible"
                  : "flex flex-col items-center fade-box visible"
              }
            >
              What's past the surface?
              <button
                onClick={() => {
                  button4set(true);
                }}
              >
                <img
                  className="block mx-auto p-3 w-28 enlargen bg-green-800 size-auto"
                  src="/test_logo.webp"
                  alt="source"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;

/*

<div className=" openbox color_box shadow">
        {" "}
        <button
          className="closebutton"
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
          button
        </button>
        <div className="testchange">test</div>
      </div>

      */
