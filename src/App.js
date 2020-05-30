import React, { useState } from "react";
import styles from "./App.module.scss";
import AvatarManagement from "./components/AvatarManagement";
import listAvatar from "./data/mockData";

function App() {
  const [avatar, setAvatar] = useState(listAvatar[0]);

  const handleChangeAvatar = (id) => {
    setTimeout(() => {
      setAvatar(listAvatar.find((avatar) => avatar.id === id));
    }, 1000);
  };

  return (
    <div className={styles.appContainer}>
      <AvatarManagement
        avatarSelected={avatar}
        onChangeAvatar={handleChangeAvatar}
        avatarList={listAvatar}
      />
    </div>
  );
}

export default App;
