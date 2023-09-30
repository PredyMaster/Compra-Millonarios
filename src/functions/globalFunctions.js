import { users } from "../mock/MockUsers"

export const callApi = () => {
  return "llamo a la API"
}

export const getUsers = (userID) => {
  console.log(userID)

  const usuario = users.find((user) => user.id === userID)

  console.log(usuario, " usuario 🧡🧡🧡")

  return users
}

export const getProfile = (userID) => {
  return users.find((user) => user.id === userID)
}

export const searchUsers = (searchUser) => {
  const matchingUsers = users.filter((user) => {
    const regex = new RegExp(searchUser, "i") // 'i' para hacer la búsqueda insensible a mayúsculas y minúsculas
    return regex.test(user.name)
  })

  if (matchingUsers != "undefined") return matchingUsers
}

export const getMyUsers = (miUserID) => {
  const matchingUsers = users.filter((user) => {
    const regex = new RegExp(miUserID, "i") // 'i' para hacer la búsqueda insensible a mayúsculas y minúsculas
    return regex.test(user.owner)
  })

  if (matchingUsers != "undefined") return matchingUsers
}
