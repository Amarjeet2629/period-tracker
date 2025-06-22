export const Header = () => {
    return (
        <header className="bg-black/60 backdrop-blur-xl sticky top-0 z-50">
            <div className="max-w-md mx-auto px-4 py-4">
                <div style={{ padding: '6px' }} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div style={{ marginRight: '4px' }} className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg">🌸</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-md font-semibold text-white">Period Tracker</p>
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