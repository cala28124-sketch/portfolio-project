/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
interface Props {
  Text: string;
}

const Dropbox = ({
  Text}: Props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
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
            onClick={() => {if(isClosed){
              setIsOpen(true);
              setIsClosed(false);
            } else {
              setIsOpen(false);
              setIsClosed(true);
            }}}
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
            <div className="fade-in-image">
            {Text}
            </div>
          </span>
          {isOpen && (
            <audio src="/alicia.mp3" preload="auto" autoPlay hidden />
          )}
        </div>
      </div>
    </>
  );
};

export default Dropbox;
