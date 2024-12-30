import React from 'react';

export function ElementPalette({ onAddElement }) {
  const elements = [
    {
      type: 'header',
      icon: '⌨️',
      label: 'Header',
    },
    {
      type: 'text',
      icon: '📝',
      label: 'Text Block',
    },
    {
      type: 'image',
      icon: '🖼️',
      label: 'Image',
    },
    {
      type: 'button',
      icon: '🔘',
      label: 'Button',
    },
    {
      type: 'divider',
      icon: '⎯',
      label: 'Divider',
    },
    {
      type: 'spacer',
      icon: '↕️',
      label: 'Spacer',
    }
  ];

  return (
    <div className="w-64 border-r border-neutral-200 dark:border-neutral-700 p-6">
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
        Elements
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {elements.map((element) => (
          <button
            key={element.type}
            onClick={() => onAddElement(element.type)}
            className="flex flex-col items-center justify-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <span className="text-2xl mb-2">{element.icon}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {element.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
} 