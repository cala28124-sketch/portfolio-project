import React, { type Ref } from "react";
import Dropbox from "./dropbox";

interface Props {
  reference?: Ref<HTMLDivElement> | undefined;
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
}

const ProjectBox = ({ reference, isClosed, setIsOpen, setIsClosed }: Props) => {
  return (
    <>
      <div
        ref={reference}
        className="w-40 rounded-lg shadow-xl overflow-hidden bg-black text-white flex flex-col absolute pointer-events-none	-top-0 -left-0"
      >
        <div className="w-full py-2 flex items-center justify-center pointer-events-none  bg-red-950">
          test
        </div>
        <div className="w-full pointer-events-auto">
          <button
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
              className="w-full p-10"
              src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
              alt="source"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
