/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useEffect,
  useRef,
  useState,
  type Ref,
  type MutableRefObject,
} from "react";
import Matter from "matter-js";
import Card from "./card";

interface Props {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  isClosed: boolean;
  setIsClosed: (arg0: boolean) => void;
}

const PopUpTitle = ({ isOpen, setIsOpen, isClosed, setIsClosed }: Props) => {
  const [Mount, setMount] = useState(false);

  useEffect(() => {
    if (Mount) {
      if (isClosed) {
        const element = document.getElementById("tutorialpopup");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("tutorialpopup");
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

      <div className="flex justify-center item-center absolute w-full h-full pointer-events-none font">
        <div
          id="tutorialpopup"
          className={`my-[5%] mx-4 custom-scrollbar absolute flex flex-col max-h-[80dvh] max-w-[95%] md:max-h-4/5 md:max-w-5/6 lg:max-w-4/5 w-xl items-center border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
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
          <p className="text-3xl font-extrabold text-green-800 p-2">
            Here's a Info Box!
          </p>
          <img className="h-98 p-5" src="thumbsup.png" alt="thumbs up"></img>
          <p className="text-base pl-5 pb-2 pt-1 pr-5 font-bold text-green-800 text-center px-24 max-md:px-100">
            These Contain info relating to the box they're on! Spawn in more
            Boxes by Clicking on subjects on the screen! To reset boxes spawned,
            you can either click my initials, change the size of the screen, or
            click the button at the bottom of the boxes! Changing the screen
            size will remove the boxes as well! Enjoy exploring!
          </p>
        </div>
      </div>
    </>
  );
};

export default PopUpTitle;
