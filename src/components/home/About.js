import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <hr />
        <div className="columns">
          <div className="column is-one-third is-one-half-mobile">
            <h2>About</h2>
          </div>
          <div className="column is-two-fifths is-three-fifths-mobile">
            <div className="profile-pic">
              {content.image ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: content.image,
                    alt: "Oliver Pearson looking sharp!",
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="column">
            <p>{content.aboutbody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
