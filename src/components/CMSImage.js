import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const CMSImage = ({
  alt = "",
  image,
  style = {},
  imgStyle = {},
  className = "",
}) => {
  if (!!image) {
    if (!!image.childImageSharp) {
      if (!!image.childImageSharp.fluid) {
        return (
          <Img
            className={className}
            imgStyle={imgStyle}
            style={style}
            fluid={image.childImageSharp.fluid}
            alt={alt}
          />
        );
      } else if (!!image.childImageSharp.fixed) {
        return (
          <Img
            className={className}
            imgStyle={imgStyle}
            style={style}
            fixed={image.childImageSharp.fluid}
            alt={alt}
          />
        );
      }
    } else if (typeof image === "string") {
      return <img className={className} style={style} src={image} alt={alt} />;
    }
  }
  return null;
};

CMSImage.propTypes = {
  alt: PropTypes.string,
  childImageSharp: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CMSImage;
