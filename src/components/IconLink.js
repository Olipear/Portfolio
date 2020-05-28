import React from 'react'
import PropTypes from 'prop-types'

const IconLink = ({linkUrl, linkName, icon}) => {

    return (
        <div className="icon-link">
            <a href={linkUrl} target="_blank" alt={linkName}>
                <img src={icon} />
            </a>
        </div>
    )
}

IconLink.propTypes = {
    linkUrl: PropTypes.string,
    linkName: PropTypes.string,
    icon: PropTypes.string,
  }

export default IconLink
