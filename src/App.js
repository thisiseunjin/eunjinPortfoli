import React, { useState, useEffect } from "react";
import Introduce from "./component/introduce";
import Stack from "./component/stack";
import Project from "./component/project";
import "./font/font.css";
import Fade from "react-reveal/Fade";
function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentScreen < 2) {
      setCurrentScreen((prev) => prev + 1); // 아래로 스크롤
    } else if (e.deltaY < 0 && currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1); // 위로 스크롤
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentScreen]);

  return (
    <div>
      {currentScreen === 0 && (
        <Fade bottom>
          <Introduce />
        </Fade>
      )}
      {currentScreen === 1 && (
        <Fade bottom>
          <Stack />
        </Fade>
      )}
      {currentScreen === 2 && (
        <Fade bottom>
          <Project />
        </Fade>
      )}
    </div>
  );
}

export default App;
