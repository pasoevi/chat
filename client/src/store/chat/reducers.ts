import { ChatActionTypes, ChatState, DELETE_MESSAGE, Message, RECEIVE_MESSAGE, SEND_MESSAGE } from "./types";
import { v4 } from "uuid";

const mockMessages: Message[] = [
    {
        id: "1",
        sender: { id: v4(), displayName: "Sergo Pasoevi"},
        timestamp: Date.now(),
        text: "Test message",
    }
];

const initialState: ChatState = {
    messages: mockMessages,
};

export function chatReducer(
    state = initialState,
    action: ChatActionTypes,
): ChatState {
    switch (action.type) {
    case SEND_MESSAGE: {
        const newMessage: Message = {
            id: action.payload.id,
            sender: action.payload.sender,
            text: action.payload.text,
            timestamp: action.payload.timestamp,
        };
        return {
            messages: [...state.messages, newMessage],
        };
    }
    case RECEIVE_MESSAGE: {
        const newMessage: Message = {
            id: action.payload.id,
            sender: action.payload.sender,
            text: action.payload.text,
            timestamp: action.payload.timestamp,
        };
        return {
            messages: [...state.messages, newMessage],
        };
    }
    case DELETE_MESSAGE:
        return {
            messages: state.messages.filter(
                (message) => message.timestamp !== action.meta.timestamp,
            ),
        };
    default:
        return state;
    }
}
