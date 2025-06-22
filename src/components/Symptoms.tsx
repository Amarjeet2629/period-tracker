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
            <div className="space-y-4">
                {symptoms.map((symptom) => (
                    <div style={{paddingLeft: '6px', paddingRight: '6px', paddingTop: '2px', paddingBottom: '2px', marginBottom: '6px'}} key={symptom.name} className="flex items-center justify-between bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">{symptom.icon}</span>
                            <span className="font-medium text-white">{symptom.name}</span>
                        </div>
                        <span style={{ padding: '4px' }} className={`px-2 py-1 rounded-full text-xs font-medium ${
                            symptom.severity === 'MILD' ? 'bg-yellow-900/40 text-yellow-300' :
                            symptom.severity === 'MODERATE' ? 'bg-orange-900/40 text-orange-300' :
                            'bg-red-900/40 text-red-300'
                        }`}>
                            {symptom.severity}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}