// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpHobbies = ({ isClosed, setIsClosed, setIsOpen, isOpen }: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("hobbies");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("hobbies");
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
          id="hobbies"
          className={`bg-opacity-20 my-[5%] mx-4 custom-scrollbar absolute flex flex-col max-h-[80dvh] max-w-[95%] md:max-h-4/5 md:max-w-5/6 lg:max-w-3/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
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
          <div className="self-start flex flex-col w-[90%] pl-5">
            <p className="text-3xl text-center font-bold text-green-800 mt-5">
              What do I do to relax?
            </p>
            <p className="font text-xs text-center font-bold text-green-1000">
              ...Or when I just feel like having fun?
            </p>
            <p className="text-sm md:text-base p-3 pt-0 text-center font-bold font text-green-800 px-24 max-md:px-100">
              For me, there's plenty of things I enjoy to do in my free time. I
              heavily enjoy reading and consuming many forms of media, may it be
              books, manga, webtoons, or anime I enjoy all of it. I also love
              video games, and play a lot with my friends. Past that though, I'm
              a avid roleplayer, and love ttrpgs like DnD. below is a display of
              some of my favorite forms of media!
            </p>
          </div>
          <div className="flex flex-wrap w-full h-full justify-center">
            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">Favorite Game</p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/e33real.png"
                alt="e33"
              ></img>
              <p className="text-base font font-bold">
                Clair Obscur: Expedition 33
              </p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">Favorite Show</p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/fmab.png"
                alt="fmab"
              ></img>
              <p className="text-base font font-bold">
                Full Metal Alchemist: Brotherhood
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">Favorite Song</p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/visong.png"
                alt="virtual_insanity"
              ></img>
              <p className="text-base font font-bold">Virtual Insanity</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">
                Favorite Comic
              </p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/hclw.png"
                alt="hardcore_leveling_warrior"
              ></img>
              <p className="text-base font font-bold">
                Hardcore Leveling Warrior
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">Favorite Book</p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/rpo.png"
                alt="ready_player_one"
              ></img>
              <p className="text-base font font-bold">Ready Player One</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg w-[350px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
              <p className="text-base font font-bold p-1 pb-0">
                Favorite TTRPG Campaign
              </p>
              <img
                className=" border-5 border-green-800 h-[250px] w-[250px] m-3 mt-0"
                src="/drak.png"
                alt="dungeons_of_drakenheim"
              ></img>
              <p className="text-base font font-bold">Dungeons of Drakenheim</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpHobbies;
