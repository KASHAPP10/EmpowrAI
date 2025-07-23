import React, { useState } from 'react';
import { Sliders, Info, Calculator } from 'lucide-react';

export function RiskAssessment() {
  const [riskTolerance, setRiskTolerance] = useState(70);
  const [interestRate, setInterestRate] = useState(8.5);
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    {
      id: 1,
      name: 'Balanced Assessment',
      description: 'Uses both traditional and Empowr scores equally',
      minEmpowr: 70,
      minTraditional: 650,
      recommended: true,
    },
    {
      id: 2,
      name: 'Alternative Focus',
      description: 'Empowr Score weighted more heavily',
      minEmpowr: 75,
      minTraditional: 600,
      recommended: false,
    },
    {
      id: 3,
      name: 'High Potential',
      description: 'Empowr Score + mentorship conditions',
      minEmpowr: 80,
      minTraditional: 580,
      recommended: false,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Sliders size={24} className="text-cyan-400" />
        <h3 className="text-lg font-semibold text-white">Tiered Risk Assessment</h3>
      </div>

      {/* Tier Selection */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              selectedTier === tier.id
                ? 'border-cyan-400 bg-cyan-900/20'
                : 'border-slate-700 hover:border-slate-600'
            }`}
            onClick={() => setSelectedTier(tier.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-medium">{tier.name}</h4>
              {tier.recommended && (
                <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded-full">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3">{tier.description}</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Min Empowr:</span>
                <span className="text-cyan-400">{tier.minEmpowr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Min Traditional:</span>
                <span className="text-white">{tier.minTraditional}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Risk Tolerance: {riskTolerance}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Base Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="5"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>5%</span>
            <span>15%</span>
          </div>
        </div>
      </div>

      {/* Assessment Results */}
      <div className="mt-6 p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg">
        <div className="flex items-center space-x-3 mb-3">
          <Calculator size={20} className="text-cyan-400" />
          <h4 className="text-white font-medium">Current Assessment Parameters</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Qualified Applications</p>
            <p className="text-white font-semibold">247 businesses</p>
          </div>
          <div>
            <p className="text-gray-400">Avg. Approval Rate</p>
            <p className="text-green-400 font-semibold">78%</p>
          </div>
          <div>
            <p className="text-gray-400">Portfolio Risk Score</p>
            <p className="text-cyan-400 font-semibold">Moderate</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00d4ff;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00d4ff;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}