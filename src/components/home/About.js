import React from "react";
import CMSImage from "../CMSImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-one-fifth is-offset-2-tablet">
            <div className="profile-pic">
              {content.image && (
                <CMSImage
                  image={content.image}
                  alt="Oliver Pearson looking sharp!"
                />
              )}
            </div>
          </div>
          <div className="column is-two-fifths-tablet ">
            <p>{content.aboutbody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
