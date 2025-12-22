/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use, useEffect, useState } from "react";

const Clouds = () => {
  return (
    <>
      <div className=" cloud top-[20%]  cloudanimate1"></div>
      <div className="cloud top-[20%]  cloudanimate2"></div>
      <div className="cloud top-[30%] left-[-50%]  cloudanimate1"></div>
      <div className="cloud top-[30%] left-[-50%]  cloudanimate2"></div>
      <div className=" cloud top-[55%] left-[70%] cloudanimate1"></div>
      <div className=" cloud top-[55%] left-[70%]  cloudanimate2"></div>
      <div className=" cloud top-[45%] left-[30%]  cloudanimate1"></div>
      <div className=" cloud top-[45%] left-[30%]  cloudanimate2"></div>
      <div className=" cloud top-[60%] left-[-30%]  cloudanimate1"></div>
      <div className=" cloud top-[60%] left-[-30%] cloudanimate2"></div>
      <div className=" cloud top-[73%] left-[-60%]  cloudanimate1"></div>
      <div className=" cloud top-[73%] left-[-60%]  cloudanimate2"></div>
      <div className=" cloud top-[73%] left-[60%]  cloudanimate1"></div>
      <div className=" cloud top-[73%] left-[60%]  cloudanimate2"></div>
    </>
  );
};

export default Clouds;

/*







<div className="cloud top-[30%] left-[160%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[30%] left-[160%] w-[100px] h-[50px] cloudanimate2"></div>
      <div className="cloud top-[45%] right-[40%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[45%] right-[40%] w-[100px] h-[50px] cloudanimate2"></div>
      <div className="cloud top-[75%] right-[60%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[75%] right-[60%] w-[100px] h-[50px] cloudanimate2"></div>
      <div className="cloud top-[12%] left-[130%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[12%] left-[130%] w-[100px] h-[50px] cloudanimate2"></div>
      <div className="cloud top-[34%] right-[80%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[34%] right-[80%] w-[100px] h-[50px] cloudanimate2"></div>
      <div className="cloud top-[48%] right-[150%] w-[100px] h-[50px] cloudanimate1"></div>
      <div className="cloud top-[48%] right-[150%] w-[100px] h-[50px] cloudanimate2"></div>
      */

/*
const [Cloud, addCloud] = useState(0);
  const CloudNum = 15;

  useEffect(() => {
    const cloudspawn = setInterval(() => {
      addCloud((prevCount) => {
        const Newcount = prevCount + 1;

        if (Newcount >= CloudNum) {
          clearInterval(cloudspawn);
        }
        return Newcount;
      });
    }, 5000);

    return () => clearInterval(cloudspawn);
  }, []);

  useEffect(() => {
    if (Cloud > 0) {
      const cloud = document.createElement("img");
      const randomSize = Math.random() * 300 + 300;
      const duration = Math.random() * 80 + 40;
      cloud.src = "/cloudssky.png";
      cloud.className = "movecloud";
      cloud.style.position = "absolute";
      cloud.style.top = Math.random() * 70 + 10 + "%";

      cloud.style.width = randomSize + "px";
      cloud.style.animationDuration = duration + "s";

      document.body.appendChild(cloud);
    }
  }, [Cloud]);

*/
