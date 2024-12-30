import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'campaigns',
      name: 'Email Campaigns',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const faqs = {
    'getting-started': [
      {
        question: 'How do I create my first email campaign?',
        answer: 'To create your first campaign, navigate to the Campaigns section and click "New Campaign". Follow our step-by-step wizard to design and schedule your email.'
      },
      {
        question: 'What is the free trial period?',
        answer: 'Our free trial lasts for 14 days and includes all premium features. No credit card required to start.'
      },
      // Add more FAQs...
    ],
    'campaigns': [
      {
        question: 'How do I segment my email list?',
        answer: 'Use our advanced segmentation tools to filter subscribers based on demographics, behavior, or custom fields.'
      },
      // Add more FAQs...
    ],
    // Add more categories...
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              How can we help?
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-cyan-100">
              Find answers to common questions or reach out to our support team
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border-0 rounded-lg 
                           text-gray-900 placeholder-gray-500 focus:ring-2 
                           focus:ring-cyan-400 dark:bg-neutral-800 dark:text-white"
                  placeholder="Search for help..."
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg 
                    className="h-6 w-6 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-6 rounded-lg border transition-colors ${
                activeCategory === category.id
                ? 'bg-cyan-500 border-transparent text-white'
                : 'bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-500'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`${
                  activeCategory === category.id
                  ? 'text-white'
                  : 'text-cyan-500'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs[activeCategory]?.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-900 dark:to-blue-900 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Still need help?
                </h3>
                <p className="mt-2 text-cyan-100">
                  Our support team is ready to assist you
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent 
                         text-sm font-medium rounded-md shadow-sm text-cyan-600 
                         bg-white hover:bg-cyan-50 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-cyan-500"
              >
                Contact Support
              </Link>
            </div>
          </div>
          <div className="px-6 pt-6 pb-8 bg-cyan-600 dark:bg-cyan-800 sm:px-10">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-cyan-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-cyan-100">
                  Average response time: 2 hours
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-cyan-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-cyan-100">
                  24/7 Support available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help; 