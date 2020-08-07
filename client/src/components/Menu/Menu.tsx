import React from "react";
import * as styles from "./Menu.module.scss";

export interface MenuProps {
    unreadCount?: number;
    toggleSettings: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Menu: React.FC<MenuProps> = (props) => {
    return (
        <div className={styles.menu}>
            <nav>
                <ul>
                    {/*  <li>
                        <Link to="/">Chat</Link>
                    </li> */}
                    <li>
                        {/* <Link to="/settings">Settings</Link> */}
                        <button onClick={props.toggleSettings}>Settings</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

Menu.defaultProps = {
    unreadCount: 0,
};
