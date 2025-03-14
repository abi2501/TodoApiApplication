import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../services/todoServices.js";

export const getAllTodo = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    console.error("Error fetching todos ", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createNewTodo = async (req, res) => {
  try {
    const todotxt = req.body;
    const newTodo = await createTodo(todotxt);
    res.status(200).json(newTodo);
  } catch (err) {
    console.log("Error on Creating new Todo");
    res.status(500).json({
      message: "Internal Server Error on Create Todo",
    });
  }
};

export const modifyTodo = async (req, res) => {
  try {
    const todo = req.body;
    const updatedTodo = await updateTodo(todo);
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.log("Error on updating todo");
    res.status(500).json({
      message: "Internal Server Error on Update",
    });
  }
};

export const removeTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedTodo = await deleteTodo(id);
    res.status(200).json(deletedTodo);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error on Delete",
    });
  }
};
