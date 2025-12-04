/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import Box from "./components/notes";
import { useState } from "react";
import Paragraph from "./components/oldnavbar.tsx";
import Dropbox from "./components/dropbox.tsx";

function careerApp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Videoshow, setStop] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Menushow, setMenu] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navtoggle, setnav] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <div className="sky-background">
        <Navbar
          menuclick={menuClick}
          menuSkip={menuSkip}
          Videoshow={Videoshow}
          navtoggle={navtoggle}
          setnav={setnav}
          setInteractiveText={setInteractiveText}
          setVideoshow={setStop}
          Start={false}
        />
        <div className="cloud" />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="color_box rounded-3 box-left shadow "></div>
          <div className="color_box rounded-3 w-50 h-50 shadow ">
            {Videoshow && (
              <>
                <video className="box-full" src="/mevideo.mp4" autoPlay />
                <button
                  className="navbar-toggler nav-text skip-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    menuSkip();
                    setTimeout(() => {
                      setnav(true);
                    }, 6500);
                  }}
                >
                  <img className="skip-button" src="/test_logo.webp"></img>
                </button>
              </>
            )}
            {Menushow && (
              <img
                className="box-full"
                src="/mevideoimage.jpg"
                alt="its me!"
              ></img>
            )}
            {interactiveText && (
              <img className="box-full" src="/test_logo.webp"></img>
            )}
          </div>
          <div className="color_box rounded-3 box-right shadow ">
            {Videoshow && (
              <video className="box-full" src="/hand2.mp4" autoPlay muted />
            )}
          </div>
        </div>

        <div className="testbox">
          <div className="viewport-text">
            <h1>Welcome to My Portfolio</h1>
            Overall, the activity I performed at this volunteering opportunity
            was split into two parts- the set up, and the duration of the event.
            At the beginning we had set up for the charity auction, setting
            tables, putting out what was to be sold, etc. Afterwards, we helped
            out with handling guests, and making sure the event ran smoothly.
            For this event, I feel it was heavily worthwhile to go as I think
            Annabelle's closet supports a wonderful cause. This is helping those
            facing domestic abuse escape from their circumstances, and remake
            their life once they have done so. I feel from this, as its one of
            my first community service events I have gone to in my time here at
            UCF, I have learned the importance of going out to help with
            community service, and the good it can bring. At the same time it
            also feels fulfilling to know that I was able to help, and assist an
            organization wanting to do good in the world. At the end of the day,
            I feel it important to keep in mind the good service you can bring
            to the community when helping others, and how much it can mean to
            people when volunteers come out to help them with activities like
            this
          </div>
        </div>
        <img
          className="viewport-image"
          src="headshotme.jpg"
          alt="thats me fr"
        />
      </div>
      <div className="floor-background">
        <Dropbox
          Textinside={
            "Welcome to the Career Page! Here, you can explore various career opportunities and resources to help you advance in your professional journey. Whether you're looking for job listings, career advice, or networking tips, we've got you covered. Start your journey towards a fulfilling career today!"
          }
          Textoutside="test"
        />
      </div>
    </>
  );
}

export default careerApp;

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
