'use client';

import { useTodos } from '@/hooks/useTodos';

export function TodoStats() {
  const { todos } = useTodos();
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
  
  // Get the most recently added todo
  const latestTodo = todos.length > 0 
    ? todos.reduce((latest, current) => current.createdAt > latest.createdAt ? current : latest, todos[0])
    : null;
    
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-8">Todo Statistics</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Total</h2>
          <p className="text-3xl font-bold">{totalTodos}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Completed</h2>
          <p className="text-3xl font-bold">{completedTodos}</p>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Active</h2>
          <p className="text-3xl font-bold">{activeTodos}</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Completion</h2>
          <p className="text-3xl font-bold">{completionRate}%</p>
        </div>
      </div>
      
      {latestTodo && (
        <div className="border-t pt-4">
          <h2 className="text-lg font-medium mb-2">Latest Todo</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className={latestTodo.completed ? "line-through text-gray-500" : ""}>
              {latestTodo.text}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(latestTodo.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 