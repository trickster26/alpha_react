import React from 'react';

function Home() {
  return (
    <section id="public_landing" className="bg-neutral-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Power Smarter Digital Relationships
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              Create personalized customer experiences across email, SMS, mobile push, and more with real-time data and AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-8 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white mb-12">
            Trusted by leading brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="https://klaviyo.com/wp-content/uploads/2024/02/vuori_logo_white-450x105.webp" alt="Vuori" className="w-full h-auto opacity-80 hover:opacity-100 transition" />
            <img src="https://klaviyo.com/wp-content/uploads/2024/02/Hoka_logo-3-450x124.webp" alt="Hoka" className="w-full h-auto opacity-80 hover:opacity-100 transition" />
            <img src="https://klaviyo.com/wp-content/uploads/2024/02/vans-logo-white.webp" alt="Vans" className="w-full h-auto opacity-80 hover:opacity-100 transition" />
            <img src="https://klaviyo.com/wp-content/uploads/2024/02/Fila_logo.webp" alt="Fila" className="w-full h-auto opacity-80 hover:opacity-100 transition" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for Growth
            </h2>
            <p className="text-xl text-neutral-400">
              Everything you need to create meaningful customer relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <img src="https://klaviyo.com/wp-content/uploads/2024/02/Homepage-Features-AI-ActivityLog.webp" alt="AI Activity Log" className="w-full mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold text-white mb-4">Smart Analytics</h3>
              <p className="text-neutral-400">Track and analyze customer behavior with AI-powered insights</p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <img src="https://klaviyo.com/wp-content/uploads/2024/02/Homepage-Features-AI-SMS-1.webp" alt="SMS Features" className="w-full mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold text-white mb-4">SMS Marketing</h3>
              <p className="text-neutral-400">Engage customers with personalized SMS campaigns</p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <img src="https://klaviyo.com/wp-content/uploads/2024/02/Homepage-Features-AI-Segments.webp" alt="AI Segments" className="w-full mb-6 rounded-lg" />
              <h3 className="text-xl font-semibold text-white mb-4">Smart Segmentation</h3>
              <p className="text-neutral-400">Target the right audience with AI-powered segmentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-neutral-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integration
              </h2>
              <p className="text-xl text-neutral-400 mb-8">
                Connect with your favorite platforms and tools in minutes
              </p>
              <div className="grid grid-cols-3 gap-4">
                <img src="https://klaviyo.com/wp-content/uploads/2024/04/shopify.jpg" alt="Shopify" className="w-full rounded-lg" />
                <img src="https://klaviyo.com/wp-content/uploads/2024/04/woo.jpg" alt="WooCommerce" className="w-full rounded-lg" />
                <img src="https://klaviyo.com/wp-content/uploads/2024/04/adobe.jpg" alt="Adobe" className="w-full rounded-lg" />
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://klaviyo.com/wp-content/uploads/2022/07/integration-img.webp" alt="Integration Overview" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join thousands of brands using our platform to drive growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 