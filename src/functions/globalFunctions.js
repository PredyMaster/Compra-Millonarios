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

export const getRankingMoney = () => {
  const allUsersSorted = users.toSorted((a, b) => b.money - a.money)
  const top10UsersWithMostMoney = allUsersSorted.slice(0, 10)

  return top10UsersWithMostMoney
}

export const getRankingUserValue = () => {
  const allUsersSorted = users.toSorted((a, b) => b.userValue - a.userValue)

  console.log("allUsersSorted", allUsersSorted)
  const top10UsersWithMostUserValue = allUsersSorted.slice(0, 10)
}

export const updateSoldUser = (soldUser, buyerUser, pastBuyerUpdated) => {
  let soldUserBD = users.find((user) => user.id === soldUser.id)
  let buyerUserBD = users.find((user) => user.id === buyerUser.id)
  let pastBuyerUpdatedBD = users.find((user) => user.id === pastBuyerUpdated.id)

  soldUserBD.money = soldUser.money
  soldUserBD.userValue = soldUser.userValue
  soldUserBD.owner = soldUser.owner
  soldUserBD.ownerName = soldUser.ownerName

  buyerUserBD.money = buyerUser.money

  pastBuyerUpdatedBD.money = pastBuyerUpdated.money

  console.log(soldUserBD, " soldUserBD")
  console.log(buyerUserBD, " buyerUserBD")
  console.log(pastBuyerUpdatedBD, " pastBuyerUpdatedBD")

  console.log(users, " users 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡")

  /* soldUserBD.money = soldUser.money
  buyerUserBD = buyerUser
  pastBuyerUpdatedBD = pastBuyerUpdated */

  return "yeah"
}
