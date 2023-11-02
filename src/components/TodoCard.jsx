/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const ToDoCard = ({ 
  todo, 
  todoToEdit, 
  setTodoToEdit, 
  deleteTodo 
}) => {
  const [todoCreationTime, setTodoCreationTime] = useState("");

  function updateTodoCreationTime() {
    dayjs.extend(relativeTime);
    setTodoCreationTime(dayjs(todo.createdDate).fromNow());
  }

  useEffect(() => {
    updateTodoCreationTime();

    const intervalId = setInterval(() => {
      updateTodoCreationTime();
    }, 1000 * 61);

    return () => {
      clearInterval(intervalId);
    };
  }, [updateTodoCreationTime]);

  return (
    <tr
      key={todo.id}
      className={classNames("is-flex-shrink-1", {
        "has-background-link-light": todoToEdit?.id === todo.id,
      })}
    >
      <th className="is-flex-wrap-nowrap">
        {todo.title}
        <p className="content is-size-7 has-text-grey mt-1">
          {`Posted ${todoCreationTime}`}
        </p>
      </th>
      <th className="is-flex-wrap-wrap is-flex-grow-2">{todo.body}</th>
      <th>
        <button
          className="button is-link"
          onClick={() => {
            setTodoToEdit(todo);
          }}
        >
          Edit
        </button>
      </th>
      <th>
        <button
          className="button is-danger"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};
