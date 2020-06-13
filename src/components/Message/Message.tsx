import React from "react";
import classNames from "classnames";
import * as styles from "./Message.module.scss";
import { Message } from "../../store/chat/types";
import { CURRENT_USER_ID } from "../../store/system/types";

export interface MessageProps extends Message {}

export const MessageComponent: React.FC<MessageProps> = React.memo(
    ({ text, sender, id, timestamp }) => {
        const classes = classNames(styles.message, {
            [styles.sent]: sender.id === CURRENT_USER_ID,
        });
        return <div className={classes}>{text}</div>;
    },
);
