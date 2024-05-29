import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo';
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';
import { TodoTask } from './utils/types';

// const todoMocks: TodoTask[] = []
const todoMocks = [
  { id: 123, name: 'New Todo', completed: false },
  { id: 124, name: 'New Todo 2', completed: false }
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <section>
        <AddTodo loading={false} onAddTodo={(newtodo) => console.log(newtodo)} />
        {/* <TodoItem task={{ id: 123, name: 'New Todo', completed: false }} loading={false} onCheckTodo={(todoId) => console.log(todoId)} onDeleteTodo={(todoId) => console.log(todoId)} /> */}
        <TodoList tasks={todoMocks} loading={false} onCheckTodo={(todoId) => console.log(todoId)} onDeleteTodo={(todoId) => console.log(todoId)} />
      </section>
    </div>
  );
}

export default App;
