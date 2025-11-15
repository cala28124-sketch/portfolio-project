import React from "react";

const card = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden bg-black text-white flex">
        <div className="w-1/3 pb-10 flex items-center justify-center bg-red-950">
          <img
            className="w-full"
            src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
            alt="source"
          ></img>
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
  );
};

export default card;
