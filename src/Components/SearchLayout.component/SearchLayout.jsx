import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toastError,
  removeDuplicateTodo,
} from "../../Store/todoReducer";
import {
  dbStorage,
  fetchTodoFromDbStorage,
  findDuplicate,
} from "../../Util/todoUtil";
import { Container } from "./SearchLayoutStyles";

const AddTodoLayout = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { items, error } = useSelector((state) => state.todoReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo) return dispatch(toastError("Empty field dectected!"));

    const resolveDuplicate = findDuplicate({ data: items, todo });
    if (resolveDuplicate)
      return dispatch(
        toastError(`Duplicate found! "${resolveDuplicate.text}" already exists`)
      );

    const prefix = todo.substring(0, 2);
    const id = `${prefix}-${Math.floor(Math.random() * (100 - 1) + 1)}`;

    dispatch(toastError(""));
    dispatch(addTodo({ text: todo, id }));
    return setTodo("");
  };

  useEffect(() => {
    fetchTodoFromDbStorage({ dispatch });
  }, []);

  useEffect(() => {
    const stateWatcher = () => {
      return dbStorage({
        items,
      });
    };
    stateWatcher();
  }, [items]);

  useEffect(() => {
    error && dispatch(removeDuplicateTodo());
  }, [error]);

  return (
    <Container>
      <div className="ct_wrapper">
        <header>
          <h1>Welcome to my todo app</h1>
        </header>
        <form className="as_wp_form">
          <div className="as_wp_fm_fields">
            <input
              type="text"
              className="as_wp_fm_input"
              value={todo}
              placeholder="Enter todo"
              required
              onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)}>Add Todo</button>
          </div>
          {error ? <small>{error}</small> : false}
        </form>
      </div>
    </Container>
  );
};

export default AddTodoLayout;
