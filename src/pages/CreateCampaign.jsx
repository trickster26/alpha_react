import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function CreateCampaign() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    name: '',
    subject: '',
    fromName: '',
    fromEmail: '',
    replyTo: '',
    selectedList: '',
    template: '',
    scheduledDate: '',
    scheduledTime: '',
    sendType: 'immediate'
  });

  // Validation state
  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, name: 'Campaign Details', description: 'Basic campaign information' },
    { id: 2, name: 'Select Audience', description: 'Choose your target audience' },
    { id: 3, name: 'Design Email', description: 'Create your email content' },
    { id: 4, name: 'Review & Schedule', description: 'Final review and scheduling' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation functions for each step
  const validateStep1 = () => {
    const newErrors = {};
    if (!campaignData.name.trim()) newErrors.name = 'Campaign name is required';
    if (!campaignData.subject.trim()) newErrors.subject = 'Email subject is required';
    if (!campaignData.fromName.trim()) newErrors.fromName = 'From name is required';
    if (!campaignData.fromEmail.trim()) {
      newErrors.fromEmail = 'From email is required';
    } else if (!/\S+@\S+\.\S+/.test(campaignData.fromEmail)) {
      newErrors.fromEmail = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!campaignData.selectedList) newErrors.selectedList = 'Please select an audience';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step with validation
  const handleNext = () => {
    let isValid = false;
    
    switch (step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      // Add validation for other steps as needed
      default:
        isValid = true;
    }

    if (isValid) {
      setStep(prev => Math.min(4, prev + 1));
      setErrors({});
    }
  };

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          {/* Campaign Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Create New Campaign
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Set up your email campaign in just a few steps
                  </p>
                </div>
                <Link
                  to="/dashboard/campaigns"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 
                           dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium 
                           text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 
                           hover:bg-gray-50 dark:hover:bg-neutral-700"
                >
                  Cancel
                </Link>
              </div>

              {/* Progress Steps - Updated Section */}
              <nav aria-label="Progress" className="mb-8">
                <ol className="flex items-center justify-between relative">
                  {/* Horizontal line that connects all steps */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 h-[1px] bg-gray-600 w-full" />
                  
                  {steps.map((stepItem, stepIdx) => (
                    <li
                      key={stepItem.name}
                      className="relative flex flex-col items-center"
                    >
                      <div className={`rounded-full h-8 w-8 flex items-center justify-center z-10 
                                    ${step === stepItem.id 
                                      ? 'bg-cyan-500 text-white' 
                                      : step > stepItem.id 
                                        ? 'bg-cyan-500 text-white'
                                        : 'bg-neutral-700 text-gray-400'}`}
                      >
                        {step > stepItem.id ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          stepItem.id
                        )}
                      </div>
                      <span className={`mt-2 text-sm ${
                        step === stepItem.id 
                          ? 'text-cyan-500' 
                          : step > stepItem.id 
                            ? 'text-cyan-500'
                            : 'text-gray-400'
                      }`}>
                        {stepItem.name}
                      </span>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Step Content */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                <div className="p-6">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Campaign Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={campaignData.name}
                          onChange={handleChange}
                          className={`mt-1 block w-full border ${
                            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                          } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                            focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm`}
                          placeholder="Enter campaign name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={campaignData.subject}
                          onChange={handleChange}
                          className={`mt-1 block w-full border ${
                            errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                          } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                            focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm`}
                          placeholder="Enter email subject"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            From Name
                          </label>
                          <input
                            type="text"
                            name="fromName"
                            value={campaignData.fromName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                                   rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                   focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                            placeholder="Enter sender name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            From Email
                          </label>
                          <input
                            type="email"
                            name="fromEmail"
                            value={campaignData.fromEmail}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                                   rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                   focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                            placeholder="Enter sender email"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Select Your Audience
                        </h3>
                        <Link
                          to="/dashboard/audience/new"
                          className="inline-flex items-center px-4 py-2 border border-transparent 
                                 rounded-md shadow-sm text-sm font-medium text-white 
                                 bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 
                                 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                          <svg
                            className="-ml-1 mr-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                          Create New Audience
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {['Newsletter Subscribers', 'New Customers', 'Abandoned Cart'].map((list) => (
                          <div
                            key={list}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors
                                    ${campaignData.selectedList === list
                                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                                      : 'border-gray-200 dark:border-neutral-700'
                                    } ${errors.selectedList ? 'border-red-500' : ''}`}
                            onClick={() => handleChange({ target: { name: 'selectedList', value: list } })}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {list}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  1,234 subscribers
                                </p>
                              </div>
                              <input
                                type="radio"
                                checked={campaignData.selectedList === list}
                                onChange={() => {}}
                                className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 
                                       border-gray-300 dark:border-neutral-600"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      {errors.selectedList && (
                        <p className="mt-1 text-sm text-red-500">{errors.selectedList}</p>
                      )}
                    </div>
                  )}

                  {/* Add similar sections for steps 3 and 4 */}
                </div>

                {/* Navigation Buttons */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-700 rounded-b-lg flex justify-between">
                  <button
                    onClick={() => {
                      setStep(prev => Math.max(1, prev - 1));
                      setErrors({});
                    }}
                    disabled={step === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                           bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
                           rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 
                           disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r 
                             from-cyan-500 to-blue-600 rounded-md shadow-sm hover:from-cyan-600 
                             hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                             focus:ring-cyan-500"
                  >
                    {step === 4 ? 'Create Campaign' : 'Next'}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign; 