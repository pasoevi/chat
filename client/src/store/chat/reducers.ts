import {
    ChatState,
    SEND_MESSAGE,
    DELETE_MESSAGE,
    ChatActionTypes,
    Message,
    RECEIVE_MESSAGE,
} from "./types";
import { v4 } from "node-uuid";

const mockMessages: Message[] = [
    {
        id: "1",
        sender: {id: v4(), displayName: "Sergo Pasoevi"},
        timestamp: Date.now(),
        text: "Do you want to bang tonight?",
    }/* ,
    {
        id: "2",
        author: "Sergo Pasoevi",
        timestamp: Date.now(),
        text: "Do you want to bang tonight?",
    },
    {
        id: "3",
        author: "You",
        timestamp: Date.now(),
        text: "Do you want to bang tonight?",
    } */,
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
