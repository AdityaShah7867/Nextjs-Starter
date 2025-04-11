'use client';

import dynamic from 'next/dynamic';

// Import TodoList with no SSR to avoid hydration issues with localStorage
const TodoList = dynamic(() => import('./TodoList').then(mod => ({ default: mod.TodoList })), { ssr: false });

export function TodoListWrapper() {
  return <TodoList />;
} 