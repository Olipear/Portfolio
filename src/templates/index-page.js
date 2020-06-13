import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectRoll from '../components/home/ProjectRoll'
import useWindowDimensions from '../components/UseWindowDimensions'
import { useTransform, useViewportScroll, motion } from 'framer-motion'
import Splash from '../components/home/Splash'
import Blurbs from '../components/home/Blurbs'
import About from '../components/home/About'

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

  useEffect(()=>{
    scrollOffSplashProgress.onChange(v=>{
      if (v > .5) {
        setOffSplash(true)
      }
    })
  }, [scrollOffSplashProgress])

  return (
    <div>
      <Splash 
        content={data.splash}
        motionProgress={scrollOffSplashProgress}
      />
      <Blurbs
        content={data.blurbs}
        triggerIn={offSplash}
      />
      <section className="section" id="projects">
        <div className="container">
          <ProjectRoll/>
        </div>
      </section>
      <About />
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
