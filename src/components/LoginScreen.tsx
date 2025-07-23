import React, { useState } from 'react';
import { Building2, Users, ArrowRight } from 'lucide-react';
import type { UserType } from '../App';

interface LoginScreenProps {
  onLogin: (type: UserType) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [selectedType, setSelectedType] = useState<'business' | 'lender' | null>(null);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
            Empowr AI
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering minority and women-owned businesses through AI-driven alternative credit scoring 
            and direct connections to capital
          </p>
        </div>

        {/* Login Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Business Owner Login */}
          <div 
            className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
              selectedType === 'business' ? 'scale-105' : ''
            }`}
            onClick={() => setSelectedType('business')}
          >
            <div className={`bg-slate-900 border-2 rounded-2xl p-8 transition-all duration-300 ${
              selectedType === 'business' 
                ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                : 'border-slate-700 hover:border-slate-600'
            }`}>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 mx-auto">
                <Building2 size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">Business Owner</h3>
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
                Access capital through our revolutionary blended scoring system that recognizes your true business potential
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Upload alternative data sources
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Track your Empowr Score in real-time
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Connect with VCs and lenders
                </li>
              </ul>
            </div>
          </div>

          {/* Lender/VC Login */}
          <div 
            className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
              selectedType === 'lender' ? 'scale-105' : ''
            }`}
            onClick={() => setSelectedType('lender')}
          >
            <div className={`bg-slate-900 border-2 rounded-2xl p-8 transition-all duration-300 ${
              selectedType === 'lender' 
                ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                : 'border-slate-700 hover:border-slate-600'
            }`}>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">Bank / Lender / VC</h3>
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
                Discover high-potential businesses through comprehensive risk assessment and alternative data insights
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Tiered risk assessment tools
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Access to pre-qualified businesses
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Advanced portfolio analytics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        {selectedType && (
          <div className="text-center mt-12">
            <button
              onClick={() => onLogin(selectedType)}
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105 flex items-center mx-auto gap-3"
            >
              Continue
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}