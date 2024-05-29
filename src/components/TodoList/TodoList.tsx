import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import { TodoTask } from '../../utils/types';

interface TodoListProps {
  loading: boolean;
  tasks: TodoTask[];
  onCheckTodo: (taskId: number) => void;
  onDeleteTodo: (taskId: number) => void;
}

const TodoList:  React.FunctionComponent<TodoListProps> = ({tasks, loading, onCheckTodo, onDeleteTodo}: TodoListProps) => {
  const toDoList = tasks.map(task =>
    <TodoItem
      key={task.id}
      task={task}
      loading={loading}
      onCheckTodo={onCheckTodo}
      onDeleteTodo={onDeleteTodo}
    />)

  return (
    <div>
      <p>To do's ({tasks.length})</p>

      {tasks.length > 0 ? toDoList : <p data-testid='empty_message'>You don't have added a to do yet</p>}
    </div>
  );
}

export default TodoList