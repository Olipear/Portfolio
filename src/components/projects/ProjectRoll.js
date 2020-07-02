import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectTile from "./ProjectTile";

// array to determine how many tiles per row to place
const tileLayouts = [
  // one stretched
  [{ parent: [0] }],
  // two side by side
  [{ parent: [0, 1] }],
  // two atop on left, one streched vertically right
  [{ parentV: [0, 1] }, { parent: [2] }],
  //one streched on first row, second row as with 3
  [
    {
      parentV: [
        { parent: [0] },
        { parent: [{ parentV: [1, 3] }, { parent: [2] }] },
      ],
    },
  ],
  // two on first row, three on second row
  [{ parent: [0, 1] }, { parent: [2, 3, 4] }],
];

const ProjectRoll = ({ excludeSelfByID = false }) => {
  const { edges: projects } = useStaticQuery(ProjectsQuery).allMarkdownRemark;
  const [filteredProjects, filterProjects] = useState(projects);

  useEffect(() => {
    if (excludeSelfByID) {
      let projectsTmp = [];
      projects.map((project) => {
        if (project.node.id !== excludeSelfByID) {
          projectsTmp.push(project);
        }
      });
      filterProjects(projectsTmp);
    }
  }, [excludeSelfByID]);

  const buildProjectTiles = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((projectIndex) => {
        return (
          <ProjectTile
            key={filteredProjects[projectIndex].node.id}
            project={filteredProjects[projectIndex].node}
          />
        );
      });
    } else {
      return obj.map((container) => {
        return buildProjectGrid(container);
      });
    }
  };

  const buildProjectGrid = (obj) => {
    if (obj.hasOwnProperty("parentV")) {
      return (
        <div className="tile is-parent is-vertical">
          {buildProjectTiles(obj.parentV)}
        </div>
      );
    } else {
      return (
        <div className="tile is-parent">{buildProjectTiles(obj.parent)}</div>
      );
    }
  };

  if (filteredProjects.length > 0) {
    return (
      <div className="tile is-ancestor project">
        {tileLayouts[Math.min(filteredProjects.length - 1, 4)].map((layout) =>
          buildProjectGrid(layout)
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default ProjectRoll;

const ProjectsQuery = graphql`
  query ProjectRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-entry" }
          featuredproject: { eq: true }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 650, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
