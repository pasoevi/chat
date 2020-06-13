import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
    Action,
} from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middleware/loggerMiddleware";

import { combineReducers } from "@reduxjs/toolkit";

import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";
import { loadState, saveState } from "../localStorage/localStorage";
import { Message } from "../components/Message/Message.stories";

// Actions
const defaultAction: Action = {
    type: "default",
};

export const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer,
});

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

const persistedState = loadState();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), loggerMiddleware],
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState(store.getState());
});
