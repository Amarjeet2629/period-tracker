export const HealthMetric = () => {
    const healthMetrics = [
        { name: 'Sleep', value: '7.5h', trend: '+0.5h', color: 'bg-blue-500' },
        { name: 'Water', value: '2.1L', trend: '+0.3L', color: 'bg-cyan-500' },
        { name: 'Exercise', value: '30min', trend: '-10min', color: 'bg-green-500' },
    ];

    return (
        <div 
            className="bg-white dark:bg-gray-800 shadow-lg" 
            style={{ 
                padding: '16px'
            }}
        >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today&apos;s Health</h2>
            <div className="space-y-3">
                {healthMetrics.map((metric) => (
                    <div key={metric.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${metric.color} rounded-full flex items-center justify-center`}>
                                <span className="text-white text-sm">📊</span>
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">{metric.name}</span>
                        </div>
                        <div className="text-right">
                            <div className="font-semibold text-gray-900 dark:text-white">{metric.value}</div>
                            <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {metric.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}