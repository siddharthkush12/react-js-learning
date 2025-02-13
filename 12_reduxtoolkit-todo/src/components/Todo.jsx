import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { MdOutlineClose } from "react-icons/md";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-w-3xl mx-auto">
      <p className="text-center text-2xl py-3">-:Todos:-</p>
      {todos.length === 0 ? (
        <p className="text-center text-3xl">Sab delete ho gya Lawde</p>
      ) : (
        <ul className="space-y-3 list-none">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-between items-center space-x-4 bg-amber-200 rounded p-3"
              >
                <span className="text-lg">{todo.text.trim()}</span>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  <MdOutlineClose className="text-red-600 border-1 rounded text-2xl" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todo;
