import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImage = props => {
  const { className, overlay, src, tag, ...attributes } = props;

  const classes = classNames(top && "card-img-top", className);

  const Tag = tag;

  const innerContent = (
    <Tag data-test="card-image" src={src} {...attributes} className={classes} />
  );

  return <div>{innerContent}</div>;
};

CardImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardImage.defaultProps = {
  tag: "img",
  overlay: "white-slight"
};

export default CardImage;
