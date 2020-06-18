import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectTile = ({ project }) => {

  
  return (
    <div className="tile is-child project">
      <Link to={project.fields.slug}>
        <div className="image-outer-container">
          
          {project.frontmatter.featuredimage ? (
            <Img
              className="image-inner-container"
              style={{overflow: 'visible'}}
              imgStyle={{ top: 0, left: 0, width: '100%', height: '100%' }}
              fluid={project.frontmatter.featuredimage.childImageSharp.fluid}
              alt={`featured image thumbnail for project ${project.frontmatter.title}`}
            />
          ) : null}
          <div className="image-overlay"></div>
        </div>
        
      </Link>
      <h4>{project.frontmatter.title}</h4>
    </div>
  );
};

export default ProjectTile;
