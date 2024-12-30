import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
//import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  //const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      //await login(formData.email, formData.password);
      toast.success('Login successful!');
      
      // Redirect to the intended page or dashboard
      const redirectTo = location.state?.from?.pathname || '/dashboard';
      navigate(redirectTo);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      setErrors({
        auth: 'Invalid email or password'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <Link
              to="/signup"
              className="font-medium text-cyan-600 hover:text-cyan-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.auth && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
              <p className="text-sm text-red-700 dark:text-red-200">{errors.auth}</p>
            </div>
          )}

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 
                         border ${errors.email ? 'border-red-300' : 'border-gray-300'} 
                         dark:border-neutral-700 placeholder-gray-500 dark:placeholder-gray-400 
                         text-gray-900 dark:text-white rounded-t-md focus:outline-none 
                         focus:ring-cyan-500 focus:border-cyan-500 dark:bg-neutral-800 
                         focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-2 
                         border ${errors.password ? 'border-red-300' : 'border-gray-300'} 
                         dark:border-neutral-700 placeholder-gray-500 dark:placeholder-gray-400 
                         text-gray-900 dark:text-white rounded-b-md focus:outline-none 
                         focus:ring-cyan-500 focus:border-cyan-500 dark:bg-neutral-800 
                         focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 
                         border-gray-300 rounded dark:border-neutral-700 
                         dark:bg-neutral-800"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-cyan-600 hover:text-cyan-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border 
                     border-transparent text-sm font-medium rounded-md text-white 
                     bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 
                     hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-cyan-500 disabled:opacity-50"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;