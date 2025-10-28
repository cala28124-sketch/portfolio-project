import React, { useEffect } from "react";
import { useState } from "react";
interface Props {
  Videoshow: boolean;
  Menushow: boolean;
}
// might be some bugs here later since its a pure timeout? figure that out later
/*
  const timer = setTimeout(() => {
    setStop(false);
    setMenu(true);
  }, 5000);
  */
const Box = ({ Videoshow, Menushow }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="color_box rounded-3 box-left shadow "></div>
        <div className="color_box rounded-3 w-50 h-75 shadow ">
          <div className="box-text">
            {Videoshow && (
              <video className="box-image" src="/hand1.mp4" autoPlay muted />
            )}
            {Menushow && (
              <audio controls preload="auto" autoPlay>
                <source src="/alicia.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
        <div className="color_box rounded-3 box-right shadow ">
          {Videoshow && (
            <video className="box-full" src="/hand2.mp4" autoPlay muted />
          )}
        </div>
      </div>
    </>
  );
};

export default Box;
