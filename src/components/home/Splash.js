import React from "react";
import { useTransform, motion } from "framer-motion";
import scrollToSmooth from "../SmoothScroll";
import CMSImage from "../CMSImage";

const Splash = ({ content, motionProgress }) => {
  const buttonOpacity = useTransform(motionProgress, [0, 0.4], [1, 0]);
  const splashImageMargin = useTransform(motionProgress, [0, 1], ["0%", "30%"]);
  const footerPosition = useTransform(motionProgress, [0, 0.4], ["0%", "100%"]);
  const splashElement = React.createRef();

  const scrollOffSplash = () => {
    const nav = document.getElementById("navigation");
    scrollToSmooth(
      splashElement.current.offsetHeight - nav.offsetHeight / 2,
      400,
      "ease-out-quart"
    );
  };

  return (
    <section ref={splashElement} className="splash hero is-fullheight">
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          y: splashImageMargin
        }}
      >
        <CMSImage
          className="image-container"
          style={{ position: "fixed" }}
          image={content.image}
        />
      </motion.div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{content.intro}</h1>
        </div>
      </div>
      <motion.div
        className="hero-footer"
        style={{
          bottom: footerPosition,
        }}
      >
        <div className="container">
          <motion.div
            role="button"
            onClick={scrollOffSplash}
            className="scroll-btn down big"
            style={{ opacity: buttonOpacity ? buttonOpacity : 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span></span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Splash;
