import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Profile from "./Profile";


function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(UserContext);

  const formSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  };
  return (
    <div className="bg-black h-screen relative">
      <div className="max-w-screen-xl mx-auto p-15 flex flex-col justify-center items-center space-y-5 bg-gray-400">
        <h2 className="text-4xl">Login</h2>
        <input
          type="text"
          placeholder="username"
          className="border-1 p-1 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="border-1 p-1 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-900 text-white rounded-xl px-5 py-2"
          onClick={formSubmit}
        >
          Submit
        </button>
        <Profile/>
      </div>
    </div>
  );
}

export default login;
