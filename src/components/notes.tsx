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
        <div className="color_box rounded-3 w-50 h-50 shadow ">
          {Videoshow && (
            <video className="box-full" src="/mevideo.mp4" autoPlay />
          )}
          {Menushow && (
            <img
              className="box-full"
              src="/mevideoimage.jpg"
              alt="its me!"
            ></img>
          )}
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

// THIS OLD NO LONGER NEED TO USE

/*
.test{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

*/

// css for the text in the middle of the image when menu is shown
