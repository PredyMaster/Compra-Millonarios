import React, { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    nombre: "Usuario",
    idioma: "Español",
    años: 25,
    // Agrega otras variables de configuración aquí
  })

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser debe ser utilizado dentro de un UserProvider")
  }
  return context
}
