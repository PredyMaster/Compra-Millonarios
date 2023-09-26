import { StyleSheet } from "react-native"
import theme from "./theme"
import { useUser } from "../info/UserContext"

export const stylesProfile = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    boldText: {
      fontWeight: "bold",
    },

    infoUserContent: {
      padding: theme.global.padding,
      flexDirection: "row",
    },

    avatar: {
      width: 100,
      height: 100,
      borderWidth: 2,
      borderColor: dark
        ? theme.lightMode.colorPrimary
        : theme.darkMode.colorPrimary,
      borderRadius: theme.global.borderRadiusMini,
    },

    infoUserTextContent: {
      padding: theme.global.padding,
      paddingVertical: 5,
      width: "60%",
    },

    infoUserTextName: {
      color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
      fontWeight: "bold",
      fontSize: 22,
    },

    infoUserTextValue: {
      color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
      fontSize: 14,
    },

    sectionContent: {
      padding: theme.global.padding,
      borderRadius: theme.global.borderRadiusMini,
      backgroundColor: "yellow",
      marginBottom: 10,
    },
  })
}
