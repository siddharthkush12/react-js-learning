import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen max-w-screen bg-blue-200 items-center">
      <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto bg-gray-400 p-3 rounded-2xl">
        <div className="w-full flex items-center justify-center">
          <AddTodo/>
        </div>
        
        <div className="w-full flex flex-wrap items-center justify-center p-2">
          <Todo/>
        </div>
      </div>
    </div>
  );
}

export default App;
