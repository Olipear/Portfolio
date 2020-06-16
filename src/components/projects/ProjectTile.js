import React, { useEffect } from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const ProjectTile = ({ project }) => {
  useEffect(()=>{
    console.log(project)
  }, [project])
  
  return (
    <div className="tile is-child project">
      <div className="image-container">
        {project.frontmatter.featuredimage ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: project.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${project.frontmatter.title}`,
            }}
          />
        ) : null}
      </div>
      <h3>{project.frontmatter.title}</h3>
      <div className="tile-content">
        <p>{project.frontmatter.description}</p>
        <Link to={project.fields.slug}>See more -></Link>
      </div>
    </div>
  );
};

export default ProjectTile;
