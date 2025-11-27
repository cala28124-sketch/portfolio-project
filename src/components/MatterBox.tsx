/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState, type FC } from "react";
import Matter from "matter-js";
import Card from "./card";
import TestComp from "./TestComp";
import ProjectBox from "./ProjectBox";
import PopUp from "./PopUp";
import Title from "./Title";
interface Props {
  Start: boolean;
  setStart: (arg0: boolean) => void;
}

const MatterBox: FC<Props> = ({ Start, setStart }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const [spawn, setspawn] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);
  const externalBoxRef2 = useRef<HTMLDivElement>(null);

  const engineRef = useRef<Matter.Engine | null>(null);
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBodyRef2 = useRef<Matter.Body | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const container = boxRef.current;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;

    const Width = container.offsetWidth;
    const Height = container.offsetHeight;

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      options: {
        width: Width,
        height: Height,
        wireframes: false,
        background: "transparent",
        showInternalEdges: false,
        wireframeStrokeStyle: "red",
      },
    });

    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    render.mouse = mouse;

    const boxA = Bodies.rectangle(400, 200, 80, 80, {
      render: { fillStyle: "#007ACC" },
    });
    const boxB = Bodies.rectangle(450, 50, 80, 80, {
      render: { fillStyle: "#E91E63" },
    });

    const sky = Bodies.rectangle(Width / 2, 0, Width, 50, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    const ground = Bodies.rectangle(Width / 2, Height, Width, 300, {
      isStatic: true,
      render: { fillStyle: "green" },
    });
    const wallleft = Bodies.rectangle(0, Height / 2, 50, Height, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    const wallright = Bodies.rectangle(Width, Height / 2, 50, Height, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    Composite.add(engine.world, [boxA, boxB, ground, wallleft, wallright, sky]);

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);

      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  useEffect(() => {
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

    const externalBoxBody = Bodies.rectangle(200, 50, bodyWidth, bodyHeight, {
      frictionAir: 0.05,
      mass: 10,
      render: { visible: false },
    });
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
  }, [spawn]);

  return (
    <>
      <PopUp
        //current placeholder, opened by testcomp/projectbox.
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      ></PopUp>

      <button
        onClick={() => {
          setspawn(true);
          if (spawn) {
            setspawn(false);
          }
        }}
        className="absolute top-4 left-4 bg-red-500"
      >
        test
      </button>
      <div
        ref={boxRef}
        style={{
          zIndex: "0",
        }}
        className="w-full h-screen absolute"
      >
        {spawn && (
          <ProjectBox
            reference={externalBoxRef}
            isClosed={isClosed}
            setIsClosed={setIsClosed}
            setIsOpen={setIsOpen}
          ></ProjectBox>
        )}
        <TestComp
          spawn={spawn}
          engineRef={engineRef}
          isClosed={isClosed}
          setIsClosed={setIsClosed}
          setIsOpen={setIsOpen}
        ></TestComp>
        <Title Start={Start} setStart={setStart} engineRef={engineRef}></Title>
      </div>
    </>
  );
};

export default MatterBox;
