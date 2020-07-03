import React from "react";
import CMSImage from "../CMSImage";
import { HTMLContent } from "../Content";

const ProjectSection = ({ section }) => {
  return (
    <section className="section is-medium project">
      <div className="container">
        <div className="columns">
          <div className="column is-one-half-mobile is-one-third-tablet">
            <h2 className="section-heading">{section.heading}</h2>
          </div>
          <div className="column">
            {section.headerimage && (
              <CMSImage className="section-image" image={section.headerimage} />
            )}
            <h3 className="section-intro">{section.intro}</h3>
            <HTMLContent content={section.body_html?section.body_html:section.body} className="section-body" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
