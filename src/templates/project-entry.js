import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";
import ProjectRoll from "../components/projects/ProjectRoll";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const ProjectEntryTemplate = ({ project }) => {
  return (
    <>
      <section className="hero is-medium project">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{project.frontmatter.description}</h1>
            {project.frontmatter.featuredlink ? (
              <OutboundLink
                href={project.frontmatter.featuredlink}
                className="interactive"
                target="_blank"
                eventCategory="project-preview"
              >
                <h3>{project.frontmatter.featuredlinklabel}</h3>
              </OutboundLink>
            ) : null}
          </div>
        </div>
      </section>
      {project.frontmatter.sections.map((section) => {
        return (
          <ProjectSection
            key={_.trim(section.heading.substring(0, 5))}
            section={section}
          />
        );
      })}
      <section className="section" id="projects">
        <div className="container">
          <h1>{project.frontmatter.other_projects}</h1>
          <ProjectRoll excludeSelfByID={project.id} />
        </div>
      </section>
    </>
  );
};

ProjectEntryTemplate.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sections: PropTypes.array,
    }),
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
          <ProjectEntryTemplate project={project} />
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
        featuredlink
        featuredlinklabel
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
        other_projects
      }
    }
  }
`;
