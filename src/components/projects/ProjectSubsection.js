import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import CMSImage from "../CMSImage";
import { HTMLContent } from "../Content";

const ProjectSubsection = ({ subsection }) => {
  console.log(subsection);
  return (
    <div className="columns subsection">
      <div className="column is-one-half-mobile is-one-third-tablet">
        <h5>{subsection.subheading}</h5>
      </div>
      {subsection.image && (
        <div className="column">
          <CMSImage
            className="subsection-image"
            image={subsection.image}
          />
          <HTMLContent content={subsection.subsection} className="subsection-body"/>
        </div>
      )}
    </div>
  );
};

export default ProjectSubsection;
