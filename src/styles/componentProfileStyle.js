import { StyleSheet } from "react-native"
import theme from "./theme"
import { useUser } from "../info/UserContext"

export const stylesProfile = () => {
  const { user } = useUser()
  const dark = user.darkMode
  const owner = user.ownerColor

  return StyleSheet.create({
    boldText: {
      fontWeight: "bold",
    },

    infoUserContent: {
      padding: theme.global.padding,
      paddingBottom: 10,
      flexDirection: "row",
    },

    avatar: {
      width: 100,
      height: 100,
      borderWidth: 4,
      backgroundColor: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderRadius: theme.global.borderRadiusMini,
      /* borderColor:
        owner === 0
          ? dark
            ? theme.darkMode.green
            : theme.lightMode.green
          : owner === 1
          ? dark
            ? theme.darkMode.yellow
            : theme.lightMode.yellow
          : owner === 2
          ? dark
            ? theme.darkMode.red
            : theme.lightMode.red
          : "green", */
    },

    infoUserTextContent: {
      padding: theme.global.padding,
      paddingVertical: 5,
      width: "60%",
    },

    infoUserTextName: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontWeight: "bold",
      fontSize: 22,
    },

    infoUserTextValue: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontSize: 14,
    },

    owner: {
      textAlign: "center",
      width: "auto",
      alignSelf: "center",
      backgroundColor: "grey",
      borderRadius: theme.global.borderRadiusMegaMini,
      paddingVertical: 4,
      paddingHorizontal: 10,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
    },

    button: {
      marginTop: 10,
      width: "60%",
      alignSelf: "center",
      backgroundColor: "green",
      borderRadius: theme.global.borderRadiusMegaMini,
      paddingVertical: 14,
      paddingHorizontal: 10,
    },

    buttonText: {
      textAlign: "center",
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
    },

    sectionContent: {
      padding: theme.global.padding,
      borderRadius: theme.global.borderRadiusMini,
      backgroundColor: "yellow",
      marginVertical: 10,
    },

    UserGalleryComponent: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "red",
      height: 80,
    },
  })
}
