import React from "react";
import { useState } from "react";
interface Props {
  menuclick: () => void;
  menuSkip: () => void;
  Videoshow: boolean;
}

const Navbar = ({ menuclick, menuSkip, Videoshow }: Props) => {
  const [navtoggle, setnav] = useState(false);
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
            href="#"
          >
            About
          </a>
          <a
            className="nav-text active navbar-space"
            aria-current="page"
            href="#"
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
            className="navbar-brand navbar-image"
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
              menuclick();
              setTimeout(() => {
                setnav(true);
              }, 6000);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {Videoshow && (
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
          Skip Video
        </button>
        // replace text with image later
      )}
    </>
  );
};

export default Navbar;
