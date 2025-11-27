/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
}

const PopUp = ({ isClosed, setIsClosed, setIsOpen, isOpen }: Props) => {
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
              ? "absolute my-4 flex flex-col min-h-4/5 w-7xl items-center rounded-md border-5 border-violet-600 bg-violet-200 z-30 overflow-y-auto fade-box visible"
              : "absolute my-4 flex flex-col min-h-4/5 w-7xl items-center rounded-md border-5 border-violet-600 bg-violet-200 z-30 overflow-y-auto fade-box invisible"
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
          <p className="text-xl font-extrabold text-blue-400 py-4">
            hi, my name is...
          </p>
          <div className="bg-white size-auto">
            <img
              className="block mx-auto p-3 w-64"
              src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
              alt="source"
            ></img>
          </div>
          <h1 className="font-extrabold text-blue-400 py-4">
            ANTHONY CALABRESE!
          </h1>
          <p className="text-sm text-center px-24 max-md:px-100">
            I'm a Computer Science student at the University of Central Florida.
            Growing up, I was always fascinated on how video games were made.
            While right now I don't specifically make games, I want to use my
            Software Engineer skills to create projects others and I can love
            and benefit from!
          </p>
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
