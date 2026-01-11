// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpDrive = ({ isClosed, setIsClosed, setIsOpen, isOpen }: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("drive");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("drive");
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
          id="drive"
          className={`bg-opacity-20 my-[5%] mx-4 custom-scrollbar absolute flex flex-col h-[80dvh] w-[95%] md:h-4/5 md:w-5/6 lg:w-3/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
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
          <div className="flex justify-center items-center rounded-lg w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[500px] bg-green-400 m-5 border-5 border-green-800">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[500px] p-3"
              src="/familyme.jpg"
              alt="familyme"
            ></img>
          </div>
          <div className="flex flex-col items-center justify-center w-[90%] pl-5">
            <p className="text-3xl text-center font-bold text-green-800">
              What pushes me forward?
            </p>
            <p className="font text-xs text-center font-bold text-green-1000">
              I want to get a j*b!
            </p>
            <p className="text-sm md:text-base p-3 pt-0 text-center font-bold font text-green-800 px-24 max-md:px-100">
              Really though, my drive to push forwards in life comes from alot
              of things. One of those things, specifically in the picture above,
              is my family. On the left is my dad, Anthony, (Yeah we have the
              same name, yes it's as "fun" as you would think), on the right is
              my mom, Elizabeth, and in the middle with me is my little brother,
              Jacob. For me, my family is the backboard I'm always able to rely
              on- may it be for pushing forwards towards my future, or simply
              people to spend my time with. Family is super important to me, and
              they are a huge part of my drive to keep moving forward in life.
              Along with this, I wish to be able to push myself to my limits,
              and learn everything I can- to hopefully show my worth to the
              world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpDrive;
