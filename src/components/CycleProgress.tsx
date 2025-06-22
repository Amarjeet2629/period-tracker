import { useMemo, useEffect, useState } from "react";

import { State } from "@/constants/types";


export const CycleProgress = ({ state }: { state: State }) => {
    const { cycleStartDate, cycleLength } = state;
    
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                console.log('visible');
                setNow(Date.now());
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const cycleDay = useMemo(() => {
        if (!cycleStartDate) return 0;
        // Always use the current time for the calculation to ensure it's up-to-date.
        return Math.floor((now - cycleStartDate) / (1000 * 60 * 60 * 24)) + 1;
    }, [cycleStartDate, now]);

    const cyclePhases = [
        { name: 'Menstrual', days: '1-5', color: 'bg-red-500/20 border-red-500/30' },
        { name: 'Follicular', days: '6-14', color: 'bg-blue-500/20 border-blue-500/30' },
        { name: 'Ovulation', days: '15-17', color: 'bg-purple-500/20 border-purple-500/30' },
        { name: 'Luteal', days: '18-28', color: 'bg-pink-500/20 border-pink-500/30' },
    ];

    return (
        <div
            className="bg-black/40 backdrop-blur-xl shadow-2xl"
            style={{
                padding: '20px',
                paddingBottom: '0px'
            }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Cycle Progress</h2>
                <span className="text-sm text-white/60">{cycleDay}/{cycleLength} days</span>
            </div>

            {/* Progress Circle */}
            <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-white/10"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${(cycleDay / cycleLength) * 339.292} 339.292`}
                            className="text-indigo-400 transition-all duration-1000 ease-out drop-shadow-lg"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{cycleDay}</div>
                            <div className="text-sm text-white/60">days</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase Indicator */}
            <div style={{ marginTop: '8px' }} className="grid grid-cols-4 gap-3">
                {cyclePhases.map((phase) => (
                    <div
                        key={phase.name}
                        className={`text-center p-3 rounded-lg border ${cycleDay >= parseInt(phase.days.split('-')[0]) && cycleDay <= parseInt(phase.days.split('-')[1])
                            ? 'border-indigo-400 bg-indigo-500/20 shadow-lg'
                            : 'border-white/20 bg-white/5'
                            }`}
                    >
                        <div className="text-xs font-medium text-white">{phase.name}</div>
                        <div className="text-xs text-white/60">{phase.days}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}