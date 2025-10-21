import React from "react";

const Box = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-secondary bg-white text-black rounded-3 box-left shadow "></div>
        <div className="bg-secondary bg-white text-black rounded-3 w-50 h-50 shadow ">
          <div className="box-text">
            this is my super awesome cool background box!!!
          </div>
        </div>
        <div className="bg-secondary bg-white text-black rounded-3 box-right shadow "></div>
      </div>
    </>
  );
};

export default Box;
