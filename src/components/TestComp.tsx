/* eslint-disable @typescript-eslint/no-wrapper-object-types */
// this exists as a placeholder component to be copied for individual matterboxes. It currently has the bug fix for the delay to fix it, and the offset. copy this and call into matterbox for more.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useEffect,
  useRef,
  useState,
  type Ref,
  type MutableRefObject,
  type RefObject,
} from "react";
import Matter from "matter-js";
import Card from "./card";

interface Props {
  engineRef: MutableRefObject<Matter.Engine | null>;
  boxRef: RefObject<HTMLDivElement | null>;
  spawn?: boolean;
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  text: string;
  image: string;
  ID: string;
  setMount: (arg0: boolean) => void;
  Mount: boolean;
  screenwidth?: Number;
  screenheight?: Number;
}

const TestComp = ({
  engineRef,
  spawn,
  isClosed,
  setIsClosed,
  setIsOpen,
  text,
  image,
  ID,
  setMount,
  Mount,
  screenwidth,
  screenheight,
  boxRef,
}: Props) => {
  const [Test, setTest] = useState(false);
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);
  const randomSpawn =
    Math.random() * (Number(screenwidth) / 2) + Number(screenwidth) / 4;

  useEffect(() => {
    const MatterFunction = () => {
      if (!spawn || !engineRef.current || !externalBoxRef.current) {
        if (engineRef.current && externalBodyRef.current) {
          Matter.Composite.remove(
            engineRef.current.world,
            externalBodyRef.current
          );
          externalBodyRef.current = null;
        }
        return;
      }

      const engine = engineRef.current;

      const { Bodies, Composite, Events } = Matter;

      const boxElement = externalBoxRef.current;
      const bodyWidth = boxElement.offsetWidth;
      const bodyHeight = boxElement.offsetHeight;

      const externalBoxBody = Bodies.rectangle(
        screenwidth ? randomSpawn : 400,
        screenheight ? Number(-screenheight) / 2 : 300,
        bodyWidth,
        bodyHeight,
        {
          frictionAir: 0.005,
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
            x:
              Math.random() * (Number(Widthchange) / 2) +
              Number(Widthchange) / 4,
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
      const boxid = document.getElementById(ID);
      boxid?.classList.replace("opacity-0", "opacity-100");
    }, 50);
  }, [spawn]);

  return (
    <>
      {spawn && (
        /*
        <Card
          reference={externalBoxRef}
          isClosed={isClosed}
          setIsClosed={setIsClosed}
          setIsOpen={setIsOpen}
        ></Card>
        */

        <div
          id={ID}
          ref={externalBoxRef}
          className="w-22 md:w-48 rounded-md overflow-hidden bg-green-200 text-white absolute pointer-events-none top-0 opacity-0 border-5 border-green-800"
        >
          <button
            className="absolute"
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
            <div className="unfold pointer-events-auto flex items-center justify-center items-center bg-green-800 absolute">
              {text}
            </div>
          </button>
          <div>
            <img className="p-10" src={image} alt="source"></img>
          </div>
        </div>
      )}
    </>
  );
};

export default TestComp;

/*
use state button
<button
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

            */
