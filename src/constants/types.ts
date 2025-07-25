import { ACTION_TYPES } from "./ACTION_TYPES";

export interface SetStartDateAction {
  type: ACTION_TYPES.SET_START_DATE;
  payload: number | null; // e.g., an ISO date string like '2023-10-27T10:00:00.000Z'
}

export interface SetCycleLengthAction {
  type: ACTION_TYPES.SET_CYCLE_LENGTH;
  payload: number; // e.g., a number as a string, like '28'
}

export interface AddSymptomAction {
  type: ACTION_TYPES.ADD_SYMPTOM;
  payload: Symptom;
}

// A union type that represents all possible actions in your app
export type AppAction =
  | SetStartDateAction
  | SetCycleLengthAction
  | AddSymptomAction;

export type State = {
  cycleStartDate: number | null;
  cycleLength: number;
  symptoms: Symptom[];
};

// Defines the structure for a symptom record.
export interface Symptom {
  name: string;
  icon: string;
  severity: 'MILD' | 'MODERATE' | 'EXTREME';
}
