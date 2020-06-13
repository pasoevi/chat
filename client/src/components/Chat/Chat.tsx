import React from "react";
import { useSelector } from "react-redux";
import { MessageComponent } from "../Message/Message";
import { AppState } from "../../store";

export interface ChatProps {}

export const Chat: React.FC<ChatProps> = (props) => {
    const messages = useSelector((state: AppState) => state.chat.messages);
    return (
        <div className="chat">
            {messages.map((message) => (
                <MessageComponent
                    text={message.text}
                    sender={message.sender}
                    timestamp={message.timestamp}
                    id={message.id}
                    key={message.id}
                />
            ))}
        </div>
    );
};
