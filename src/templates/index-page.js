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
import ProjectRoll from "../components/projects/ProjectRoll";
import About from "../components/home/About";

export const IndexPageTemplate = ({ data, previewMode = false }) => {
  const { windowHeight } = useWindowDimensions();
  const { scrollY } = useViewportScroll();
  const [offSplash, setOffSplash] = useState(previewMode);

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
      <Splash content={data.splash} motionProgress={scrollOffSplashProgress} />
      <Blurbs content={data.blurbs} triggerIn={offSplash} />
      <section className="section is-medium" id="projects">
        <div className="container">
          <ProjectRoll />
        </div>
      </section>
      <About content={data.about} />
    </>
  );
};

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
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
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AnimatePresence>
      <Layout splash={true}>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IndexPageTemplate data={frontmatter || {}} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
  }
`;
