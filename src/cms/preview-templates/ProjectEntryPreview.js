import React from 'react'
import PropTypes from 'prop-types'
import { ProjectEntryTemplate } from '../../templates/project-entry'

const ProjectEntryPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ProjectEntryTemplate
      content={entry.toJS()}
    />
  )
}

ProjectEntryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectEntryPreview
