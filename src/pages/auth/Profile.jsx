import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Inc',
    role: 'Marketing Manager',
    avatar: null,
    notifications: {
      email: true,
      marketing: false,
      updates: true
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', formData);
    setSuccessMessage('Profile updated successfully!');
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationChange = (key) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        avatar: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 
                       rounded-lg hover:bg-cyan-400 hover:text-[#0a192f] transition-colors"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-400/10 border border-green-400 rounded-lg">
              <p className="text-green-400 text-sm">{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Avatar Section */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={formData.avatar || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover border-2 border-cyan-400"
                />
                {isEditing && (
                  <label
                    htmlFor="avatar"
                    className="absolute bottom-0 right-0 h-8 w-8 bg-cyan-400 rounded-full 
                             flex items-center justify-center cursor-pointer"
                  >
                    <svg className="h-4 w-4 text-[#0a192f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <input
                      type="file"
                      id="avatar"
                      className="hidden"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                  </label>
                )}
              </div>
              <div>
                <h2 className="text-xl font-medium text-white">{formData.name}</h2>
                <p className="text-gray-400">{formData.role}</p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white/5 rounded-lg p-6 space-y-6">
              <h3 className="text-lg font-medium text-white">Personal Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full bg-white/5 border border-gray-700 
                             rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full bg-white/5 border border-gray-700 
                             rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full bg-white/5 border border-gray-700 
                             rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full bg-white/5 border border-gray-700 
                             rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                {Object.entries(formData.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize">
                      {key === 'email' ? 'Email notifications' :
                       key === 'marketing' ? 'Marketing updates' :
                       'Product updates'}
                    </span>
                    <button
                      type="button"
                      disabled={!isEditing}
                      onClick={() => handleNotificationChange(key)}
                      className={`${
                        value ? 'bg-cyan-400' : 'bg-gray-700'
                      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                        border-2 border-transparent transition-colors duration-200 ease-in-out 
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <span
                        className={`${
                          value ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none inline-block h-5 w-5 transform rounded-full 
                          bg-white shadow ring-0 transition duration-200 ease-in-out`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-400 border border-gray-700 
                           rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r 
                           from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 
                           hover:to-blue-600 focus:outline-none focus:ring-2 
                           focus:ring-cyan-400 focus:ring-offset-2 
                           focus:ring-offset-[#0a192f]"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>

          {/* Security Section */}
          <div className="mt-8 bg-white/5 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-6">Security</h3>
            <div className="space-y-4">
              <Link
                to="/reset-password"
                className="block px-4 py-2 text-sm font-medium text-cyan-400 border 
                         border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-[#0a192f] 
                         transition-colors text-center"
              >
                Change Password
              </Link>
              <button
                type="button"
                className="w-full px-4 py-2 text-sm font-medium text-red-400 border 
                         border-red-400 rounded-lg hover:bg-red-400 hover:text-[#0a192f] 
                         transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 