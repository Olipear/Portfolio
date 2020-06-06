import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectRoll from '../components/ProjectRoll'
import Splash from '../components/Splash'

export const IndexPageTemplate = ({
  title,
  splash
}) => (
  <div>
    <section className="hero">
      <div className="hero-body">
        <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!splash.image.childImageSharp ? splash.image.childImageSharp.fluid.src : splash.image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
        <Splash heading={splash.intro} image={splash.image} /> 
      </div>
    </section>
    
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
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
        title={frontmatter.title}
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
        title
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
