import React, { createContext, useState } from "react"

const UserContext = createContext(undefined)
const UserDispatchContext = createContext(undefined)

const UserProvider = ( { children }) => {
    const [userDetails, setUserDetails] = useState({
        username: "Tidbits JS"
    })

    return (
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext, UserDispatchContext }
