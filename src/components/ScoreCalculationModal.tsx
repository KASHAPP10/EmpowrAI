import React from 'react';
import { X, Calculator, PieChart } from 'lucide-react';

interface ScoreCalculationModalProps {
  empowrScore: number;
  traditionalScore: number;
  onClose: () => void;
}

export function ScoreCalculationModal({ empowrScore, traditionalScore, onClose }: ScoreCalculationModalProps) {
  const blendedScore = Math.round((empowrScore * 0.6) + ((traditionalScore - 300) / 550 * 100 * 0.4));
  
  const empowrFactors = [
    { factor: 'Cash Flow Consistency', weight: 25, score: 82 },
    { factor: 'Customer Reviews & Social Proof', weight: 20, score: 76 },
    { factor: 'Payment History (Vendors/Rent)', weight: 18, score: 85 },
    { factor: 'Business Registration & Compliance', weight: 15, score: 90 },
    { factor: 'Digital Presence & Engagement', weight: 12, score: 68 },
    { factor: 'Industry Benchmarks', weight: 10, score: 72 },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <Calculator size={24} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">How Your Score is Calculated</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Blended Score Formula */}
          <div className="bg-slate-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Blended Viability Score Formula</h3>
            <div className="text-center">
              <div className="text-2xl font-mono text-cyan-400 mb-2">
                ({empowrScore} × 60%) + ({Math.round((traditionalScore - 300) / 550 * 100)} × 40%) = {blendedScore}
              </div>
              <p className="text-gray-400 text-sm">
                Empowr Score weighted at 60% + Normalized Traditional Score weighted at 40%
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Empowr Score Breakdown */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <PieChart size={20} className="text-cyan-400" />
                <span>Empowr Score Breakdown</span>
              </h3>
              <div className="space-y-3">
                {empowrFactors.map((factor, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm">{factor.factor}</span>
                      <span className="text-cyan-400 font-semibold">{factor.score}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">Weight: {factor.weight}%</span>
                      <span className="text-gray-400 text-xs">
                        Contribution: {Math.round(factor.score * factor.weight / 100)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${factor.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional Score Explanation */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Traditional Credit Score</h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-white">{traditionalScore}</div>
                  <p className="text-gray-400 text-sm">FICO Score (300-850 range)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payment History:</span>
                    <span className="text-white">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credit Utilization:</span>
                    <span className="text-white">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credit History Length:</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credit Mix:</span>
                    <span className="text-white">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">New Credit:</span>
                    <span className="text-white">10%</span>
                  </div>
                </div>
              </div>

              {/* Why We Blend */}
              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-4 border border-cyan-500/20">
                <h4 className="text-white font-medium mb-2">Why We Blend Scores</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Traditional credit scores often miss the full picture for minority and women-owned businesses. 
                  By combining traditional credit data with alternative data sources, we provide a more 
                  comprehensive view of your business's creditworthiness and potential.
                </p>
              </div>
            </div>
          </div>

          {/* Real-time Updates */}
          <div className="mt-6 p-4 bg-slate-800 rounded-lg">
            <h4 className="text-white font-medium mb-3">Real-Time Score Updates</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-semibold">+5 points</div>
                <p className="text-gray-400">Upload bank statements</p>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-semibold">+3 points</div>
                <p className="text-gray-400">Complete education module</p>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-semibold">+7 points</div>
                <p className="text-gray-400">Add vendor references</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}