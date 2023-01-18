import React, {createContext, useState} from "react";

export const UserContext = createContext()

export const UserProvider = () => {

    const [user, setUser] = useState({
        firstName: "John",
        lastname: "Doe"
    })

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}