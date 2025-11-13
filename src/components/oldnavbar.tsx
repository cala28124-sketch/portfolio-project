/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
interface Props {
  menuclick: () => void;
  menuSkip: () => void;
  Videoshow: boolean;
  navtoggle: boolean;
  setnav: (arg0: boolean) => void;
  setInteractiveText: (arg0: boolean) => void;
  setVideoshow: (arg0: boolean) => void;
}

const oldNavbar = ({
  menuclick,
  menuSkip,
  Videoshow,
  navtoggle,
  setnav,
  setInteractiveText,
  setVideoshow,
}: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [firstclick, setfirstclick] = useState(true);
  return (
    <>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="color_box p-4">
          <a
            className="navbar-brand navbar-image-initial"
            href="https://www.coolmathgames.com/"
          >
            <img
              className="navbar-logo"
              src="/test_logo.webp"
              alt="shhhh silly"
            />
          </a>
          <a
            className="nav-text active navbar-space-initial"
            aria-current="page"
            href="/about.html"
          >
            About
          </a>
          <a
            className="nav-text active navbar-space"
            aria-current="page"
            href="/career.html"
            target="_blank"
          >
            Career
          </a>
          <a
            className="nav-text active navbar-space"
            aria-current="page"
            href="#"
          >
            Projects
          </a>
          <a
            className="nav-text active navbar-space"
            aria-current="page"
            href="#"
          >
            Skill
          </a>
          <a
            className="nav-text active navbar-space"
            aria-current="page"
            href="#"
          >
            featured
          </a>
          <a
            className="navbar-brand navbar-image-space"
            href="https://www.coolmathgames.com/"
          >
            <img
              className="navbar-logo"
              src="/test_logo.webp"
              alt="shhhh silly"
            />
          </a>
          <a
            className="navbar-brand navbar-image"
            href="https://www.coolmathgames.com/"
          >
            <img
              className="navbar-logo"
              src="/test_logo.webp"
              alt="shhhh silly"
            />
          </a>
          <a
            className="navbar-brand nav-image2"
            href="https://www.coolmathgames.com/"
          >
            <img
              className="navbar-logo"
              src="/test_logo.webp"
              alt="shhhh silly"
            />
          </a>
        </div>
      </div>
      <nav className="navbar navbar-dark body">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle={navtoggle ? "collapse" : ""}
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                firstclick && menuclick();
                setTimeout(() => {
                  setnav(true);
                  setInteractiveText(true);
                  setVideoshow(false);
                  setfirstclick(false);
                }, 6750);
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default oldNavbar;
