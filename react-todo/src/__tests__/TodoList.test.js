import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    expect(todo).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});