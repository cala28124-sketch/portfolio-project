/* eslint-disable @typescript-eslint/no-wrapper-object-types */

import {
  useEffect,
  useRef,
  type MutableRefObject,
  type RefObject,
} from "react";
import Matter from "matter-js";

interface Props {
  engineRef: MutableRefObject<Matter.Engine | null>;
  Start: boolean;
  setStart: (arg0: boolean) => void;
  screenwidth?: Number;
  screenheight?: Number;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  isClosed: boolean;
  setIsClosed: (arg0: boolean) => void;
  boxRef: RefObject<HTMLDivElement | null>;
}

const Title = ({
  engineRef,
  Start,
  setStart,
  screenwidth,
  screenheight,
  setIsOpen,
  isClosed,
  setIsClosed,
  boxRef,
}: Props) => {
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);

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

      const Resize = () => {
        const Widthchange = boxRef.current?.offsetWidth || 0;
        const HeightChange = boxRef.current?.offsetHeight || 0;

        if (externalBodyRef.current) {
          Matter.Body.setPosition(externalBodyRef.current, {
            x: Widthchange / 2,
            y: HeightChange / 2,
          });
        }
      };

      Composite.add(engine.world, externalBoxBody);
      Events.on(engine, "afterUpdate", updateExternalDiv);
      window.addEventListener("resize", Resize);

      updateExternalDiv();

      return () => {
        window.removeEventListener("resize", Resize);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Start]);

  return (
    <>
      <div
        id="title"
        className="flex justify-center items-center absolute w-full h-full startslow pointer-events-none"
      >
        <div
          ref={externalBoxRef}
          className={`h-[100px] w-[150px] lg:h-[100px] lg:w-fit pointer-events-none absolute flex items-center justify-center rounded-md border-5 border-green-800 bg-green-200 p-2 overflow-hidden titletransition`}
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
            <div className="unfoldtitle text-xs lg:text-base flex items-center justify-center bg-green-800 font-extrabold text-green-200 font">
              Click here to open!
            </div>
          </button>

          <p className="text-center text-sm lg:text-3xl font-extrabold text-green-800 pointer-events-none font">
            {!Start && (
              <button
                className="pointer-events-auto"
                onClick={() => {
                  setStart(true);
                }}
              >
                Welcome to my portfolio! Click me to start!
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
