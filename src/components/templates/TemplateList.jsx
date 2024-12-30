import React from 'react';

function TemplateList({ view, onSelect }) {
  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      category: 'Transactional',
      lastModified: '2h ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Monthly Newsletter',
      category: 'Newsletter',
      lastModified: '1d ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Promotional Offer',
      category: 'Promotional',
      lastModified: '3d ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      name: 'Abandoned Cart',
      category: 'Transactional',
      lastModified: '5d ago',
      thumbnail: 'https://via.placeholder.com/300x200',
    }
  ];

  if (view === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition cursor-pointer"
            onClick={() => onSelect(template)}
          >
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                {template.name}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {template.category}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  Modified {template.lastModified}
                </span>
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
              Category
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
          {templates.map((template) => (
            <tr 
              key={template.id}
              className="hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer"
              onClick={() => onSelect(template)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-neutral-900 dark:text-white">
                  {template.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {template.category}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                {template.lastModified}
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

export default TemplateList; 