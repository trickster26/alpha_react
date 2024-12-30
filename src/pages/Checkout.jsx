import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    promocode: ''
  });

  const orderSummary = {
    plan: 'Pro Plan',
    billing: 'Monthly',
    price: 49,
    discount: 0,
    total: 49
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Payment Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                             bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                             bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                             bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                               bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                               shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleChange}
                      placeholder="123"
                      className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                               bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                               shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                    Billing Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                                 bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                                 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                                   bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                                   shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                                   bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                                   shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-600 
                                 bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                                 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:pl-8">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Plan</span>
                  <span className="text-neutral-900 dark:text-white font-medium">{orderSummary.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Billing</span>
                  <span className="text-neutral-900 dark:text-white font-medium">{orderSummary.billing}</span>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                    <span className="text-neutral-900 dark:text-white font-medium">${orderSummary.price}</span>
                  </div>
                  {orderSummary.discount > 0 && (
                    <div className="flex justify-between mt-2">
                      <span className="text-neutral-600 dark:text-neutral-400">Discount</span>
                      <span className="text-green-600">-${orderSummary.discount}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="promocode"
                      value={formData.promocode}
                      onChange={handleChange}
                      placeholder="Promo code"
                      className="flex-1 rounded-l-md border border-neutral-300 dark:border-neutral-600 
                               bg-white dark:bg-neutral-700 px-3 py-2 text-neutral-900 dark:text-white 
                               shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded-r-md 
                               hover:bg-neutral-900 dark:hover:bg-neutral-600"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-neutral-900 dark:text-white">Total</span>
                    <span className="text-lg font-medium text-neutral-900 dark:text-white">
                      ${orderSummary.total}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Complete Purchase
                </button>

                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 text-center">
                  By completing your purchase you agree to our{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 