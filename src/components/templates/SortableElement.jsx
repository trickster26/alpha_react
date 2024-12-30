import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableElement({ element, isSelected, onClick, onUpdate, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const renderElement = () => {
    switch (element.type) {
      case 'header':
        return (
          <input
            type="text"
            value={element.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            className="w-full text-2xl font-bold bg-transparent border-none focus:outline-none"
            placeholder="Enter header text..."
          />
        );
      case 'text':
        return (
          <textarea
            value={element.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            className="w-full bg-transparent border-none focus:outline-none resize-none"
            placeholder="Enter text content..."
            rows={3}
          />
        );
      case 'image':
        return (
          <div className="relative">
            <img
              src={element.content || 'https://via.placeholder.com/400x200'}
              alt="Template element"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => {/* Add image upload logic */}}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition"
            >
              Change Image
            </button>
          </div>
        );
      case 'button':
        return (
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={element.content}
              onChange={(e) => onUpdate({ content: e.target.value })}
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded"
              placeholder="Button text..."
            />
            <input
              type="url"
              value={element.url || ''}
              onChange={(e) => onUpdate({ url: e.target.value })}
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded"
              placeholder="Button URL..."
            />
          </div>
        );
      case 'divider':
        return <hr className="border-neutral-200 dark:border-neutral-700" />;
      case 'spacer':
        return (
          <div 
            className="bg-neutral-100 dark:bg-neutral-800" 
            style={{ height: element.height || '2rem' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`group relative p-4 mb-4 border-2 rounded-lg ${
        isSelected 
          ? 'border-blue-500 dark:border-blue-400' 
          : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div
          {...listeners}
          className="mr-2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 cursor-move"
        >
          ⋮⋮
        </div>
        {renderElement()}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-2 p-1 text-neutral-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
        >
          ×
        </button>
      </div>
    </div>
  );
} 