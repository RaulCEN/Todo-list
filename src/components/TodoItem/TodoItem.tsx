import React from 'react';
import './TodoItem.css'

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
    <div className='todo-item-container'>
      <label className={`todo-item-label ${task.completed ? 'todo-item-label-checked' : ''}`}>
        <input data-testid='todo_checkbox' checked={task.completed} type='checkbox' disabled={loading} onChange={handleCheckboxChange} />
        {task.name}
      </label>
      <button data-testid='delete_todo' className='todo-item-delete' disabled={loading} onClick={handleDeleteButton}>Delete</button>
    </div>
  )
}

export default TodoItem;