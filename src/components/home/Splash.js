import React from "react";
import { useTransform, motion } from "framer-motion";
import scrollToSmooth from "../SmoothScroll";
import CMSImage from "../CMSImage";

const Splash = ({ content, motionProgress }) => {
  const buttonOpacity = useTransform(motionProgress, [0, 0.4], [1, 0]);
  const splashImageY = useTransform(motionProgress, [0, 1], ["0", "5rem"]);
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
    <section ref={splashElement} className="splash hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title" >
            {content.intro}
          </h1>
          <motion.div className="image-wrapper" style={{ y: splashImageY }}>
            <CMSImage
              image={content.image}
              imgStyle={{ objectFit: "contain" }}
              style={{width: "100%"}}
            />
          </motion.div>
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
            initial={{opacity: 1}}
            style={{ opacity: buttonOpacity? buttonOpacity : 1 }}
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
