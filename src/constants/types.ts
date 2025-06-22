import { ACTION_TYPES } from "./ACTION_TYPES";

export interface SetStartDateAction {
  type: ACTION_TYPES.SET_START_DATE;
  payload: number | null; // e.g., an ISO date string like '2023-10-27T10:00:00.000Z'
}

export interface SetCurrentDateAction {
  type: ACTION_TYPES.CURRENT_DATE;
  payload: number; // e.g., an ISO date string
}

export interface SetCycleLengthAction {
  type: ACTION_TYPES.SET_CYCLE_LENGTH;
  payload: number; // e.g., a number as a string, like '28'
}

// A union type that represents all possible actions in your app
export type AppAction =
  | SetStartDateAction
  | SetCurrentDateAction
  | SetCycleLengthAction;

export type State = {
  cycleStartDate: number | null;
  cycleLength: number;
  currentDate: number;
};
