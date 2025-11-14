/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import Dropbox from "./dropbox";
interface Props {
  menuclick: () => void;
  menuSkip: () => void;
  Videoshow: boolean;
  navtoggle: boolean;
  setnav: (arg0: boolean) => void;
  setInteractiveText: (arg0: boolean) => void;
  setVideoshow: (arg0: boolean) => void;
}

// eslint-disable-next-line no-empty-pattern
const Navbar = ({}: Props) => {
  const [firstclick, setfirstclick] = useState(true);
  return (
    <>
      <div className="color_box p-4">
        <a
          className="navbar-image-initial"
          href="https://www.coolmathgames.com/"
        >
          <img
            className="navbar-logo"
            src="/test_logo.webp"
            alt="shhhh silly"
          />
        </a>
        <Dropbox
          className=" nav-text active navbar-space-initial"
          Textinside={"about me test"}
          Textoutside="about"
        ></Dropbox>
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
    </>
  );
};

export default Navbar;
