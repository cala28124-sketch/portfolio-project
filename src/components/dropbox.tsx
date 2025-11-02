import React from "react";
import { useState } from "react";

const Dropbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark testchange">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#dropboxToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(true)}
          >
            <div> a test dropbox</div>
          </button>
        </div>
      </nav>
      <div
        className="collapse testchange2"
        id="dropboxToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <span className="text-body-secondary">
            Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.Toggleable via the navbar
            brand.Toggleable via the navbar brand.
          </span>
          {isOpen && (
            <audio src="/alicia.mp3" preload="auto" autoPlay controls />
          )}
        </div>
      </div>
    </>
  );
};

export default Dropbox;
