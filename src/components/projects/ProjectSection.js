import React from "react";
import { Link } from "gatsby";
import ProjectSubsection from "./ProjectSubsection";
import _ from "lodash";
import CMSImage from "../CMSImage";

const ProjectSection = ({ section }) => {
  return (
    <section className="section is-medium project">
      <div className="container">
        <div className="columns section-heading">
          <div className="column is-one-half-mobile is-one-third-tablet">
            <h2>{section.heading}</h2>
          </div>
          {section.headerimage && (
            <div className="column">
              <CMSImage
                className="section-heading-image"
                image={section.headerimage}
              />
              <p>{section.intro}</p>
            </div>
          )}
        </div>
        {section.subsections &&
          section.subsections.map((subsection) => {
            return (
              <ProjectSubsection
                key={_.trim(subsection.subheading.substring(0, 5))}
                subsection={subsection}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProjectSection;
