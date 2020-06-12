import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import scrollToSmooth from '../components/SmoothScroll'
import Layout from '../components/Layout'
import ProjectRoll from '../components/projects/ProjectRoll'
import useWindowDimensions from '../components/UseWindowDimensions'

export const IndexPageTemplate = ({
  data
}) => {
  const {windowHeight} = useWindowDimensions();

  const scrollOffSplash = () => {
    let nav = document.getElementById('navigation')
    scrollToSmooth(windowHeight - (nav.offsetHeight/2), 400, "ease-out-quart");
  }

  return (
    <div>
      <section 
          className="splash hero is-fullheight" 
          style={{
              backgroundImage: `url(${
                  !!data.splash.image.childImageSharp ? data.splash.image.childImageSharp.fluid.src : data.splash.image
          })`}}>
          <div className="hero-body">
              <div className="container">
                  <h1 className="title">{data.splash.intro}</h1>
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
            {data.blurbs &&
              data.blurbs.map(i => (
                <h2>{i.blurb}</h2>
              ))}
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
