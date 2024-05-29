import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const task = {
    id: 1234,
    name: 'Todo name',
    completed: false
  }
  
  it('calls onCheckTodo when clicked', () => {
    const checkMockFunction = jest.fn();
    const deleteMockFunction = jest.fn();
    render(<TodoItem task={task} loading={false} onCheckTodo={checkMockFunction} onDeleteTodo={deleteMockFunction} />)
    const checkbox = screen.getByTestId(/todo_checkbox/i);

    fireEvent.click(checkbox);

    expect(checkMockFunction).toHaveBeenCalledTimes(1);
  });
  
  it('calls onDeleteTodo when clicked', () => {
    const checkMockFunction = jest.fn();
    const deleteMockFunction = jest.fn();
    render(<TodoItem task={task} loading={false} onCheckTodo={checkMockFunction} onDeleteTodo={deleteMockFunction} />)
    const deleteButton = screen.getByTestId(/delete_todo/i);

    fireEvent.click(deleteButton);

    expect(deleteMockFunction).toHaveBeenCalledTimes(1);
  });
});