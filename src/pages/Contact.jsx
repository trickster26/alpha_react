import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: "What is the free trial period?",
      answer: "We offer a 14-day free trial on our Pro plan with full access to all features. No credit card required."
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer: "You can easily change your plan at any time from your account settings. Changes take effect on your next billing cycle."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. Contact our support team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can pay by wire transfer."
    },
    {
      question: "Is there a limit on email sends?",
      answer: "Each plan has different email sending limits. Free: 1,000/month, Pro: 50,000/month, Enterprise: Unlimited."
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                           bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                           bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                           bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                           bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md 
                           shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-neutral-500 transform transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-white">Email</h3>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400">support@example.com</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-white">Phone</h3>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-white">Office</h3>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400">123 Business Ave, Suite 100<br />New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 