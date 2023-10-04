import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import theme from "./theme"

export const stylesConfig = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    optionContent: {
      borderRadius: theme.global.borderRadiusMini,
      flexDirection: "row",
      backgroundColor: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      alignItems: "center",
      padding: 0,
      height: 110,
      marginVertical: 4,
      justifyContent: "space-around",
    },

    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    labelDropdown: {
      alignItems: "flex-start",
      width: "90%",
    },
    dropdownButton: {
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      width: "90%",
      alignItems: "center",
      backgroundColor: theme.generic.mainColor,
    },
  })
}
