import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectRoll from '../components/ProjectRoll'
import Splash from '../components/Splash'

export const IndexPageTemplate = ({
  splash
}) => (
  <div className="scrollsnap-container">
    <Splash data={splash} /> 
    <section className="section scrollsnap-section">
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
