import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/api/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get(URL);
  return res.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const res = await axios.post(URL, {
    todo_text: todo,
  });
  return res.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const res = await axios.put(URL, todo);
  return res.data;
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  const res = await axios.delete(URL, { data: { id: id } });
  return res.data;
});

const initialState = {
  todolist: [],
  status: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = true;
        state.todolist = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "Failed";
        state = action.error.msg;
      })
      .addCase(addTodo.pending, (state, action) => {})
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todolist = [...state.todolist, action.payload];
      })
      .addCase(addTodo.rejected, (state, action) => {})
      .addCase(updateTodo.fulfilled, (state, action) => {
        const {
          arg: { id },
        } = action.meta; // EXPLAIN DESTRUCTURING

        state.todolist = state.todolist.map((todo) =>
          todo.id === id ? action.payload : todo
        );
      })
      .addCase(updateTodo.rejected, (state, action) => {
        // console.log("rejeced");
      })
      .addCase(removeTodo.pending, (state, action) => {
        // console.log("Delete pending");
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todolist = state.todolist.filter(
          (todo) => todo.id !== action.payload
        );
      })
      .addCase(removeTodo.rejected, (state, action) => {
        console.log("delete rejected");
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const {} = todoSlice.actions;

export const getAllTodos = (state) => state.rtodo.todolist;
