import { useReducer, useMemo, useCallback } from "react"

import { CycleProgress } from "./CycleProgress"
import { HealthMetric } from "./HealthMetric"
import { QuickActions } from "./QuickActions"
import { Symptoms } from "./Symptoms"

import { appReducer } from "@/state/reducer"
import { ACTION_TYPES } from "@/constants/ACTION_TYPES"
import { State } from "@/constants/types"

export const Content = () => {
    const initialState = useMemo((): State => ({
        cycleStartDate: null,
        cycleLength: 28,
        currentDate: Date.now()
    }), [])

    const [state, dispatch] = useReducer(appReducer, initialState)

    const handleCycleStartDateChange = useCallback((date: Date) => {
        dispatch({ type: ACTION_TYPES.SET_START_DATE, payload: date.getTime() })
    }, [])

    return (
        <main style={{ paddingBottom: '8px' }} className="overflow-y-auto max-w-md mx-auto space-y-4">
            <CycleProgress state={state} />
            <HealthMetric />
            <Symptoms />
            <QuickActions state={state} handleCycleStartDateChange={handleCycleStartDateChange} />
        </main>
    )
}