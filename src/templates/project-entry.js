import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import ProjectGrid from "../components/projects/ProjectGrid";

export const ProjectEntryTemplate = ({ data }) => {
  const thisProject = data.markdownRemark.frontmatter;
  const otherProjects = data.allMarkdownRemark.edges;
  return (
    <>
      <section className="hero is-medium project">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{thisProject.description}</h1>
            {thisProject.featuredlink ? (
              <OutboundLink
                href={thisProject.featuredlink}
                className="interactive"
                target="_blank"
                eventCategory="project-preview"
              >
                <h3>{thisProject.featuredlinklabel}</h3>
              </OutboundLink>
            ) : null}
          </div>
        </div>
      </section>
      {thisProject.sections.map((section) => {
        return (
          <ProjectSection
            key={_.trim(section.heading.substring(0, 5))}
            section={section}
          />
        );
      })}
      {otherProjects.length > 0 ? (
        <section className="section" id="projects">
          <div className="container">
            <h1>{thisProject.other_projects}</h1>
            <ProjectGrid projects={otherProjects} />
          </div>
        </section>
      ) : null}
    </>
  );
};

ProjectEntryTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        sections: PropTypes.array,
      }),
    }).isRequired,
    allMarkdownRemark: PropTypes.object,
  }),
};

const ProjectEntry = ({ data }) => {
  return (
    <AnimatePresence>
      <Layout splash={false} title={data.markdownRemark.frontmatter.title}>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectEntryTemplate data={data} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
};

ProjectEntry.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.object,
  }),
};

export default ProjectEntry;

export const pageQuery = graphql`
  query ProjectEntryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-entry" }
          featuredproject: { eq: true }
        }
        id: { nin: [$id] }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
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
