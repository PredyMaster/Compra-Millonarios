import React from "react"
import Tutorial from "./Tutorial"
import { UserProvider } from "../info/UserContext"

const Login = () => {
  return (
    <UserProvider>
      <Tutorial />
    </UserProvider>
  )
}

export default Login
