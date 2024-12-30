import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'account', name: 'Account', icon: '⚙️' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'api', name: 'API', icon: '🔌' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/128"
                  alt="Profile"
                  className="w-32 h-32 rounded-full"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Profile Photo</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Update your profile picture
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  defaultValue="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  defaultValue="Doe"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  defaultValue="john@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Bio
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  defaultValue="I'm a software developer..."
                />
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Account Settings</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Manage your account preferences
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                    Language
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Select your preferred language
                  </p>
                </div>
                <select className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                    Time Zone
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Choose your time zone
                  </p>
                </div>
                <select className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                    Dark Mode
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Toggle dark mode
                  </p>
                </div>
                <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-neutral-200 dark:bg-neutral-700">
                  <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                </button>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Billing Information</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Manage your subscription and payment methods
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-4">
                Current Plan
              </h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    Pro Plan
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    $29/month
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Upgrade Plan
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-4">
                Payment Methods
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">💳</div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Expires 12/24
                      </p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-700">
                + Add Payment Method
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                Notification Preferences
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Choose how you want to be notified
              </p>
            </div>

            <div className="space-y-4">
              {['Email Notifications', 'Push Notifications', 'SMS Notifications'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                      {item}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Receive notifications about updates
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-neutral-200 dark:bg-neutral-700">
                    <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Security Settings</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Manage your account security
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                  Change Password
                </h4>
                <div className="mt-2 space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                  Two-Factor Authentication
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Add an extra layer of security to your account
                </p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">API Settings</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Manage your API keys and webhooks
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-4">
                API Keys
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Live API Key
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      readOnly
                      value="sk_live_xxxxxxxxxxxxxxxxxxxxx"
                      className="flex-1 rounded-l-md border border-r-0 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                    />
                    <button className="inline-flex items-center rounded-r-md border border-l-0 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-700 px-3 py-2 text-neutral-700 dark:text-neutral-300">
                      Copy
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Test API Key
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      readOnly
                      value="sk_test_xxxxxxxxxxxxxxxxxxxxx"
                      className="flex-1 rounded-l-md border border-r-0 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-white"
                    />
                    <button className="inline-flex items-center rounded-r-md border border-l-0 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-700 px-3 py-2 text-neutral-700 dark:text-neutral-300">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-4">
                Webhooks
              </h4>
              <button className="text-blue-600 hover:text-blue-700">
                + Add Webhook
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white dark:bg-neutral-900 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Settings
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                Manage your account settings and preferences
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-neutral-200 dark:border-neutral-700">
              <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 dark:text-neutral-400 dark:hover:text-neutral-300'
                      }
                    `}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              {renderTabContent()}
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings; 