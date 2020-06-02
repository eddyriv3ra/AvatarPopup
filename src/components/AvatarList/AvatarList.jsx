import React from "react";
import styles from "./AvatarList.module.scss";
import Avatar from "../Avatar";
import AvatarContainer from "../AvatarContainer";
import PopupTitle from "../PopupTitle";

const AvatarList = ({ onClick, avatarList, avatarLoading, avatarSelected }) => {
  const { id: selectedId } = avatarSelected;
  return (
    <div className={styles.avatarList}>
      <PopupTitle title="Selecciona el avatar" />
      <ul>
        {avatarList.map(({ id, src }) => (
          <li className={styles.listStyle} key={id} data-testid="list-items">
            <AvatarContainer
              selectedId={selectedId}
              id={id}
              onClick={onClick}
              avatarLoading={avatarLoading}
            >
              <Avatar src={src} loading={avatarLoading === id} />
            </AvatarContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvatarList;
