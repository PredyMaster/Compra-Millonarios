import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import theme from "./theme"

export const stylesHelp = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    textoComponent: {
      padding: 5,
      width: "auto",
      justifyContent: "center",
      color: user.darkmode ? "white" : "green",
    },

    red: {
      color: dark ? "red" : "green",
    },
  })
}
