import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-y-4">
      <p className="text-3xl font-bold pt-4 pb-7">Todo Using React Redux</p>
      <div className="space-x-3">
        <input
          type="text"
          placeholder="Add Todo..."
          value={input}
          onChange={(e) => 
            setInput(e.target.value)
          }
          className="bg-gray-200 border-1 rounded px-4 py-3"
        />
        <button
          type="submit"
          className="bg-red-500 px-4 py-3 rounded border-1 "
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
