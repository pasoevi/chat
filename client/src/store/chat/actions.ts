import { v4 } from "node-uuid";
import { SEND_MESSAGE, DELETE_MESSAGE, RECEIVE_MESSAGE, Message } from "./types";
import { emit, CLIENT_MESSAGE_SEND } from "../../engine/websockets";

export function sendMessage(text: string, userId: string) {
    const newMessage = {
        text,
        id: v4(),
        timestamp: Date.now(),
        sender: { id: userId, displayName: "You" },
    };
    emit(CLIENT_MESSAGE_SEND, newMessage);
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    };
}

// Action Creators
export function messageReceived(message: Message) {
    return { type: RECEIVE_MESSAGE, payload: message };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
/* export function receiveMessages() {
    return (dispatch: temporaryAny) =>
        fetch("/messages")
            .then((res) => res.json())
            .then((message: Message) => dispatch(messageReceived()));
}
 */
export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp,
        },
    };
}
