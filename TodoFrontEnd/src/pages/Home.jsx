import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, getAllTodos, updateTodo } from "../redux/todoSlice";
import TodoContent from "../components/TodoContent";

const Home = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchTodos());
  }, []);

  return (
    <div className="w-full h-full max-w-screen-xl mx-auto">
      <NavBar />
      <TodoContent />
    </div>
  );
};

export default Home;
