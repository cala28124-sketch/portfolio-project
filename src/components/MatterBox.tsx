import { useEffect, useRef, useState, type FC } from "react";
import Matter from "matter-js";
import TestComp from "./TestComp";
import PopUp from "./PopUp";
import PopUpProject from "./PopUpProject";
import PopUpCareer from "./PopUpCareer";
import Title from "./Title";
import PopUpTitle from "./PopUpTItle";
import PopUpMore from "./PopUpMore";
import PopUpDrive from "./PopUpDrive";
import PopUpLife from "./PopUpLife";
import PopUpHobbies from "./PopUpHobbie";
import PopUpCompP from "./PopUpProjectComp";
import PopUpCompC from "./PopUpCareerComp";
/*
import { resize } from "motion";
*/

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
  project4: boolean;
  setproject4: (arg0: boolean) => void;
  project5: boolean;
  setproject5: (arg0: boolean) => void;
  project6: boolean;
  setproject6: (arg0: boolean) => void;
  project7: boolean;
  setproject7: (arg0: boolean) => void;
  career1: boolean;
  setcareer1: (arg0: boolean) => void;
  career2: boolean;
  setcareer2: (arg0: boolean) => void;
  career3: boolean;
  setcareer3: (arg0: boolean) => void;
  career4: boolean;
  setcareer4: (arg0: boolean) => void;
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
  project4,
  setproject4,
  project5,
  setproject5,
  project6,
  setproject6,
  project7,
  setproject7,
  career1,
  setcareer1,
  career2,
  setcareer2,
  career3,
  setcareer3,
  career4,
  setcareer4,
}: Props) => {
  const [isOpentitle, setIsOpentitle] = useState(false);
  const [isClosedtitle, setIsClosedtitle] = useState(true);
  const [isOpenabout, setIsOpenabout] = useState(false);
  const [isClosedabout, setIsClosedabout] = useState(true);
  const [isOpenproject, setIsOpenproject] = useState(false);
  const [isClosedproject, setIsClosedproject] = useState(true);
  const [isOpencareer, setIsOpencareer] = useState(false);
  const [isClosedcareer, setIsClosedcareer] = useState(true);
  const [isClosedTM, setIsClosedTM] = useState(true);
  const [isOpenTM, setIsOpenTM] = useState(false);
  const [isClosedPNG, setIsClosedPNG] = useState(true);
  const [isOpenPNG, setIsOpenPNG] = useState(false);
  const [isClosedPort, setIsClosedPort] = useState(true);
  const [isOpenPort, setIsOpenPort] = useState(false);
  const [isClosedFlaming, setIsClosedFlaming] = useState(true);
  const [IsOpenFlaming, setIsOpenFlaming] = useState(false);
  const [isClosedElder, setIsClosedElder] = useState(true);
  const [IsOpenElder, setIsOpenElder] = useState(false);
  const [isClosedSpell, setIsClosedSpell] = useState(true);
  const [IsOpenSpell, setIsOpenSpell] = useState(false);
  const [isClosedDay, setIsClosedDay] = useState(true);
  const [IsOpenDay, setIsOpenDay] = useState(false);
  const [isClosedPinch, setIsClosedPinch] = useState(true);
  const [isOpenPinch, setIsOpenPinch] = useState(false);
  const [isClosedUCF, setIsClosedUCF] = useState(true);
  const [isOpenUCF, setIsOpenUCF] = useState(false);
  const [isClosedLifeStage, setIsClosedLifeStage] = useState(true);
  const [isOpenLifeStage, setIsOpenLifeStage] = useState(false);
  const [isClosedTraackr, setIsClosedTraackr] = useState(true);
  const [isOpenTraackr, setIsOpenTraackr] = useState(false);
  const [isClosedMore, setIsClosedMore] = useState(true);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isClosedDrive, setIsClosedDrive] = useState(true);
  const [isOpenDrive, setIsOpenDrive] = useState(false);
  const [isClosedLife, setIsClosedLife] = useState(true);
  const [isOpenLife, setIsOpenLife] = useState(false);
  const [isClosedHobbie, setIsClosedHobbie] = useState(true);
  const [isOpenHobbie, setIsOpenHobbie] = useState(false);
  const [Mount, setMount] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const engineRef = useRef<Matter.Engine | null>(null);
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
    // x, y, width, height
    const sky = Bodies.rectangle(Width / 2, -(Height / 2), Width, 50, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    skyRef.current = sky;

    const ground = Bodies.rectangle(Width / 2 + 100, Height, Width, 75, {
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

    const resizeObserver = new ResizeObserver((entries) => {
      setspawnabout(false);
      setspawnproject(false);
      setspawncareer(false);
      setaboutme1(false);
      setaboutme2(false);
      setaboutme3(false);
      setaboutme4(false);
      setproject1(false);
      setproject2(false);
      setproject3(false);
      setproject4(false);
      setproject5(false);
      setproject6(false);
      setproject7(false);
      setcareer1(false);
      setcareer2(false);
      setcareer3(false);
      setcareer4(false);

      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        render.canvas.width = width;
        render.canvas.height = height;
        render.options.width = width;
        render.options.height = height;

        if (groundRef.current) {
          Matter.Body.setPosition(groundRef.current, {
            x: width / 2,
            y: height,
          });
          Matter.Body.scale(
            groundRef.current,
            width /
              (groundRef.current.bounds.max.x - groundRef.current.bounds.min.x),
            1,
          );
        }

        if (skyRef.current) {
          Matter.Body.setPosition(skyRef.current, {
            x: width / 2,
            y: -(height / 2),
          });
          Matter.Body.scale(
            skyRef.current,
            width / (skyRef.current.bounds.max.x - skyRef.current.bounds.min.x),
            1,
          );
        }

        if (leftwallRef.current) {
          Matter.Body.setPosition(leftwallRef.current, {
            x: 0,
            y: height / 2,
          });
          Matter.Body.scale(
            leftwallRef.current,
            1,
            (height * 2) /
              (leftwallRef.current.bounds.max.y -
                leftwallRef.current.bounds.min.y),
          );
        }

        if (rightwallRef.current) {
          Matter.Body.setPosition(rightwallRef.current, {
            x: width,
            y: height / 2,
          });
          Matter.Body.scale(
            rightwallRef.current,
            1,
            (height * 2) /
              (rightwallRef.current.bounds.max.y -
                rightwallRef.current.bounds.min.y),
          );
        }
      }
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);
    resizeObserver.observe(boxRef.current);

    return () => {
      resizeObserver.disconnect();

      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);

      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, [
    setaboutme1,
    setaboutme2,
    setaboutme3,
    setaboutme4,
    setcareer1,
    setcareer2,
    setcareer3,
    setcareer4,
    setproject1,
    setproject2,
    setproject3,
    setproject4,
    setproject5,
    setproject6,
    setproject7,
    setspawnabout,
    setspawncareer,
    setspawnproject,
  ]);

  return (
    <>
      <PopUpTitle
        isOpen={isOpentitle}
        setIsOpen={setIsOpentitle}
        isClosed={isClosedtitle}
        setIsClosed={setIsClosedtitle}
      ></PopUpTitle>
      <PopUp
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
        button4={project4}
        button4set={setproject4}
        button5={project5}
        button5set={setproject5}
        button6={project6}
        button6set={setproject6}
        button7={project7}
        button7set={setproject7}
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
        button3={career3}
        button3set={setcareer3}
        button4={career4}
        button4set={setcareer4}
      ></PopUpCareer>

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
      <PopUpCompP
        isClosed={isClosedFlaming}
        setIsClosed={setIsClosedFlaming}
        setIsOpen={setIsOpenFlaming}
        isOpen={IsOpenFlaming}
        Mount={Mount}
        name="Flaming Notes"
        img="/flamingnotes.jpg"
        git="https://github.com/cala28124-sketch/Flaming-Notes"
        ID="Flaming"
        overview="My third hackathon project, built at swamphacks 2025. The main idea behind the project was to give a way for students to upload and compare there notes with others, while giving them the ability to see the most important aspects that most students notes had. Additonally, it includes a quiz feature to allow for students to test there knowledge."
        experience="In a short overview, the project exists within a docker run on the select computer, and has a front end involving React, and back end ivnolving Go. The front end says files to the back end, which are stored using mongoDB, which then send its to a gemini agent to compile and return the notes to the front end to be displayed. Being my third hackathon project, at this point in my time coding, this was probally my favorite hackathon project yet. This was for a few reasons- one being the fact that for this project, it was the least I had to use outside help or look things up, while at the same time teaching me the most out of any hackathon experience I had went through previously. Mainly it was with the connection of the back end and front end involving databases, but overall due to my higher knowledge of front end, I was able to take in and understand a lot more. Really, this project for me was not only fun, but one of the first times where I was able to look back on what I have learned, and be truly proud that I mysef had learned it. Things like this are what make me want to learn more, and is apart of the reason I was able to learn more when it came to this project. "
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">MongoDB</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Go</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Gemini Flash
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Typescript
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Tailwind</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Docker</div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompP
        isClosed={isClosedElder}
        setIsClosed={setIsClosedElder}
        setIsOpen={setIsOpenElder}
        isOpen={IsOpenElder}
        Mount={Mount}
        name="ElderWatch"
        img="/Elder.jpg"
        git="https://github.com/Humbertxx/hack_usf"
        ID="Elder"
        overview="Built at HackUSF 2026, ElderWatch was built with the motivation of being able to more easily monitor and keep in touches with one’s Elders. It uses Computer Vision and Snowflake to get data from live images, and give live updates to a website dashboard. It had won best use of snowflake API at the end of the competition."
        experience="For a short overview, the project used a distributed camera-to-cloud architecture  designed for speed and observability to work. It mainly used a CV service utilizing  YOLO8x.pt(w/Ultralytics) + OSNet_ain_x1_0 + MediaPipe (BlazePose heavy), which extracted pose, activity, and identity signals. Snowflake had stored the raw observations, and SNowflake Cortex had helped to contextualize the data for the transference to the frontend. For transfering and utilizing the data on our frontend dashboard, we had used FastAPI. My responbilities for the project where mainly based on the frontend- where I had made most of the frontend dashboard, and implemented most of the connections to the backend, making sure the dashboard would be able to utilize the data.  For me, I am proud of this project, as it was not only a marker for how far I had come in utilization of UI/UX along with making/coding frontend, it represented my first win at a hackathon, which is something I'm highly proud of. To me, it shows that I'm able to go into these type of events, and not only just help my team to make a project, but the fact that I'm able to help my team make a winning project- which is something that will push me to continue further in my journey as a software engineer."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">SQL</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Snowflake</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">FastAPI</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">YOLO8</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">MediaPipe</div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompP
        isClosed={isClosedSpell}
        setIsClosed={setIsClosedSpell}
        setIsOpen={setIsOpenSpell}
        isOpen={IsOpenSpell}
        Mount={Mount}
        name="SpellPrimer"
        img="/spellbook.png"
        git="https://github.com/cala28124-sketch/spellbook"
        ID="Spell"
        overview="A digital DnD spellbook made to be able to store, catalogue, and quickly add spells for TTRPG games! Built using React/Tauri, along with MongoDB for a DB, this was created due to the concept being extremely useful for a campaign I currently play in."
        experience="This project existed as a way for me to learn and further my ability to implement CRUD operations on a project, and also exists as my first personal project with backend implementation along with frontend. The project itself is something I’ve had an extremely fun time working on being connected to one of my main interests of TTRPGs, the idea coming from a magic themed campaign I currently play in. Past that, it’s helped me learn a lot about the specifics of how the frontend and backend communicate, along with the basics of databases and their usages through its usage of mongo in its applications. It’s also helped me to hone my skills with frontend development through further practice."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Tailwind CSS
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">MongoDB</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Tauri</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              TypeScript
            </div>
          </>
        }
      ></PopUpCompP>
      <PopUpCompP
        isClosed={isClosedDay}
        setIsClosed={setIsClosedDay}
        setIsOpen={setIsOpenDay}
        isOpen={IsOpenDay}
        Mount={Mount}
        name="Daylist"
        img="/daylist.png"
        git="https://github.com/cala28124-sketch/daylist"
        ID="Day"
        overview="A small web application that allows the user to create and add playlists to there spotify based off of a mood/topic at any time in the day. It utilizes Gemini Flash to process the request and research songs, and sends the formatted version to the spotify API to create and add a playlist to the users profile."
        experience="Made at bloomhacks, for me my main goal for this project was to learn more about implementing backend and utilizing APIs- which is exactly what I did. With my teammates, I was able to learn a lot about the utilization of APIs and backend formatting/creation, which was a lot of fun to learn about as well. Additonally, as I was the most experienced on the team, this project was really my first time acting as the team leader and the backbone of a group of people. While working on my own tasks, I had made it a point to help and assist my teammates for anything they where new or inexperienced with, while also picking up the slack where it needed to be done. At the end, I had finished most of the front end, and around half the back end, finishing my first hackaday project."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Tailwind CSS
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Spotify API
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Gemini Flash
            </div>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              TypeScript
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
              of sales and pool maintenance tests. Through these
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
        overview="I am currently pursuing a Bachelor of Science in computer science, at the University of Central Florida. My academic journey at the school has been a rollercoaster so far- and though I have yet to fully delve into my major as a freshman student, I have already begun taking Computer Science courses, while completing coursework related to C, Python, and Java. The courses I’ve taken have provided me with fundamental knowledge that has served as a basis for my practical skills and theoretical knowledge that I apply in my programming projects."
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
      <PopUpCompC
        isClosed={isClosedLifeStage}
        setIsClosed={setIsClosedLifeStage}
        setIsOpen={setIsOpenLifeStage}
        isOpen={isOpenLifeStage}
        Mount={Mount}
        name="Life Stages"
        img="/Lifestages.png"
        ID="lifestages"
        overview="Throughout this internship, I had the pleasure of working with a wonderful team in an amazing environment. The experience helped me to greatly enhance my knowledge of integrating myself and working in larger codebases, along with furthering my experience of working in a actual technical environment. Additionally, I was able to gain quite a lot of experience in mobile development, along with the nature of communicating and working with a larger team."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">Firebase</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Swift</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Figma</div>
            <div className="text-sm bg-green-400 rounded-lg p-1">Wordpress</div>
          </>
        }
        Key={
          <>
            <li>Creating and adding new games to the mobile app.</li>
            <li>Wireframing and enhancing app UI.</li>
            <li>Expanding and improving intern onboarding.</li>
            <li>Enhancing team workflow, and widening team capabilities.</li>
            <li>
              Finishing and wrapping up unfinished features, enhancing app
              capability.
            </li>
          </>
        }
        date="May 2026 - August 2026"
        jobTitle="Software Engineer Intern"
      ></PopUpCompC>
      <PopUpCompC
        isClosed={isClosedTraackr}
        setIsClosed={setIsClosedTraackr}
        setIsOpen={setIsOpenTraackr}
        isOpen={isOpenTraackr}
        Mount={Mount}
        name="Traackr"
        img="/Traackr.png"
        ID="Traackr"
        overview="Nothing yet! I just started."
        techStack={
          <>
            <div className="text-sm bg-green-400 rounded-lg p-1">
              Stay Tuned!
            </div>
          </>
        }
        Key={
          <>
            <li>Stay Tuned!</li>
          </>
        }
        date="August 2026 - Present"
        jobTitle="Software Engineer Intern"
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
          image="/daylist.png"
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
          image="/Traackr.png"
          ID="boxcareer"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setspawncareer}
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
          spawn={project4}
          engineRef={engineRef}
          isClosed={isClosedFlaming}
          setIsClosed={setIsClosedFlaming}
          setIsOpen={setIsOpenFlaming}
          text="Flaming Notes"
          image="/flamingnotes.jpg"
          ID="project4"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject4}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project5}
          engineRef={engineRef}
          isClosed={isClosedElder}
          setIsClosed={setIsClosedElder}
          setIsOpen={setIsOpenElder}
          text="ElderWatch"
          image="/Elder.jpg"
          ID="project5"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject5}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project6}
          engineRef={engineRef}
          isClosed={isClosedSpell}
          setIsClosed={setIsClosedSpell}
          setIsOpen={setIsOpenSpell}
          text="SpellPrimer"
          image="/spellbook.png"
          ID="project6"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject6}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={project7}
          engineRef={engineRef}
          isClosed={isClosedDay}
          setIsClosed={setIsClosedDay}
          setIsOpen={setIsOpenDay}
          text="Daylist"
          image="/daylist.png"
          ID="project7"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setproject7}
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
        <TestComp
          boxRef={boxRef}
          spawn={career3}
          engineRef={engineRef}
          isClosed={isClosedLifeStage}
          setIsClosed={setIsClosedLifeStage}
          setIsOpen={setIsOpenLifeStage}
          text="Life Stages"
          image="/Lifestages.png"
          ID="career3"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setcareer3}
        ></TestComp>
        <TestComp
          boxRef={boxRef}
          spawn={career4}
          engineRef={engineRef}
          isClosed={isClosedTraackr}
          setIsClosed={setIsClosedTraackr}
          setIsOpen={setIsOpenTraackr}
          text="Traackr"
          image="/Traackr.png"
          ID="career4"
          setMount={setMount}
          Mount={Mount}
          screenwidth={Width}
          screenheight={Height}
          setspawn={setcareer4}
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

/*
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
      setproject3(false);
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
    */

/*
    window.addEventListener("resize", Resize);
    */

/*
      window.removeEventListener("resize", Resize);
      */
