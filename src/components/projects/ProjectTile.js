import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const ProjectTile = ({ post }) => {
  return (
    <div className="column is-3 tile tile-project">
      <Link to={post.fields.slug}>
          <h3>{post.frontmatter.title}</h3>
          {post.frontmatter.featuredimage ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
          ) : null}
      </Link>
    </div>
  );
};

export default ProjectTile;
