import { Symptom } from '@/constants/types';

export const Symptoms = ({ symptoms }: { symptoms: Symptom[] }) => {
    return (
        <div 
            className="bg-black/40 backdrop-blur-xl shadow-2xl" 
            style={{ 
                padding: '20px',
                paddingBottom: '0px'
            }}
        >
            <h2 className="text-lg font-semibold text-white mb-6">Symptoms</h2>
            {symptoms && symptoms.length > 0 ? (
                <div className="space-y-4">
                    {symptoms.map((symptom) => (
                        <div style={{ padding: '8px' }} key={symptom.name} className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">{symptom.icon}</span>
                                <span className="font-medium text-white">{symptom.name}</span>
                            </div>
                            <span style={{ padding: '6px' }} className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                symptom.severity === 'MILD' ? 'bg-green-900/50 text-green-300' :
                                symptom.severity === 'MODERATE' ? 'bg-yellow-900/50 text-yellow-300' :
                                'bg-red-900/50 text-red-300'
                            }`}>
                                {symptom.severity}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ marginTop: '6px', padding: '6px' }} className="text-center bg-gray-900/50 rounded-2xl border-2 border-dashed border-gray-700">
                    <div className="text-4xl mb-4">📝</div>
                    <h3 className="text-lg font-semibold text-white mb-2">No Symptoms Logged</h3>
                    <p className="text-sm text-gray-400">
                        Use the &quot;Track Symptoms&quot; button below to add one.
                    </p>
                </div>
            )}
        </div>
    )
}