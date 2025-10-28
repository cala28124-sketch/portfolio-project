import React from "react";
interface Props {
  menuclick: () => void;
}

const Navbar = ({ menuclick }: Props) => {
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={menuclick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
