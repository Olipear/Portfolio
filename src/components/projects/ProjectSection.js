import React from "react";
import { Link } from "gatsby";
import ProjectSubsection from "./ProjectSubsection";
import _ from "lodash";

const ProjectSection = ({ section }) => {
  return (
    <section className={`section ${section.standout && "dark"}`}>
      <div className="container">
        <h2>{section.heading}</h2>
        <p> {section.intro}</p>
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
