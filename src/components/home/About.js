import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const About = ({content}) => {
  return (
    <section className="section" id="projects">
      <div className="container">
          <div className="columns">
              <div className="is-4">
              {content.image ? (
                <PreviewCompatibleImage
                    imageInfo={{
                    image: content.image,
                    alt: "Oliver Pearson looking sharp!",
                    }}
                />
                ) : null}
              </div>
              <div className="is-8">
                <p>{content.aboutbody}</p>
              </div>
          </div>
        
        <hr />
      </div>
    </section>
  );
};

export default About