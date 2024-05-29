import React from 'react';

import { TodoTask } from '../../utils/types';

interface TodoItemProps {
  task: TodoTask;
  loading: boolean;
  onCheckTodo: (taskId: number) => void;
  onDeleteTodo: (taskId: number) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({ task, loading, onCheckTodo, onDeleteTodo }: TodoItemProps) => {
  const handleCheckboxChange = () => onCheckTodo(task.id);
  
  const handleDeleteButton = () => onDeleteTodo(task.id);

  return (
    <div>
      <label>
        <input data-testid='todo_checkbox' type='checkbox' disabled={loading} onChange={handleCheckboxChange} />
        {task.name}
      </label>
      <button data-testid='delete_todo' disabled={loading} onClick={handleDeleteButton}>delete</button>
    </div>
  )
}

export default TodoItem;