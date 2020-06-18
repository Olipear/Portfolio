import React from "react";
import { ReactComponent as Email } from "../img/email-icon.svg";
import { ReactComponent as Phone } from "../img/phone-icon.svg";
import { ReactComponent as Logo } from "../img/logo-mono.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-third-tablet is-one-third-mobile logo">
              <Logo width="100%" />
            </div>
            <div className="column is-offset-4-tablet contact">
              <h5>Contact</h5>
              <ul className="contact-items">
                <li><a href="tel:+447787385189"><Phone width="24" height="24" />+44 (0)7787 385 189</a></li>
                <li><a href="mailto:olipear@gmail.com?subject=Website%20enquiry"><Email width="24" height="24" />olipear@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <p className="bottom-text">
            This site was made using gatsby, with netlify CMS. If you like this portfolio, fork on Github. Please give credit where due. Original splash artwork not for reuse.
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
