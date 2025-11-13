/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import Box from "./components/notes";
import { useState } from "react";
import Paragraph from "./components/Paragraph";
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
      <Navbar
        menuclick={menuClick}
        menuSkip={menuSkip}
        Videoshow={Videoshow}
        navtoggle={navtoggle}
        setnav={setnav}
        setInteractiveText={setInteractiveText}
        setVideoshow={setStop}
      />
      <div className="cloud" />
      <div className="dot"></div>
    </>
  );
}

export default App;

/*<Paragraph
            Text={`Overall, the activity I performed at this volunteering opportunity was
          split into two parts- the set up, and the duration of the event. At
          the beginning we had set up for the charity auction, setting tables,
          putting out what was to be sold, etc. Afterwards, we helped out with
          handling guests, and making sure the event ran smoothly. For this
          event, I feel it was heavily worthwhile to go as I think Annabelle's
          closet supports a wonderful cause. This is helping those facing
          domestic abuse escape from their circumstances, and remake their life
          once they have done so. I feel from this, as its one of my first
          community service events I have gone to in my time here at UCF, I have
          learned the importance of going out to help with community service,
          and the good it can bring. At the same time it also feels fulfilling
          to know that I was able to help, and assist an organization wanting to
          do good in the world. At the end of the day, I feel it important to
          keep in mind the good service you can bring to the community when
          helping others, and how much it can mean to people when volunteers
          come out to help them with activities like this.`}
          />*/

// media query for the image in the middle of the screen when menu is shown
