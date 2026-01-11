import { useEffect, useState } from "react";

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

      <div className="flex justify-center item-center absolute w-full h-full pointer-events-none font">
        <div
          id="tutorialpopup"
          className={`my-[5%] mx-4 custom-scrollbar absolute flex flex-col h-[80dvh] w-[95%] md:h-4/5 md:w-4/6 lg:w-3/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
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
          <p className="text-3xl font-extrabold text-green-800 p-2 my-5">
            Here's a Info Box!
          </p>
          <img className="h-[50%] p-5" src="thumbsup.png" alt="thumbs up"></img>
          <p className="text-base p-5 font-bold text-green-800 px-24 text-center max-md:px-100">
            These Contain info relating to the box they're on! Spawn in more
            Boxes by Clicking on subjects on the screen, and drag them around to
            change the position! To reset boxes spawned, you can either click my
            initials, or click the button at the bottom of the boxes! Changing
            the screen size will remove the boxes as well! Enjoy exploring!
          </p>
        </div>
      </div>
    </>
  );
};

export default PopUpTitle;
