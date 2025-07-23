import React from 'react';
import { Home, GraduationCap, Users, Shield, BarChart3, LogOut } from 'lucide-react';
import type { UserType, CurrentPage } from '../App';

interface NavigationProps {
  userType: UserType;
  currentPage: CurrentPage;
  onPageChange: (page: CurrentPage) => void;
  onLogout: () => void;
}

export function Navigation({ userType, currentPage, onPageChange, onLogout }: NavigationProps) {
  const businessMenuItems = [
    { id: 'dashboard' as CurrentPage, label: 'Dashboard', icon: Home },
    { id: 'education' as CurrentPage, label: 'Education Hub', icon: GraduationCap },
    { id: 'capital-connect' as CurrentPage, label: 'Capital Connect', icon: Users },
    { id: 'transparency' as CurrentPage, label: 'Transparency', icon: Shield },
  ];

  const lenderMenuItems = [
    { id: 'dashboard' as CurrentPage, label: 'Dashboard', icon: Home },
    { id: 'capital-connect' as CurrentPage, label: 'Deal Flow', icon: Users },
    { id: 'transparency' as CurrentPage, label: 'Methodology', icon: Shield },
  ];

  const menuItems = userType === 'business' ? businessMenuItems : lenderMenuItems;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">Empowr AI</span>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-cyan-400/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}