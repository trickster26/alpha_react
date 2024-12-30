import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ElementPalette } from './ElementPalette';
import ElementProperties from './ElementProperties';

function TemplateEditor({ template, onClose }) {
  const [elements, setElements] = useState(template.content || []);
  const [selectedElement, setSelectedElement] = useState(null);

  const getDefaultContent = (elementType) => {
    switch (elementType) {
      case 'header':
        return 'New Header';
      case 'text':
        return 'Enter your text here';
      case 'button':
        return 'Click Here';
      case 'image':
        return 'https://via.placeholder.com/400x200';
      case 'divider':
        return null;
      case 'spacer':
        return '2rem';
      default:
        return '';
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setElements(items);
  };

  const addElement = (elementType) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type: elementType,
      content: getDefaultContent(elementType),
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(element => 
      element.id === id ? { ...element, ...updates } : element
    ));
  };

  const deleteElement = (id) => {
    setElements(elements.filter(element => element.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  const renderElement = (element) => {
    switch (element.type) {
      case 'header':
        return (
          <input
            type="text"
            value={element.content}
            onChange={(e) => updateElement(element.id, { content: e.target.value })}
            className="w-full text-2xl font-bold bg-transparent border-none focus:outline-none"
            placeholder="Enter header text..."
          />
        );
      case 'text':
        return (
          <textarea
            value={element.content}
            onChange={(e) => updateElement(element.id, { content: e.target.value })}
            className="w-full bg-transparent border-none focus:outline-none resize-none"
            placeholder="Enter text content..."
            rows={3}
          />
        );
      case 'image':
        return (
          <div className="relative">
            <img
              src={element.content}
              alt="Template element"
              className="w-full rounded-lg"
            />
          </div>
        );
      case 'button':
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            {element.content}
          </button>
        );
      case 'divider':
        return <hr className="border-neutral-200 dark:border-neutral-700" />;
      case 'spacer':
        return (
          <div 
            className="bg-neutral-100 dark:bg-neutral-800" 
            style={{ height: element.content }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex">
      <ElementPalette onAddElement={addElement} />

      <div className="flex-1 overflow-y-auto px-6">
        <div className="max-w-4xl mx-auto py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {template.name}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                Edit your template
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Save Template
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm min-h-[600px] p-8">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="template-elements">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {elements.map((element, index) => (
                      <Draggable 
                        key={element.id} 
                        draggableId={element.id} 
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`group relative p-4 mb-4 border-2 rounded-lg ${
                              selectedElement?.id === element.id 
                                ? 'border-blue-500 dark:border-blue-400' 
                                : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
                            }`}
                            onClick={() => setSelectedElement(element)}
                          >
                            <div className="flex items-center">
                              <div className="flex-1">
                                {renderElement(element)}
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteElement(element.id);
                                }}
                                className="ml-2 p-1 text-neutral-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {elements.length === 0 && (
              <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
                Drag and drop elements here to build your template
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedElement && (
        <div className="w-80 border-l border-neutral-200 dark:border-neutral-700 p-6 overflow-y-auto">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
            Element Properties
          </h3>
          <ElementProperties 
            element={selectedElement}
            onUpdate={(updates) => updateElement(selectedElement.id, updates)}
          />
        </div>
      )}
    </div>
  );
}

export default TemplateEditor;