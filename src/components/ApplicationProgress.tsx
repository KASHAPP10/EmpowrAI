import React, { useState } from 'react';
import { Upload, CheckCircle, Clock, FileText, Smartphone, Star } from 'lucide-react';

export function ApplicationProgress() {
  const [uploadedSources, setUploadedSources] = useState([
    { id: 1, name: 'Bank Transactions', status: 'completed', impact: '+8 pts' },
    { id: 2, name: 'POS System Data', status: 'completed', impact: '+6 pts' },
    { id: 3, name: 'Social Media Analytics', status: 'processing', impact: '+4 pts' },
    { id: 4, name: 'Customer Reviews', status: 'pending', impact: '+5 pts' },
    { id: 5, name: 'Vendor Payment History', status: 'pending', impact: '+7 pts' },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'processing':
        return <Clock size={20} className="text-yellow-400" />;
      default:
        return <Upload size={20} className="text-gray-400" />;
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Real-Time Application Progress</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>Auto-updates enabled</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Data Sources */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-4">Alternative Data Sources</h4>
          <div className="space-y-3">
            {uploadedSources.map((source) => (
              <div
                key={source.id}
                className="flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(source.status)}
                  <span className="text-white font-medium">{source.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-cyan-400 text-sm font-medium">{source.impact}</span>
                  <p className="text-xs text-gray-400 capitalize">{source.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload New Data */}
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-4">Upload Additional Sources</h4>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-4 border-2 border-dashed border-slate-600 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all duration-200">
              <FileText size={24} className="text-gray-400" />
              <div className="text-left">
                <p className="text-white font-medium">Financial Statements</p>
                <p className="text-xs text-gray-400">PDF, Excel formats accepted</p>
              </div>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 border-2 border-dashed border-slate-600 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all duration-200">
              <Smartphone size={24} className="text-gray-400" />
              <div className="text-left">
                <p className="text-white font-medium">App Store Metrics</p>
                <p className="text-xs text-gray-400">Downloads, ratings, reviews</p>
              </div>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 border-2 border-dashed border-slate-600 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all duration-200">
              <Star size={24} className="text-gray-400" />
              <div className="text-left">
                <p className="text-white font-medium">Certification & Awards</p>
                <p className="text-xs text-gray-400">Industry recognition documents</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Current Progress: 68% Complete</p>
            <p className="text-sm text-gray-400">Upload 2 more sources to unlock "Investor Ready" status</p>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 text-2xl font-bold">+14</p>
            <p className="text-xs text-gray-400">Points added today</p>
          </div>
        </div>
        <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-2/3 transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  );
}