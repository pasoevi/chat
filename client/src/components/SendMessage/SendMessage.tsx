import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import styles from "./SendMessage.module.scss";
import { sendMessage } from "../../store/chat/actions";

interface SendMessageProps {
    message?: string;
}

const defaultProps: SendMessageProps = {
    message: "",
};

export const SendMessage: React.FC<SendMessageProps> = (props) => {
    const dispatch = useDispatch();
    const { message } = props;
    const [messageText, setMessageText] = useState(message ?? "");

    function handleTextInputChange(e: ChangeEvent<HTMLInputElement>) {
        setMessageText(e.target.value);
    }

    function handleSendMessage(e: FormEvent<HTMLFormElement>) {
        dispatch(sendMessage(messageText));
        setMessageText("");
        e.preventDefault();
    }

    return (
        <form className={styles.sendMessage} onSubmit={handleSendMessage}>
            <label>
                <input
                    type="textarea"
                    onChange={handleTextInputChange}
                    value={messageText}
                />
            </label>
            <button type="submit" value="Send">
                Send
            </button>
        </form>
    );
};

SendMessage.defaultProps = defaultProps;
