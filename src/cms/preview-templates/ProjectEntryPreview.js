import React from "react";
import PropTypes from "prop-types";
import { ProjectEntryTemplate } from "../../templates/project-entry";

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  if (data) {
    return <ProjectEntryTemplate project={entry.getIn(["data"]).toJS()} />;
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
