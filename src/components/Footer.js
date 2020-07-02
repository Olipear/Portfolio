import React from "react";
import { ReactComponent as Email } from "../img/email-icon.svg";
import { ReactComponent as Phone } from "../img/phone-icon.svg";
import { ReactComponent as Location } from "../img/location-icon.svg";
import { ReactComponent as Logo } from "../img/logo-mono.svg";
import { motion } from "framer-motion";
import scrollToSmooth from "./SmoothScroll";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(footerQuery).markdownRemark.frontmatter
    .navigation;

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
            <Link to="/" className="navbar-item" title="home">
              <Logo />
            </Link>
            <h4>Oliver Pearson</h4>
          </div>
          <div className="column is-offset-4 contact">
            <ul className="contact-items">
              <li>
                <OutboundLink
                  href="tel:+447787385189"
                  eventCategory="footer-contact-link"
                >
                  <Phone width="24" height="24" />
                  +44 (0)7787 385 189
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="mailto:olipear@gmail.com"
                  rel="noopener noreferrer"
                  eventCategory="footer-contact-link"
                >
                  <Email width="24" height="24" />
                  olipear@gmail.com
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://goo.gl/maps/nnMSXwqwRoo5iPS19"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventCategory="footer-contact-link"
                >
                  <Location width="24" height="24" />
                  Leamington Spa, UK
                </OutboundLink>
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
};

export default Footer;

const footerQuery = graphql`
  query navigationQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        footer {
          logo_strapline
          telephone
          telephone_label
          email
          map_link
          map_label
          bottom_text
        }
      }
    }
  }
`;
