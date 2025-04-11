'use client';

import { useQuery } from '@tanstack/react-query';
import { useTodoStore } from '@/store/todoStore';

export function useTodos() {
  const todoStore = useTodoStore();
  
  // Using TanStack Query to manage the todos
  const { data: todos, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => todoStore.todos,
    staleTime: 1000, // 1 second
  });

  return {
    todos: todos || [],
    isLoading,
    error,
    addTodo: todoStore.addTodo,
    toggleTodo: todoStore.toggleTodo,
    removeTodo: todoStore.removeTodo,
    clearCompleted: todoStore.clearCompleted,
  };
} 