export const Symptoms = () => {
    const symptoms = [
        { name: 'Cramps', severity: 'mild', icon: '🩸' },
        { name: 'Fatigue', severity: 'moderate', icon: '😴' },
        { name: 'Mood Swings', severity: 'mild', icon: '😔' },
    ];

    return (
        <div 
            className="bg-white dark:bg-gray-800 shadow-lg" 
            style={{ 
                padding: '16px'
            }}
        >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Symptoms</h2>
            <div className="space-y-3">
                {symptoms.map((symptom) => (
                    <div key={symptom.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">{symptom.icon}</span>
                            <span className="font-medium text-gray-900 dark:text-white">{symptom.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${symptom.severity === 'mild' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                                symptom.severity === 'moderate' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' :
                                    'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                            }`}>
                            {symptom.severity}
                        </span>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 hover:border-pink-300 hover:text-pink-500 transition-colors">
                + Add Symptom
            </button>
        </div>
    )
}