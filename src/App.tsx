/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import Box from "./components/notes";
import { useState } from "react";
import Paragraph from "./components/oldnavbar.tsx";
import Dropbox from "./components/dropbox.tsx";
import MatterBox from "./components/MatterBox.tsx";
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars.tsx";
import Cloud from "./components/clouds";

function App() {
  const [Videoshow, setStop] = useState(false);
  const [Menushow, setMenu] = useState(true);
  const [navtoggle, setnav] = useState(true);
  const [interactiveText, setInteractiveText] = useState(false);
  const [Start, setStart] = useState(false);
  const [spawnabout, setspawnabout] = useState(false);

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
      <div className="pointer-events-none absolute inset-0 startslow">
        <Cloud></Cloud>
        <div className="sun"></div>
      </div>
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
      />
      <MatterBox
        Start={Start}
        setStart={setStart}
        Spawnabout={spawnabout}
        setspawnabout={setspawnabout}
      ></MatterBox>
    </>
  );
}

export default App;
