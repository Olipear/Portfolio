const _ = require("lodash");
const path = require("path");
const remark = require("remark");
const remarkHTML = require("remark-html");
const { createFilePath } = require("gatsby-source-filesystem");
const unwrapImages = require('remark-unwrap-images')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  
  //convert mardown to html
  if (node.frontmatter && node.frontmatter.templateKey == 'project-entry') {
    if (node.frontmatter.sections) {
      node.frontmatter.sections.map(section =>{
        if (section.body) {
          section.body_html = remark().use(unwrapImages).use(remarkHTML).processSync(section.body).toString();
        }
      })
    }
  } 
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
  return node
};
