import {
  Language,
  SystemState,
  Theme,
  TimeFormat,
  UPDATE_CTRL_SENDS,
  UPDATE_LANGUAGE,
  UPDATE_SESSION,
  UPDATE_THEME,
  UPDATE_TIME_FORMAT,
  UPDATE_USERNAME,
} from './types';
import { emit } from '../../engine/websockets';
import { CLIENT_USERNAME_UPDATE } from '../../engine/messages';

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}

export function updateUsername(newUsername: string) {
  emit(CLIENT_USERNAME_UPDATE, newUsername);
  return {
    type: UPDATE_USERNAME,
    payload: newUsername,
  };
}

export function updateTheme(newTheme: Theme) {
  return {
    type: UPDATE_THEME,
    payload: newTheme,
  };
}

export function updateTimeformat(newTimeFormat: TimeFormat) {
  return {
    type: UPDATE_TIME_FORMAT,
    payload: newTimeFormat,
  };
}

export function updateCTRLSends(ctrlSendsMessage: boolean) {
  return {
    type: UPDATE_CTRL_SENDS,
    payload: ctrlSendsMessage,
  };
}

export function updateLanguage(newLanguage: Language) {
  return {
    type: UPDATE_LANGUAGE,
    payload: newLanguage,
  };
}
