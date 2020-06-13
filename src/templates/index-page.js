import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import scrollToSmooth from '../components/SmoothScroll'
import Layout from '../components/Layout'
import ProjectRoll from '../components/projects/ProjectRoll'
import useWindowDimensions from '../components/UseWindowDimensions'
import { useTransform, useViewportScroll, motion } from 'framer-motion'

export const IndexPageTemplate = ({
  data
}) => {
  const {windowHeight} = useWindowDimensions();
  const { scrollY } = useViewportScroll();
  const [offSplash, setOffSplash] = useState(false)

  const scrollOffSplashProgress = useTransform(
    scrollY,
    [0, windowHeight-100],
    [0, 1]
  );

  const buttonOpacity = useTransform(scrollOffSplashProgress, value => 1-value);
  
  useEffect(()=>{
    scrollOffSplashProgress.onChange(v=>{
      if (v > .5) {
        setOffSplash(true)
      }
    })
  }, [scrollOffSplashProgress])

  const scrollOffSplash = () => {
    let nav = document.getElementById('navigation')
    scrollToSmooth(windowHeight - (nav.offsetHeight/2), 400, "ease-out-quart");
  }
  
  return (
    <div>
      <motion.section 
          className="splash hero is-fullheight"
          animate={{opacity: 1}}
          initial={{ opacity: 0}} 
          style={{
              backgroundImage: `url(${
                  !!data.splash.image.childImageSharp ? data.splash.image.childImageSharp.fluid.src : data.splash.image
          })`}}>
          <div className="hero-body">
              <div className="container" >
                  <h1 className="title">{data.splash.intro}</h1>
              </div>
          </div>
          <div className="hero-foot">
              <div className="container" role="navigation" onClick={scrollOffSplash}>
                  <motion.div
                    className="icon scroll-down-btn"
                    style={{opacity: buttonOpacity}}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span></span>
                  </motion.div>
              </div>
          </div>
      </motion.section>
      <section className="section" id="blurb">
        <div className="container">
          <div className="columns">
            <motion.div
              className="column is-8-desktop is-offset-2-desktop"
              animate={{
                  opacity: offSplash? 1: 0,
                  translateY: offSplash? 0: 50
              }}
              transition={{
                type: "spring",
                damping: 15,
                mass: 2,
                stiffness: 100
              }}
            >
              {data.blurbs &&
              data.blurbs.map((n) => (
                <h2 key={n.blurb.substring(0, 5)}>{n.blurb}</h2>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section" id="projects">
        <div className="container">
          <h2>My work</h2>
          <hr/>
          <ProjectRoll/>
        </div>
      </section>
      <section className="section" id="projects">
        <div className="container">
          <h2>About</h2>
          <hr/>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    splash: PropTypes.shape({
      intro: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    }),
    burbs: PropTypes.arrayOf(
      PropTypes.shape({
        blurb: PropTypes.string
      })
    )
  })
  
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout splash={true}>
      <IndexPageTemplate
        data={frontmatter || {}}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        splash {
          intro
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        blurbs {
          blurb
        }
      }
    }
  }
`
