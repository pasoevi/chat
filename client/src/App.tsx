import React from "react";
import styles from "./App.module.scss";
import { Chat } from "./components/Chat/Chat";
import { SendMessage } from "./components/SendMessage/SendMessage";

export default function App() {
    return (
        <div className="App">
            <Chat />
            <div className={styles.bottom}>
                <SendMessage />
            </div>
        </div>
    );
}
