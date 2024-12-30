import React from 'react';

function AutomationList({ view }) {
  const automations = [
    {
      id: 1,
      name: 'Welcome Series',
      type: 'Email Sequence',
      status: 'Active',
      contacts: '2,345',
      conversion: '32%',
      lastModified: '2h ago',
      steps: 4
    },
    {
      id: 2,
      name: 'Abandoned Cart Recovery',
      type: 'Email + SMS',
      status: 'Active',
      contacts: '1,892',
      conversion: '28%',
      lastModified: '1d ago',
      steps: 3
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      type: 'Email',
      status: 'Draft',
      contacts: '0',
      conversion: '0%',
      lastModified: '3d ago',
      steps: 2
    },
    {
      id: 4,
      name: 'Post-Purchase Follow-up',
      type: 'Email Sequence',
      status: 'Paused',
      contacts: '892',
      conversion: '18%',
      lastModified: '5d ago',
      steps: 5
    }
  ];

  if (view === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automations.map((automation) => (
          <div
            key={automation.id}
            className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                  {automation.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {automation.type}
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                automation.status === 'Active'
                  ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                  : automation.status === 'Draft'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                  : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
              }`}>
                {automation.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Active Contacts
                </p>
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {automation.contacts}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Conversion Rate
                </p>
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {automation.conversion}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">
                  {automation.steps} steps
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  Modified {automation.lastModified}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit Workflow
                </button>
                <button className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
        <thead className="bg-neutral-50 dark:bg-neutral-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Contacts
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Conversion
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Last Modified
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
          {automations.map((automation) => (
            <tr key={automation.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-neutral-900 dark:text-white">
                  {automation.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {automation.type}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  automation.status === 'Active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                    : automation.status === 'Draft'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                    : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                }`}>
                  {automation.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                {automation.contacts}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                {automation.conversion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                {automation.lastModified}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-700 mr-4">
                  Edit
                </button>
                <button className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
                  •••
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AutomationList; 