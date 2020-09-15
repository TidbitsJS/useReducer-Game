import React, { useContext, useState } from "react"
import 'context/dashboard/dash.css'
import { UserProvider, UserContext, UserDispatchContext } from 'context/dashboard/UserProvider'

const Profile = () => {
    const userDetails = useContext(UserContext)
    const setUserDetails = useContext(UserDispatchContext)
    const [username, setUsername] = useState(userDetails.username)

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserDetails({ username })
    }

    return (
        <div className="profile">
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    )
}

const TopNav = () => {
    const userDetails = useContext(UserContext)

    return (
        <div className="topNav">
            <div className="avatar" />
            <p>{userDetails.username}</p>
        </div>
    )
}

const Page = () => {
    return (
        <div className="pages">
            <Profile />
        </div>
    )
}

const Main = () => {
    return (
        <div className="dashboardContent">
            <UserProvider>
                <TopNav />
                <Page />
            </UserProvider>
        </div>
    )
}

const SideNav = () => {
    return (
        <div className="sideNav">
            <h1 className="title">Demo</h1>
            <p>Home</p>
            <p>Profile</p>
        </div>
    )
}

const Dashboard = () => {
    return (
        <div className="dashboard">
            <SideNav />
            <Main />
        </div>
    )
}

export default Dashboard