import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function Integration() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ecommerce');

  const tabs = [
    { id: 'ecommerce', name: 'E-commerce', icon: '🛍️' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'crm', name: 'CRM', icon: '🤝' },
    { id: 'marketing', name: 'Marketing', icon: '📢' },
    { id: 'payment', name: 'Payment', icon: '💳' }
  ];

  const integrations = {
    ecommerce: [
      { name: 'Shopify', description: 'E-commerce platform', status: 'connected', icon: '🛍️' },
      { name: 'WooCommerce', description: 'WordPress e-commerce', status: 'not_connected', icon: '🛒' },
      { name: 'Magento', description: 'Enterprise e-commerce', status: 'not_connected', icon: '🏪' }
    ],
    analytics: [
      { name: 'Google Analytics', description: 'Web analytics', status: 'connected', icon: '📊' },
      { name: 'Mixpanel', description: 'Product analytics', status: 'not_connected', icon: '📈' },
      { name: 'Heap', description: 'Digital insights', status: 'not_connected', icon: '📉' }
    ],
    communication: [
      { name: 'Slack', description: 'Team messaging', status: 'connected', icon: '💬' },
      { name: 'Discord', description: 'Community platform', status: 'not_connected', icon: '🎮' },
      { name: 'Microsoft Teams', description: 'Business communication', status: 'not_connected', icon: '👥' }
    ],
    crm: [
      { name: 'Salesforce', description: 'CRM platform', status: 'connected', icon: '🤝' },
      { name: 'HubSpot', description: 'Marketing & CRM', status: 'not_connected', icon: '🎯' },
      { name: 'Zoho', description: 'Business software', status: 'not_connected', icon: '💼' }
    ],
    marketing: [
      { name: 'Mailchimp', description: 'Email marketing', status: 'connected', icon: '📧' },
      { name: 'Klaviyo', description: 'Marketing automation', status: 'not_connected', icon: '📱' },
      { name: 'SendGrid', description: 'Email service', status: 'not_connected', icon: '✉️' }
    ],
    payment: [
      { name: 'Stripe', description: 'Payment processing', status: 'connected', icon: '💳' },
      { name: 'PayPal', description: 'Payment gateway', status: 'not_connected', icon: '💰' },
      { name: 'Square', description: 'Payment solutions', status: 'not_connected', icon: '🏪' }
    ]
  };

  return (
    <div className="h-screen bg-white dark:bg-neutral-900 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Integrations
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                Connect your favorite tools and services
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

            {/* Integration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations[activeTab].map((integration) => (
                <div
                  key={integration.name}
                  className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{integration.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                          {integration.name}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        integration.status === 'connected'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                          : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {integration.status === 'connected' ? 'Connected' : 'Not Connected'}
                    </span>
                  </div>

                  <div className="mt-6">
                    <button
                      className={`w-full px-4 py-2 rounded-lg text-sm font-medium ${
                        integration.status === 'connected'
                          ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                          : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Integration; 