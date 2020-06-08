import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import scrollToSmooth from '../components/SmoothScroll'
import Layout from '../components/Layout'
import ProjectRoll from '../components/ProjectRoll'

export const IndexPageTemplate = ({
  splash
}) => {

  const scrollOffSplash = () => {
    let nav = document.getElementById('navigation')
    scrollToSmooth(window.innerHeight - (nav.offsetHeight/2), 400, "ease-out-quart");
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
                  <h2 className="title">{splash.intro}</h2>
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
      <section className="section">
        <div className="container">
          <ProjectRoll/>
        </div>
        <div className="container">
          <ProjectRoll/>
        </div>
        <div className="container">
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
