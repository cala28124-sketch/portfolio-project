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
  const [aboutme1, setaboutme1] = useState(false);
  const [aboutme2, setaboutme2] = useState(false);
  const [aboutme3, setaboutme3] = useState(false);
  const [aboutme4, setaboutme4] = useState(false);
  const [nullisOpen, nullsetIsOpen] = useState(false);
  const [nullisClosed, nullsetIsClosed] = useState(false);

  const [spawn, setspawn] = useState(false);
  const [Mount, setMount] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const externalBoxRef = useRef<HTMLDivElement>(null);
  const externalBoxRef2 = useRef<HTMLDivElement>(null);

  const engineRef = useRef<Matter.Engine | null>(null);
  const externalBodyRef = useRef<Matter.Body | null>(null);
  const externalBodyRef2 = useRef<Matter.Body | null>(null);

  const Width = boxRef.current?.offsetWidth || 0;
  const Height = boxRef.current?.offsetHeight || 0;

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

    const sky = Bodies.rectangle(Width / 2, -(Height / 2), Width, 50, {
      isStatic: true,
      render: { fillStyle: "black" },
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

    Composite.add(engine.world, [ground, wallleft, wallright, sky]);

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

  return (
    <>
      <PopUp
        //current placeholder, opened by testcomp/projectbox. able to do individual and separate pop ups here for easy use, may move to main app comp later.
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        button1={aboutme1}
        button1set={setaboutme1}
        button2={aboutme2}
        button2set={setaboutme2}
        button3={aboutme3}
        button3set={setaboutme3}
        button4={aboutme4}
        button4set={setaboutme4}
        Mount={Mount}
      ></PopUp>

      <button
        onClick={() => {
          setspawn(true);
          setMount(true);
          if (spawn) {
            setspawn(false);
          }
        }}
        className="absolute top-4 left-4 bg-red-500"
      >
        test
      </button>
      <div ref={boxRef} className="w-full h-screen absolute z-0">
        <Title
          Start={Start}
          setStart={setStart}
          engineRef={engineRef}
          screenwidth={Width}
          screenheight={Height}
        ></Title>
        <TestComp
          spawn={spawn}
          engineRef={engineRef}
          isClosed={isClosed}
          setIsClosed={setIsClosed}
          setIsOpen={setIsOpen}
          text="test"
          image="/headshotme.jpg"
          ID="box1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          spawn={aboutme1}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="about1"
          image="/test_logo.webp"
          ID="box2"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          spawn={aboutme2}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="about2"
          image="/test_logo.webp"
          ID="box5"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          spawn={aboutme3}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="about3"
          image="/test_logo.webp"
          ID="box3"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          spawn={aboutme4}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="about4"
          image="/test_logo.webp"
          ID="box4"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
      </div>
    </>
  );
};

export default MatterBox;

/*
old used effect- moved to TestComp- no longer needed in  file
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

  */

/*

  title spawn, removed for now
  <Title Start={Start} setStart={setStart} engineRef={engineRef}></Title>
  start up props
  { Start, setStart  }: Props

  */
