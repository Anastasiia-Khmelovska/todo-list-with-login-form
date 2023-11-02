import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { todoSchema } from "../utils/todoSchema";



export const TodoForm = ({
    addTodo, 
    editTodo, 
    todoToEdit, 
    setTodoToEdit
  }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
      resolver: yupResolver(todoSchema),
      mode: "onBlur",
      values: {
        title: todoToEdit ? todoToEdit.title : "", 
        body: todoToEdit ? todoToEdit.body : "", 
    },});
      
      console.log(todoToEdit?.title, todoToEdit?.body)
    
      const onSubmit = (data) => {
      if (todoToEdit) {
        editTodo(data.title, data.body, todoToEdit.id);
      } else {
        
        addTodo(data.title, data.body);
      }
      reset();
    };

  return (
    <div className="box mt-4 mb-5 column is-half">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label" htmlFor="todo-title">
            Title
          </label>
            <input
              className="input"
              id="todo-title"
              type="text"
              {...register("title")}
            />
          <p className="help has-text-danger">{errors.title?.message}</p>
        </div>

        <div className="field">
          <label className="label" htmlFor="todo-body">
            Description
          </label>
            <textarea
              className="textarea"
              id="todo-body"
              {...register("body")}
            ></textarea>
            <p className="help has-text-danger">{errors.body?.message}</p>
        </div>

        <div className="buttons mt-4">
            <button type="submit" className="button is-link">
            {todoToEdit ? "Update" : "Add"}
            </button>
            <button 
              type="reset" 
              className="button is-link is-light"
              onClick={(event) => {
                event.preventDefault();
                setTodoToEdit(null);
                reset();                
              }}>
              Cancel
            </button>
        </div>
      </form>
    </div>
  );
};
