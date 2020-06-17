import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-3 menu-list"></div>
            <div className="column is-6"></div>
            <div className="column is-3 menu-list">
              <div className="columns is-mobile">
                <div className="column is-one-third">
                  <h5>Site map</h5>
                </div>
                <div className="column">
                  <ul>
                    <li>
                      <AnchorLink to="/#blurb" title="Mission statement" />
                    </li>
                    <li>
                      <AnchorLink to="/#projects" title="Work" />
                    </li>
                    <li>
                      <AnchorLink to="/#about" title="About" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-third">
                  <h5>Admin</h5>
                </div>
                <div className="column">
                  <ul>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CMS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="bottom-text">
            This site was made using gatsby, and netlify CMS. Source code is
            available on my Github.
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
