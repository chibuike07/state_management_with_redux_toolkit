import { fetchTodo } from "../Store/todoReducer";

const storage = localStorage.getItem("myTodStore");
export const dbStorage = ({ items }) => {
  if (!storage) {
    return localStorage.setItem("myTodStore", JSON.stringify(items));
  } else {
    return localStorage.setItem("myTodStore", JSON.stringify(items));
  }
};

export const fetchTodoFromDbStorage = ({ dispatch }) => {
  const parsedStorage = storage !== null && JSON.parse(storage);

  return parsedStorage.length > 0 ? dispatch(fetchTodo(parsedStorage)) : [];
};

export const findDuplicate = ({ data, todo }) =>
  data.length > 0 && data.find(({ text }) => text === todo.toLowerCase());
