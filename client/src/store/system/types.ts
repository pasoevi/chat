export interface User {
  id: string;
  displayName: string;
}

export type Theme = "Light" | "Dark";
export type TimeFormat = "12" | "24";
export type Language = "EN" | "RU" | "DE";

// Describing the shape of the system's slice of state
export interface SystemState {
  loggedIn: boolean;
  session: string;
  theme: Theme;
  language: Language;
  timeFormat: TimeFormat;
  sendOnCtrlEnter: boolean;
  currentUser: User;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_THEME = "UPDATE_THEME";
export const UPDATE_TIME_FORMAT = "UPDATE_TIME_FORMAT";
export const UPDATE_CTRL_SENDS = "UPDATE_CTRL_SENDS";
export const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

interface UpdateUsernameAction {
  type: typeof UPDATE_USERNAME;
  payload: string;
}

interface UpdateThemeAction {
  type: typeof UPDATE_THEME;
  payload: Theme;
}

interface UpdateTimeFormatAction {
  type: typeof UPDATE_TIME_FORMAT;
  payload: TimeFormat;
}

interface UpdateCTRLSendsAction {
  type: typeof UPDATE_CTRL_SENDS;
  payload: boolean;
}

interface UpdateLanguageAction {
  type: typeof UPDATE_LANGUAGE;
  payload: Language;
}

export type SystemActionTypes =
    | UpdateSessionAction
    | UpdateUsernameAction
    | UpdateThemeAction
    | UpdateTimeFormatAction
    | UpdateCTRLSendsAction
    | UpdateLanguageAction;
