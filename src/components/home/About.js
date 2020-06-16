import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-one-third">
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
          <div className="column is-two-thirds">
            <p>{content.aboutbody}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
