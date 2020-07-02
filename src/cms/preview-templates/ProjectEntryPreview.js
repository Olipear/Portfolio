import React from "react";
import PropTypes from "prop-types";
import { ProjectEntryTemplate } from "../../templates/project-entry";

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return <ProjectEntryTemplate project={{frontmatter: data}} />;
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
