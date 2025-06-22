export const CycleProgress = ({ cycleDay, cycleLength, }: { cycleDay: number, cycleLength: number }) => {
    const cyclePhases = [
        { name: 'Menstrual', days: '1-5', color: 'bg-red-100 border-red-300' },
        { name: 'Follicular', days: '6-14', color: 'bg-blue-100 border-blue-300' },
        { name: 'Ovulation', days: '15-17', color: 'bg-purple-100 border-purple-300' },
        { name: 'Luteal', days: '18-28', color: 'bg-pink-100 border-pink-300' },
    ];

    return (
        <div 
            className="bg-white dark:bg-gray-800 shadow-lg" 
            style={{ 
                padding: '16px'
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Cycle Progress</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{cycleDay}/{cycleLength} days</span>
            </div>

            {/* Progress Circle */}
            <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${(cycleDay / cycleLength) * 339.292} 339.292`}
                            className="text-pink-500 transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{cycleDay}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">days</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase Indicator */}
            <div className="grid grid-cols-4 gap-2">
                {cyclePhases.map((phase) => (
                    <div
                        key={phase.name}
                        className={`text-center p-2 rounded-lg border-2 ${cycleDay >= parseInt(phase.days.split('-')[0]) && cycleDay <= parseInt(phase.days.split('-')[1])
                            ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                            }`}
                    >
                        <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{phase.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{phase.days}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}