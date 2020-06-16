import React from "react";
import * as styles from "./App.module.scss";
import { Chat } from "./components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SettingsComponent } from "./components/Settings/SettingsComponent";
import { Menu } from "./components/Menu/Menu";

export default function App() {
    return (
        <div className={styles.app}>
            <Router>
                <div>
                    <Menu/>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/settings">
                            <SettingsComponent />
                        </Route>
                        <Route path="/">
                            <Chat />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
