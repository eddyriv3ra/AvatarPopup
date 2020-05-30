import React from "react";
import PropTypes from "prop-types";
import styles from "./PopupTitle.module.scss";

const PopupTitle = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

PopupTitle.propTypes = {
  title: PropTypes.string,
};

PopupTitle.defaultProps = {
  title: "",
};

export default PopupTitle;
