/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useState } from "react";
interface Props {
  Text: string;
}

const Dropbox = ({ Text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  return (
    <>
      <button
        className="boxbutton color_box"
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
        test
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
            <div className="testchange">{Text}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Dropbox;
