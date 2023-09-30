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

export const watchDuplicateOnEdit = ({ children, index }) => {
  const todoLists = [...children];
  for (let i = 0; i < todoLists.length; ++i) {
    if (i === index) {
      todoLists[i].children[0].style.color = "#000";
      todoLists[i].children[0].firstChild.focus();
    } else if (i === index) {
      todoLists[i].children[0].style.color = "#000";
    }
  }
};
