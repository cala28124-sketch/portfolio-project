// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
}

const PopUpPenny = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  Mount,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("penny");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("penny");
        element?.classList.remove("opacity-0");
      }
    } else {
      setMount(true);
    }
  }, [isClosed]);

  return (
    <>
      <button
        className={`overlay transition-opacity duration-800 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
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

      <div className="flex justify-center">
        <div
          id="penny"
          className={`bg-opacity-20 my-[5%] mx-4 custom-scrollbar absolute flex flex-col max-h-[80dvh] max-w-[95%] md:max-h-4/5 md:max-w-5/6 lg:max-w-3/5 items-center border-10 border-green-800 bg-green-300 z-50 overflow-y-auto opacity-0
    ${isOpen ? "start pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            className="absolute top-2 right-2"
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
              className="h-[30px]"
              src="\closebutton6.png"
              alt="close button"
            />
          </button>
          <div className="flex flex-col justify-center items-center rounded-lg w-[250px] h-fit bg-green-400 m-5 mb-5 border-5 border-green-800">
            <img
              className="h-[200px] w-[200px] p-3"
              src="Pinchlogo.png"
              alt="penny"
            ></img>
            <div className="text-base font font-bold p-1">
              June 2023-August 2025
            </div>
          </div>

          <div className="self-start flex flex-col w-[90%] pl-5">
            <p className="text-2xl pl-3 font-bold text-green-800 mb-0">
              Pinch-A-Penny
            </p>
            <p className="text-xl pl-3 font-bold text-green-800 ml-2 mt-0">
              Sales Associate
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">Overview</p>
            <p className="text-sm md:text-base p-3 font-bold font text-green-800 px-24 max-md:px-100">
              At Pinch a Penny, I worked hard to ensure customer satisifcation,
              providing comprehensive support in pool maintenance, products, and
              services. I worked with my coworkers to ensure the store was
              organized and clean, while also managing inventory and restocking
              shelves. Additionally, I handled cash register operations,
              processed transactions accurately, and maintained detailed records
              of sales and customer interactions. Through these
              responsibilities, I developed strong communication and teamwork
              skills, contributing to a positive shopping experience for our
              customers.
            </p>
            <p className="text-xl pl-3 font-bold text-green-800">
              Key Achievements
            </p>
            <ul className="text-sm md:text-base list-disc text-green-800 font font-bold">
              <li>
                Sold and marketted several expensive products to customers,
                increasing store revenue
              </li>
              <li>
                Maintained high customer satisfaction through attentive service
              </li>
              <li>
                Developed strong teamwork skills by collaborating with coworkers
                to ensure smooth store operations
              </li>
              <li>
                Developed Strong customer service and communication skills
              </li>
            </ul>
            <div className="flex flex-col">
              <p className="text-xl pl-3 font-bold text-green-800">
                Technologies and Skills
              </p>
              <div className="flex gap-2 mt-1 mb-3 ml-2 font text-green-800 flex-wrap">
                <div className="text-sm bg-green-400 rounded-lg p-1">React</div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  FastAPI
                </div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  Python
                </div>
                <div className="text-sm bg-green-400 rounded-lg p-1">
                  GoogleADK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpPenny;
