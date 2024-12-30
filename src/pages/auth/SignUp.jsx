import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-[480px] bg-[#0a192f] p-8 flex flex-col justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-white">Create Account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Start your journey with our email marketing platform
            </p>
          </div>

          <div className="mt-8">
            {/* Social Signup */}
            <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg 
                           flex items-center justify-center space-x-2 hover:bg-white/20 
                           transition-colors duration-200">
              <img src="/google-icon.png" alt="Google" className="h-5 w-5" />
              <span>Sign up with Google</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0a192f] text-gray-400">
                  or sign up with email
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-gray-700 
                           rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-gray-700 
                           rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-gray-700 
                           rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-gray-700 
                           rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-white/5 
                             text-cyan-400 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="acceptTerms" className="text-sm text-gray-400">
                    I agree to the{' '}
                    <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-white py-3 px-4 rounded-lg font-medium
                         hover:from-cyan-500 hover:to-blue-600 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 
                         focus:ring-offset-2 focus:ring-offset-[#0a192f]"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
            Sign in
          </Link>
        </p>
      </div>

      {/* Right Panel - Background */}
      <div className="hidden lg:block flex-1 bg-[#0a192f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url('/email-marketing-pattern.svg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: 0.1
               }} 
          />
        </div>
        <div className="relative h-full flex items-center justify-center p-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Start Your Email Marketing Journey
            </h1>
            <p className="text-xl text-gray-300">
              Create beautiful campaigns, automate your workflows, and grow your audience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;