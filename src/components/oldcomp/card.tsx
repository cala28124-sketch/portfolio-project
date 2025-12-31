import React, { type Ref } from "react";

interface Props {
  reference?: Ref<HTMLDivElement> | undefined;
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
}

const Card = ({ reference, isClosed, setIsOpen, setIsClosed }: Props) => {
  return (
    <>
      <div
        ref={reference}
        className="max-w-md rounded-lg overflow-hidden bg-black text-white absolute pointer-events-none	-top-0 -left-0"
      >
        <div className="  flex items-center justify-center pointer-events-none  bg-red-950">
          test
        </div>
        <div className="pointer-events-auto">
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
              className="p-10"
              src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
              alt="source"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
