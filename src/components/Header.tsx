export const Header = ({ cycleDay }: { cycleDay: number }) => {
    return <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🌸</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Period Tracker</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Cycle Day {cycleDay}</p>
                    </div>
                </div>
                <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">⚙️</span>
                </button>
            </div>
        </div>
    </header>
}