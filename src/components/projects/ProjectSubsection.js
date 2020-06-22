import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectSubsection = ({ subsection }) => {
    console.log(subsection)
  return (
    <>
      <h4>{subsection.subheading}</h4>
      <p> {subsection.body}</p>
    </>
  );
};

export default ProjectSubsection;
