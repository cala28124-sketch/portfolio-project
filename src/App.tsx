/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import Box from "./components/notes";
import { useState } from "react";
import Paragraph from "./components/oldnavbar.tsx";
import Dropbox from "./components/dropbox.tsx";

function App() {
  const [Videoshow, setStop] = useState(false);
  const [Menushow, setMenu] = useState(true);
  const [navtoggle, setnav] = useState(true);
  const [interactiveText, setInteractiveText] = useState(false);

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
      <div className="cloud" />
      <div className="dot"></div>
      <div className="sun"></div>
      <Navbar
        menuclick={menuClick}
        menuSkip={menuSkip}
        Videoshow={Videoshow}
        navtoggle={navtoggle}
        setnav={setnav}
        setInteractiveText={setInteractiveText}
        setVideoshow={setStop}
      />
    </>
  );
}

export default App;
