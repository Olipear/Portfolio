import React from "react";
import PropTypes from "prop-types";
import { ProjectEntryTemplate } from "../../templates/project-entry";

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    const dummyQuery = {
      markdownRemark: {
        frontmatter: data
      },
      allMarkdownRemark: { edges: []}
    }
    return <ProjectEntryTemplate project={dummyQuery} />;
  } else {
    return <div>loading...</div>;
  }
};

ProjectEntryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjectEntryPreview;
