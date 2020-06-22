import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import ProjectSection from "../components/projects/ProjectSection";
import _ from "lodash"

export const ProjectEntryTemplate = ({
  project,
}) => {

  return (
    <>
      <section className="hero is-halfheight double-padded project">
        {project.featuredimage ? (
          <Img
            className="image-container"
            style={{position: "absolute", width: "100%", height: "auto"}}
            fluid={project.featuredimage.childImageSharp.fluid}
            alt={`featured image thumbnail for project ${project.title}`}
          />
        ) : null}
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{project.title}</h1>
            <h4 className="subtitle">{project.description}</h4>
          </div>
        </div>
      </section>
      {project.sections.map((section) => {
        return (
          <ProjectSection key={_.trim(section.heading.substring(0, 5))} section={section} />
        )
      })}
      
    </>
  );
};

ProjectEntryTemplate.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired
  }).isRequired,
};

const ProjectEntry = ({ data }) => {
  const { markdownRemark: project } = data;

  return (
    <Layout>
      <ProjectEntryTemplate
        project={project.frontmatter}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${project.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${project.frontmatter.description}`}
            />
          </Helmet>
        }
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
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 650, maxHeight: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sections {
          intro
          standout
          heading
          headerimage {
            childImageSharp {
              fluid(maxWidth: 650, maxHeight: 650, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subsections {
            body
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 650, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
