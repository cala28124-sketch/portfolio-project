import React from "react";

const Box = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="color_box rounded-3 box-left shadow "></div>
        <div className="color_box rounded-3 w-50 h-75 shadow ">
          <div className="box-text">
            <img
              className="box-image"
              src="/headshotme.jpg"
              alt="shhhh silly"
            />
          </div>
        </div>
        <div className="color_box rounded-3 box-right shadow ">
          <audio controls preload="auto">
            <source src="/alicia.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
};

export default Box;
