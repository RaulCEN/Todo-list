import { useState, useEffect } from "react";

import { TodoTask } from "../utils/types";

const MAX_ITEMS = 1000;

function useTodo() {
  const [todoList, setTodoList] = useState<TodoTask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    const todoesSaved = localStorage.getItem('todoList');

    if (!dataLoaded && todoesSaved) {
      setTodoList(JSON.parse(todoesSaved))
      setDataLoaded(true)
    }
  }, [dataLoaded]);

  const onAddNewTodo = (newTodo: string) => {
    setLoading(true);

    const updatedTodolist: TodoTask[] = [...todoList];
    updatedTodolist.push({
      id: Math.floor(Math.random() * MAX_ITEMS),
      name: newTodo,
      completed: false
    });

    setTodoList(updatedTodolist);
    setLoading(false);
    onUpdateTodoStorage(updatedTodolist)
  };

  const onToggleTodo = (todoId: number) => {
    setLoading(true)
    const updatedTodoList: TodoTask[] = [...todoList];
    const todoIndex = updatedTodoList.findIndex(toDo => toDo.id === todoId);

    if (todoIndex === -1) return;

    updatedTodoList[todoIndex].completed = !updatedTodoList[todoIndex].completed;

    setTodoList(updatedTodoList);
    setLoading(false);
    onUpdateTodoStorage(updatedTodoList)
  };

  const onDeleteTodo = (todoId: number) => {
    const updatedTodoList: TodoTask[] = todoList.filter(todo => todo.id !== todoId)
    setTodoList(updatedTodoList);
    onUpdateTodoStorage(updatedTodoList);
  } 

  const onUpdateTodoStorage = (updatedList: TodoTask[]) => {
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  }

  return { todoList, loading, onAddNewTodo, onToggleTodo, onDeleteTodo }
}

export default useTodo;