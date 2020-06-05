import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'

const Splash = ({heading}) => {

    return (
        <div className="splash">
            <div>
                {heading}
            </div>
        </div>
      )
}

Splash.propTypes = {
    heading: PropTypes.string,
}

export default Splash
