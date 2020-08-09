import React from "react";
import * as styles from "./App.module.scss";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingsComponent } from "./components/Settings/SettingsComponent";
import { Menu } from "./components/Menu/Menu";
import { useState } from "react";

export default function App() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleSettingsToggle = () => {
        setMenuVisible(!isMenuVisible);
        console.log(isMenuVisible);
    };

    const SettingsOverlay = (
        <div className={styles["settingsOverlay"]}>
            <SettingsComponent onClose={handleSettingsToggle} />
        </div>
    );

    return (
        <div className={styles.app}>
            <Router>
                <div>
                    <div className={styles.menu}>
                        <Menu toggleSettings={handleSettingsToggle} />
                    </div>
                    <div className="container">
                        <Chat />
                        {isMenuVisible && SettingsOverlay}
                    </div>
                </div>
            </Router>
        </div>
    );
}
