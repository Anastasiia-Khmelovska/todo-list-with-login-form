import { ToDoCard } from "./TodoCard";

export const Table = ({
  filteredTodos,
  todoToEdit,
  setTodoToEdit,
  deleteTodo,
}) => {
  console.log("rend Table");
  return (
    <div className="box">
      <table className="table is-fullwidth is-narrow is-hoverable">
        <thead>
          <tr className="has-background-link-light">
            <th>Title </th>
            <th>Description</th>
            <th>Options</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <ToDoCard
              todo={todo}
              todoToEdit={todoToEdit}
              setTodoToEdit={setTodoToEdit}
              deleteTodo={deleteTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
