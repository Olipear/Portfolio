import React from "react";
import { graphql } from "gatsby";
import {
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import useWindowDimensions from "../UseWindowDimensions";
import NavbarContent from "./NavbarContent";

const navbarVariants = {
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

const Navbar = ({ splash }) => {
  const { windowHeight } = useWindowDimensions();
  const { scrollY } = useViewportScroll();

  const height = useTransform(
    scrollY,
    [0, windowHeight],
    [navbarVariants.splash.height, navbarVariants.small.height]
  );
  const padding = useTransform(
    scrollY,
    [0, windowHeight],
    [navbarVariants.splash.padding, navbarVariants.small.padding]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, windowHeight],
    [navbarVariants.splash.boxShadow, navbarVariants.small.boxShadow]
  );
  const background = useTransform(
    scrollY,
    [0, windowHeight / 2],
    [navbarVariants.splash.background, navbarVariants.small.background]
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
      style={splash?style:navbarVariants.small}
      role="navigation"
      aria-label="main-navigation"
      id="navigation"
    >
      <NavbarContent/>
    </motion.nav>
  );
};

export default Navbar;