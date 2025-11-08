/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Dropbox from "./components/dropbox.tsx";

function CareerApp() {
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
    <div>
      <>
        <Navbar
          menuclick={menuClick}
          menuSkip={menuSkip}
          Videoshow={Videoshow}
          navtoggle={navtoggle}
          setnav={setnav}
          setInteractiveText={setInteractiveText}
          setVideoshow={setStop}
        />
        <Dropbox
          Text={
            "Welcome to the Career Page! Here, you can explore various career opportunities and resources to help you advance in your professional journey. Whether you're looking for job listings, career advice, or networking tips, we've got you covered. Start your journey towards a fulfilling career today!"
          }
        />
      </>
    </div>
  );
}

export default CareerApp;
