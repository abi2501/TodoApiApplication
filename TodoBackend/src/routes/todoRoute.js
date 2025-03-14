import express from "express";
import {
  createNewTodo,
  getAllTodo,
  modifyTodo,
  removeTodo,
} from "../controllers/todoController.js";

const todoRoutes = express.Router();

todoRoutes.get("/todos", getAllTodo);
todoRoutes.post("/todos", createNewTodo);
todoRoutes.put("/todos", modifyTodo);
todoRoutes.delete("/todos", removeTodo);

export default todoRoutes;
