import React from "react";
import CMSImage from "../CMSImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth-tablet is-offset-1-tablet">
            <div className="profile-pic">
              {content.image && (
                <CMSImage
                  image={content.image}
                  alt="Oliver Pearson looking sharp!"
                />
              )}
            </div>
          </div>
          <div className="column is-three-fifths-tablet quotes">
            <p>{content.aboutbody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
