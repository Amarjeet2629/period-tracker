export const Header = ({ cycleDay }: { cycleDay: number }) => {
    return (
        <header className="bg-black/60 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-md mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg">🌸</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-white">Period Tracker</h1>
                            <p className="text-sm text-white/60">Cycle Day {cycleDay}</p>
                        </div>
                    </div>
                    <button className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                        <span className="text-white/70">⚙️</span>
                    </button>
                </div>
            </div>
        </header>
    )
}