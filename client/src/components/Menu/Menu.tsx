import React from "react";
import styles from "./Menu.module.scss";
import gearIcon from "../../assets/gear.svg";

export interface MenuProps {
  unreadCount?: number;
  // eslint-disable-next-line no-unused-vars
  toggleSettings: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Menu: React.FC<MenuProps> = (props) => {
    return (
        <nav className={styles.menu}>
            <button
                className={styles.toggleSettings}
                onClick={props.toggleSettings}
            >
                <img src={gearIcon} alt="Open Settings"/>
            </button>
            {/* <div className={styles.srOnly}></div> */}
        </nav>
    );
};

Menu.defaultProps = {
    unreadCount: 0,
};
