import React, { useState } from 'react';
import { TrendingUp, Upload, AlertCircle, Award, RefreshCw } from 'lucide-react';
import { ScoreDisplay } from './ScoreDisplay';
import { ApplicationProgress } from './ApplicationProgress';
import { ScoreCalculationModal } from './ScoreCalculationModal';

export function BusinessDashboard() {
  const [empowrScore, setEmpowrScore] = useState(78);
  const [traditionalScore, setTraditionalScore] = useState(650);
  const [showCalculationModal, setShowCalculationModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Maansi!</h1>
        <p className="text-gray-400">Your business is showing strong growth potential. Keep building your Empowr Score!</p>
      </div>

      {/* Score Dashboard */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <ScoreDisplay 
            empowrScore={empowrScore} 
            traditionalScore={traditionalScore}
            onShowCalculation={() => setShowCalculationModal(true)}
          />
        </div>
        
        {/* Quick Actions */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Upload size={18} className="text-cyan-400" />
                <span className="text-white font-medium">Upload Bank Data</span>
              </div>
              <span className="text-cyan-400 text-sm">+5 pts</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Award size={18} className="text-cyan-400" />
                <span className="text-white font-medium">Complete Course</span>
              </div>
              <span className="text-cyan-400 text-sm">+3 pts</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <RefreshCw size={18} className="text-cyan-400" />
                <span className="text-white font-medium">Update Profile</span>
              </div>
              <span className="text-cyan-400 text-sm">+2 pts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Application Progress */}
      <ApplicationProgress />

      {/* Recent Activity */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white font-medium">Empowr Score increased by +5</p>
              <p className="text-gray-400 text-sm">Financial literacy course completed</p>
            </div>
            <span className="text-gray-400 text-sm">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white font-medium">New VC match available</p>
              <p className="text-gray-400 text-sm">3 investors are interested in your profile</p>
            </div>
            <span className="text-gray-400 text-sm">1 day ago</span>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white font-medium">Bank transaction data processed</p>
              <p className="text-gray-400 text-sm">Your cash flow patterns look strong</p>
            </div>
            <span className="text-gray-400 text-sm">3 days ago</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 border border-cyan-500/20">
        <div className="flex items-start space-x-4">
          <AlertCircle size={24} className="text-cyan-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Boost Your Score</h3>
            <p className="text-gray-300 mb-4">
              You're just 7 points away from "High Viability" status. Complete these actions to improve your profile:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Upload 3 months of vendor payment history (+4 pts)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Add customer testimonials (+2 pts)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Complete business plan module (+3 pts)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Calculation Modal */}
      {showCalculationModal && (
        <ScoreCalculationModal 
          empowrScore={empowrScore}
          traditionalScore={traditionalScore}
          onClose={() => setShowCalculationModal(false)}
        />
      )}
    </div>
  );
}