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
  ID: string;
  overview: string;
  Key: React.ReactNode;
  techStack: React.ReactNode;
  date: string;
  jobTitle: string;
}

const PopUpCompC = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  name,
  img,
  ID,
  overview,
  techStack,
  Key,
  date,
  jobTitle,
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
          className={`bg-opacity-20 my-[5%] mx-4 custom-scrollbar absolute flex flex-col max-h-[80dvh] w-[95%] md:h-4/5 md:w-5/6 lg:w-3/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
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
          <div className="flex flex-col justify-center items-center rounded-lg w-[250px] h-[250px] md:w-[350px] md:h-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] p-3"
              src={img}
              alt={name}
            ></img>
            <div className="text-base font font-bold p-1">{date}</div>
          </div>

          <div className="self-start flex flex-col w-[90%] pl-5">
            <p className="text-2xl pl-3 font-bold text-green-800 mb-0">
              {name}
            </p>
            <p className="text-xl pl-3 font-bold text-green-800 ml-2 mt-0">
              {jobTitle}
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">Overview</p>
            <p className="text-sm md:text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              {overview}
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">
              Key Achievements
            </p>
            <ul className="text-sm md:text-base list-disc text-green-800 font font-bold">
              {Key}
            </ul>
            <div className="flex flex-col">
              <p className="text-xl pl-3 font-bold text-green-800">
                Technologies and Skills
              </p>
              <div className="flex gap-2 mt-1 mb-3 ml-2 font text-green-800 flex-wrap">
                {techStack}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpCompC;
