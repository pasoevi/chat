import { v4 } from "node-uuid";
import {
    UPDATE_SESSION,
    SystemState,
    SystemActionTypes,
    UPDATE_USERNAME,
    UPDATE_THEME,
    UPDATE_TIME_FORMAT,
    UPDATE_CTRL_SENDS,
    UPDATE_LANGUAGE,
} from "./types";

const initialState: SystemState = {
    loggedIn: false,
    session: "",
    timeFormat: "12",
    sendOnCtrlEnter: true,
    theme: "Light",
    language: "EN",
    currentUser: {
        id: v4(),
        displayName: "You",
    },
};

export function systemReducer(
    state = initialState,
    action: SystemActionTypes,
): SystemState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case UPDATE_USERNAME: {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    displayName: action.payload,
                },
            };
        }
        case UPDATE_THEME: {
            return {
                ...state,
                theme: action.payload,
            };
        }
        case UPDATE_TIME_FORMAT: {
            return {
                ...state,
                timeFormat: action.payload,
            };
        }
        case UPDATE_CTRL_SENDS: {
            return {
                ...state,
                sendOnCtrlEnter: action.payload,
            };
        }
        case UPDATE_LANGUAGE: {
            return {
                ...state,
                language: action.payload,
            };
        }
        default:
            return state;
    }
}
