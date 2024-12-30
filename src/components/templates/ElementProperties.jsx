import React from 'react';

function ElementProperties({ element, onUpdate }) {
  const renderProperties = () => {
    switch (element.type) {
      case 'header':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Text
              </label>
              <input
                type="text"
                value={element.content}
                onChange={(e) => onUpdate({ content: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Font Size
              </label>
              <select
                value={element.fontSize || '2xl'}
                onChange={(e) => onUpdate({ fontSize: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              >
                <option value="xl">Small</option>
                <option value="2xl">Medium</option>
                <option value="3xl">Large</option>
                <option value="4xl">Extra Large</option>
              </select>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Content
              </label>
              <textarea
                value={element.content}
                onChange={(e) => onUpdate({ content: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={element.content}
                onChange={(e) => onUpdate({ content: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                value={element.alt || ''}
                onChange={(e) => onUpdate({ alt: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Text
              </label>
              <input
                type="text"
                value={element.content}
                onChange={(e) => onUpdate({ content: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                URL
              </label>
              <input
                type="url"
                value={element.url || ''}
                onChange={(e) => onUpdate({ url: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </div>
          </div>
        );

      case 'spacer':
        return (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Height
            </label>
            <select
              value={element.content}
              onChange={(e) => onUpdate({ content: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
            >
              <option value="1rem">Small (1rem)</option>
              <option value="2rem">Medium (2rem)</option>
              <option value="3rem">Large (3rem)</option>
              <option value="4rem">Extra Large (4rem)</option>
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderProperties()}
    </div>
  );
}

export default ElementProperties; 