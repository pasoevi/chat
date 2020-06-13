import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { init as initWS } from "./engine/websockets";

initWS(store);

const rootElement = document.getElementById("root");

Sentry.init({
    dsn:
        "https://d964005f348340158006751922530bf6@o406571.ingest.sentry.io/5274291",
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
