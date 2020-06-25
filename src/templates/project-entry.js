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
        className="hero double-padded project"
        style={{ zIndex: -1 }}
      >
        <div className="hero-body">
          <div className="container">
            <div className="title-container">
              <h2 className="title">{project.title}</h2>
              <h4 className="subtitle">{project.description}</h4>
            </div>
            {project.featuredimage && (
              <CMSImage
                className="image-container"
                image={project.featuredimage}
                imgStyle={{ objectFit: "contain" }}
                alt={`featured image thumbnail for project ${project.title}`}
              />
            )}
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
      html
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1050, quality: 100) {
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
