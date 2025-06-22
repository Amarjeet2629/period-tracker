export const HealthMetric = () => {
    const healthMetrics = [
        { name: 'Sleep', value: '7.5h', trend: '+0.5h', color: 'bg-blue-500', icon: '😴' },
        { name: 'Water', value: '2.1L', trend: '+0.3L', color: 'bg-cyan-500', icon: '💧' },
        { name: 'Exercise', value: '30min', trend: '-10min', color: 'bg-green-500', icon: '🏃‍♀️' },
    ];

    return (
        <div 
            className="bg-black/40 backdrop-blur-xl shadow-2xl" 
            style={{ 
                padding: '20px',
                paddingBottom: '0px'
            }}
        >
            <h2 className="text-lg font-semibold text-white mb-6">Today&apos;s Health</h2>
            <div className="space-y-4">
                {healthMetrics.map((metric, index) => (
                    <div style={{ paddingLeft: '6px', paddingRight: '6px', paddingTop: '2px', paddingBottom: '2px', marginBottom: index === healthMetrics.length - 1 ? '0px' : '6px' }} key={metric.name} className="flex items-center justify-between bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center space-x-4">
                            <div style={{ marginRight: '4px' }} className={`w-8 h-8 ${metric.color} rounded-full flex items-center justify-center shadow-lg`}>
                                <span className="text-white text-lg">{metric.icon}</span>
                            </div>
                            <span className="font-medium text-white">{metric.name}</span>
                        </div>
                        <div className="text-right">
                            <div className="font-semibold text-white">{metric.value}</div>
                            <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                {metric.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}