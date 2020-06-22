import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const ProjectEntryTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <section className="hero is-halfheight double-padded project">
        {featuredimage ? (
          <Img
            className="image-container"
            style={{position: "absolute", width: "100%", height: "auto"}}
            fluid={featuredimage.childImageSharp.fluid}
            alt={`featured image thumbnail for project ${title}`}
          />
        ) : null}
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h4 class="subtitle">{description}</h4>
          </div>
        </div>
        
      </section>

      <section className="section project">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProjectEntryTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ProjectEntry = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectEntryTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ProjectEntry.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProjectEntry;

export const pageQuery = graphql`
  query ProjectEntryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 660, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
