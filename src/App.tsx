import Navbar from "./components/Navbar";
import Box from "./components/box";
import { useState } from "react";

function App() {
  const [Videoshow, setStop] = useState(false);
  const [Menushow, setMenu] = useState(true);
  const [navtoggle, setnav] = useState(false);

  const menuClick = () => {
    setStop(true);
    setMenu(false);
  };
  const menuSkip = () => {
    setStop(false);
    setMenu(true);
  };

  return (
    <div>
      <Navbar
        menuclick={menuClick}
        menuSkip={menuSkip}
        Videoshow={Videoshow}
        navtoggle={false}
        setnav={function (arg0: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />

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
                  }, 6000);
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
        </div>
        <div className="color_box rounded-3 box-right shadow ">
          {Videoshow && (
            <video className="box-full" src="/hand2.mp4" autoPlay muted />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
