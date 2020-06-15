import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const About = ({ content }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <p>
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
          {content.aboutbody}
          </p>
        
      </div>
    </section>
  );
};

export default About;
