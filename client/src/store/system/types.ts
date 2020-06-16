export interface User {
    id: string;
    displayName: string;
}

export type Theme = "Light" | "Dark";
export type TimeFormat = "12" | "24";

// Describing the shape of the system's slice of state
export interface SystemState {
    loggedIn: boolean;
    session: string;
    theme: Theme;
    timeFormat: TimeFormat;
    sendOnCtrlEnter: boolean;
    currentUser: User;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION;
    payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
