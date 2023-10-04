import { StyleSheet } from "react-native"
import theme from "./theme"
import { useUser } from "../info/UserContext"

export const stylesProfile = () => {
  const { user } = useUser()
  const dark = user.darkMode
  const owner = user.ownerColor

  return StyleSheet.create({
    boldTextProfile: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontWeight: "bold",
    },

    boldText: {
      color: !dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontWeight: "bold",
    },

    infoUserContent: {
      //padding: theme.global.padding,
      flexDirection: "row",
      marginBottom: theme.global.margin,
    },

    avatar: {
      width: 100,
      height: 100,
      borderWidth: 4,
      backgroundColor: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderRadius: theme.global.borderRadiusMini,
      borderColor: theme.generic.mainColor,
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
      color: !dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontWeight: "bold",
      fontSize: 22,
    },

    infoUserTextNameProfile: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontWeight: "bold",
      fontSize: 22,
    },

    infoUserTextValue: {
      color: !dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontSize: 14,
    },

    infoUserTextValueProfile: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontSize: 14,
    },

    infoUserText: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontSize: 14,
      textAlign: "center",
    },

    owner: {
      textAlign: "center",
      width: "auto",
      alignSelf: "center",
      fontSize: 10,
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

    userValueContent: {
      width: "80%",
      alignSelf: "center",
      marginBottom: 10,
    },

    userValueText: {
      backgroundColor: theme.colors.mainColor,
      textAlign: "center",
      fontSize: 16,
      paddingVertical: 4,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderTopLeftRadius: theme.global.borderRadiusMini,
      borderTopRightRadius: theme.global.borderRadiusMini,
    },
    userValueTextBuy: {
      backgroundColor: theme.colors.constrastColor,
      textAlign: "center",
      fontSize: 16,
      paddingVertical: 4,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderTopLeftRadius: theme.global.borderRadiusMini,
      borderTopRightRadius: theme.global.borderRadiusMini,
    },

    userValueMoney: {
      backgroundColor: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      textAlign: "center",
      fontSize: 36,
      fontWeight: "bold",
      color: !dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
    },
    userMoney: {
      marginTop: 2,
      textAlign: "center",
      fontSize: 10,
      letterSpacing: 1,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
    },

    userMoneyPoor: {
      marginTop: 2,
      textAlign: "center",
      fontSize: 10,
      letterSpacing: 1,
      color: "red",
    },

    userValueOwner: {
      backgroundColor: theme.colors.mainColor,
      textAlign: "center",
      fontSize: 10,
      paddingVertical: 4,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderBottomLeftRadius: theme.global.borderRadiusMini,
      borderBottomRightRadius: theme.global.borderRadiusMini,
    },

    userValueOwnerBuy: {
      backgroundColor: theme.colors.constrastColor,
      textAlign: "center",
      fontSize: 10,
      paddingVertical: 4,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      borderBottomLeftRadius: theme.global.borderRadiusMini,
      borderBottomRightRadius: theme.global.borderRadiusMini,
    },

    cardTop: {
      marginTop: 20,
      height: 30,
      backgroundColor: theme.colors.mainColor,

      borderTopLeftRadius: theme.global.borderRadiusMini,
      borderTopRightRadius: theme.global.borderRadiusMini,
    },
    cardContent: {
      backgroundColor: "white",
    },
    cardBottom: {
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.mainColor,

      borderBottomLeftRadius: theme.global.borderRadiusMini,
      borderBottomRightRadius: theme.global.borderRadiusMini,
    },

    goBack: {
      marginTop: 20,
      width: "100%",
      backgroundColor: theme.colors.textPrimary,
      borderRadius: theme.global.borderRadiusMini,
      paddingHorizontal: 5,
      paddingVertical: 10,
    },

    goBackText: {
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      fontSize: 16,
      textAlign: "center",
    },
  })
}
