import React, { type Ref } from "react";

interface Props {
  reference?: Ref<HTMLDivElement> | undefined;
}

const ProjectBox = ({ reference }: Props) => {
  return (
    <>
      <div
        ref={reference}
        className="w-full max-w-xs max-h-3xl rounded-lg shadow-xl overflow-hidden bg-black text-white absolute pointer-events-none -top-0 -left-0"
      >
        <div className="h-4/5 flex items-center justify-center pointer-events-none bg-red-950">
          test
        </div>
        <div className="h-1/5 w-full flex items-center justify-center pointer-events-auto bg-red-500">
          <img
            className="w-full"
            src="https://th.bing.com/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?w=140&h=108&c=7&bgcl=bfa8bb&r=0&o=6&cb=ucfimg1&pid=13.1&ucfimg=1"
            alt="source"
          ></img>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
