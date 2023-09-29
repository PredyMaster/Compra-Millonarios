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
  //if (searchUser) console.log(searchUser)
  const yeah = users.find((user) => user.name.includes(searchUser))

  //console.log(yeah, " yeah ⚠️⚠️⚠️")

  if (yeah != "undefined") return yeah
}
