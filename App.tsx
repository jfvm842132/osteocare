
import React, { useState, useCallback } from 'react';
import { PatientProfile, Page } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ChatPage from './pages/ChatPage';
import GuidePage from './pages/GuidePage';
import ExercisesPage from './pages/ExercisesPage';
import ProfilePage from './pages/ProfilePage';
import { useDarkMode } from './hooks/useDarkMode';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.CHAT);
  const [profile, setProfile] = useState<PatientProfile>({
    name: '',
    age: 30,
    discProblem: 'Nenhum',
    activityLevel: 'Sedentário',
  });
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleProfileUpdate = useCallback((newProfile: PatientProfile) => {
    setProfile(newProfile);
    setCurrentPage(Page.CHAT); 
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.GUIDE:
        return <GuidePage />;
      case Page.EXERCISES:
        return <ExercisesPage />;
      case Page.PROFILE:
        return <ProfilePage currentProfile={profile} onSave={handleProfileUpdate} />;
      case Page.CHAT:
      default:
        return <ChatPage profile={profile} />;
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow overflow-y-auto pb-24 px-4 pt-4">
        {renderPage()}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 p-2 bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>Esta aplicação tem carácter informativo e não substitui a avaliação por um profissional de saúde.</p>
        <p>Conteúdo clínico por João – Osteopata.</p>
      </footer>
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
