import React from 'react';

const billingHistory = [
  {
    id: 1,
    date: '2024-03-01',
    description: 'Pro Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
    invoice: '#INV-2024-001'
  },
  {
    id: 2,
    date: '2024-02-01',
    description: 'Pro Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
    invoice: '#INV-2024-002'
  },
  {
    id: 3,
    date: '2024-01-01',
    description: 'Pro Plan - Monthly',
    amount: '$49.00',
    status: 'Paid',
    invoice: '#INV-2024-003'
  }
];

function BillingHistory() {
  return (
    <div className="mt-8">
      <h4 className="text-base font-medium text-neutral-900 dark:text-white mb-4">
        Billing History
      </h4>
      <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
        <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
            {billingHistory.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">
                  {item.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BillingHistory; 