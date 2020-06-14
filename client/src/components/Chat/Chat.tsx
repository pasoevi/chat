import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MessageComponent } from "../Message/Message";
import { AppState } from "../../store";
import * as styles from "./Chat.module.scss";

export interface ChatProps {}

export const Chat: React.FC<ChatProps> = (props) => {
    const lastMessageRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (lastMessageRef !== null && lastMessageRef.current !== null) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        scrollToBottom();
    });

    const messages = useSelector((state: AppState) => state.chat.messages);
    return (
        <div className={styles.chat}>
            {messages.map((message) => (
                <div ref={lastMessageRef}>
                    <MessageComponent
                        text={message.text}
                        sender={message.sender}
                        timestamp={message.timestamp}
                        id={message.id}
                        key={message.id}
                    />
                </div>
            ))}
        </div>
    );
};
