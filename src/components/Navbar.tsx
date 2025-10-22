import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg color_box">
        <div className="container-fluid">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active navbar-space-initial"
                aria-current="page"
                style={{ color: "white" }}
                href="#"
              >
                About
              </a>
              <a
                className="nav-link nav-link navbar-space"
                style={{ color: "white" }}
                href="#"
              >
                Career
              </a>
              <a
                className="nav-link nav-link navbar-space"
                style={{ color: "white" }}
                href="#"
              >
                Project
              </a>
              <a
                className="nav-link nav-link navbar-space"
                style={{ color: "white" }}
                href="#"
              >
                Skills
              </a>
              <a
                className="nav-link navbar-space"
                style={{ color: "white" }}
                href="#"
              >
                Featured
              </a>
              <a className="navbar-brand navbar-image-space" href="linked in">
                <img
                  className="navbar-logo"
                  src="/test_logo.webp"
                  alt="shhhh silly"
                />
              </a>
              <a className="navbar-brand" href="github">
                <img
                  className="navbar-logo"
                  src="/test_logo.webp"
                  alt="shhhh silly"
                />
              </a>
              <a className="navbar-brand" href="resume">
                <img
                  className="navbar-logo"
                  src="/test_logo.webp"
                  alt="shhhh silly"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
