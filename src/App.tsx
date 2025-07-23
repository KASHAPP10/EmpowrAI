import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { BusinessDashboard } from './components/BusinessDashboard';
import { LenderDashboard } from './components/LenderDashboard';
import { Navigation } from './components/Navigation';
import { EducationHub } from './components/EducationHub';
import { CapitalConnect } from './components/CapitalConnect';
import { TransparencyPanel } from './components/TransparencyPanel';
import { AIAssistant } from './components/AIAssistant';

export type UserType = 'business' | 'lender' | null;
export type CurrentPage = 'dashboard' | 'education' | 'capital-connect' | 'transparency';

function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');

  const handleLogin = (type: UserType) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage('dashboard');
  };

  if (!userType) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'education':
        return <EducationHub />;
      case 'capital-connect':
        return <CapitalConnect userType={userType} />;
      case 'transparency':
        return <TransparencyPanel />;
      default:
        return userType === 'business' ? <BusinessDashboard /> : <LenderDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        userType={userType} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
      />
      <main className="pt-16">
        {renderCurrentPage()}
      </main>
      <AIAssistant />
    </div>
  );
}

export default App;