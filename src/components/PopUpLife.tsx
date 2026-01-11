// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpLife = ({ isClosed, setIsClosed, setIsOpen, isOpen }: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("life");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("life");
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
          id="life"
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
              src="/legome.jpg"
              alt="legome"
            ></img>
          </div>
          <div className="flex flex-col items-center justify-center w-[90%] pl-5">
            <p className="text-3xl text-center font-bold text-green-800">
              How's Life Been?
            </p>
            <p className="font text-xs text-center font-bold text-green-1000">
              I'm just a kid and life is a nightmare!
            </p>
            <p className="text-sm md:text-base p-3 pt-0 text-center font-bold font text-green-800 px-24 max-md:px-100">
              All jokes aside, life has been treating me well! I've definitely
              had ups and downs, but overall, I'm grateful for the experiences
              I've had. One of those, pictured above, is me at a lego convention
              with my aunt when I was around ten- one of my fondest memories.
              Past that, for as long as I can remember, I've always enjoyed
              spending my time with others while working towards my goal.
              Whether it be in the past or now, I don't think that will ever
              change. Talking about me as a kid, that was the time I decided I
              would become a programmer as well- and that goal hasn't changed
              one bit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpLife;
