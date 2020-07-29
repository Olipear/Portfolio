import { useState, useEffect } from "react";
import _ from "lodash";

function getWindowDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return {
    windowWidth,
    windowHeight,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(100);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    let handleResize = _.debounce(() => {
      setWindowDimensions(getWindowDimensions());
    }, 150);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
