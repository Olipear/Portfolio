import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import _ from "lodash";
import CMSImage from "../components/CMSImage";
import { AnimatePresence, motion } from "framer-motion";

export const ProjectEntryTemplate = ({ project }) => {
  return (
    <>
      <section className="hero is-medium project" style={{ zIndex: -1 }}>
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
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired,
  }).isRequired,
};

const ProjectEntry = ({ data }) => {
  const { markdownRemark: project } = data;

  return (
    <AnimatePresence>
      <Layout splash={false} title={project.frontmatter.title}>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectEntryTemplate project={project.frontmatter} />
        </motion.div>
      </Layout>
    </AnimatePresence>
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
          body_html
        }
      }
    }
  }
`;
