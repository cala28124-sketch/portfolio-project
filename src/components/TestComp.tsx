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
  spawn?: boolean;
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
}

const TestComp = ({
  engineRef,
  spawn,
  isClosed,
  setIsClosed,
  setIsOpen,
}: Props) => {
  const [readyToMeasure, setReadyToMeasure] = useState(0);
  const [Test, setTest] = useState(false);
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);

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
        1000,
        50,
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
      const boxid = document.getElementById("box1");
      boxid?.classList.replace("-left-100", "-left-0");
    }, 50);
  }, [spawn, readyToMeasure]);

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
          id="box1"
          ref={externalBoxRef}
          className="max-w-md rounded-lg overflow-hidden bg-black text-white absolute pointer-events-none	-top-0 -left-100"
        >
          <div className="  flex items-center justify-center pointer-events-none  bg-red-950">
            test
          </div>
          <div className="pointer-events-auto">
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
              <img
                className="p-10"
                src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
                alt="source"
              ></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestComp;
