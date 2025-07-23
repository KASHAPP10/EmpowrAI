import React from 'react';
import { HelpCircle, TrendingUp, Info, Calculator } from 'lucide-react';

interface ScoreDisplayProps {
  empowrScore: number;
  traditionalScore: number;
  onShowCalculation?: () => void;
}

export function ScoreDisplay({ empowrScore, traditionalScore, onShowCalculation }: ScoreDisplayProps) {
  // Calculate blended viability score (weighted average)
  const blendedScore = Math.round((empowrScore * 0.6) + ((traditionalScore - 300) / 550 * 100 * 0.4));
  
  const getViabilityStatus = (score: number) => {
    if (score >= 80) return { 
      label: 'High Viability', 
      color: 'text-green-400', 
      bg: 'bg-green-400',
      description: 'Excellent creditworthiness with strong alternative data signals'
    };
    if (score >= 65) return { 
      label: 'Moderate Risk', 
      color: 'text-cyan-400', 
      bg: 'bg-cyan-400',
      description: 'Good potential with some areas for improvement'
    };
    if (score >= 45) return { 
      label: 'Emerging', 
      color: 'text-yellow-400', 
      bg: 'bg-yellow-400',
      description: 'Developing business with growth potential'
    };
    return { 
      label: 'Building', 
      color: 'text-orange-400', 
      bg: 'bg-orange-400',
      description: 'Early stage with room for significant improvement'
    };
  };

  const viability = getViabilityStatus(blendedScore);

  const getScoreContributors = () => {
    const contributors = [];
    if (empowrScore >= 75) contributors.push('Strong social proof');
    if (traditionalScore >= 700) contributors.push('Excellent credit history');
    if (traditionalScore < 650) contributors.push('Limited credit history');
    if (empowrScore >= 80) contributors.push('Stable cash flow');
    if (empowrScore >= 70) contributors.push('Verified business data');
    return contributors;
  };

  const contributors = getScoreContributors();

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Blended Viability Score</h2>
        <button 
          onClick={onShowCalculation}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <HelpCircle size={20} />
        </button>
      </div>

      {/* Blended Score Visualization */}
      <div className="text-center mb-6">
        <div className="relative w-48 h-48 mx-auto mb-4">
          {/* Background circle */}
          <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgb(51 65 85)"
              strokeWidth="12"
              fill="none"
            />
            {/* Blended score arc */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#blendedGradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(blendedScore / 100) * 440} 440`}
              strokeLinecap="round"
              className="transition-all duration-2000 ease-out"
            />
            <defs>
              <linearGradient id="blendedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={viability.bg.includes('green') ? 'rgb(34 197 94)' : 
                                           viability.bg.includes('cyan') ? 'rgb(6 182 212)' :
                                           viability.bg.includes('yellow') ? 'rgb(234 179 8)' : 'rgb(249 115 22)'} />
                <stop offset="100%" stopColor="rgb(6 182 212)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{blendedScore}</div>
              <div className="text-sm text-gray-400">/ 100</div>
            </div>
          </div>
        </div>
        
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${viability.bg.replace('bg-', 'bg-').replace('400', '900')}`}>
          <div className={`w-3 h-3 ${viability.bg} rounded-full`}></div>
          <span className={`text-lg font-semibold ${viability.color}`}>{viability.label}</span>
        </div>
        <p className="text-gray-400 text-sm mt-2">{viability.description}</p>
      </div>

      {/* Component Scores */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Traditional Credit Score */}
        <div className="text-center">
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgb(51 65 85)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgb(148 163 184)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(traditionalScore / 850) * 314} 314`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{traditionalScore}</div>
                <div className="text-xs text-gray-400">/ 850</div>
              </div>
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-300 mb-1">Traditional Credit</h3>
          <p className="text-xs text-gray-400">Weight: 40%</p>
        </div>

        {/* Empowr Score */}
        <div className="text-center">
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgb(51 65 85)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(empowrScore / 100) * 314} 314`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(34 197 94)" />
                  <stop offset="100%" stopColor="rgb(6 182 212)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{empowrScore}</div>
                <div className="text-xs text-gray-400">/ 100</div>
              </div>
            </div>
          </div>
          <h3 className="text-sm font-medium text-cyan-400 mb-1">Empowr Score</h3>
          <p className="text-xs text-gray-400">Weight: 60%</p>
        </div>
      </div>

      {/* Score Contributors */}
      <div className="p-4 bg-slate-800 rounded-lg mb-4">
        <h4 className="text-white font-medium mb-3 flex items-center space-x-2">
          <Info size={16} className="text-cyan-400" />
          <span>Key Contributors</span>
        </h4>
        <div className="space-y-2">
          {contributors.map((contributor, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">{contributor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button 
          onClick={onShowCalculation}
          className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-slate-800 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors duration-200"
        >
          <Calculator size={16} />
          <span>How It's Calculated</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
          <TrendingUp size={16} />
          <span>Improve Score</span>
        </button>
      </div>
    </div>
  );
}