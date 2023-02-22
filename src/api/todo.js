import client from "./client";

/* TODO API */

export const createTodoApi = async (todo) => {
  await client.post("/todos", { todo: todo });
};

export const getTodosApi = async () =>
 { return await client.get("/todos")};

export const updateTodoApi = async (id, todo, isCompleted) => {
  await client.put(`/todos/${id}`, { todo: todo, isCompleted: isCompleted });
};

export const deleteTodoApi = async (id) => {
  await client.delete(`/todos/${id}`);
};
