import React from "react";
import cx from "classnames";
import styles from "./AvatarContainer.module.scss";

const AvatarContainer = ({
  children,
  selectedId,
  id,
  onClick,
  avatarLoading,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  const onHandleClick = selectedId === id ? () => {} : handleClick;

  const updateChildrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      //this properties are available as a props in child components
      onClick: onHandleClick,
    });
  });

  return (
    <div
      className={`${
        avatarLoading !== id && selectedId !== id
          ? styles.hoverEffect
          : styles.removeCursor
      } ${selectedId === id ? styles.avatarSelected : ""}`}
    >
      {updateChildrenWithProps}
    </div>
  );
};

export default AvatarContainer;
