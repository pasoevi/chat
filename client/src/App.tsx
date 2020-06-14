import React from "react";
import * as styles from "./App.module.scss";
import { Chat } from "./components/Chat/Chat";
import { SendMessage } from "./components/SendMessage/SendMessage";

export default function App() {
    return (
        <div className={styles.app}>
            <Chat />
            <div className={styles.hidden}></div>
            <div className={styles.bottom}>
                <SendMessage />
            </div>
        </div>
    );
}
