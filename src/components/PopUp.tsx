import React from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
}

const PopUp = ({ isClosed, setIsClosed, setIsOpen }: Props) => {
  return (
    <>
      <button
        className="overlay"
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
      <div className=" openbox color_box shadow">
        {" "}
        <button
          className="closebutton"
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
          button
        </button>
        <div className="testchange">test</div>
      </div>
    </>
  );
};

export default PopUp;
