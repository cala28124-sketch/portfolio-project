/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState, type FC } from "react";
import Matter from "matter-js";
import Card from "./oldcomp/card";
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
import { s } from "motion/react-client";
import PopUpMore from "./PopUpMore";
import PopUpDrive from "./PopUpDrive";
import PopUpLife from "./PopUpLife";
import PopUpHobbies from "./PopUpHobbie";
import PopUpCompP from "./PopUpProjectComp";
import PopUpCompC from "./PopUpCareerComp";

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
  aboutme1: boolean;
  setaboutme1: (arg0: boolean) => void;
  aboutme2: boolean;
  setaboutme2: (arg0: boolean) => void;
  aboutme3: boolean;
  setaboutme3: (arg0: boolean) => void;
  aboutme4: boolean;
  setaboutme4: (arg0: boolean) => void;
  project1: boolean;
  setproject1: (arg0: boolean) => void;
  project2: boolean;
  setproject2: (arg0: boolean) => void;
  project3: boolean;
  setproject3: (arg0: boolean) => void;
  career1: boolean;
  setcareer1: (arg0: boolean) => void;
  career2: boolean;
  setcareer2: (arg0: boolean) => void;
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
  aboutme1,
  setaboutme1,
  aboutme2,
  setaboutme2,
  aboutme3,
  setaboutme3,
  aboutme4,
  setaboutme4,
  project1,
  setproject1,
  project2,
  setproject2,
  project3,
  setproject3,
  career1,
  setcareer1,
  career2,
  setcareer2,
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
  const [nullisOpen, nullsetIsOpen] = useState(false);
  const [nullisClosed, nullsetIsClosed] = useState(false);
  const [isClosedTM, setIsClosedTM] = useState(true);
  const [isOpenTM, setIsOpenTM] = useState(false);
  const [isClosedPNG, setIsClosedPNG] = useState(true);
  const [isOpenPNG, setIsOpenPNG] = useState(false);
  const [isClosedPort, setIsClosedPort] = useState(true);
  const [isOpenPort, setIsOpenPort] = useState(false);
  const [isClosedPinch, setIsClosedPinch] = useState(true);
  const [isOpenPinch, setIsOpenPinch] = useState(false);
  const [isClosedUCF, setIsClosedUCF] = useState(true);
  const [isOpenUCF, setIsOpenUCF] = useState(false);
  const [isClosedMore, setIsClosedMore] = useState(true);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isClosedDrive, setIsClosedDrive] = useState(true);
  const [isOpenDrive, setIsOpenDrive] = useState(false);
  const [isClosedLife, setIsClosedLife] = useState(true);
  const [isOpenLife, setIsOpenLife] = useState(false);
  const [isClosedHobbie, setIsClosedHobbie] = useState(true);
  const [isOpenHobbie, setIsOpenHobbie] = useState(false);

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

    const ground = Bodies.rectangle(Width / 2, Height, Width, 50, {
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
      setspawnabout(false);
      setspawnproject(false);
      setspawncareer(false);
      setaboutme1(false);
      setaboutme2(false);
      setaboutme3(false);
      setaboutme4(false);
      setproject1(false);
      setproject2(false);
      setcareer1(false);
      setcareer2(false);
      const Widthchange = boxRef.current?.offsetWidth || 0;
      const HeightChange = boxRef.current?.offsetHeight || 0;

      if (render) {
        render.canvas.width = Widthchange;
        render.canvas.height = HeightChange;
        render.options.width = Widthchange;
        render.options.height = HeightChange;
      }

      if (groundRef.current) {
        Matter.Body.setPosition(groundRef.current, {
          x: Widthchange / 2,
          y: HeightChange,
        });
        Matter.Body.scale(
          groundRef.current,
          Widthchange /
            (groundRef.current.bounds.max.x - groundRef.current.bounds.min.x),
          1
        );
      }

      if (skyRef.current) {
        Matter.Body.setPosition(skyRef.current, {
          x: Widthchange / 2,
          y: -(HeightChange / 2),
        });
        Matter.Body.scale(
          skyRef.current,
          Widthchange /
            (skyRef.current.bounds.max.x - skyRef.current.bounds.min.x),
          1
        );
      }

      if (leftwallRef.current) {
        Matter.Body.setPosition(leftwallRef.current, {
          x: 0,
          y: HeightChange / 2,
        });
        Matter.Body.scale(
          leftwallRef.current,
          1,
          HeightChange /
            (leftwallRef.current.bounds.max.y -
              leftwallRef.current.bounds.min.y)
        );
      }

      if (rightwallRef.current) {
        Matter.Body.setPosition(rightwallRef.current, {
          x: Widthchange,
          y: HeightChange / 2,
        });
        Matter.Body.scale(
          rightwallRef.current,
          1,
          HeightChange /
            (rightwallRef.current.bounds.max.y -
              rightwallRef.current.bounds.min.y)
        );
      }
    };

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);
    window.addEventListener("resize", Resize);

    return () => {
      window.removeEventListener("resize", Resize);
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

      <PopUpCompP
        isClosed={isClosedTM}
        setIsClosed={setIsClosedTM}
        setIsOpen={setIsOpenTM}
        isOpen={isOpenTM}
        Mount={Mount}
        name="Truth Meter"
        img="/truthmeter.png"
        git="https://github.com/JustinTeape/factCheck"
        ID="truthmeter"
        overview="Made at shellhacks 2025 as my first ever project, truth meter
              exists an accesible browser extension that allows one to check the
              credibility, and accuracy of a webpage, providing a summary of the
              page and what it contains, and how credible/accurate each point
              is."
        experience="Due to being one of my first ever projects with a team of three
              others, truth meter was a huge learning experience for me.
              Introducing me to the general flow of making projects, it was the
              first time I had really started to use software like VScode, and
              began to be introduced to general concepts. It was also my first
              introduction to html/css along with react, and my first time using
              python in a actual project rather than just on one off
              assignments. Truth meter itself uses several factors to run,
              having both a front end and back end- the front end using react to
              display all the info, while being sent the info to display from
              the back end using fastapi. The back end uses python to strip the
              webpage link of wherever the user is using the browser extension,
              and plugs it into a google agent. The agent then creates the info
              and text, and sends it to the front end as mentioned earlier. The
              whole thing was inputted into a google chrome extension by simply
              unpacking the folder into the manager for it, which was much
              easier than our group expected. Overall it was a very fun
              introduction into programming projects for me, and I learned a lot
              from it involving connecting the front end and the back end, which
              was my main role in the team project."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">FastAPI</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Python</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">GoogleADK</div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompP
        isClosed={isClosedPNG}
        setIsClosed={setIsClosedPNG}
        setIsOpen={setIsOpenPNG}
        isOpen={isOpenPNG}
        Mount={Mount}
        name="PNGPAL"
        img="/pngpalimage.png"
        git="https://github.com/cala28124-sketch/pngPalme"
        ID="pngpal"
        overview="Made at
            KnightHacks 2025, PNGpal was the first project I took a leading role
            in. PNGpal A chatbot that overlays itself on the users screen,
            allowing them to freely ask financial advice, giving back a response
            when doing so, and recording the transcript of the conversation for
            the user to read"
        experience="PngPal was the first project I had took a leading role in- mainly due to my coming up with the idea for our project at KnightHacks 2025, and doing the major tasks of styling how it looked on screen, along with connecting the front end to the agent in the back end, to make voice chat work. This was mainly done using a mix of the python my teammate had done with the elevenlabs agent in the back end, along with a flask server connecting both the front and back end. Taking on this role for the first time was challenging in the way that it was the first time a team project like this had relied on me so much, though in the end I was able to figure out the usage of the connection, and successfully finish the project with my team. Along with this, I learned a good bit more on agents and styling as a whole, and it was a experience I’m glad I had."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              ElevenLabs
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Python</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Electron</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Flask</div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompP
        isClosed={isClosedPort}
        setIsClosed={setIsClosedPort}
        setIsOpen={setIsOpenPort}
        isOpen={isOpenPort}
        Mount={Mount}
        name="Personal Portfolio"
        img="/personalport.png"
        git="https://github.com/cala28124-sketch/portfolio-project"
        ID="portfolio"
        overview="My portfolio website, being the first indepedent project I started and finished. Built to showcase my skills, projects, and experience. Built using React and Tailwind CSS, this website is designed to be responsive and user-friendly, providing visitors with an easy way to learn more about me and my work. Made as my first personal project."
        experience="Really, out of all my projects up to this point, this one was the most challenging. Mostly for the fact that I had stuck with it for so long as a personal project, for around two months for the current iteration and a month previously on a iteration I threw out due to not liking it, this project taught me a lot of things. One, it helped me to learn HTML, CSS, Javascript, Typescript, React, and things like Tailwind CSS and matter.js. Though really, past the programming side of what I learned, this whole thing taught me a very important value- consistency. My biggest struggle with this project was making sure to stay on task and stay consistent, as that has always been a trouble of mine before this. This project taught me the value of hard and constant work, and the rewards it brings to stay true to a task you put your mind to. "
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Matter.JS</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">HTML</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Tailwind Css
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Typescript
            </div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompC
        isClosed={isClosedPinch}
        setIsClosed={setIsClosedPinch}
        setIsOpen={setIsOpenPinch}
        isOpen={isOpenPinch}
        Mount={Mount}
        name="Pinch A Penny"
        img="/Pinchlogo.png"
        ID="pinch"
        overview="At Pinch a Penny, I worked hard to ensure customer satisifcation,
              providing comprehensive support in pool maintenance, products, and
              services. I worked with my coworkers to ensure the store was
              organized and clean, while also managing inventory and restocking
              shelves. Additionally, I handled cash register operations,
              processed transactions accurately, and maintained detailed records
              of sales and customer interactions. Through these
              responsibilities, I developed strong communication and teamwork
              skills, contributing to a positive shopping experience for our
              customers."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Customer Service
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Communication
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Teamwork</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Pool Chemicals
            </div>
          </>
        }
        Key={
          <>
            <li>
              Sold and marketted several expensive products to customers,
              increasing store revenue
            </li>
            <li>
              Maintained high customer satisfaction through attentive service
            </li>
            <li>
              Developed strong teamwork skills by collaborating with coworkers
              to ensure smooth store operations
            </li>
            <li>Developed Strong customer service and communication skills</li>
          </>
        }
        date="June 2023 - August 2025"
        jobTitle="Sales Associate"
      ></PopUpCompC>
      <PopUpCompC
        isClosed={isClosedUCF}
        setIsClosed={setIsClosedUCF}
        setIsOpen={setIsOpenUCF}
        isOpen={isOpenUCF}
        Mount={Mount}
        name="University of Central Florida"
        img="/ucflogo.png"
        ID="ucf"
        overview="Currently pursuing a Bachelor of Science in computer science, at the University of Central Florida. My academic journey at the school has been a rollercoaster so far- and though I have yet to fully delve into my major as a freshman student, I have already begun taking Computer Science courses, while completing coursework related to C, Python, and Java. The courses I’ve taken have provided me with fundamental knowledge that has served as a basis for my practical skills and theoretical knowledge that I apply in my programming projects."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Computer Science
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              C programming
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Object Oriented Programming
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Data Structures
            </div>
          </>
        }
        Key={
          <>
            <li>
              Pariticpated in several clubs, including Knight Hacks and HackUCF
            </li>
            <li>
              Participated in several extra curricular events, including
              hackathons and horse plinko cyber challenge
            </li>
            <li>
              Maintained a strong GPA while balancing coursework and
              extracurriculars
            </li>
          </>
        }
        date="August 2025 - Present"
        jobTitle="B.S in computer science"
      ></PopUpCompC>
      <PopUpMore
        isClosed={isClosedMore}
        setIsClosed={setIsClosedMore}
        setIsOpen={setIsOpenMore}
        isOpen={isOpenMore}
        Mount={Mount}
      ></PopUpMore>
      <PopUpDrive
        isClosed={isClosedDrive}
        setIsClosed={setIsClosedDrive}
        setIsOpen={setIsOpenDrive}
        isOpen={isOpenDrive}
        Mount={Mount}
      ></PopUpDrive>
      <PopUpLife
        isClosed={isClosedLife}
        setIsClosed={setIsClosedLife}
        setIsOpen={setIsOpenLife}
        isOpen={isOpenLife}
        Mount={Mount}
      ></PopUpLife>
      <PopUpHobbies
        isClosed={isClosedHobbie}
        setIsClosed={setIsClosedHobbie}
        setIsOpen={setIsOpenHobbie}
        isOpen={isOpenHobbie}
        Mount={Mount}
      ></PopUpHobbies>

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
          setspawn={setspawnabout}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawnproject}
          engineRef={engineRef}
          isClosed={isClosedproject}
          setIsClosed={setIsClosedproject}
          setIsOpen={setIsOpenproject}
          text="open projects"
          image="/pngpalimage.png"
          ID="boxproject"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setspawnproject}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={spawncareer}
          engineRef={engineRef}
          isClosed={isClosedcareer}
          setIsClosed={setIsClosedcareer}
          setIsOpen={setIsOpencareer}
          text="open career"
          image="/ucflogo.png"
          ID="boxcareer"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setspawncareer}
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
          setspawn={setspawnskills}
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
          setspawn={setspawnmisc}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={aboutme1}
          engineRef={engineRef}
          isClosed={isClosedMore}
          setIsClosed={setIsClosedMore}
          setIsOpen={setIsOpenMore}
          text="More Me"
          image="/medog.jpg"
          ID="box2"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setaboutme1}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={aboutme2}
          engineRef={engineRef}
          isClosed={isClosedLife}
          setIsClosed={setIsClosedLife}
          setIsOpen={setIsOpenLife}
          text="Life"
          image="/legome.jpg"
          ID="box5"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setaboutme2}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={aboutme3}
          engineRef={engineRef}
          isClosed={isClosedDrive}
          setIsClosed={setIsClosedDrive}
          setIsOpen={setIsOpenDrive}
          text="Drive"
          image="/familyme.jpg"
          ID="box3"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setaboutme3}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={aboutme4}
          engineRef={engineRef}
          isClosed={isClosedHobbie}
          setIsClosed={setIsClosedHobbie}
          setIsOpen={setIsOpenHobbie}
          text="Hobbies"
          image="/dice.png"
          ID="box4"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setaboutme4}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project1}
          engineRef={engineRef}
          isClosed={isClosedTM}
          setIsClosed={setIsClosedTM}
          setIsOpen={setIsOpenTM}
          text="TruthMeter"
          image="/truthmeter.png"
          ID="project1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject1}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project2}
          engineRef={engineRef}
          isClosed={isClosedPNG}
          setIsClosed={setIsClosedPNG}
          setIsOpen={setIsOpenPNG}
          text="PNGPal"
          image="/pngpalimage.png"
          ID="project2"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject2}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project3}
          engineRef={engineRef}
          isClosed={isClosedPort}
          setIsClosed={setIsClosedPort}
          setIsOpen={setIsOpenPort}
          text="portfolio"
          image="/personalport.png"
          ID="project3"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject3}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={career1}
          engineRef={engineRef}
          isClosed={isClosedPinch}
          setIsClosed={setIsClosedPinch}
          setIsOpen={setIsOpenPinch}
          text="Pinch A Penny"
          image="/Pinchlogo.png"
          ID="career1"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setcareer1}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={career2}
          engineRef={engineRef}
          isClosed={isClosedUCF}
          setIsClosed={setIsClosedUCF}
          setIsOpen={setIsOpenUCF}
          text="UCF"
          image="/ucflogo.png"
          ID="career2"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setcareer2}
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

/* <button
        onClick={() => {
          setspawnabout(false);
          setspawnproject(false);
          setspawncareer(false);
          setaboutme1(false);
          setaboutme2(false);
          setaboutme3(false);
          setaboutme4(false);
          setproject1(false);
          setproject2(false);
          setcareer1(false);
          setcareer2(false);
        }}
        className="absolute top-4 left-4 bg-red-500 z-20"
      >
        clear
      </button> */
