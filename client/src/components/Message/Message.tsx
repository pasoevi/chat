import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './Message.module.scss';
import { Message } from '../../store/chat/types';
import { AppState } from '../../store';

export interface MessageProps extends Message {
}

export const MessageComponent: React.FC<MessageProps> = ({
  text, sender, id, timestamp,
}) => {
  const userId = useSelector(
    (state: AppState) => state.system.currentUser.id,
  );
  const classes = classNames(styles.message, {
    [styles.sent]: sender.id === userId,
  });
  return (
    <div className={classes}>
      <div className={styles.messageInfo}>
        {id !== userId && (
        <div className={classNames(styles.author, 'truncate')}>{sender.displayName}</div>
        )}
        <div className={styles.sentDate}>
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
