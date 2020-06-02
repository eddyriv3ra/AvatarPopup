import React, { useState, useEffect, Fragment } from "react";
import Avatar from "../Avatar";
import PopupContainer from "../PopupContainer";
import AvatarList from "../AvatarList";
import styles from "./AvatarManagement.module.scss";

const AvatarManagement = ({ avatarSelected, avatarList, onChangeAvatar }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [lastAvatarClicked, setLastAvatarClicked] = useState(null);

  const handleOnClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    handleOnClose();
    setLastAvatarClicked(null);
  }, [avatarSelected]);

  const handleClickOnSelectedAvatar = () => {
    setShowPopup(true);
  };

  const handleOnSelectedAvatar = (id) => {
    onChangeAvatar(id);
    setLastAvatarClicked(id);
  };

  return (
    <Fragment>
      <div data-testid="avatarMgmt" className={styles.avatarContainer}>
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
