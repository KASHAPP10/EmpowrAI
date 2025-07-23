import React, { useState } from 'react';
import { Filter, Search, MapPin, TrendingUp, Users, Star, Bookmark, Eye, DollarSign, CreditCard, Smartphone, CheckCircle, Upload, Building2, Target } from 'lucide-react';
import type { UserType } from '../App';

interface CapitalConnectProps {
  userType: UserType;
}

export function CapitalConnect({ userType }: CapitalConnectProps) {
  const [selectedFilters, setSelectedFilters] = useState({
    stage: '',
    industry: '',
    region: '',
  });
  const [selectedStage, setSelectedStage] = useState('seed');
  const [activeTab, setActiveTab] = useState('businesses');

  const businessesByStage = {
    seed: [
      {
        id: 1,
        name: 'GreenTech Innovations',
        founder: 'Maria Rodriguez',
        industry: 'Clean Energy',
        location: 'Austin, TX',
        empowrScore: 89,
        mrr: '$45K',
        stage: 'Seed',
        tags: ['Product-Market Fit', 'Scaling', 'Underbanked Champion'],
        description: 'Revolutionary solar panel technology for residential markets',
        image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        growth: '+127%',
      },
      {
        id: 2,
        name: 'Urban Eats Network',
        founder: 'James Washington',
        industry: 'Food Tech',
        location: 'Atlanta, GA',
        empowrScore: 84,
        mrr: '$32K',
        stage: 'Seed',
        tags: ['Product-Market Fit', 'Community Impact'],
        description: 'Connecting local restaurants with community-supported agriculture',
        image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        growth: '+89%',
      },
    ],
    seriesA: [
      {
        id: 3,
        name: 'TechBridge Learning',
        founder: 'Priya Patel',
        industry: 'EdTech',
        location: 'San Francisco, CA',
        empowrScore: 92,
        mrr: '$178K',
        stage: 'Series A',
        tags: ['Scaling', 'High Growth', 'Social Impact'],
        description: 'AI-powered coding education for underrepresented communities',
        image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        growth: '+156%',
      },
      {
        id: 4,
        name: 'Healthcare Connect',
        founder: 'Dr. Angela Chen',
        industry: 'HealthTech',
        location: 'Seattle, WA',
        empowrScore: 87,
        mrr: '$154K',
        stage: 'Series A',
        tags: ['Product-Market Fit', 'Healthcare Innovation'],
        description: 'Telemedicine platform focused on rural and underserved communities',
        image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        growth: '+98%',
      },
    ],
    seriesB: [
      {
        id: 5,
        name: 'FinFlow Solutions',
        founder: 'Marcus Thompson',
        industry: 'FinTech',
        location: 'New York, NY',
        empowrScore: 94,
        mrr: '$425K',
        stage: 'Series B',
        tags: ['Market Leader', 'Proven Scale', 'Enterprise Ready'],
        description: 'B2B payment processing for minority-owned businesses',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        growth: '+78%',
      },
    ],
  };

  const vcsByStage = {
    seed: [
      {
        id: 1,
        name: 'Catalyst Ventures',
        focus: 'CleanTech & Sustainability',
        checkSize: '$250K - $2M',
        location: 'San Francisco, CA',
        portfolio: 45,
        criteria: ['Pre-revenue to $5M ARR', 'Diverse founding teams', 'Climate impact focus'],
        description: 'Early-stage VC focused on climate solutions and diverse founders',
      },
      {
        id: 2,
        name: 'Impact Capital Partners',
        focus: 'Social Impact Startups',
        checkSize: '$500K - $3M',
        location: 'Austin, TX',
        portfolio: 32,
        criteria: ['Social impact metrics', 'Underserved markets', 'Scalable business models'],
        description: 'Investing in startups that create positive social change',
      },
    ],
    seriesA: [
      {
        id: 3,
        name: 'Growth Equity Fund',
        focus: 'B2B SaaS & FinTech',
        checkSize: '$5M - $15M',
        location: 'New York, NY',
        portfolio: 28,
        criteria: ['$2M+ ARR', 'Strong unit economics', 'Proven product-market fit'],
        description: 'Series A specialist in enterprise software and financial services',
      },
      {
        id: 4,
        name: 'Diverse Growth Fund',
        focus: 'Minority-Led Businesses',
        checkSize: '$3M - $10M',
        location: 'Chicago, IL',
        portfolio: 38,
        criteria: ['Diverse leadership', 'Scalable technology', 'Clear path to profitability'],
        description: 'Supporting minority and women-led startups at scale',
      },
    ],
    seriesB: [
      {
        id: 5,
        name: 'Scale Ventures',
        focus: 'Enterprise & Infrastructure',
        checkSize: '$10M - $25M',
        location: 'Palo Alto, CA',
        portfolio: 22,
        criteria: ['$10M+ ARR', 'Enterprise customers', 'International expansion ready'],
        description: 'Late-stage growth capital for proven business models',
      },
    ],
  };

  const businesses = businessesByStage[selectedStage] || [];
  const vcs = vcsByStage[selectedStage] || [];

  const stageTabs = [
    {
      id: 'seed',
      title: 'Seed',
      description: 'Early-stage startups with initial traction',
    },
    {
      id: 'seriesA',
      title: 'Series A',
      description: 'Scaling companies with proven product-market fit',
    },
    {
      id: 'seriesB',
      title: 'Series B+',
      description: 'Growth-stage companies ready for expansion',
    },
  ];

  const mainTabs = [
    {
      id: 'businesses',
      title: 'Businesses',
      icon: Building2,
    },
    {
      id: 'investment-criteria',
      title: 'Investment Criteria',
      icon: Target,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-cyan-400';
    return 'text-yellow-400';
  };

  if (userType === 'business') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Capital Connect</h1>
          <p className="text-gray-400">Connect with VCs and lenders interested in high-potential businesses</p>
        </div>

        {/* Financial Account Verification */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Connect Your Financial Accounts</h3>
          <p className="text-gray-400 mb-6">
            Verify your payment history and cash flow patterns by connecting your financial accounts. 
            This helps boost your Empowr Score and increases investor confidence.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <button className="flex flex-col items-center p-4 bg-slate-800 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                <CreditCard size={24} className="text-white" />
              </div>
              <span className="text-white font-medium">Venmo</span>
              <span className="text-gray-400 text-xs">+4 pts</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-slate-800 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                <Smartphone size={24} className="text-white" />
              </div>
              <span className="text-white font-medium">Zelle</span>
              <span className="text-gray-400 text-xs">+4 pts</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-slate-800 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3">
                <DollarSign size={24} className="text-white" />
              </div>
              <span className="text-white font-medium">CashApp</span>
              <span className="text-gray-400 text-xs">+4 pts</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-slate-800 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-3">
                <CreditCard size={24} className="text-white" />
              </div>
              <span className="text-white font-medium">PayPal</span>
              <span className="text-gray-400 text-xs">+5 pts</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-green-400">Bank-level encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-green-400">Read-only access</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-green-400">Instantly revocable</span>
            </div>
          </div>
        </div>

        {/* Qualification Status */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 border border-cyan-500/20 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">VC Marketplace Status</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-green-400 font-medium">Listed in VC Marketplace</span> - Your strong Empowr Score and verified traction have unlocked premium investor matching.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">Profile Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">Traction Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">High Empowr Score</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-cyan-400 mb-1">12</div>
              <p className="text-gray-400">Interested Investors</p>
            </div>
          </div>
        </div>

        {/* Business Profile Card */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Your Investor Profile</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-xl">SE</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white">Sarah's Eco Solutions</h4>
                  <p className="text-gray-400 mb-2">Founded by Sarah Martinez</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-cyan-400">CleanTech</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-gray-400">Austin, TX</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Revolutionary solar panel technology for residential markets with 127% revenue growth and strong community impact.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-900 text-green-400 text-sm rounded-full">Investor Ready</span>
                <span className="px-3 py-1 bg-cyan-900 text-cyan-400 text-sm rounded-full">Community Verified</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-400 text-sm rounded-full">Product-Market Fit</span>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
                  <Upload size={16} />
                  <span>Upload Pitch Deck</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors duration-200">
                  <Users size={16} />
                  <span>Schedule Intro Call</span>
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">78</div>
                <p className="text-gray-400 text-sm">Empowr Score</p>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">$45K</div>
                <p className="text-gray-400 text-sm">Monthly Revenue</p>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">+127%</div>
                <p className="text-gray-400 text-sm">Growth Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Notifications */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Investor Interest</h3>
          <div className="space-y-4">
            {[
              { name: 'Catalyst Ventures', focus: 'CleanTech & Sustainability', amount: '$2-5M', timeAgo: '2 hours ago', action: 'Requested intro' },
              { name: 'Impact Capital Partners', focus: 'Social Impact Startups', amount: '$1-3M', timeAgo: '1 day ago', action: 'Viewed profile' },
              { name: 'Diverse Growth Fund', focus: 'Minority-Led Businesses', amount: '$500K-2M', timeAgo: '3 days ago', action: 'Bookmarked' },
            ].map((investor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <div>
                  <p className="text-white font-medium">{investor.name}</p>
                  <p className="text-gray-400 text-sm">{investor.focus}</p>
                  <p className="text-cyan-400 text-xs">{investor.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-medium">{investor.amount}</p>
                  <p className="text-gray-400 text-sm">{investor.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Lender/VC View
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Deal Flow</h1>
        <p className="text-gray-400">Discover high-potential businesses with verified traction and strong Empowr Scores</p>
      </div>

      {/* Filters */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        {/* Main Tabs */}
        <div className="flex space-x-1 mb-6 bg-slate-800 rounded-lg p-1">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-400 text-black'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Stage Tabs */}
        <div className="flex space-x-1 mb-6">
          {stageTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStage(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedStage === tab.id
                  ? 'bg-cyan-400 text-black'
                  : 'bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Stage Description */}
        <div className="mb-6 p-4 bg-slate-800 rounded-lg">
          <p className="text-gray-400">{stageTabs.find(t => t.id === selectedStage)?.description}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm">Clear All</button>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <select className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white">
            <option>All Stages</option>
            <option>Pre-Seed</option>
            <option>Seed</option>
            <option>Series A</option>
            <option>Series B+</option>
          </select>
          <select className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white">
            <option>All Industries</option>
            <option>CleanTech</option>
            <option>FinTech</option>
            <option>HealthTech</option>
            <option>EdTech</option>
            <option>Food Tech</option>
          </select>
          <select className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white">
            <option>All Regions</option>
            <option>West Coast</option>
            <option>East Coast</option>
            <option>Midwest</option>
            <option>South</option>
          </select>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search businesses..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'businesses' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {businesses.map((business) => (
            <div key={business.id} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/30 transition-all duration-200">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={business.image}
                  alt={business.founder}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{business.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">Founded by {business.founder}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-400">{business.industry}</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-gray-400">{business.location}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <Bookmark size={20} />
                </button>
              </div>

              <p className="text-gray-300 text-sm mb-4">{business.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className={`text-xl font-bold ${getScoreColor(business.empowrScore)}`}>
                    {business.empowrScore}
                  </p>
                  <p className="text-xs text-gray-400">Empowr Score</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{business.mrr}</p>
                  <p className="text-xs text-gray-400">Monthly Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-green-400">{business.growth}</p>
                  <p className="text-xs text-gray-400">Growth Rate</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {business.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
                  <Users size={16} />
                  <span>Connect</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors duration-200">
                  <Eye size={16} />
                  <span>Learn More</span>
                </button>
                <button className="px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200">
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Investment Criteria Tab */
        <div className="grid md:grid-cols-2 gap-6">
          {vcs.map((vc) => (
            <div key={vc.id} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/30 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{vc.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">{vc.focus}</p>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-gray-400 text-sm">{vc.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-semibold">{vc.checkSize}</p>
                  <p className="text-gray-400 text-xs">{vc.portfolio} companies</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{vc.description}</p>

              {/* Investment Criteria */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Investment Criteria:</h4>
                <div className="space-y-1">
                  {vc.criteria.map((criterion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-xs">{criterion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200">
                  <Users size={16} />
                  <span>Connect</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors duration-200">
                  <Eye size={16} />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Transparency Note */}
      <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-gray-400 text-sm text-center">
          <strong className="text-white">Transparency Note:</strong> Only businesses with strong Empowr Scores (70+), verified traction metrics, and completed financial verification are featured in our marketplace. All data is validated through our secure verification process.
        </p>
      </div>
    </div>
  );
}