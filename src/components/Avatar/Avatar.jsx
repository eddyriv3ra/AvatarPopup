import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

const Avatar = ({ src, onClick, loading }) => {
  const handleOnclick = () => {
    onClick();
  };

  return (
    <div
      className={`${styles.avatar} ${loading ? styles.loader : ""}`}
      onClick={handleOnclick}
    >
      <img className={styles["avatar--image"]} src={`/${src}`} alt="avatar" />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

Avatar.defaultProps = {
  src: "",
  onClick: () => {},
  loading: false,
};

export default Avatar;
