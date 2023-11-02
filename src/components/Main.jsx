import React, { useCallback, useState } from "react";
import { TodoForm } from "./TodoForm";
import { SearchBar } from "./SearchBar";
import { Table } from "./Table";
import todos from "../utils/todos.json";

function getfilteredTodos(todosList, qwery) {
  let list = [...todosList];

  if (qwery) {
    list = list.filter(
      (todo) =>
        todo.title.toLowerCase().includes(qwery.toLowerCase()) ||
        todo.body.toLowerCase().includes(qwery.toLowerCase())
    );
  }

  return list;
}

function getMaxID(todos) {
  const maxId = Math.max(...todos.map((todo) => todo.id));
  if (maxId > 0) {
    return maxId;
  } else {
    return 0;
  }
}

export const Main = () => {
  const [todosList, setTodosList] = useState(todos);
  const [qwery, setQwery] = useState("");
  const [todoToEdit, setTodoToEdit] = useState(null);

  const filteredTodos = getfilteredTodos(todosList, qwery);

  const addTodo = useCallback((title, body) => {
    setTodosList((currentTodos) => {
      const newTodo = {
        id: getMaxID(currentTodos) + 1,
        title,
        body,
        createdDate: new Date(),
      };
      console.log(newTodo.id);

      return [...currentTodos, newTodo];
    });
  }, []);

  const deleteTodo = useCallback((todoID) => {
    setTodosList((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoID)
    );
  }, []);

  const editTodo = useCallback(
    (newTitle, newBody, id) => {
      if (todoToEdit) {
        const editedTodo = {
          ...todoToEdit,
          title: newTitle,
          body: newBody,
          createdDate: new Date(),
        };

        setTodosList((currentTodos) => {
          const newTodos = [...currentTodos];
          const index = newTodos.findIndex((todo) => todo.id === todoToEdit.id);
          newTodos.splice(index, 1, editedTodo);
          return newTodos;
        });
        setTodoToEdit(null);
      }
    },
    [todoToEdit]
  );

  return (
    <div className="mt-6">
      <SearchBar qwery={qwery} filterBy={(newqwery) => setQwery(newqwery)} />
      <Table
        filteredTodos={filteredTodos}
        todoToEdit={todoToEdit}
        setTodoToEdit={setTodoToEdit}
        deleteTodo={deleteTodo}
      />

      <TodoForm
        addTodo={addTodo}
        editTodo={editTodo}
        todoToEdit={todoToEdit}
        setTodoToEdit={setTodoToEdit}
      />
    </div>
  );
};
