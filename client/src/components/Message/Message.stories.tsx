import React from "react";
import { MessageComponent } from "./Message";
import { text as knobText, withKnobs } from "@storybook/addon-knobs";
import { v4 } from "uuid";
import { Provider } from "react-redux";
import { rootReducer as reducer } from "../../store";
import { createStore } from "@reduxjs/toolkit";

export default {
    title: "Chat message",
    component: MessageComponent,
    decorators: [withKnobs],
};
const initialRootState = {};
const store = createStore(reducer, initialRootState);

const msgData = {
    id: "87sd87s8df787sd98f7sd9f",
    sender: { id: v4(), displayName: "Sergo Pasoevi"},
    timestamp: Date.now(),
};

export const Message = () => (
    <Provider store={store}>
        <MessageComponent {...msgData} text={knobText("Text", "Hey there!")}/>
    </Provider>
);
