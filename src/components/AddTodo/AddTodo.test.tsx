import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo';

describe('AddTodo', () => {
  it('calls onAddTodo when clicked if input has some value', () => {
    const mockFunction = jest.fn();
    render(<AddTodo loading={false} onAddTodo={mockFunction} />);
    const newTodoInput = screen.getByTestId(/new_todo_input/i);
    const addButton = screen.getByTestId(/add_button/i);

    fireEvent.change(newTodoInput, { target: { value: 'new todo' } });
    fireEvent.click(addButton);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  
  it('doesnt calls onAddTodo when clicked if input has not a value', () => {
    const mockFunction = jest.fn();
    render(<AddTodo loading={false} onAddTodo={mockFunction} />);
    const addButton = screen.getByTestId(/add_button/i);

    fireEvent.click(addButton);

    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});