import React from "react";
import { Link } from "gatsby";
import ProjectSubsection from "./ProjectSubsection";
import _ from "lodash";

const ProjectSection = ({ section }) => {
  return (
    <section className={`section ${section.standout?"standout":"is-medium"}`}>
      <div className="container">
        <div className="columns">
          <div className="column is-two-fifths">
            <h2>{section.heading}</h2>
          </div>
          <div className="column is-three-fifths">
          <p> {section.intro}</p>
          </div>
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
