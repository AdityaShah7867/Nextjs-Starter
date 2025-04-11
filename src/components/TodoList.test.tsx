import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TodoList } from './TodoList';
import { Providers } from '@/lib/providers';
import { useTodoStore } from '@/store/todoStore';
import '@testing-library/jest-dom';

// Mock the Zustand store
jest.mock('@/store/todoStore', () => ({
  useTodoStore: jest.fn(),
}));

const mockTodos = [
  { id: '1', text: 'Test todo 1', completed: false, createdAt: Date.now() },
  { id: '2', text: 'Test todo 2', completed: true, createdAt: Date.now() - 1000 },
];

const mockStore = {
  todos: mockTodos,
  addTodo: jest.fn(),
  toggleTodo: jest.fn(),
  removeTodo: jest.fn(),
  clearCompleted: jest.fn(),
};

describe('TodoList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useTodoStore as unknown as jest.Mock).mockReturnValue(mockStore);
  });

  test('renders todo list correctly', () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Test todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test todo 2')).toBeInTheDocument();
    expect(screen.getByText('1 items left')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    const input = screen.getByTestId('new-todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    fireEvent.change(input, { target: { value: 'New todo item' } });
    fireEvent.click(addButton);

    expect(mockStore.addTodo).toHaveBeenCalledWith('New todo item');
  });

  test('toggles a todo', () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]); // Toggle the first todo

    expect(mockStore.toggleTodo).toHaveBeenCalledWith('1');
  });

  test('removes a todo', () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    fireEvent.click(deleteButtons[0]); // Delete the first todo

    expect(mockStore.removeTodo).toHaveBeenCalledWith('1');
  });

  test('filters todos correctly', async () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    // Test active filter
    fireEvent.click(screen.getByTestId('filter-active'));
    await waitFor(() => {
      expect(screen.getByText('Test todo 1')).toBeInTheDocument();
      expect(screen.queryByText('Test todo 2')).not.toBeInTheDocument();
    });

    // Test completed filter
    fireEvent.click(screen.getByTestId('filter-completed'));
    await waitFor(() => {
      expect(screen.queryByText('Test todo 1')).not.toBeInTheDocument();
      expect(screen.getByText('Test todo 2')).toBeInTheDocument();
    });

    // Test all filter
    fireEvent.click(screen.getByTestId('filter-all'));
    await waitFor(() => {
      expect(screen.getByText('Test todo 1')).toBeInTheDocument();
      expect(screen.getByText('Test todo 2')).toBeInTheDocument();
    });
  });

  test('clears completed todos', () => {
    render(
      <Providers>
        <TodoList />
      </Providers>
    );
    
    const clearCompletedButton = screen.getByTestId('clear-completed');
    fireEvent.click(clearCompletedButton);

    expect(mockStore.clearCompleted).toHaveBeenCalled();
  });
}); 