import React, { useState } from "react";
import styles from "./App.module.scss";
import { ChatComponent } from "./components/Chat/ChatComponent";
import { SettingsComponent } from "./components/Settings/SettingsComponent";
import { Menu } from "./components/Menu/Menu";

export default function App() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleSettingsToggle = () => {
        setMenuVisible(!isMenuVisible);
        console.log(isMenuVisible);
    };

    const SettingsOverlay = (
        <div className={styles.settingsOverlay}>
            <SettingsComponent onClose={handleSettingsToggle}/>
        </div>
    );

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Menu toggleSettings={handleSettingsToggle}/>
                </div>
                {/* <div className={styles.chat}> */}
                <ChatComponent/>
                {/* </div> */}

                {isMenuVisible && SettingsOverlay}
            </div>
        </div>
    );
}
