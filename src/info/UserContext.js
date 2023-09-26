import React, { createContext, useContext, useState } from "react"

// Creamos un contexto para el usuario
const UserContext = createContext()

// Hook personalizado para acceder al contexto
export function useUser() {
  return useContext(UserContext)
}

// Proveedor del contexto que contendrá los datos del usuario
export function UserProvider({ children }) {
  // Aquí puedes inicializar los valores iniciales del usuario
  const [user, setUser] = useState({
    name: "Predy",
    userValue: 1000,
    money: 0,
    diamonds: 20,
    avatar: "https://www.predy.es/static/media/Predy.47596d8b.jpg",
    language: "ESP",
    darkMode: 1,
  })

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
