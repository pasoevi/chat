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
    };

    console.log(isMenuVisible);

    return (
        <div className={styles.app}>
            <Router>
                <div>
                    <Menu toggleSettings={handleSettingsToggle} />

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    {/* <Switch>
                        <Route path="/settings">
                            <SettingsComponent />
                        </Route>
                        <Route path="/">
                            <Chat />
                        </Route>
                    </Switch> */}
                    <div className="container">
                        {isMenuVisible && <SettingsComponent onClose={handleSettingsToggle} />}
                        <Chat />
                    </div>
                </div>
            </Router>
        </div>
    );
}
