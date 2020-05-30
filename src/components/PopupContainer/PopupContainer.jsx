import React, { useRef, useState, useEffect } from "react";
import useOnClickOutside from "use-onclickoutside";
import cx from "classnames";
import styles from "./PopupContainer.module.scss";

const PopupContainer = ({ children, showPopup, onClose }) => {
  const [shouldRender, setRender] = useState(showPopup);

  useEffect(() => {
    if (showPopup) setRender(true);
  }, [showPopup]);

  const onAnimationEnd = () => {
    if (!showPopup) setRender(false);
  };

  const ref = useRef();
  useOnClickOutside(ref, onClose);

  const classnames = cx(styles.popupContainer, {
    [styles.hide]: !showPopup,
  });

  return (
    shouldRender && (
      <div ref={ref} className={classnames} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    )
  );
};
export default PopupContainer;
