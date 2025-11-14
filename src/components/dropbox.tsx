/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import { useState } from "react";
interface Props {
  Textinside: string;
  Textoutside: string;
  className?: string;
}

const Dropbox = ({ Textinside, Textoutside, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={"textbutton color_box" + className}
        onClick={() => {
          if (isClosed) {
            setIsOpen(true);
            setIsClosed(false);
          } else {
            setIsOpen(false);
            setIsClosed(true);
          }
        }}
      >
        {Textoutside}
      </button>
      {isOpen && (
        <>
          <button
            className="overlay"
            onClick={() => {
              if (isClosed) {
                setIsOpen(true);
                setIsClosed(false);
              } else {
                setIsOpen(false);
                setIsClosed(true);
              }
            }}
          ></button>
          <div className=" openbox color_box shadow">
            {" "}
            <button
              className="closebutton"
              onClick={() => {
                if (isClosed) {
                  setIsOpen(true);
                  setIsClosed(false);
                } else {
                  setIsOpen(false);
                  setIsClosed(true);
                }
              }}
            >
              button
            </button>
            <div className="testchange">{Textinside}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Dropbox;
