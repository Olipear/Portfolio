import React from "react";
import { ReactComponent as Email } from "../img/email-icon.svg";
import { ReactComponent as Phone } from "../img/phone-icon.svg";
import { ReactComponent as Location } from "../img/location-icon.svg";
import { ReactComponent as Logo } from "../img/logo-mono.svg";
import { motion } from "framer-motion";
import scrollToSmooth from "./SmoothScroll";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <motion.div
            role="button"
            onClick={() => scrollToSmooth(0)}
            className="scroll-btn up"
            whileHover={{ scale: 1.1, originX: 0.5, originY: 0.5 }}
          >
            <span></span>
          </motion.div>
          <div className="columns">
            <div className="column is-one-third logo">
              <Logo />
              <h5>Oliver Pearson</h5>
            </div>
            <div className="column is-offset-4 contact">
              <ul className="contact-items">
                <li>
                  <a href="tel:+447787385189">
                    <Phone width="24" height="24" />
                    +44 (0)7787 385 189
                  </a>
                </li>
                <li>
                  <a href="mailto:olipear@gmail.com" rel="noopener noreferrer">
                    <Email width="24" height="24" />
                    olipear@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/nnMSXwqwRoo5iPS19" target="_blank" rel="noopener noreferrer">
                    <Location width="24" height="24" />
                    Leamington Spa, UK
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third bottom-text">
              <p>
                This site was made using gatsby, with netlify CMS. If you like
                this portfolio, fork on Github. Please give credit where due.
                Original splash artwork not for reuse.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
