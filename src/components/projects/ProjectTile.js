import React from "react";
import { Link } from "gatsby";
import CMSImage from '../CMSImage'

const ProjectTile = ({ project }) => {

  
  return (
    <div className="tile is-child" >
      <Link to={project.fields.slug} className="interactive">
        <div className="image-outer-container">
          
          {project.frontmatter.featuredimage ? (
            <CMSImage
              className="image-inner-container"
              style={{overflow: 'visible'}}
              imgStyle={{ top: 0, left: 0, width: '100%', height: '100%' }}
              image={project.frontmatter.featuredimage}
              alt={`featured image thumbnail for project ${project.frontmatter.title}`}
            />
          ) : null}
          <div className="image-overlay"></div>
        </div>
        <h3>{project.frontmatter.title}</h3>
      </Link>
      
    </div>
  );
};

export default ProjectTile;
