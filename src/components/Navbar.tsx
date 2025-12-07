/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import Dropbox from "./dropbox";
interface Props {
  menuclick: () => void;
  menuSkip: () => void;
  Videoshow: boolean;
  navtoggle: boolean;
  setnav: (arg0: boolean) => void;
  setInteractiveText: (arg0: boolean) => void;
  setVideoshow: (arg0: boolean) => void;
  Start: boolean;
}

// eslint-disable-next-line no-empty-pattern
const Navbar = ({ Start }: Props) => {
  const [firstclick, setfirstclick] = useState(true);
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="flex text-red-500 gap-15 items-center justify-center h-20 w-5xl bg-white bg-opacity-50 rounded-full">
          <img className="h-12" src="/test_logo.webp" alt="shhhh silly" />
          <button>
            <div>about</div>
          </button>
          <button>
            <div>career</div>
          </button>
          <button>
            <div>projects</div>
          </button>
          <button>
            <div>skills</div>
          </button>
          <button>
            <div>blah</div>
          </button>

          <div className="flex gap-2">
            <a href="https://www.coolmathgames.com/">
              <img className="h-12" src="/test_logo.webp" alt="shhhh silly" />
            </a>
            <a href="https://www.coolmathgames.com/">
              <img className="h-12" src="/test_logo.webp" alt="shhhh silly" />
            </a>
            <a href="https://www.coolmathgames.com/">
              <img className="h-12" src="/test_logo.webp" alt="shhhh silly" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
