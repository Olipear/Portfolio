import React from "react";
import { motion } from "framer-motion";

const NavMenuItem = ({
  url,
  alt,
  Icon,
  setOpenOnFocus = false,
  setClosedOnBlur = false,
}) => {
  const disabled = !url;

  let onBlurHandler = null;
  if (typeof setClosedOnBlur === "function") {
    onBlurHandler = () => setClosedOnBlur(false);
  }

  let onFocusHandler = null;
  if (typeof setOpenOnFocus === "function") {
    onFocusHandler = () => setOpenOnFocus(true);
  }

  return (
    <a
      className="menu-item"
      href={url}
      target={!disabled ? "_blank" : ""}
      rel="noopener noreferrer"
      title={alt}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    >
      <div className={`icon ${!disabled ? "" : "disabled"}`}>
        <h4>{alt}</h4>
        <motion.span initial={{ width: "24px" }} whileHover={{ wdith: "27px" }}>
          <Icon width="100%" />
        </motion.span>
      </div>
    </a>
  );
};

export default NavMenuItem;
