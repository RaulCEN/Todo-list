import React, { useState } from 'react';

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
    <form onSubmit={handleSubmitNewTodo}>
      <input
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
        type='submit'
        disabled={loading || newTodoValue === ''}
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo