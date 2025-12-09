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
      <div
        id="title"
        className="flex justify-center items-center absolute w-full h-full "
      >
        <div
          ref={externalBoxRef}
          className="pointer-events-none absolute flex items-center justify-center rounded-md border-2 border-black bg-green-200 p-2"
        >
          <h1 className="text-center text-9xl font-extrabold text-blue-400">
            {!Start && (
              <button
                className="pointer-events-auto"
                onClick={() => {
                  setStart(true);
                }}
              >
                Click me to start!
              </button>
            )}

            {Start && "Drag me!"}
          </h1>
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
