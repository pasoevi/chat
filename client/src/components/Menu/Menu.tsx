import React from "react";
import * as styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export interface MenuProps {
    unreadCount?: number;
}

export const Menu: React.FC<MenuProps> = (props) => {
    return (
        <div className={styles.menu}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Chat</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

Menu.defaultProps = {
    unreadCount: 0,
};
