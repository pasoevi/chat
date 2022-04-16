import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./SendMessage.module.scss";
import {sendMessage} from "../../store/chat/actions";
import {AppState} from "../../store";
import planeIcon from "../../assets/plane.svg";

interface SendMessageProps {
    message?: string;
}

const defaultProps: SendMessageProps = {
    message: "",
};

export const SendMessage: React.FC<SendMessageProps> = (props) => {
    const dispatch = useDispatch();
    const {message} = props;
    const user = useSelector((state: AppState) => state.system.currentUser);
    const [messageText, setMessageText] = useState(message ?? "");

    function handleTextInputChange(e: ChangeEvent<HTMLInputElement>) {
        setMessageText(e.target.value);
    }

    function handleSendMessage(e: FormEvent<HTMLFormElement>) {
        if (messageText) {
            dispatch(sendMessage(messageText, user));
            setMessageText("");
        }
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
                <img src={planeIcon} alt="Send"/>
            </button>
        </form>
    );
};

SendMessage.defaultProps = defaultProps;
