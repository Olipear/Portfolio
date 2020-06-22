import React from "react";
import { useTransform, motion } from "framer-motion";
import scrollToSmooth from "../SmoothScroll";

const Splash = ({ content, motionProgress }) => {
  const buttonOpacity = useTransform(motionProgress,[0, 0.4], [1, 0]);
  const footerPosition = useTransform(motionProgress, [0, 0.4], ['0%','100%']);
  const splashElement = React.createRef();

  const scrollOffSplash = () => {
    const nav = document.getElementById("navigation");
    scrollToSmooth(splashElement.current.offsetHeight - nav.offsetHeight / 2, 400, "ease-out-quart");
  };
  

  return (
    <motion.section
      ref={splashElement}
      className="splash hero is-fullheight double-padded"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      style={{
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
      <motion.div 
        className="hero-footer"
        style={{
          bottom: footerPosition
        }}
      >
        <div className="container">
          <motion.div
            role="button"
            onClick={scrollOffSplash}
            className="scroll-btn down big"
            style={{ opacity: buttonOpacity?buttonOpacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span></span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Splash;
