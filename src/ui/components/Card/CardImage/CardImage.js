import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImage = props => {
  const { className, overlay, src, tag, ...attributes } = props;

  const classes = classNames(className);

  const Tag = tag;

  const innerContent = <Tag src={src} {...attributes} className={classes} />;

  return <figure class="figure">{innerContent}</figure>;
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
