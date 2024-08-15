"use client"
import UserProfile from '@/components/Profile';
import ThemeSettings from '@/components/ThemeSettings';
import tabs from '@/data/settingsTabs';
import { useState } from 'react';


const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile/>;
      case 'privacy':
        return <div>Privacy Settings Content</div>;
      case 'notifications':
        return <div>Notification Settings Content</div>;
      case 'theme':
        return <ThemeSettings/>;
      case 'application':
        return <div>Application Settings Content</div>;
      case 'integrations':
        return <div>Integrations Content</div>;
      case 'security':
        return <div>Security Settings Content</div>;
      case 'billing':
        return <div>Billing Information Content</div>;
      default:
        return <div>Profile Settings Content</div>;
    }
  };

  return (
    <div className="settings-page flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="tabs lg:w-1/4 flex flex-col space-y-2 p-4 bg-white dark:bg-gray-800 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-2 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
              activeTab === tab.key ? 'bg-gray-300 dark:bg-gray-600' : ''
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content lg:w-3/4 max-h-full p-4 bg-white dark:bg-gray-800 shadow-md m-4 rounded-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
