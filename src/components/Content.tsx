import { useReducer, useMemo, useCallback } from "react"

import { CycleProgress } from "./CycleProgress"
import { HealthMetric } from "./HealthMetric"
import { QuickActions } from "./QuickActions"
import { Symptoms } from "./Symptoms"

import { appReducer } from "@/state/reducer"
import { ACTION_TYPES } from "@/constants/ACTION_TYPES"
import { State, Symptom } from "@/constants/types"

export const Content = () => {
    const initialState = useMemo((): State => ({
        cycleStartDate: null,
        cycleLength: 28,
        symptoms: [],
    }), [])

    const [state, dispatch] = useReducer(appReducer, initialState)

    const handleCycleStartDateChange = useCallback((date: Date) => {
        dispatch({ type: ACTION_TYPES.SET_START_DATE, payload: date.getTime() })
    }, [])

    const handleSaveSymptom = useCallback((symptom: Symptom) => {
        dispatch({ type: ACTION_TYPES.ADD_SYMPTOM, payload: symptom })
    }, [])

    return (
        <main style={{ paddingBottom: '8px' }} className="overflow-y-auto max-w-md mx-auto space-y-4">
            <CycleProgress state={state} />
            <HealthMetric />
            <Symptoms symptoms={state.symptoms} />
            <QuickActions handleSaveSymptom={handleSaveSymptom} handleCycleStartDateChange={handleCycleStartDateChange} />
        </main>
    )
}