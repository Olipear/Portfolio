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
  const data = useStaticQuery(footerQuery).markdownRemark.frontmatter.footer;

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
            <h4>{data.logo_strapline}</h4>
          </div>
          <div className="column is-offset-4 contact">
            <ul className="contact-items">
              <li>
                <OutboundLink
                  href={`tel:${data.telephone}`}
                  eventCategory="footer-contact-link"
                >
                  <Phone width="24" height="24" />
                  {data.telephone_label}
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href={`mailto:${data.email}`}
                  rel="noopener noreferrer"
                  eventCategory="footer-contact-link"
                >
                  <Email width="24" height="24" />
                  {data.email}
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href={data.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventCategory="footer-contact-link"
                >
                  <Location width="24" height="24" />
                  {data.map_label}
                </OutboundLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third bottom-text">
            <p>{data.bottom_text}</p>
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
