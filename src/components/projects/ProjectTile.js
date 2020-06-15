import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const ProjectTile = ({ post }) => {
  return (
    <div className="tile is-child project">
      <div className="image-container">
        {post.frontmatter.featuredimage ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
        ) : null}
      </div>
      <h3>{post.frontmatter.title}</h3>
      <div className="tile-content">
        <p>{post.frontmatter.description}</p>
        <Link to={post.fields.slug}>See more -></Link>
      </div>
    </div>
  );
};

export default ProjectTile;
