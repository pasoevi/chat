import React from "react";
import * as styles from "./Menu.module.scss";

export interface MenuProps {
    unreadCount: number;
}

export const Menu: React.FC<MenuProps> = (props) => {
    return <div className={styles.menu}>
        <div>Chat</div>
        <div>Settings</div>
    </div>;
};