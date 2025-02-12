import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider=(({children})=>{
    const [user,setUser]=useState(null);
    return (
        <UserContext value={{user,setUser}}>
            {children}
        </UserContext>
    )
})


export default UserContextProvider;