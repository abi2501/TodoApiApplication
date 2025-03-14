import React, { useEffect, useState } from "react";
import TodoEditForm from "./TodoEditForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  getAllTodos,
  removeTodo,
  updateTodo,
} from "../redux/todoSlice";

const TodoContent = () => {
  const todolist = useSelector(getAllTodos);
  const dispatcher = useDispatch();

  const handleTodoUpdate = (todo) => {
    dispatcher(updateTodo(todo));
  };

  return (
    <div className="overflow-x-auto p-5 m-5">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center">
            <th></th>
            <td>Todo</td>
            <td>Modify</td>
            <td>Remove</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[...todolist].map((todo, idx) => {
            return (
              <tr key={idx} className="text-center">
                <th>{idx + 1}</th>
                <td>
                  {todo.editing_enabled ? (
                    <TodoEditForm todo={todo} />
                  ) : (
                    <p>{todo.todo_text}</p>
                  )}
                </td>
                <td>
                  {!todo.editing_enabled && (
                    <button
                      className="btn btn-primary text-white rounded-sm"
                      onClick={() => {
                        handleTodoUpdate({
                          id: todo.id,
                          todo_text: todo.todo_text,
                          isEnabled: true,
                          isCompleted: todo.is_completed,
                        });
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning text-white rounded-sm"
                    onClick={() => {
                      dispatcher(removeTodo(todo.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="text-center">
            <th></th>
            <td>Todo</td>
            <td>Modify</td>
            <td>Remove</td>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TodoContent;
