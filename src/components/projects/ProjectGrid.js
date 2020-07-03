import React from "react";
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

const ProjectGrid = ({ projects }) => {

  const buildProjectTiles = (layout) => {
    if (Array.isArray(layout)) {
      return layout.map((projectIndex) => {
        return (
          <ProjectTile
            key={projects[projectIndex].node.id}
            project={projects[projectIndex].node}
          />
        );
      });
    } else {
      return layout.map((container) => {
        return buildProjectGrid(container);
      });
    }
  };

  const buildProjectGrid = (layout) => {
    if (layout.hasOwnProperty("parentV")) {
      return (
        <div className="tile is-parent is-vertical">
          {buildProjectTiles(layout.parentV)}
        </div>
      );
    } else {
      return (
        <div className="tile is-parent">{buildProjectTiles(layout.parent)}</div>
      );
    }
  };

  if (projects.length > 0) {
    return (
      <div className="tile is-ancestor project">
        {tileLayouts[Math.min(projects.length - 1, 4)].map((layout) =>
          buildProjectGrid(layout)
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default ProjectGrid