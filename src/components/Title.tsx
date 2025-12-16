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
  engineRef: MutableRefObject<Matter.Engine | null>;
  Start: boolean;
  setStart: (arg0: boolean) => void;
  screenwidth?: Number;
  screenheight?: Number;
}

const Title = ({
  engineRef,
  Start,
  setStart,
  screenwidth,
  screenheight,
}: Props) => {
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
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

  useEffect(() => {
    const MatterFunction = () => {
      if (!Start || !engineRef.current || !externalBoxRef.current) {
        if (engineRef.current && externalBodyRef.current) {
          Matter.Composite.remove(
            engineRef.current.world,
            externalBodyRef.current
          );
          externalBodyRef.current = null;
        }
        return;
      }

      const boxid = document.getElementById("title");
      boxid?.classList.remove("flex");
      boxid?.classList.remove("justify-center");
      boxid?.classList.remove("items-center");
      boxid?.classList.remove("absolute");
      boxid?.classList.remove("w-full");
      boxid?.classList.remove("h-full");

      const engine = engineRef.current;

      const { Bodies, Composite, Events } = Matter;

      const boxElement = externalBoxRef.current;
      const bodyWidth = boxElement.offsetWidth;
      const bodyHeight = boxElement.offsetHeight;

      const externalBoxBody = Bodies.rectangle(
        screenwidth ? Number(screenwidth) / 2 : 400,
        screenheight ? Number(screenheight) / 2 : 300,
        bodyWidth,
        bodyHeight,
        {
          frictionAir: 0.05,
          mass: 10,
          render: { visible: false },
        }
      );

      externalBodyRef.current = externalBoxBody;

      const updateExternalDiv = () => {
        if (!externalBoxRef.current) return;

        const { x, y } = externalBoxBody.position;
        const angle = externalBoxBody.angle;

        const translateX = x - bodyWidth / 2;
        const translateY = y - bodyHeight / 2;

        externalBoxRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${angle}rad)`;
      };

      Composite.add(engine.world, externalBoxBody);
      Events.on(engine, "afterUpdate", updateExternalDiv);

      updateExternalDiv();

      return () => {
        Events.off(engine, "afterUpdate", updateExternalDiv);
        if (externalBodyRef.current) {
          Composite.remove(engine.world, externalBodyRef.current);
          externalBodyRef.current = null;
        }
      };
    };

    setTimeout(() => {
      MatterFunction();
    }, 50);
  }, [Start]);

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

      <div className="flex justify-center item-center absolute w-full h-full pointer-events-none">
        <div
          id="tutorialpopup"
          className={`absolute my-4 flex flex-col min-h-2/5 w-xl items-center border-10 border-grey-800 bg-green-300 z-50 overflow-y-auto transition-opacity duration-800 ease-out opacity-0
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
          <p className="text-3xl font-extrabold text-blue-400 p-5">
            Here's a Info Box!
          </p>
          <img className="h-98 p-5" src="thumbsup.png" alt="thumbs up"></img>
          <p className="text-base p-5 font-bold text-blue-400 text-center px-24 max-md:px-100">
            These Contain info relating to the box they're on! Spawn in more
            Boxes by Clicking on subjects on the screen!
          </p>
        </div>
      </div>
      <div
        id="title"
        className="flex justify-center items-center absolute w-full h-full startslow pointer-events-none"
      >
        <div
          ref={externalBoxRef}
          className={`h-[100px] pointer-events-none absolute flex items-center justify-center rounded-md border-5 border-green-800 bg-green-200 p-2 overflow-hidden titletransition`}
        >
          <button
            className={`absolute top-0 w-full transition-opacity duration-500 ease-out pointer-events-auto ease-out ${
              Start
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
          >
            <div className="unfoldtitle flex items-center justify-center bg-green-800 font-extrabold text-blue-400">
              Click here to open!
            </div>
          </button>
          <p className="text-center text-3xl font-extrabold text-blue-400 pointer-events-none">
            {!Start && (
              <button
                className="pointer-events-auto"
                onClick={() => {
                  setStart(true);
                }}
              >
                Welcome to my Portfolio! Click me to start!
              </button>
            )}

            {Start && "Drag Here!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;

//Basic button that turns into draggable physics object on click. Start is connected to apptsx propped, passed to matterbox then passed to component

/*

const boxid = document.getElementById("title");
      boxid?.classList.replace("top-1/3", "top-0");
      boxid?.classList.replace("left-1/3", "top-0");

      */
