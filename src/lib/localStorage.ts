import { Todo } from "@/types/todo";

const STORAGE_KEY = "todos";

export const saveTodos = (todos: Todo[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to parse todos from localStorage:", error);
    return [];
  }
}; 