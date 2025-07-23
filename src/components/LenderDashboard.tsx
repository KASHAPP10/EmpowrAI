import React, { useState } from 'react';
import { Filter, Search, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { RiskAssessment } from './RiskAssessment';

export function LenderDashboard() {
  const [selectedTier, setSelectedTier] = useState(1);

  const dashboardStats = [
    { label: 'Active Applications', value: '247', icon: Users, color: 'text-cyan-400' },
    { label: 'Approved This Month', value: '$2.4M', icon: DollarSign, color: 'text-green-400' },
    { label: 'Portfolio Performance', value: '94.2%', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Avg. Empowr Score', value: '76', icon: Target, color: 'text-purple-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Lender Dashboard</h1>
        <p className="text-gray-400">Advanced risk assessment and portfolio management tools</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <Icon size={24} className={stat.color} />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Risk Assessment Module */}
      <RiskAssessment />

      {/* Applications Table */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Applications</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-gray-300 hover:text-white hover:border-slate-500 transition-colors duration-200">
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Business</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Traditional Score</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Empowr Score</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Viability</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Fresh Eats Catering', traditional: 685, empowr: 84, viability: 'High', amount: '$150k', industry: 'Food Service' },
                { name: 'TechFlow Solutions', traditional: 720, empowr: 78, viability: 'Good', amount: '$300k', industry: 'Technology' },
                { name: 'Green Energy Co.', traditional: 640, empowr: 91, viability: 'High', amount: '$500k', industry: 'Clean Energy' },
                { name: 'Urban Beauty Salon', traditional: 610, empowr: 73, viability: 'Good', amount: '$75k', industry: 'Beauty' },
              ].map((app, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-800 transition-colors duration-200">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-medium">{app.name}</p>
                      <p className="text-gray-400 text-sm">{app.industry}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white">{app.traditional}</td>
                  <td className="py-4 px-4">
                    <span className="text-cyan-400 font-semibold">{app.empowr}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      app.viability === 'High' 
                        ? 'bg-green-900 text-green-400' 
                        : 'bg-cyan-900 text-cyan-400'
                    }`}>
                      {app.viability} Viability
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{app.amount}</td>
                  <td className="py-4 px-4">
                    <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}