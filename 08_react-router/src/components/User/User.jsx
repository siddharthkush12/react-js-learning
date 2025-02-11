import React from "react";
import { useParams } from "react-router";

function User() {
  const { id } = useParams();
  return <div className="bg-amber-600 max-w-screen-xl mx-auto flex justify-center p-9 text-3xl">User:{id}</div>
}

export default User;
