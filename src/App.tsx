import Navbar from "./components/Navbar";
import { useState } from "react";
import MatterBox from "./components/MatterBox.tsx";
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars.tsx";
import Cloud from "./components/clouds";
import Grass from "./components/grass.tsx";

function App() {
  const [Videoshow, setStop] = useState(false);
  const [, setMenu] = useState(true);
  const [navtoggle, setnav] = useState(true);
  const [, setInteractiveText] = useState(false);
  const [Start, setStart] = useState(false);
  const [spawnabout, setspawnabout] = useState(false);
  const [spawnproject, setspawnproject] = useState(false);
  const [spawncareer, setspawncareer] = useState(false);
  const [spawnskills, setspawnskills] = useState(false);
  const [spawnmisc, setspawnmisc] = useState(false);
  const [aboutme1, setaboutme1] = useState(false);
  const [aboutme2, setaboutme2] = useState(false);
  const [aboutme3, setaboutme3] = useState(false);
  const [aboutme4, setaboutme4] = useState(false);
  const [project1, setproject1] = useState(false);
  const [project2, setproject2] = useState(false);
  const [project3, setproject3] = useState(false);
  const [project4, setproject4] = useState(false);
  const [project5, setproject5] = useState(false);
  const [project6, setproject6] = useState(false);
  const [project7, setproject7] = useState(false);
  const [career1, setcareer1] = useState(false);
  const [career2, setcareer2] = useState(false);
  const [career3, setcareer3] = useState(false);
  const [career4, setcareer4] = useState(false);

  const menuClick = () => {
    setStop(true);
    setMenu(false);
  };
  const menuSkip = () => {
    setStop(false);
    setInteractiveText(true);
  };
  return (
    <>
      <div className="moon"></div>

      <StarsBackground
        className="absolute pointer-event-none inset-0"
        starColor="#a3e3fa"
        pointerEvents={false}
      />
      <div className="pointer-events-none absolute inset-0 grassgrow">
        <Grass></Grass>
      </div>
      <div className="pointer-events-none absolute inset-0 startslow">
        <Cloud></Cloud>
        <div className="sun w-[100px] h-[100px] md:w-[200px] md:h-[200px]"></div>
      </div>
      <MatterBox
        Start={Start}
        setStart={setStart}
        Spawnabout={spawnabout}
        setspawnabout={setspawnabout}
        setspawnproject={setspawnproject}
        spawnproject={spawnproject}
        spawncareer={spawncareer}
        setspawncareer={setspawncareer}
        spawnskills={spawnskills}
        setspawnskills={setspawnskills}
        spawnmisc={spawnmisc}
        setspawnmisc={setspawnmisc}
        aboutme1={aboutme1}
        setaboutme1={setaboutme1}
        aboutme2={aboutme2}
        setaboutme2={setaboutme2}
        aboutme3={aboutme3}
        setaboutme3={setaboutme3}
        aboutme4={aboutme4}
        setaboutme4={setaboutme4}
        project1={project1}
        setproject1={setproject1}
        project2={project2}
        setproject2={setproject2}
        project3={project3}
        setproject3={setproject3}
        project4={project4}
        setproject4={setproject4}
        project5={project5}
        setproject5={setproject5}
        project6={project6}
        setproject6={setproject6}
        project7={project7}
        setproject7={setproject7}
        career1={career1}
        setcareer1={setcareer1}
        career2={career2}
        setcareer2={setcareer2}
        career3={career3}
        setcareer3={setcareer3}
        career4={career4}
        setcareer4={setcareer4}
      ></MatterBox>
      <Navbar
        menuclick={menuClick}
        menuSkip={menuSkip}
        Videoshow={Videoshow}
        navtoggle={navtoggle}
        setnav={setnav}
        setInteractiveText={setInteractiveText}
        setVideoshow={setStop}
        Start={Start}
        setspawnabout={setspawnabout}
        spawnabout={spawnabout}
        setspawnproject={setspawnproject}
        spawnproject={spawnproject}
        spawncareer={spawncareer}
        setspawncareer={setspawncareer}
        spawnskills={spawnskills}
        setspawnskills={setspawnskills}
        spawnmisc={spawnmisc}
        setspawnmisc={setspawnmisc}
        setaboutme1={setaboutme1}
        setaboutme2={setaboutme2}
        setaboutme3={setaboutme3}
        setaboutme4={setaboutme4}
        setproject1={setproject1}
        setproject2={setproject2}
        setproject3={setproject3}
        setproject4={setproject4}
        setproject5={setproject5}
        setproject6={setproject6}
        setproject7={setproject7}
        setcareer1={setcareer1}
        setcareer2={setcareer2}
        setcareer3={setcareer3}
        setcareer4={setcareer4}
      />
    </>
  );
}

export default App;
