import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import _ from "lodash";
import CMSImage from "../components/CMSImage";

export const ProjectEntryTemplate = ({ project }) => {
  return (
    <>
      <section
        className="hero is-medium project"
        style={{ zIndex: -1 }}
      >
        <div className="hero-body">
          <div className="container">
              <h1 className="title">{project.description}</h1>
          </div>
        </div>
      </section>
      {project.sections.map((section) => {
        return (
          <ProjectSection
            key={_.trim(section.heading.substring(0, 5))}
            section={section}
          />
        );
      })}
    </>
  );
};

ProjectEntryTemplate.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired,
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
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
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
              fluid(maxWidth: 760, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subsections {
            subsection
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 760, quality: 100) {
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
