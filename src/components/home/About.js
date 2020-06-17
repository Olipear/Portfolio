import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <hr />
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="columns is-mobile">
              <div className="column is-one-half is-one-third-mobile">
                <h2>About</h2>
              </div>
              <div className="column">
                <div className="profile-pic is-hidden-tablet">
                  {content.image ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: content.image,
                        alt: "Oliver Pearson looking sharp!",
                      }}
                    />
                  ) : null}
                </div>
                <p>{content.aboutbody}</p>
              </div>
            </div>
          </div>
          <div className="column is-hidden-mobile">
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
        </div>
      </div>
    </section>
  );
};

export default About;
