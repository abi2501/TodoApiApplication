import query from "./../db.js";

export const getAllTodos = async () => {
  const rows = await query("select * from todo", []);
  return rows;
};

export const getTodoById = async (id) => {
  const rows = await query("SELECT * FROM todo WHERE id= ?", [id]);
  console.log(rows);
  if (rows.length > 0) {
    return rows[0];
  } else {
    return rows;
  }
};

export const createTodo = async (todotxt) => {
  console.log(todotxt["todo_text"]);
  const rows = await query(
    `INSERT INTO todo (todo_text, editing_enabled, is_completed) VALUES (?, ?, ?)`,
    [todotxt["todo_text"], 0, 0]
  );

  const todo = await getTodoById(rows.insertId);

  return todo;
};

export const updateTodo = async (todo) => {
  const rows = await query(
    `UPDATE todo SET todo_text = ?, editing_enabled = ?, is_completed = ? WHERE id = ?`,
    [todo.todo_text, todo.isEnabled, todo.isCompleted, todo.id]
  );

  if (rows.affectedRows > 0) {
    const res = await getTodoById(todo.id);
    console.log(res);
    return res;
  } else {
    return null;
  }
};

export const deleteTodo = async (id) => {
  const res = await query(`DELETE FROM todo where id = ?`, [id]);
  return res.affectedRows > 0 ? id : null;
};
