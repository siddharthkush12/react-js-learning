import React from "react";
import { useLoaderData } from "react-router-dom";

function GithubLoader() {
  const user = useLoaderData(); // Get data from the loader

  return (
    <>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
          <img src={user.avatar_url} alt="GitHub Avatar" width="100" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

// ✅ Named export for the loader function
export async function githubLoader() {
  const response = await fetch("https://api.github.com/users/siddharthkush12");
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

// ✅ Default export for the component
export default GithubLoader;