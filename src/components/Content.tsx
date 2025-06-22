import { useReducer, useMemo, useCallback } from "react"

import { CycleProgress } from "./CycleProgress"
import { HealthMetric } from "./HealthMetric"
import { QuickActions } from "./QuickActions"
import { Symptoms } from "./Symptoms"


import { ACTION_TYPES } from "@/constants/ACTION_TYPES"
import { AppAction, State } from "@/constants/types"

const reducer = (state: State, action: AppAction) => {
    switch (action.type) {
        case ACTION_TYPES.SET_START_DATE:
            return { ...state, cycleStartDate: action.payload }
        case ACTION_TYPES.SET_CYCLE_LENGTH:
            return { ...state, cycleLength: action.payload }
        case ACTION_TYPES.CURRENT_DATE:
            return { ...state, currentDate: action.payload }
        default:
            return state;
    }
}


export const Content = () => {
    const initialState = useMemo(() => ({
        cycleStartDate: null,
        cycleLength: 28,
        currentDate: Date.now(),
    }), []);

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleCycleStartDateChange = useCallback((date: Date) => {
        dispatch({ type: ACTION_TYPES.SET_START_DATE, payload: +date });
    }, []);



    return (
        <main className="max-w-md mx-auto space-y-4 px-4 py-6 pb-24">
            <CycleProgress state={state} />
            <HealthMetric />
            <Symptoms />
            <QuickActions state={state} handleCycleStartDateChange={handleCycleStartDateChange} />
        </main>
    )
}