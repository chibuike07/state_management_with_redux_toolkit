import { fetchTodo } from "../Store/todoReducer";

/*retrieving the value stored in the
"myTodStore" key in the browser's local storage. It assigns the retrieved value to the variable
`storage`. */
const storage = localStorage.getItem("myTodStore");

/**
 * The function `dbStorage` stores the `items` object in the local storage as a JSON string.
 * @returns the result of calling `localStorage.setItem("myTodStore", JSON.stringify(items))`.
 */
export const dbStorage = ({ items }) => {
  if (!storage) {
    return localStorage.setItem("myTodStore", JSON.stringify(items));
  } else {
    return localStorage.setItem("myTodStore", JSON.stringify(items));
  }
};

/**
 * The function fetches a todo from a database storage and dispatches it.
 */
export const fetchTodoFromDbStorage = ({ dispatch }) => {
  const parsedStorage = storage !== null && JSON.parse(storage);

  return parsedStorage.length > 0 ? dispatch(fetchTodo(parsedStorage)) : [];
};

/**
 * The `findDuplicate` function checks if a given `todo` item already exists in an array of `data`
 * objects and returns the first matching object if found.
 */
export const findDuplicate = ({ data, todo }) =>
  data.length > 0 && data.find(({ text }) => text === todo.toLowerCase());

/**
 * The function `watchDuplicateOnEdit` is used to highlight and focus on a specific element in a list
 * while resetting the color of other elements.
 */
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
