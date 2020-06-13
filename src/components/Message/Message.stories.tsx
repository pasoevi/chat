import React from "react";
import { MessageComponent } from "./Message";
import { withKnobs, text as knobText } from "@storybook/addon-knobs";
import { v4 } from "node-uuid";

export default {
    title: "Chat message",
    component: MessageComponent,
    decorators: [withKnobs],
};

const msgData = {
    id: "87sd87s8df787sd98f7sd9f",
    sender: {id: v4(), displayName: "Sergo Pasoevi"},
    timestamp: Date.now(),
};

export const Message = () => <MessageComponent {...msgData} text={knobText("Text", "Hey there!")} />;
