export const QuickActions = () => {
    return (
        <div 
            className="bg-white dark:bg-gray-800 shadow-lg" 
            style={{ 
                padding: '16px'
            }}
        >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                    Log Period
                </button>
                <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-700 transition-all">
                    Track Symptoms
                </button>
                <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all">
                    Health Tips
                </button>
                <button className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all">
                    Insights
                </button>
            </div>
        </div>
    )
}