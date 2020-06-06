import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'

const Splash = ({data}) => {

    return (
        <section 
            className="splash hero is-fullheight scrollsnap-section" 
            style={{
                backgroundImage: `url(${
                    !!data.image.childImageSharp ? data.image.childImageSharp.fluid.src : data.image
            })`}}>
            <div className="hero-body">
                <div className="container">
                    <h2 className="title">{data.intro}</h2>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container" onClick={()=>{console.log('clicked down!')}}>
                    <div className="scroll-down-btn">
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
      )
}

Splash.propTypes = {
    data: PropTypes.shape({
        intro: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    }),
}

export default Splash
