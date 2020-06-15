import React from "react";
import { useTransform, motion } from "framer-motion";
import scrollToSmooth from "../SmoothScroll";
import useWindowDimensions from "../UseWindowDimensions";

const Splash = ({ content, motionProgress }) => {
  const initialWindowHeight = useWindowDimensions(true).windowHeight;
  const buttonOpacity = useTransform(motionProgress, (value) => 1 - value);

  const scrollOffSplash = () => {
    const nav = document.getElementById("navigation");
    scrollToSmooth(initialWindowHeight - nav.offsetHeight / 2, 400, "ease-out-quart");
  };
  
  return (
    <motion.section
      className="splash hero is-fullheight"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      style={{
        minHeight: initialWindowHeight,
        backgroundImage: `url(${
          !!content.image.childImageSharp
            ? content.image.childImageSharp.fluid.src
            : content.image
        })`,
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{content.intro}</h1>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container" role="navigation" onClick={scrollOffSplash}>
          <motion.div
            className="icon scroll-down-btn"
            style={{ opacity: buttonOpacity&& 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span></span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Splash;
