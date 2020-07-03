import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import CMSImage from "../components/CMSImage";

const NotFoundPage = () => {
  const data = useStaticQuery(NotFoundQuery).markdownRemark.frontmatter
    .notfound;
  return (
    <Layout>
      <section className="splash hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{data.text}</h1>
            <CMSImage
              image={data.image}
              imgStyle={{ objectFit: "contain" }}
              style={{ width: "100%", height: "80%" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundQuery = graphql`
  query notFoundQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        notfound {
          text
          image {
            childImageSharp {
              fluid(
                maxWidth: 500
                maxHeight: 500
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
