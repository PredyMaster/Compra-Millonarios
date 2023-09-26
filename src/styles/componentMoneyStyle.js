import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import theme from "./theme"

export const stylesMoney = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    textoComponent: {
      padding: 5,
      width: "auto",
      justifyContent: "center",
      color: user.darkmode ? "white" : "green",
    },

    cardFake: {
      width: "70%",
      height: 190,
    },

    cardContainer: {
      width: "100%",
      alignItems: "center",
      marginVertical: 14,
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
      margin: 4,
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
      marginRight: 20,
    },

    statusContainerWrapper: {
      justifyContent: "flex-end",
      display: "flex",
      right: 0,
      paddingVertical: 14,
      width: "fit-content",
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
      justifyContent: "space-between",
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

    ProgressBar: {
      width: 20,
    },

    relleno: {
      width: "100%",
      height: 40,
    },

    ProgressBarButton: {
      marginTop: 100,
      height: 100,
    },

    /*     ProgressBarMoney: {
      //color: dark ? theme.lightMode.colorPrimary : theme.darkMode.colorPrimary,
      fontSize: 40,
      justifyContent: "center",
    },
 */
    /*     ProgressBarContent: {
      justifyContent: "center",
      marginVertical: 40,
      backgroundColor: "white",
      display: "flex",
      alignContent: "center",
      textAlign: "center",
      alignItems: "center",
    },

    ProgressBar: {
      color: dark ? theme.darkMode.colorPrimary : theme.lightMode.colorPrimary,
      marginBottom: 60,
    },

    ProgressBarButton: {
      paddingVertical: 30,
      marginTop: 50,
      paddingVertical: 30,
    }, */
  })
}
