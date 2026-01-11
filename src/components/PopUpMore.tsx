// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpMore = ({ isClosed, setIsClosed, setIsOpen, isOpen }: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("More");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("More");
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
          id="More"
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
          <div className="mt-5"></div>
          <div className="flex justify-center items-center rounded-lg w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] bg-green-400 my-auto border-5 border-green-800">
            <img
              className="w-200px h-[200px] md:w-[300px} md:h-[300px] xl:h-[400px] xl:w-[400px] p-3"
              src="/medog.jpg"
              alt="dogme"
            ></img>
          </div>
          <div className="mb-auto flex flex-col items-center justify-center w-[90%] pl-5">
            <p className="text-3xl text-center font-bold text-green-800">
              Who am I?
            </p>
            <p className="font text-xs text-center font-bold text-green-1000">
              This is the part where I yap about myself alot...
            </p>
            <p className="text-sm md:text-base p-3 pt-0 text-center font-bold font text-green-800 px-24 max-md:px-100">
              I'm someone who always treasures those close to me. As you can see
              above, thats obviously me... with my dog! First things off I love
              animals, and currently have two dogs, and a cat. In the picture
              above is Jack, while my other dog is named Mackenzie. My cat of
              course is named Stanley, and I love all of them to death. Past the
              immediate elephant, or I should say dog in the room, I am a huge
              fan of video games, and have been since I was a kid. I appreciate
              anybody and everybody I've met in my lifetime and made memories
              with... and to you reading this, I hope i can meet you too soon in
              the future! I think of everyday as a new oppurtunity to not only
              learn and better myself, but to also make more memories and
              connections with those close to me- and those who I'll be able to
              think of friends in the future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpMore;
