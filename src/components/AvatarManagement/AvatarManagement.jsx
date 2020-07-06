import React, { useState, useEffect, Fragment, useRef } from "react";
import Avatar from "../Avatar";
import PopupContainer from "../PopupContainer";
import AvatarList from "../AvatarList";
import styles from "./AvatarManagement.module.scss";

const AvatarManagement = ({ avatarSelected, avatarList, onChangeAvatar }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [lastAvatarClicked, setLastAvatarClicked] = useState(null);
  const mainAvatar = useRef();

  const handleOnClose = (event) => {
    if (event && mainAvatar.current.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    handleOnClose();
    setLastAvatarClicked(null);
  }, [avatarSelected]);

  const handleClickOnSelectedAvatar = () => {
    setShowPopup(!showPopup);
  };

  const handleOnSelectedAvatar = (id) => {
    onChangeAvatar(id);
    setLastAvatarClicked(id);
  };

  return (
    <Fragment>
      <div
        data-testid="avatarMgmt"
        className={styles.avatarContainer}
        ref={mainAvatar}
      >
        <Avatar
          src={avatarSelected.src}
          id={avatarSelected.id}
          onClick={handleClickOnSelectedAvatar}
        />
      </div>

      <PopupContainer showPopup={showPopup} onClose={handleOnClose}>
        <AvatarList
          avatarSelected={avatarSelected}
          avatarList={avatarList}
          onClick={handleOnSelectedAvatar}
          avatarLoading={lastAvatarClicked}
        />
      </PopupContainer>
    </Fragment>
  );
};

export default AvatarManagement;
