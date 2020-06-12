import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectRoll from '../components/ProjectRoll'
import useWindowDimensions from '../components/UseWindowDimensions'

export const IndexPageTemplate = ({
  splash
}) => {
  const {windowHeight} = useWindowDimensions();

  const scrollOffSplash = () => {
    if ( (typeof window !== 'undefined') ) {
      const scrollToSmooth = require('../components/SmoothScroll')
      let nav = document.getElementById('navigation')
      scrollToSmooth(windowHeight - (nav.offsetHeight/2), 400, "ease-out-quart");
    }
  }

  return (
    <div>
      <section 
          className="splash hero is-fullheight" 
          style={{
              backgroundImage: `url(${
                  !!splash.image.childImageSharp ? splash.image.childImageSharp.fluid.src : splash.image
          })`}}>
          <div className="hero-body">
              <div className="container">
                  <h1 className="title">{splash.intro}</h1>
              </div>
          </div>
          <div className="hero-foot">
              <div className="container" onClick={scrollOffSplash}>
                  <div className="scroll-down-btn">
                      <span></span>
                  </div>
              </div>
          </div>
      </section>
      <section className="section" id="blurb">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-1">
              <h2>
                I take digital products from research and requirements gathering, all the way through to protyping and development.
              </h2>
              <h2>
                So whether you're looking for a flexible team member on a fast moving project, or
                need a someone who can bring your design and dev teams together, look no further.
                <br/>
              </h2>
              <br/>
            </div>
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
    </div>
  )
}

IndexPageTemplate.propTypes = {
  splash: PropTypes.shape({
    intro: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        splash={frontmatter.splash || {}}
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
      }
    }
  }
`
