export const CURRENT_USER_ID = "0";

export interface User {
    id: string;
    displayName: string;
}

// Describing the shape of the system's slice of state
export interface SystemState {
    loggedIn: boolean;
    session: string;
    currentUser: User;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION;
    payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
