import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const NavBar = () => {
  const [todotext, setTodoText] = useState("");

  const dispatcher = useDispatch();

  const handleOnChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();

    if (todotext.trim()) {
      dispatcher(addTodo(todotext));
      setTodoText("");
    } else {
      setTodoText("");
      return;
    }
  };

  return (
    <>
      <div className="navbar w-full mx-auto bg-base-100  ">
        <div className="flex items-center justify-center w-full gap-5">
          <form onSubmit={(e) => handleAddTask(e)}>
            <div className="form-control space-x-3">
              <input
                type="text"
                value={todotext}
                placeholder="Add Task"
                className="input input-bordered fw-semibold w-100"
                onChange={(e) => handleOnChange(e)}
              />
              <button className="btn btn-outline rounded-sm" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NavBar;
