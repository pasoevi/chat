import React, { useState } from 'react';
import styles from './App.module.scss';
import { ChatComponent } from './components/Chat/ChatComponent';
import { SettingsComponent } from './components/Settings/SettingsComponent';
import { Menu } from './components/Menu/Menu';

export const App: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleSettingsToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  const SettingsOverlay = (
    <div className={styles.settingsOverlay}>
      <SettingsComponent onClose={handleSettingsToggle} />
    </div>
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Menu toggleSettings={handleSettingsToggle} />
        </div>
        <ChatComponent />
        {isMenuVisible && SettingsOverlay}
      </div>
    </div>
  );
};
