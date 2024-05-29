import React, { useState } from 'react';
import './AddTodo.css'

interface AddTodoProps {
  loading: boolean;
  onAddTodo: (newTodo: string) => void
}

const AddTodo: React.FunctionComponent<AddTodoProps> = ({ loading, onAddTodo }: AddTodoProps) => {
  const [newTodoValue, setNewTodoValue] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTodoValue(event.target.value)

  const handleSubmitNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodoValue === '') return;

    onAddTodo(newTodoValue);
    setNewTodoValue('');
  }

  return (
    <form className='add-todo-form' onSubmit={handleSubmitNewTodo}>
      <input
        className='add-todo-input'
        data-testid="new_todo_input"
        id='new_todo'
        name='new_todo'
        placeholder='New Todo'
        disabled={loading}
        value={newTodoValue || ''}
        onChange={handleInputChange}
      />

      <button
        data-testid="add_button"
        className='add-todo-button'
        type='submit'
        disabled={loading || newTodoValue === ''}
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo