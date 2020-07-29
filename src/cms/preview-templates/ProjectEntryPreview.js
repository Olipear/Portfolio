import React from "react";
import PropTypes from "prop-types";
import { ProjectEntryTemplate } from "../../templates/project-entry";
import showdown from 'showdown'

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  const dataRaw = entry.getIn(["data"])
  const data = dataRaw.toJS()
  const converter = new showdown.Converter();

  if (data) {  
    const sections = dataRaw.getIn(["sections"])
    const dummyQuery = {
      markdownRemark: {
        frontmatter: {
          title: data.title,
          description: data.description,
          featuredlink: data.featuredlink,
          featuredlinklabel: data.featuredlinklabel,
          other_projects: data.other_projects,
          sections: sections.map((section) => {
            const bodyRaw = section.getIn(['body'])
            return {
              heading: section.getIn(['heading']),
              intro: section.getIn(['intro']),
              headerimage: section.getIn(['headerimage']),
              body: bodyRaw,
              body_html: converter.makeHtml(bodyRaw)
            }
          })
        }
      },
      allMarkdownRemark: { edges: [] }
    }

    return <ProjectEntryTemplate data={dummyQuery} />;
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
