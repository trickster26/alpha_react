import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started',
      features: [
        '1,000 emails per month',
        'Basic templates',
        'Email support',
        'Basic analytics',
        'Single user'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 49, annual: 39 },
      description: 'Best for growing businesses',
      features: [
        '50,000 emails per month',
        'Advanced templates',
        'Priority support',
        'Advanced analytics',
        'Up to 5 users',
        'Custom branding',
        'A/B testing'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, annual: 89 },
      description: 'For large scale operations',
      features: [
        'Unlimited emails',
        'Custom templates',
        '24/7 phone support',
        'Advanced analytics',
        'Unlimited users',
        'Custom branding',
        'A/B testing',
        'Dedicated account manager',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white lg:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-500 dark:text-neutral-400">
            Choose the perfect plan for your business
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="relative flex items-center">
            <span className={`mr-3 text-sm ${!isAnnual ? 'font-semibold text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${isAnnual ? 'font-semibold text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
              Annual <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 sm:mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-none">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl ${
                plan.popular
                  ? 'bg-white dark:bg-neutral-800 shadow-xl border-2 border-blue-500 dark:border-blue-400 z-10'
                  : 'bg-white dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              <div className="p-6 sm:p-8 flex-1">
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
                    {plan.description}
                  </p>
                  <p className="mt-8 flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="ml-2 text-base text-neutral-500 dark:text-neutral-400">
                      /month
                    </span>
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base text-neutral-500 dark:text-neutral-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 rounded-b-2xl">
                <Link
                  to="/signup"
                  className={`w-full inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      : 'bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            Have questions?{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 