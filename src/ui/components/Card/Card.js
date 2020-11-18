import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = props => {
  const { text, className, tag: Tag, border, ...attributes } = props;

  const classes = classNames(
    { [`${text}-text`]: text, [`border-${border}`]: border },
    "card",
    className
  );

  return <Tag {...attributes} className={classes} />;
};

Card.propTypes = {
  border: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.string
};

Card.defaultProps = {
  tag: "div"
};

export default Card;
