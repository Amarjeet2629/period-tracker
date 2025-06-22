import React, { useState } from 'react';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { Symptom } from '@/constants/types';

type SymptomTrackerModalProps = {
    onClose: () => void;
    onSave: (symptom: Symptom) => void;
}
const levelColors = {
    MILD: 'bg-gradient-to-r from-green-500 to-teal-500',
    MODERATE: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    EXTREME: 'bg-gradient-to-r from-red-500 to-rose-600',
};

const severityLevels = { MILD: 'Mild', MODERATE: 'Moderate', EXTREME: 'Extreme' };

export const SymptomTrackerModal: React.FC<SymptomTrackerModalProps> = ({ onClose, onSave }) => {
    const [symptomName, setSymptomName] = useState('');
    const [icon, setIcon] = useState('🤔');
    const [selectedSeverity, setSelectedSeverity] = useState<Symptom['severity']>('MILD');
    const [isPickerOpen, setIsPickerOpen] = useState(false);


    const handleIconSelect = (emojiData: EmojiClickData) => {
        setIcon(emojiData.emoji);
        setIsPickerOpen(false);
    };

    const handleSave = () => {
        if (symptomName.trim()) {
            onSave({
                name: symptomName,
                icon: icon,
                severity: selectedSeverity,
            });
            onClose();
        }
    };

    const isSaveDisabled = !symptomName.trim();

    return (
        <>
            <div style={{ padding: '12px' }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-700">
                    {/* Modal Header */}
                    <div style={{ padding: '12px' }} className="border-b border-gray-700 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-white">Track a Symptom</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Form Content */}
                    <div style={{ padding: '12px' }} className="space-y-6">
                        <div>
                            <label htmlFor="symptomName" className="block text-md font-bold text-gray-300 mb-2">Symptom</label>
                            <div className="flex flex-row items-center">
                                <button
                                    type="button"
                                    onClick={() => setIsPickerOpen(true)}
                                    className="flex items-center justify-center w-9 h-9 text-2xl bg-gray-800 rounded-l-lg hover:bg-gray-700 transition-colors border border-gray-600 border-r-0"
                                >
                                    {icon}
                                </button>
                                <input
                                    style={{ paddingLeft: '8px' }}
                                    type="text"
                                    id="symptomName"
                                    value={symptomName}
                                    onChange={(e) => setSymptomName(e.target.value)}
                                    placeholder="e.g., Headache"
                                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition h-9"
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '8px' }}>
                            <label style={{ marginBottom: '8px' }} className="block text-md font-bold text-gray-300">Severity</label>
                            <div className="grid grid-cols-3 gap-2 p-1 rounded-lg">
                                {Object.keys(severityLevels).map((severity) => (
                                    <button
                                        style={{ padding: '8px' }}
                                        key={severity}
                                        onClick={() => setSelectedSeverity(severity as Symptom['severity'])}
                                        className={`py-2 px-4 text-sm font-semibold rounded-md transition-all duration-200 ${selectedSeverity === severity
                                                ? `${levelColors[severity as keyof typeof levelColors]} text-white shadow-lg scale-105`
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            }`}
                                    >
                                        {severityLevels[severity as keyof typeof severityLevels]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div style={{ padding: '12px' }} className="border-gray-700">
                        <div className="flex gap-4">
                            <button
                                style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px' }}
                                onClick={handleSave}
                                disabled={isSaveDisabled}
                                className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                Save Symptom
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isPickerOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60]"
                    onClick={() => setIsPickerOpen(false)}
                >
                    <div onClick={(e) => e.stopPropagation()} className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-2">
                        <EmojiPicker
                            onEmojiClick={handleIconSelect}
                            theme={Theme.DARK}
                            lazyLoadEmojis={true}
                            searchDisabled={true}
                            width={320}
                            height={400}
                        />
                    </div>
                </div>
            )}
        </>
    );
}; 