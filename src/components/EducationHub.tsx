import React, { useState } from 'react';
import { Play, CheckCircle, Award, Clock, BookOpen, Star } from 'lucide-react';

export function EducationHub() {
  const [completedModules, setCompletedModules] = useState([1, 2]);
  const [selectedCategory, setSelectedCategory] = useState('fundamentals');
  const [selectedTrack, setSelectedTrack] = useState('build-credit');
  
  const moduleCategories = {
    'build-credit': {
      title: 'Build Credit',
      description: 'Establish and improve your business credit profile',
      fundamentals: [
        {
          id: 1,
          title: 'Understanding Business Credit Basics',
          description: 'Learn the fundamentals of business credit and why it matters',
          duration: '30 min',
          reward: '+3 pts',
          completed: true,
        },
        {
          id: 2,
          title: 'Setting Up Your Business Credit Profile',
          description: 'Step-by-step guide to establishing your business credit',
          duration: '45 min',
          reward: '+5 pts',
          completed: true,
        },
        {
          id: 3,
          title: 'Managing Credit Utilization',
          description: 'Optimize your credit usage for better scores',
          duration: '25 min',
          reward: '+4 pts',
          completed: false,
        },
      ],
      intermediate: [
        {
          id: 4,
          title: 'Building Vendor Relationships',
          description: 'Leverage supplier relationships to build credit history',
          duration: '40 min',
          reward: '+6 pts',
          completed: false,
        },
        {
          id: 5,
          title: 'Credit Monitoring and Repair',
          description: 'Monitor your credit and fix errors effectively',
          duration: '50 min',
          reward: '+7 pts',
          completed: false,
        },
      ],
      advanced: [
        {
          id: 6,
          title: 'Advanced Credit Strategies',
          description: 'Sophisticated techniques for credit optimization',
          duration: '60 min',
          reward: '+8 pts',
          completed: false,
        },
      ],
    },
    'business-growth': {
      title: 'Business Growth',
      description: 'Scale your business and improve operational metrics',
      fundamentals: [
        {
          id: 7,
          title: 'Cash Flow Management Basics',
          description: 'Master the fundamentals of cash flow tracking',
          duration: '35 min',
          reward: '+4 pts',
          completed: false,
        },
        {
          id: 8,
          title: 'Customer Acquisition Fundamentals',
          description: 'Build a sustainable customer acquisition strategy',
          duration: '45 min',
          reward: '+5 pts',
          completed: false,
        },
      ],
      intermediate: [
        {
          id: 9,
          title: 'Financial Statement Mastery',
          description: 'Create and analyze compelling financial statements',
          duration: '60 min',
          reward: '+7 pts',
          completed: false,
        },
        {
          id: 10,
          title: 'Digital Marketing Analytics',
          description: 'Leverage online presence to boost your Empowr Score',
          duration: '40 min',
          reward: '+5 pts',
          completed: false,
        },
      ],
      advanced: [
        {
          id: 11,
          title: 'Advanced Growth Metrics',
          description: 'Track and optimize key performance indicators',
          duration: '75 min',
          reward: '+9 pts',
          completed: false,
        },
      ],
    },
    'get-funding': {
      title: 'Get Funding',
      description: 'Prepare for and secure business funding',
      fundamentals: [
        {
          id: 12,
          title: 'Understanding Funding Options',
          description: 'Explore different types of business funding',
          duration: '30 min',
          reward: '+3 pts',
          completed: false,
        },
        {
          id: 13,
          title: 'Preparing Your Business for Investment',
          description: 'Get your business investment-ready',
          duration: '50 min',
          reward: '+6 pts',
          completed: false,
        },
      ],
      intermediate: [
        {
          id: 14,
          title: 'Creating Compelling Pitch Decks',
          description: 'Build presentations that resonate with investors',
          duration: '70 min',
          reward: '+8 pts',
          completed: false,
        },
        {
          id: 15,
          title: 'Due Diligence Preparation',
          description: 'Prepare for investor due diligence process',
          duration: '55 min',
          reward: '+7 pts',
          completed: false,
        },
      ],
      advanced: [
        {
          id: 16,
          title: 'Negotiating Investment Terms',
          description: 'Master the art of investment negotiations',
          duration: '90 min',
          reward: '+10 pts',
          completed: false,
        },
      ],
    },
  };

  const getCurrentModules = () => {
    const track = moduleCategories[selectedTrack];
    return track[selectedCategory] || [];
  };

  const getTotalCompleted = () => {
    let total = 0;
    Object.values(moduleCategories).forEach(track => {
      ['fundamentals', 'intermediate', 'advanced'].forEach(level => {
        if (track[level]) {
          total += track[level].filter(module => completedModules.includes(module.id)).length;
        }
      });
    });
    return total;
  };

  const getTotalModules = () => {
    let total = 0;
    Object.values(moduleCategories).forEach(track => {
      ['fundamentals', 'intermediate', 'advanced'].forEach(level => {
        if (track[level]) {
          total += track[level].length;
        }
      });
    });
    return total;
  };

  const modules = getCurrentModules();
  const totalCompleted = getTotalCompleted();
  const totalModules = getTotalModules();

  const getDifficultyColor = (category) => {
    switch (category) {
      case 'fundamentals':
        return 'text-green-400 bg-green-900';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-900';
      case 'advanced':
        return 'text-red-400 bg-red-900';
      default:
        return 'text-gray-400 bg-gray-900';
    }
  };

  const trackTabs = [
    {
      id: 'build-credit',
      title: 'Build Credit',
      icon: '💳',
    },
    {
      id: 'business-growth',
      title: 'Business Growth',
      icon: '📈',
    },
    {
      id: 'get-funding',
      title: 'Get Funding',
      icon: '💰',
    },
  ];

  const categoryTabs = [
    {
      id: 'fundamentals',
      title: 'Fundamentals',
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
    },
    {
      id: 'advanced',
      title: 'Advanced',
    },
  ];

  const achievements = [
    { name: 'Quick Learner', icon: '⚡', description: 'Completed first course in under 30 minutes' },
    { name: 'Knowledge Seeker', icon: '🎓', description: 'Completed 3 courses' },
    { name: 'Credit Builder', icon: '💳', description: 'Improved score by 10+ points through education' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Education Hub</h1>
        <p className="text-gray-400">Boost your Empowr Score through gamified learning modules</p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen size={24} className="text-cyan-400" />
            <span className="text-lg font-semibold text-white">Progress</span>
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {totalCompleted}/{totalModules}
          </div>
          <p className="text-gray-400">Modules Completed</p>
          <div className="mt-4 w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(totalCompleted / totalModules) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <Star size={24} className="text-yellow-400" />
            <span className="text-lg font-semibold text-white">Points Earned</span>
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">+9</div>
          <p className="text-gray-400">Empowr Score Boost</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <Award size={24} className="text-purple-400" />
            <span className="text-lg font-semibold text-white">Achievements</span>
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-2">{achievements.length}</div>
          <p className="text-gray-400">Badges Unlocked</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Your Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg">
              <div className="text-2xl">{achievement.icon}</div>
              <div>
                <p className="text-white font-medium">{achievement.name}</p>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-6">Learning Tracks</h3>
        
        {/* Track Tabs */}
        <div className="flex space-x-1 mb-6 bg-slate-800 rounded-lg p-1">
          {trackTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTrack(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
                selectedTrack === tab.id
                  ? 'bg-cyan-400 text-black'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Track Description */}
        <div className="mb-6 p-4 bg-slate-800 rounded-lg">
          <h4 className="text-white font-semibold mb-2">{moduleCategories[selectedTrack].title}</h4>
          <p className="text-gray-400">{moduleCategories[selectedTrack].description}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-1 mb-6">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === tab.id
                  ? 'bg-cyan-400 text-black'
                  : 'bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">
            {moduleCategories[selectedTrack].title} - {categoryTabs.find(c => c.id === selectedCategory)?.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedCategory)}`}>
            {categoryTabs.find(c => c.id === selectedCategory)?.title}
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">{module.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{module.description}</p>
                </div>
                {module.completed && (
                  <CheckCircle size={24} className="text-green-400 ml-3" />
                )}
              </div>

              <div className="flex items-center space-x-4 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-gray-400">{module.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(selectedCategory)}`}>
                  {categoryTabs.find(c => c.id === selectedCategory)?.title}
                </span>
                <span className="text-cyan-400 font-medium">{module.reward}</span>
              </div>

              <button
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  module.completed
                    ? 'bg-green-900 text-green-400 cursor-default'
                    : 'bg-cyan-400 text-black hover:bg-cyan-300'
                }`}
                disabled={module.completed}
              >
                {module.completed ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>Start Module</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}