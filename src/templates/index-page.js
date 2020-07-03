import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import useWindowDimensions from "../components/UseWindowDimensions";
import {
  useTransform,
  useViewportScroll,
  AnimatePresence,
  motion,
} from "framer-motion";
import Layout from "../components/Layout";
import Splash from "../components/home/Splash";
import Blurbs from "../components/home/Blurbs";
import About from "../components/home/About";
import ProjectGrid from "../components/projects/ProjectGrid";

export const IndexPageTemplate = ({ data, previewMode = false }) => {
  const { windowHeight } = useWindowDimensions();
  const { scrollY } = useViewportScroll();
  const [offSplash, setOffSplash] = useState(previewMode);

  const pagecontent = data.markdownRemark.frontmatter;
  const projects = data.allMarkdownRemark.edges;

  const scrollOffSplashProgress = useTransform(
    scrollY,
    [0, windowHeight - 100],
    [0, 1]
  );

  useEffect(() => {
    scrollOffSplashProgress.onChange((v) => {
      if (v > 0.5) {
        setOffSplash(true);
      }
    });
  }, [scrollOffSplashProgress]);

  return (
    <>
      <Splash
        content={pagecontent.splash}
        motionProgress={scrollOffSplashProgress}
      />
      <Blurbs content={pagecontent.blurbs} triggerIn={offSplash} />
      {projects.length > 0 ? (
        <section className="section is-medium" id="projects">
          <div className="container">
            <ProjectGrid projects={projects} />
          </div>
        </section>
      ) : null}

      <About content={pagecontent.about} />
    </>
  );
};

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      splash: PropTypes.shape({
        intro: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        buttontext: PropTypes.string,
      }),
      burbs: PropTypes.arrayOf(
        PropTypes.shape({
          blurb: PropTypes.string,
        })
      ),
      about: PropTypes.shape({
        aboutbody: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object) 
    })
  }),
};

const IndexPage = ({ data }) => {
  return (
    <AnimatePresence>
      <Layout splash={true}>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IndexPageTemplate data={data || {}} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape(
    {
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }).isRequired,
    },
    {
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object) 
      })
    }
  ),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        splash {
          intro
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          buttontext
        }
        blurbs {
          blurb
        }
        about {
          aboutbody
          image {
            childImageSharp {
              fluid(
                maxWidth: 300
                maxHeight: 300
                quality: 100
                cropFocus: ENTROPY
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-entry" }
          featuredproject: { eq: true }
        }
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
