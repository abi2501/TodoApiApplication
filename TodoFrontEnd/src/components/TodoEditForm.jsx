import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoSlice";

const TodoEditForm = ({ todo }) => {
  const [todotext, setTodoText] = useState(todo.todo_text);
  const dispatcher = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todotext.trim()) {
      dispatcher(
        updateTodo({
          id: todo.id,
          todo_text: todotext,
          isEnabled: false,
          isCompleted: todo.is_completed,
        })
      );
    } else {
      setTodoText("");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap justify-center space-x-5 ">
        <input
          type="text"
          value={todotext}
          className="input input-bordered w-3/4"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit" className="btn btn-info">
          Save
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            setTodoText(todo.todo_text);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoEditForm;
