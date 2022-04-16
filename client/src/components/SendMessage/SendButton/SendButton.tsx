import React from 'react';
import styles from './SendButton.module.scss';

export interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button type="submit" className={styles.sendButton} onClick={onClick} />
);
