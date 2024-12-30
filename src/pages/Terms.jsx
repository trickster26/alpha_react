import React from 'react';

function Terms() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.`
    },
    {
      title: '2. Description of Service',
      content: `We provide users with access to email marketing services, analytics, and automation tools. The service is provided "as is" and we reserve the right to modify, suspend, or discontinue the service at any time without notice.`
    },
    {
      title: '3. Privacy Policy',
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, protect, and when we share personal information and other data with others. You are responsible for maintaining the confidentiality of your account information.`
    },
    {
      title: '4. User Conduct',
      content: `You agree not to use the service to:
      • Upload or transmit any content that is unlawful or harmful
      • Impersonate any person or entity
      • Upload or transmit any unsolicited advertising
      • Interfere with the proper working of the service
      • Attempt to gain unauthorized access to the service`
    },
    {
      title: '5. Subscription Terms',
      content: `Subscription fees are billed in advance on a monthly or annual basis. You agree to pay all fees associated with your account. Fees are non-refundable except as required by law or as explicitly stated in our refund policy.`
    },
    {
      title: '6. Cancellation and Termination',
      content: `You may cancel your subscription at any time. Upon cancellation, your account will remain active until the end of your current billing period. We reserve the right to terminate or suspend your account at any time for violation of these terms.`
    },
    {
      title: '7. Intellectual Property',
      content: `The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.`
    },
    {
      title: '8. Limitation of Liability',
      content: `In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      title: '9. Changes to Terms',
      content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use of the service after such modifications constitutes your acceptance of the modified terms.`
    },
    {
      title: '10. Governing Law',
      content: `These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="prose dark:prose-invert max-w-none mb-12 text-neutral-900 dark:text-white">
          <p>
            Welcome to our service. These Terms and Conditions outline the rules and regulations
            for the use of our website and services. By accessing this website, we assume you
            accept these terms and conditions in full. Do not continue to use our website if
            you do not accept all of the terms and conditions stated on this page.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {section.content.includes('•') ? (
                  <ul className="list-none pl-0 space-y-2">
                    {section.content.split('•').map((item, i) => (
                      item.trim() && (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-neutral-600 dark:text-neutral-400">{item.trim()}</span>
                        </li>
                      )
                    ))}
                  </ul>
                ) : (
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            If you have any questions about these Terms and Conditions, please{' '}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              contact us
            </a>
            .
          </p>
        </div>

        {/* Print Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Terms
          </button>
        </div>
      </div>
    </div>
  );
}

export default Terms; 