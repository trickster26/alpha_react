import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle password reset logic here
    console.log('Reset requested for:', email);
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
            <h2 className="text-2xl font-semibold text-white">Reset Password</h2>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          <div className="mt-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full bg-white/5 border border-gray-700 
                             rounded-lg px-4 py-2.5 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="name@company.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 
                           text-white py-3 px-4 rounded-lg font-medium
                           hover:from-cyan-500 hover:to-blue-600 
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 
                           focus:ring-offset-2 focus:ring-offset-[#0a192f]"
                >
                  Send Reset Instructions
                </button>
              </form>
            ) : (
              <div className="text-center p-6 bg-white/5 rounded-lg border border-gray-700">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-400/10 mb-4">
                  <svg
                    className="h-6 w-6 text-cyan-400"
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
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Check your email
                </h3>
                <p className="text-sm text-gray-400">
                  We've sent password reset instructions to:<br />
                  <span className="font-medium text-cyan-400">{email}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
            Back to login
          </Link>
        </div>
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
              Password Recovery
            </h1>
            <p className="text-xl text-gray-300">
              Don't worry, we'll help you get back to your account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword; 