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

/*

old card look
    <>
      <div
        ref={reference}
        className="max-w-md rounded-lg shadow-xl overflow-hidden bg-black text-white flex absolute pointer-events-none	-top-0 -left-0"
      >
        <div className="w-1/3 pb-10 flex items-center justify-center bg-red-950">
          <button
            className="pointer-events-auto"
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
            <img
              className="w-full"
              src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
              alt="source"
            ></img>
          </button>
        </div>

        <div className="w-2/3 p-10 flex flex-col justify-between">
          <div className="">
            <h1 className="text-4xl">TEST CARD</h1>
            <p className="text-base mb-4">text test</p>
          </div>
          <div className=" mb-4">
            <ul className="grid grid-cols-3 gap-x-4 text-sm text-blue-100">
              <li>&bullet; Next.js</li>
              <li>&bullet; TailwindCSS</li>
              <li>&bullet; Figma</li>
              <li>&bullet; Graphic Desig...</li>
            </ul>
          </div>
          <hr className="border-t border-blue-400 mb-4" />
        </div>
      </div>
    </>
    */

/*
    box matter functions


        if (!spawn || !engineRef.current || !externalBoxRef.current) {
          if (engineRef.current && externalBodyRef.current) {
            Matter.Composite.remove(
              engineRef.current.world,
              externalBodyRef.current
            );
            externalBodyRef.current = null;
          }
          return;
        }
    
        const engine = engineRef.current;
        const { Bodies, Composite, Events } = Matter;
    
        const boxElement = externalBoxRef.current;
        const bodyWidth = boxElement.offsetWidth;
        const bodyHeight = boxElement.offsetHeight;
    
        const externalBoxBody = Bodies.rectangle(1000, 50, bodyWidth, bodyHeight, {
          frictionAir: 0.05,
          mass: 10,
          render: { visible: false },
        });
    
        externalBodyRef.current = externalBoxBody;
    
    
        const updateExternalDiv = () => {
          if (!externalBoxRef.current) return;
    
          const { x, y } = externalBoxBody.position;
          const angle = externalBoxBody.angle;
    
          const translateX = x - bodyWidth / 2;
          const translateY = y - bodyHeight / 2;
    
          externalBoxRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${angle}rad)`;
        };
    
    
        Composite.add(engine.world, externalBoxBody);
        Events.on(engine, "afterUpdate", updateExternalDiv);
    
        updateExternalDiv();
    
        return () => {
          Events.off(engine, "afterUpdate", updateExternalDiv);
          if (externalBodyRef.current) {
            Composite.remove(engine.world, externalBodyRef.current);
            externalBodyRef.current = null;
          }
        };
        */
