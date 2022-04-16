import React from 'react';
import styles from './Menu.module.scss';
import gearIcon from '../../assets/gear.svg';

export interface MenuProps {
  unreadCount?: number;
  // eslint-disable-next-line no-unused-vars
  toggleSettings: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Menu: React.FC<MenuProps> = ({ toggleSettings, unreadCount = 0 }) => (
  <nav className={styles.menu}>
    {`${unreadCount}`}
    <button
      type="button"
      className={styles.toggleSettings}
      onClick={toggleSettings}
    >
      <img src={gearIcon} alt="Open Settings" />
    </button>
    {/* <div className={styles.srOnly}></div> */}
  </nav>
);

Menu.defaultProps = {
  unreadCount: 0,
};
