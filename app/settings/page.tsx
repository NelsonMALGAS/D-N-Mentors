"use client";
import UserProfile from '@/components/Profile';
import ThemeSettings from '@/components/ThemeSettings';
import tabs from '@/data/settingsTabs';
import { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab]); 

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Profile Settings</h2>
            <UserProfile />
          </div>
        );
      case 'privacy':
        return <div>Privacy Settings Content</div>;
      case 'notifications':
        return <div>Notification Settings Content</div>;
      case 'theme':
        return <ThemeSettings />;
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
    <div className="settings-page flex flex-col lg:flex-row min-h-screen bg-gray-900">
      {/* Tabs Menu */}
      <div className="tabs lg:w-1/4 flex flex-col space-y-2 p-4 bg-gray-800 shadow-md sticky top-0">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-2 text-left rounded-md flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              activeTab === tab.key ? 'bg-gray-300 text-gray-900 border-l-4 border-blue-500' : ''
            }`}
            aria-current={activeTab === tab.key ? 'page' : undefined}
          >
            {/* Conditionally render the icon if it exists */}
            {tab.icon && <tab.icon className="mr-2" />}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="content lg:w-3/4 max-h-full p-4 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg m-4 rounded-md transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>

      {/* Save Button */}
      <button className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;
