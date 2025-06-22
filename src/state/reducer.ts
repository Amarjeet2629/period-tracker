import { ACTION_TYPES } from "@/constants/ACTION_TYPES";
import { AppAction, State } from "@/constants/types";

export const appReducer = (state: State, action: AppAction): State => {
    switch (action.type) {
        case ACTION_TYPES.SET_START_DATE:
            // Ensure payload is number or null, matching State type
            if (typeof action.payload === 'number' || action.payload === null) {
                return { ...state, cycleStartDate: action.payload };
            }
            return state;

        case ACTION_TYPES.SET_CYCLE_LENGTH:
            // Ensure payload is a number
            if (typeof action.payload === 'number') {
                return { ...state, cycleLength: action.payload };
            }
            return state;

        case ACTION_TYPES.ADD_SYMPTOM:
            return { ...state, symptoms: [...state.symptoms, action.payload] };

        default:
            return state;
    }
}; 