import React, { useState, useEffect } from 'react'
import scrollToSmooth from './SmoothScroll'
import PropTypes from 'prop-types'

const Splash = ({data}) => {

    const scrollOffSplash = () => {
        scrollToSmooth(window.innerHeight, 400, "ease-out-quart");
    }

    return (
        <section 
            className="splash hero is-fullheight" 
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
                <div className="container" onClick={scrollOffSplash}>
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
