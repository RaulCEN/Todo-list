import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <section>
        <AddTodo loading={false} onAddTodo={(newtodo) => console.log(newtodo)} />
      </section>
    </div>
  );
}

export default App;
