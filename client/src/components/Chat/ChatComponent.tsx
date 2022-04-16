import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MessageComponent } from "../Message/Message";
import { AppState } from "../../store";
import styles from "./Chat.module.scss";
import { SendMessage } from "../SendMessage/SendMessage";

export interface ChatProps {
}

export const ChatComponent: React.FC<ChatProps> = () => {
    const lastMessageRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (lastMessageRef !== null && lastMessageRef.current !== null) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth"});
        }
    };
    useEffect(() => {
        scrollToBottom();
    });

    const messages = useSelector((state: AppState) => state.chat.messages);
    return (
        <div className={styles.chat}>
            {messages.map((message) => (
                <div ref={lastMessageRef} key={message.id}>
                    <MessageComponent
                        text={message.text}
                        sender={message.sender}
                        timestamp={message.timestamp}
                        id={message.id}
                    />
                </div>
            ))}
            <div className={styles.hidden}></div>
            <div className={styles.bottom}>
                <SendMessage/>
            </div>
        </div>
    );
};
