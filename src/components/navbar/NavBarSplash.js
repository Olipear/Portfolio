import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import useWindowDimensions from "../UseWindowDimensions";

const navBarVariants = {
  splash: {
    padding: "1.5rem 0 1.5rem 0",
    height: "7rem",
    boxShadow: "rgba(0, 0, 0, 0) 0px 1px 5px",
    background: "rgba(248,248,248,0)",
  },
  small: {
    padding: "0.8rem 0 0.8rem 0",
    height: "3.4rem",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 5px",
    background: "rgba(248,248,248,0.95)",
  },
};

const NavBarSplash = ({ children }) => {
  const { windowHeight } = useWindowDimensions();
  const { scrollY } = useViewportScroll();

  const height = useTransform(
    scrollY,
    [0, windowHeight],
    [navBarVariants.splash.height, navBarVariants.small.height]
  );
  const padding = useTransform(
    scrollY,
    [0, windowHeight],
    [navBarVariants.splash.padding, navBarVariants.small.padding]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, windowHeight],
    [navBarVariants.splash.boxShadow, navBarVariants.small.boxShadow]
  );
  const background = useTransform(
    scrollY,
    [0, windowHeight / 2],
    [navBarVariants.splash.background, navBarVariants.small.background]
  );

  const style = {
    height,
    padding,
    boxShadow,
    background,
  };

  return (
    <motion.nav
      className="navbar"
      style={style}
      role="navigation"
      aria-label="main-navigation"
      id="navigation"
    >
      {children}
    </motion.nav>
  );
};

export default NavBarSplash;
