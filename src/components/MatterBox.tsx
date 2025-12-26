/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState, type FC } from "react";
import Matter from "matter-js";
import Card from "./card";
import TestComp from "./TestComp";
import ProjectBox from "./ProjectBox";
import PopUp from "./PopUp";
import PopUpProject from "./PopUpProject";
import PopUpCareer from "./PopUpCareer";
import PopUpSkills from "./PopUpSkills";
import PopUpMisc from "./PopUpMisc";
import Title from "./Title";
import PopUpTitle from "./PopUpTItle";
import { StarsBackground } from "./animate-ui/components/backgrounds/stars";

interface Props {
  Start: boolean;
  setStart: (arg0: boolean) => void;
  Spawnabout: boolean;
  setspawnabout: (arg0: boolean) => void;
  spawnproject: boolean;
  setspawnproject: (arg0: boolean) => void;
  spawncareer: boolean;
  setspawncareer: (arg0: boolean) => void;
  spawnskills: boolean;
  setspawnskills: (arg0: boolean) => void;
  spawnmisc: boolean;
  setspawnmisc: (arg0: boolean) => void;
}

const MatterBox: FC<Props> = ({
  Start,
  setStart,
  Spawnabout,
  setspawnabout,
  spawnproject,
  setspawnproject,
  spawncareer,
  setspawncareer,
  spawnskills,
  setspawnskills,
  spawnmisc,
  setspawnmisc,
}: Props) => {
  const [isOpentitle, setIsOpentitle] = useState(false);
  const [isClosedtitle, setIsClosedtitle] = useState(true);
  const [isOpenabout, setIsOpenabout] = useState(false);
  const [isClosedabout, setIsClosedabout] = useState(true);
  const [isOpenproject, setIsOpenproject] = useState(false);
  const [isClosedproject, setIsClosedproject] = useState(true);
  const [isOpencareer, setIsOpencareer] = useState(false);
  const [isClosedcareer, setIsClosedcareer] = useState(true);
  const [isOpenskills, setIsOpenskills] = useState(false);
  const [isClosedskills, setIsClosedskills] = useState(true);
  const [isOpenmisc, setIsOpenmisc] = useState(false);
  const [isClosedmisc, setIsClosedmisc] = useState(true);
  const [aboutme1, setaboutme1] = useState(false);
  const [aboutme2, setaboutme2] = useState(false);
  const [aboutme3, setaboutme3] = useState(false);
  const [aboutme4, setaboutme4] = useState(false);
  const [project1, setproject1] = useState(false);
  const [project2, setproject2] = useState(false);
  const [project3, setproject3] = useState(false);
  const [career1, setcareer1] = useState(false);
  const [career2, setcareer2] = useState(false);
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
  const groundRef = useRef<Matter.Body | null>(null);
  const skyRef = useRef<Matter.Body | null>(null);
  const leftwallRef = useRef<Matter.Body | null>(null);
  const rightwallRef = useRef<Matter.Body | null>(null);

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
      render: { fillStyle: "transparent" },
    });

    skyRef.current = sky;

    const ground = Bodies.rectangle(Width / 2, Height, Width, 100, {
      isStatic: true,
      render: { fillStyle: "green" },
    });

    groundRef.current = ground;

    const wallleft = Bodies.rectangle(0, Height / 2, 50, Height * 2, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    leftwallRef.current = wallleft;

    const wallright = Bodies.rectangle(Width, Height / 2, 50, Height * 2, {
      isStatic: true,
      render: { fillStyle: "transprent" },
    });

    rightwallRef.current = wallright;

    Composite.add(engine.world, [ground, wallleft, wallright, sky]);

    const Resize = () => {
      const Widthchange = boxRef.current?.offsetWidth || 0;
      const HeightChange = boxRef.current?.offsetHeight || 0;

      if (groundRef.current) {
        Matter.Body.setPosition(groundRef.current, {
          x: Widthchange / 2,
          y: HeightChange,
        });
      }

      if (skyRef.current) {
        Matter.Body.setPosition(skyRef.current, {
          x: Widthchange / 2,
          y: -(HeightChange / 2),
        });
      }

      if (leftwallRef.current) {
        Matter.Body.setPosition(leftwallRef.current, {
          x: 0,
          y: HeightChange / 2,
        });
      }

      if (rightwallRef.current) {
        Matter.Body.setPosition(rightwallRef.current, {
          x: Widthchange,
          y: HeightChange / 2,
        });
      }
    };

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);
    window.addEventListener("resize", Resize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      window.removeEventListener("resize", Resize);

      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <>
      <PopUpTitle
        isOpen={isOpentitle}
        setIsOpen={setIsOpentitle}
        isClosed={isClosedtitle}
        setIsClosed={setIsClosedtitle}
      ></PopUpTitle>
      <PopUp
        //current placeholder, opened by testcomp/projectbox. able to do individual and separate pop ups here for easy use, may move to main app comp later.
        isClosed={isClosedabout}
        setIsClosed={setIsClosedabout}
        setIsOpen={setIsOpenabout}
        isOpen={isOpenabout}
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
      <PopUpProject
        isClosed={isClosedproject}
        setIsClosed={setIsClosedproject}
        setIsOpen={setIsOpenproject}
        isOpen={isOpenproject}
        Mount={Mount}
        button1={project1}
        button1set={setproject1}
        button2={project2}
        button2set={setproject2}
        button3={project3}
        button3set={setproject3}
      ></PopUpProject>

      <PopUpCareer
        isClosed={isClosedcareer}
        setIsClosed={setIsClosedcareer}
        setIsOpen={setIsOpencareer}
        isOpen={isOpencareer}
        Mount={Mount}
        button1={career1}
        button1set={setcareer1}
        button2={career2}
        button2set={setcareer2}
        button3={project3}
        button3set={setproject3}
      ></PopUpCareer>

      <PopUpSkills
        isClosed={isClosedskills}
        setIsClosed={setIsClosedskills}
        setIsOpen={setIsOpenskills}
        isOpen={isOpenskills}
        Mount={Mount}
        button1={project1}
        button1set={setproject1}
        button2={project2}
        button2set={setproject2}
        button3={project3}
        button3set={setproject3}
      ></PopUpSkills>

      <PopUpMisc
        isClosed={isClosedmisc}
        setIsClosed={setIsClosedmisc}
        setIsOpen={setIsOpenmisc}
        isOpen={isOpenmisc}
        Mount={Mount}
        button1={project1}
        button1set={setproject1}
        button2={project2}
        button2set={setproject2}
        button3={project3}
        button3set={setproject3}
      ></PopUpMisc>

      <button
        onClick={() => {
          setspawnabout(false);
          setspawnproject(false);
        }}
        className="absolute top-4 left-4 bg-red-500 z-20"
      >
        clear
      </button>
      <div ref={boxRef} className="w-full absolute h-[100dvh] z-10">
        <Title
          boxRef={boxRef}
          Start={Start}
          setStart={setStart}
          engineRef={engineRef}
          screenwidth={Width}
          screenheight={Height}
          isOpen={isOpentitle}
          setIsOpen={setIsOpentitle}
          isClosed={isClosedtitle}
          setIsClosed={setIsClosedtitle}
        ></Title>
        <TestComp
          boxRef={boxRef}
          spawn={Spawnabout}
          engineRef={engineRef}
          isClosed={isClosedabout}
          setIsClosed={setIsClosedabout}
          setIsOpen={setIsOpenabout}
          text="open about"
          image="/headshotme.jpg"
          ID="box1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawnproject}
          engineRef={engineRef}
          isClosed={isClosedproject}
          setIsClosed={setIsClosedproject}
          setIsOpen={setIsOpenproject}
          text="open projects"
          image="/headshotme.jpg"
          ID="boxproject"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawncareer}
          engineRef={engineRef}
          isClosed={isClosedcareer}
          setIsClosed={setIsClosedcareer}
          setIsOpen={setIsOpencareer}
          text="open career"
          image="/headshotme.jpg"
          ID="boxcareer"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawnskills}
          engineRef={engineRef}
          isClosed={isClosedskills}
          setIsClosed={setIsClosedskills}
          setIsOpen={setIsOpenskills}
          text="open skills"
          image="/headshotme.jpg"
          ID="boxskill"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawnmisc}
          engineRef={engineRef}
          isClosed={isClosedmisc}
          setIsClosed={setIsClosedmisc}
          setIsOpen={setIsOpenmisc}
          text="open feature"
          image="/headshotme.jpg"
          ID="boxmisc"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
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
          boxRef={boxRef}
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
          boxRef={boxRef}
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
          boxRef={boxRef}
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
        <TestComp
          boxRef={boxRef}
          spawn={project1}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="truthmeter"
          image="/test_logo.webp"
          ID="project1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project2}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="pngPal"
          image="/test_logo.webp"
          ID="project2"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project3}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="portfolio"
          image="/test_logo.webp"
          ID="project3"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={career1}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="pinch a penny"
          image="/test_logo.webp"
          ID="career1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={career2}
          engineRef={engineRef}
          isClosed={nullisClosed}
          setIsClosed={nullsetIsClosed}
          setIsOpen={nullsetIsOpen}
          text="ucf"
          image="/test_logo.webp"
          ID="career2"
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

/* */
