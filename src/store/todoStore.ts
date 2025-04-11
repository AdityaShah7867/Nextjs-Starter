import { create } from 'zustand';
import { Todo } from '@/types/todo';
import { loadTodos, saveTodos } from '@/lib/localStorage';

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: loadTodos(),
  
  addTodo: (text: string) => {
    set((state) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: Date.now(),
      };
      const updatedTodos = [...state.todos, newTodo];
      saveTodos(updatedTodos);
      return { todos: updatedTodos };
    });
  },
  
  toggleTodo: (id: string) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(updatedTodos);
      return { todos: updatedTodos };
    });
  },
  
  removeTodo: (id: string) => {
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      saveTodos(updatedTodos);
      return { todos: updatedTodos };
    });
  },
  
  clearCompleted: () => {
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => !todo.completed);
      saveTodos(updatedTodos);
      return { todos: updatedTodos };
    });
  },
})); 