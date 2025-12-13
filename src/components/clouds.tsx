/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use, useEffect, useState } from "react";

const Clouds = () => {
  const [Cloud, addCloud] = useState(0);
  const CloudNum = 25;

  useEffect(() => {
    const cloudspawn = setInterval(() => {
      addCloud((prevCount) => {
        const Newcount = prevCount + 1;

        if (Newcount >= CloudNum) {
          clearInterval(cloudspawn);
        }
        return Newcount;
      });
    }, 15000);

    return () => clearInterval(cloudspawn);
  }, []);

  useEffect(() => {
    if (Cloud > 0) {
      const cloud = document.createElement("img");
      const randomSize = Math.random() * 100 + 200;
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

  return <></>;
};

export default Clouds;
