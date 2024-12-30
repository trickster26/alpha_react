import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { saveAs } from 'file-saver';

function CreateAudience() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [entryMethod, setEntryMethod] = useState('single'); // 'single' or 'bulk'
  const [bulkEmails, setBulkEmails] = useState('');
  const [audienceData, setAudienceData] = useState({
    name: '',
    description: '',
    source: 'manual',
    file: null,
    contacts: [{ email: '', firstName: '', lastName: '', phone: '' }]
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setAudienceData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleContactChange = (index, field, value) => {
    const newContacts = [...audienceData.contacts];
    newContacts[index] = { ...newContacts[index], [field]: value };
    setAudienceData(prev => ({
      ...prev,
      contacts: newContacts
    }));
  };

  const addContact = () => {
    setAudienceData(prev => ({
      ...prev,
      contacts: [...prev.contacts, { email: '', firstName: '', lastName: '', phone: '' }]
    }));
  };

  const removeContact = (index) => {
    setAudienceData(prev => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index)
    }));
  };

  const handleBulkEmailsChange = (e) => {
    setBulkEmails(e.target.value);
  };

  const processBulkEmails = () => {
    const emailList = bulkEmails
      .split(/[\n,]/) // Split by newline or comma
      .map(email => email.trim())
      .filter(email => email !== '');

    const newContacts = emailList.map(email => ({
      email,
      firstName: '',
      lastName: '',
      phone: ''
    }));

    setAudienceData(prev => ({
      ...prev,
      contacts: newContacts
    }));
    setEntryMethod('single'); // Switch back to single view to edit details
  };

  const validateBulkEmails = () => {
    const emailList = bulkEmails
      .split(/[\n,]/)
      .map(email => email.trim())
      .filter(email => email !== '');

    const invalidEmails = emailList.filter(email => !/\S+@\S+\.\S+/.test(email));
    
    if (invalidEmails.length > 0) {
      setErrors({
        ...errors,
        bulkEmails: `Invalid email format: ${invalidEmails.join(', ')}`
      });
      return false;
    }
    return true;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!audienceData.name.trim()) newErrors.name = 'List name is required';
    if (!audienceData.description.trim()) newErrors.description = 'Description is required';
    
    if (audienceData.source === 'manual') {
      const contactErrors = [];
      audienceData.contacts.forEach((contact, index) => {
        const errors = {};
        if (!contact.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(contact.email)) errors.email = 'Invalid email format';
        if (Object.keys(errors).length > 0) contactErrors[index] = errors;
      });
      if (contactErrors.length > 0) newErrors.contacts = contactErrors;
    } else if (audienceData.source === 'csv' && !audienceData.file) {
      newErrors.file = 'Please upload a CSV file';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', audienceData);
    }
  };

  const downloadTemplate = () => {
    const headers = ['Email*', 'First Name', 'Last Name', 'Phone'];
    const dummyData = [
      'email@example.com, John, Doe, +1234567890',
      'another@example.com, Jane, Smith, +0987654321'
    ];
    
    const csvContent = [
      headers.join(','),
      ...dummyData
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'audience_template.csv');
  };

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Create New Audience
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Create a new audience list for your campaigns
                  </p>
                </div>
                <Link
                  to="/dashboard/audience"
                  className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                >
                  Cancel
                </Link>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      List Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={audienceData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                        focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm`}
                      placeholder="Enter list name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={audienceData.description}
                      onChange={handleChange}
                      rows={3}
                      className={`mt-1 block w-full border ${
                        errors.description ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                        focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm`}
                      placeholder="Describe your audience list"
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Source
                    </label>
                    <select
                      name="source"
                      value={audienceData.source}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                               rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                               focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                    >
                      <option value="manual">Manual Entry</option>
                      <option value="csv">CSV Upload</option>
                      <option value="api">API Integration</option>
                    </select>
                  </div>

                  {audienceData.source === 'csv' && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Upload CSV
                        </label>
                        <button
                          type="button"
                          onClick={downloadTemplate}
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium 
                                   text-cyan-600 hover:text-cyan-500"
                        >
                          <svg 
                            className="mr-2 h-4 w-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                            />
                          </svg>
                          Download Template
                        </button>
                      </div>

                      <div className="mt-1 flex flex-col items-center px-6 pt-5 pb-6 border-2 
                                    border-dashed border-gray-300 dark:border-neutral-600 rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 dark:text-gray-400">
                            <label className="relative cursor-pointer rounded-md font-medium 
                                          text-cyan-600 hover:text-cyan-500 focus-within:outline-none">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                name="file"
                                className="sr-only"
                                accept=".csv"
                                onChange={handleChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            CSV up to 10MB
                          </p>
                        </div>

                        {audienceData.file && (
                          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            Selected file: {audienceData.file.name}
                          </div>
                        )}
                      </div>

                      {errors.file && (
                        <p className="mt-1 text-sm text-red-500">{errors.file}</p>
                      )}

                      {/* CSV Format Guide */}
                      <div className="mt-6 bg-gray-50 dark:bg-neutral-800 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          CSV Format Guide
                        </h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <p className="mb-2">Your CSV file should include the following columns:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Email (required)</li>
                            <li>First Name (optional)</li>
                            <li>Last Name (optional)</li>
                            <li>Phone (optional)</li>
                          </ul>
                          <p className="mt-2">
                            Download the template above for the correct format. Make sure:
                          </p>
                          <ul className="list-disc list-inside space-y-1 mt-1">
                            <li>All email addresses are valid</li>
                            <li>Each contact is on a new line</li>
                            <li>Fields are separated by commas</li>
                            <li>No empty rows between contacts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Manual Entry Form */}
                  {audienceData.source === 'manual' && (
                    <div className="mt-6">
                      {/* Entry Method Toggle */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            onClick={() => setEntryMethod('single')}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                              entryMethod === 'single'
                                ? 'bg-cyan-500 text-white'
                                : 'bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-gray-300'
                            }`}
                          >
                            Single Entry
                          </button>
                          <button
                            type="button"
                            onClick={() => setEntryMethod('bulk')}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                              entryMethod === 'bulk'
                                ? 'bg-cyan-500 text-white'
                                : 'bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-gray-300'
                            }`}
                          >
                            Bulk Entry
                          </button>
                        </div>
                      </div>

                      {entryMethod === 'bulk' ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Bulk Email Entry
                            </label>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              Enter multiple email addresses (one per line or comma-separated)
                            </p>
                            <textarea
                              value={bulkEmails}
                              onChange={handleBulkEmailsChange}
                              rows={10}
                              className="w-full border border-gray-300 dark:border-neutral-600 rounded-md 
                                       shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                       focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                              placeholder="john@example.com&#10;jane@example.com&#10;user@example.com"
                            />
                            {errors.bulkEmails && (
                              <p className="mt-1 text-sm text-red-500">{errors.bulkEmails}</p>
                            )}
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => {
                                if (validateBulkEmails()) {
                                  processBulkEmails();
                                }
                              }}
                              className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 
                                       hover:bg-cyan-700 rounded-md focus:outline-none focus:ring-2 
                                       focus:ring-offset-2 focus:ring-cyan-500"
                            >
                              Process Emails
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              Contact Details ({audienceData.contacts.length} contacts)
                            </h3>
                            <button
                              type="button"
                              onClick={addContact}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent 
                                       text-sm font-medium rounded-md text-white bg-cyan-600 
                                       hover:bg-cyan-700 focus:outline-none focus:ring-2 
                                       focus:ring-offset-2 focus:ring-cyan-500"
                            >
                              <svg
                                className="-ml-1 mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                              Add Contact
                            </button>
                          </div>

                          <div className="space-y-4">
                            {audienceData.contacts.map((contact, index) => (
                              <div
                                key={index}
                                className="p-4 border border-gray-200 dark:border-neutral-700 rounded-lg"
                              >
                                <div className="flex justify-between items-center mb-4">
                                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                    Contact #{index + 1}
                                  </h4>
                                  {audienceData.contacts.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeContact(index)}
                                      className="text-red-600 hover:text-red-700 text-sm"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                      Email *
                                    </label>
                                    <input
                                      type="email"
                                      value={contact.email}
                                      onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                                      className={`mt-1 block w-full border ${
                                        errors.contacts?.[index]?.email 
                                          ? 'border-red-500' 
                                          : 'border-gray-300 dark:border-neutral-600'
                                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm`}
                                      placeholder="email@example.com"
                                    />
                                    {errors.contacts?.[index]?.email && (
                                      <p className="mt-1 text-sm text-red-500">
                                        {errors.contacts[index].email}
                                      </p>
                                    )}
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      value={contact.firstName}
                                      onChange={(e) => handleContactChange(index, 'firstName', e.target.value)}
                                      className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                                               rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                               focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                                      placeholder="John"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      value={contact.lastName}
                                      onChange={(e) => handleContactChange(index, 'lastName', e.target.value)}
                                      className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                                               rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                               focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                                      placeholder="Doe"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                      Phone
                                    </label>
                                    <input
                                      type="tel"
                                      value={contact.phone}
                                      onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                                      className="mt-1 block w-full border border-gray-300 dark:border-neutral-600 
                                               rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 
                                               focus:border-cyan-500 dark:bg-neutral-700 dark:text-white sm:text-sm"
                                      placeholder="+1 (555) 000-0000"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-700 rounded-b-lg flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r 
                             from-cyan-500 to-blue-600 rounded-md shadow-sm hover:from-cyan-600 
                             hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                             focus:ring-cyan-500"
                  >
                    Create Audience
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateAudience; 