import io from "socket.io-client";
import {temporaryAny} from "../types";
import {Message} from "../store/chat/types";
import {messageReceived} from "../store/chat/actions";

const SERVER_MESSAGE_BROADCAST = "SERVER_MESSAGE_BROADCAST";
export const CLIENT_MESSAGE_SEND = "CLIENT_MESSAGE_SEND";
export const CLIENT_USERNAME_UPDATE = "CLIENT_USERNAME_UPDATE";

const socket = io();
// This should run after the store has been configured
export const init = (store: temporaryAny) => {
    socket.on(SERVER_MESSAGE_BROADCAST, (payload: Message) => {
        return store.dispatch(messageReceived(payload));
    });
};

export function emit<T>(type: string, payload: T) {
    socket.emit(type, payload);
}
