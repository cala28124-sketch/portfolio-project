import Navbar from "./components/Navbar";
import Box from "./components/box";
import { useState } from "react";

function App() {
  const [Videoshow, setStop] = useState(false);
  const [Menushow, setMenu] = useState(true);

  const menuClick = () => {
    setStop(true);
    setMenu(false);
  };
  return (
    <div>
      <Navbar menuclick={menuClick} />
      <Box Videoshow={Videoshow} Menushow={Menushow} />
    </div>
  );
}

export default App;
