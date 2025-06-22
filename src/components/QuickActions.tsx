export const QuickActions = () => {
    return (
        <div 
            className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" 
            style={{ 
                padding: '20px'
            }}
        >
            <h2 className="text-lg font-semibold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md">
                    Log Period
                </button>
                <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-700 transition-all shadow-md">
                    Track Symptoms
                </button>
                <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md">
                    Health Tips
                </button>
                <button className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all shadow-md">
                    Insights
                </button>
            </div>
        </div>
    )
}