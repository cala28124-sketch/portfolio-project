// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import React, { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
  name: string;
  img: string;
  git: string;
  ID: string;
  overview: string;
  experience: string;
  techStack: React.ReactNode;
}

const PopUpCompP = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  name,
  img,
  git,
  ID,
  overview,
  experience,
  techStack,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById(ID);
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById(ID);
        element?.classList.remove("opacity-0");
      }
    } else {
      setMount(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          id={ID}
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
            <img className="h-[200px] w-[200px] p-3" src={img} alt={name}></img>
          </div>
          <div className="self-start flex flex-col w-[90%] pl-5">
            <p className="text-2xl pl-3 font-bold text-green-800">{name}</p>
            <p className="text-xl pl-3 font-bold text-green-800">Overview</p>
            <p className="text-sm md:text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              {overview}
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">
              My Experience
            </p>
            <p className="text-sm md:text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              {experience}
            </p>
            <div className="flex flex-col">
              <p className="text-xl pl-3 font-bold text-green-800">Tech</p>
              <div className="flex gap-2 mt-2 ml-2 font text-green-800 flex-wrap">
                {techStack}
              </div>
            </div>
            <a className="!no-underline" href={git} target="_blank">
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

export default PopUpCompP;
