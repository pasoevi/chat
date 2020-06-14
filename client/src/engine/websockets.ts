import io from "socket.io-client";
import { temporaryAny } from "../types";
import { Message } from "../store/chat/types";
import { messageReceived } from "../store/chat/actions";

const SERVER_MESSAGE_BROADCAST = "SERVER_MESSAGE_BROADCAST";
export const CLIENT_MESSAGE_SEND = "CLIENT_MESSAGE_SEND";

const socket = io();
// This should run after the store has been configured
export const init = (store: temporaryAny) => {
    socket.on(SERVER_MESSAGE_BROADCAST, (payload: Message) => {
        return store.dispatch(messageReceived(payload));
    });
};

export const emit = (type: string, payload: Message) =>
    socket.emit(type, payload);
