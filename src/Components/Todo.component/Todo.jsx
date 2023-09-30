import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toastError } from "../../Store/todoReducer";
import { Container } from "./TodoStyles";
import { findDuplicate, watchDuplicateOnEdit } from "../../Util/todoUtil";

const Todo = () => {
  const { items } = useSelector((state) => state.todoReducer);
  const [index, setIndex] = useState("");
  const [canEdit, setCanEdit] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const elementRef = useRef();
  const todoWrapRef = useRef();

  const dispatch = useDispatch();

  /**
   * The handleEdit function toggles the canEdit state and sets the index state to the provided idx
   * value.
   */
  const handleEdit = ({ idx }) => {
    setCanEdit((prev) => !prev);
    setIndex(() => idx);
  };

  /**
   * The function `saveUpdate` checks for duplicate todos and dispatches an error toast if a duplicate is
   * found, otherwise it dispatches an edit action for the todo.
   * @returns either a dispatch of a toastError message for a duplicate detected, or it is returning an
   * empty string.
   */
  const saveUpdate = ({ id, todo }) => {
    const resolveDuplicate = findDuplicate({
      data: items,
      todo,
    });

    if (resolveDuplicate && hasChanged) {
      return dispatch(toastError("Duplicate dectected!"));
    }

    dispatch(toastError(""));
    setHasChanged(() => false);
    dispatch(editTodo({ todo, id }));
  };

  useEffect(() => {
    if (canEdit && elementRef.current !== undefined) {
      const { children } = todoWrapRef.current;
      watchDuplicateOnEdit({
        children,
        index,
      });
    }

    if (hasChanged && elementRef.current !== undefined) {
      setCanEdit(() => true);
      const { children } = todoWrapRef.current;
      watchDuplicateOnEdit({ children, index });
    }

    if (!canEdit && elementRef.current !== undefined) {
      const { children } = todoWrapRef.current;
      children[index].children[0].style.color = "var(--primaryColor)";
    }
  }, [canEdit, index]);

  const renderTodo =
    items.length > 0 ? (
      items.map(({ text, id }, idx) => (
        <div key={`${id}-${idx}`} className="todo_card">
          <div className="card_text">
            <p
              ref={elementRef}
              contentEditable={index === idx && canEdit}
              onBlur={(e) => saveUpdate({ todo: e.target.textContent, id })}
              suppressContentEditableWarning={true}
              onKeyUpCapture={() => {
                return canEdit && index && setHasChanged(() => true);
              }}
            >
              {text}
            </p>
          </div>
          <div className="actionBtn">
            <small onClick={() => dispatch(deleteTodo(id))} title="delete">
              &#8855;
            </small>
            <small onClick={() => handleEdit({ idx })} title="edit">
              &#9998;
            </small>
          </div>
        </div>
      ))
    ) : (
      <aside className="no_record">
        <p>No record found!</p>
      </aside>
    );

  return <Container ref={todoWrapRef}>{renderTodo}</Container>;
};

export default Todo;
