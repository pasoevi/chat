import {
    Action,
    MiddlewareAPI,
    Dispatch,
} from "@reduxjs/toolkit";
import { temporaryAny } from "../../types";

export const loggerMiddleware: temporaryAny = (
    api: MiddlewareAPI<temporaryAny>,
) => (next: Dispatch<temporaryAny>) => <A extends Action>(action: A) => {
    console.log("dispatching", action);
    console.log("next state", api.getState());
    return next(action);
};
