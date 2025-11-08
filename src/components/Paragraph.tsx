import React from "react";
import { useEffect, useState } from "react";

interface Props {
  Text: string;
}

const Paragraph = ({ Text }: Props) => {
  const [paragraphStyle, setStyle] = useState({
    fontSize: "3vw",
    lineHeight: "4vw",
    fontWeight: "100",
  });
  const [catchSentenceStyle, setCatchSentenceStyle] = useState({
    fontSize: "7vw",
    lineHeight: "9vw",
    fontWeight: "600",
  });

  const updateStyle = () => {
    const vw = window.innerWidth * 0.0095;
    const vh = window.innerHeight * 0.0095;
    const responsiveSize = vh + vw;
    const cresponsiveSize = responsiveSize * 3.5;
    // Uncomment to apply additional adjustments based on screen ratio
    // if (screenRatio < 0.74 && screenRatio > 0.5) {
    //   responsiveSize = responsiveSize * 1.3 * screenRatio;
    //   cresponsiveSize = cresponsiveSize * 1.3 * screenRatio;
    // }
    setStyle({
      fontSize: responsiveSize + "px",
      lineHeight: responsiveSize * 1.3 + "px",
      fontWeight: "100",
    });
    setCatchSentenceStyle({
      fontSize: cresponsiveSize + "px",
      lineHeight: cresponsiveSize * 1.1 + "px",
      fontWeight: "100",
    });
  };

  // Uncomment to apply additional adjustments based on screen ratio
  // if (screenRatio < 0.74 && screenRatio > 0.5) {
  //   responsiveSize = responsiveSize * 1.3 * screenRatio;
  //   cresponsiveSize = cresponsiveSize * 1.3 * screenRatio;
  // }

  useEffect(() => {
    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);
  return (
    <>
      <div>
        <p style={paragraphStyle}>{Text}</p>
      </div>
    </>
  );
};

export default Paragraph;

/// do something similar in this file for textbox size to make words wrap? mainly just look up more how to contain in textbox
