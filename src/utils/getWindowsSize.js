import { useState, useEffect } from "react";

const GetWindowsSize = () => {
  const [windowSize, setWindowSize] = useState({
    with: undefined,
    hight: undefined,
  });

  useEffect(() => {
    function handleSize() {
      setWindowSize({
        with: window.innerWidth,
        hight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default GetWindowsSize;
