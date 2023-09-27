import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import theme from "./theme"
import Constants from "expo-constants"

export const stylesMoney = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    fullScreen: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    topScreen: {
      flex: 1,
    },

    sectionMoneyContainer: {
      width: "100%",
      alignItems: "center",
      paddingVertical: 30,
      backgroundColor: "#1a1a1a",
      borderBottomLeftRadius: theme.global.borderRadius,
      borderBottomRightRadius: theme.global.borderRadius,
    },

    card: {
      width: 300,
      height: 180,
      borderRadius: theme.global.borderRadiusMini,
      padding: 2,
      //opacity: 0.4,
      //marginTop: -185,
    },

    borderCard: {
      flex: 1,
      borderWidth: 4,
      borderColor: "#005095",
      borderRadius: 9,
    },

    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: theme.global.borderRadiusMini,
      overflow: "hidden",
      borderColor: dark
        ? theme.lightMode.colorPrimary
        : theme.darkMode.colorPrimary,
      borderWidth: 1,
    },

    statusContainer: {
      width: "100%",
      height: 90,
      alignItems: "flex-end",
    },

    status: {
      textTransform: "uppercase",
      fontSize: 10,
      letterSpacing: 2,
      borderWidth: 1,
      borderColor: dark
        ? theme.lightMode.colorPrimary
        : theme.darkMode.colorPrimary,
      color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
      borderRadius: 20,
      padding: 14,
      paddingVertical: 3,
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      alignContent: "center",
    },

    statusContainerWrapper: {
      justifyContent: "space-between",
      flexDirection: "row",
      display: "flex",
      right: 0,
      paddingVertical: 6,
      paddingHorizontal: 18,
      width: "100%",
    },

    logoWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },

    logo: {
      paddingTop: 11,
      justifyContent: "center",
      fontSize: 28,
    },

    moneyContainter: {
      paddingHorizontal: 25,
      width: "100%",
      justifyContent: "flex-end",
      flexDirection: "row",
      bottom: 2,
      alignItems: "center",
    },

    bank: {
      color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
    },

    money: {
      fontWeight: "bold",
      fontSize: 25,
      color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
    },

    multiplierContainter: {
      paddingRight: 28,
      marginTop: -8,
      justifyContent: "flex-end",
      width: "100%",
    },

    multiplier: {
      textAlign: "right",
      fontSize: 12,
      color: "greenyellow",
    },

    progresBarContainer: {
      marginTop: 14,
      backgroundColor: "#034c8d",
      width: 300,
      borderRadius: theme.global.borderRadius,
      padding: 20,
    },

    valueClickContainer: {
      alignItems: "center",
    },

    valueClick: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },

    levelsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    levels: {
      fontSize: 10,
      paddingHorizontal: 8,
      color: theme.colors.textTertiary,
    },

    ProgressBar: {
      width: 20,
      height: 10,
    },

    adWrapper: {
      width: "100%",
      alignItems: "center",
    },

    clickSection: {
      flex: 1,
      backgroundColor: "ghostwhite",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: -50,

      zIndex: -1,
    },

    clickIcon: {
      width: 60,
      height: 60,
      marginVertical: "100%",
    },

    adSection: {
      backgroundColor: "#387fbc",
      width: "50%",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomLeftRadius: theme.global.borderRadius,
      borderBottomRightRadius: theme.global.borderRadius,
      alignItems: "center",
      borderWidth: 2,
      borderTopWidth: 0,
      borderColor: "white",
    },

    relleno: {
      width: "100%",
      height: 40,
    },

    ProgressBarButton: {
      marginTop: 100,
      height: 100,
    },
  })
}
