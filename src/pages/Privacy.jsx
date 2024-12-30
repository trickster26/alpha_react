import React from 'react';

function Privacy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information that you provide directly to us, including:
      • Name and contact information
      • Account credentials
      • Billing information
      • Usage data and analytics
      • Communication preferences
      • Device and browser information`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:
      • Provide and maintain our services
      • Process your transactions
      • Send you marketing communications
      • Improve our services
      • Detect and prevent fraud
      • Comply with legal obligations`
    },
    {
      title: '3. Cookie Policy',
      content: `We use cookies and similar tracking technologies to:
      • Keep you signed in
      • Remember your preferences
      • Understand how you use our service
      • Improve your browsing experience
      • Deliver relevant advertising`
    },
    {
      title: '4. Data Sharing and Disclosure',
      content: `We may share your information with:
      • Service providers and partners
      • Legal authorities when required
      • Other users (based on your settings)
      • Business transfers in case of sale or merger`
    },
    {
      title: '5. Data Protection',
      content: `We implement appropriate security measures to protect your data, including:
      • Encryption in transit and at rest
      • Regular security assessments
      • Access controls and authentication
      • Secure data centers
      • Employee training and policies`
    },
    {
      title: '6. Your Rights and Choices',
      content: `You have the right to:
      • Access your personal data
      • Correct inaccurate data
      • Request data deletion
      • Object to processing
      • Export your data
      • Opt-out of marketing`
    },
    {
      title: '7. GDPR Compliance',
      content: `For users in the European Union, we comply with GDPR requirements and provide:
      • Lawful basis for processing
      • Data minimization
      • Purpose limitation
      • Storage limitation
      • Individual rights enforcement`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12 text-neutral-900 dark:text-white">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our service.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                {section.content.includes('•') ? (
                  <ul className="list-none pl-0 space-y-2">
                    {section.content.split('•').map((item, i) => (
                      item.trim() && (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item.trim()}</span>
                        </li>
                      )
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            For any privacy-related questions, please{' '}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 