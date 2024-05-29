import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import useTodo from './hooks/useTodo';

function App() {
  const { todoList, loading, onAddNewTodo, onToggleTodo, onDeleteTodo } = useTodo();

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <section>
        <AddTodo loading={loading} onAddTodo={onAddNewTodo} />
        <TodoList tasks={todoList} loading={loading} onCheckTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
      </section>
    </div>
  );
}

export default App;
