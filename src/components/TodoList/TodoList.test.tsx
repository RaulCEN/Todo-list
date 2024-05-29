import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  const todoMocks = [
    { id: 123, name: 'New Todo', completed: false },
    { id: 124, name: 'New Todo 2', completed: false }
  ]

  it('shows a message if there is not to does', () => {
    const checkMockFunction = jest.fn();
    const deleteMockFunction = jest.fn();
    render(<TodoList tasks={[]} loading={false} onCheckTodo={checkMockFunction} onDeleteTodo={deleteMockFunction} />)
    const message = screen.getByTestId(/empty_message/i);

    expect(message).toBeInTheDocument();
  })
  
  it('shows all to does', () => {
    const checkMockFunction = jest.fn();
    const deleteMockFunction = jest.fn();
    render(<TodoList tasks={todoMocks} loading={false} onCheckTodo={checkMockFunction} onDeleteTodo={deleteMockFunction} />)
    const toDoes = screen.getAllByTestId(/todo_checkbox/i);

    expect(toDoes.length).toEqual(2);
  })
});
