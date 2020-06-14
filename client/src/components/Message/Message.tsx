import React from "react";
import classNames from "classnames";
import * as styles from "./Message.module.scss";
import { Message } from "../../store/chat/types";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

export interface MessageProps extends Message {}

export const MessageComponent: React.FC<MessageProps> = React.memo(
    ({ text, sender, id, timestamp }) => {
        const userId = useSelector((state: AppState) => state.system.currentUser.id);
        console.log(`userID: ${userId}, messageSenderId: ${sender.id}`);
        const classes = classNames(styles.message, {
            [styles.sent]: sender.id === userId,
        });
        return <div className={classes}>{text}</div>;
    },
);
