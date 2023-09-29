import React, { createContext, useContext, useState } from "react"
import { getProfile } from "../functions/globalFunctions"

// Creamos un contexto para el usuario
const UserContext = createContext()

// Hook personalizado para acceder al contexto
export function useUser() {
  return useContext(UserContext)
}

// Proveedor del contexto que contendrá los datos del usuario
export function UserProvider({ children }) {
  // Aquí puedes inicializar los valores iniciales del usuario

  const userID = "0000-0001"
  const [user, setUser] = useState(getProfile(userID))

  console.log("CARGO EL USER CONTEXT")

  // Función para actualizar los datos del usuario
  function updateUser(newUser) {
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
