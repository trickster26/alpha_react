import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo or Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Reset your password</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-neutral-800 py-8 px-6 shadow-xl rounded-xl backdrop-blur-lg border border-neutral-700">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {success ? (
            <div className="text-center">
              <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/50">
                <p className="text-sm text-green-400">
                  Check your email for a link to reset your password
                </p>
              </div>
              <Link
                to="/login"
                className="inline-flex justify-center py-2 px-4 border border-transparent 
                         text-sm font-medium rounded-md text-white bg-cyan-600 
                         hover:bg-cyan-700 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-cyan-500"
              >
                Return to login
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-4 py-3 rounded-lg
                             bg-neutral-700/50 border border-neutral-600
                             text-white placeholder-neutral-400
                             focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                             transition duration-150 ease-in-out"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 rounded-lg
                           text-sm font-semibold text-white
                           bg-gradient-to-r from-cyan-500 to-blue-600
                           hover:from-cyan-600 hover:to-blue-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-cyan-500 focus:ring-offset-neutral-800
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition duration-150 ease-in-out"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send reset link'
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-800 text-neutral-400">
                  Remember your password?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-3 px-4 rounded-lg
                         text-sm font-semibold text-white
                         border border-neutral-600
                         hover:bg-neutral-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-neutral-500 focus:ring-offset-neutral-800
                         transition duration-150 ease-in-out"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword; 