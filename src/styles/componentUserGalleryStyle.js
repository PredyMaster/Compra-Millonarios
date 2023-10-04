import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import theme from "./theme"

export const stylesUserGallery = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    userGalleryCardContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignSelf: "center",
      alignContent: "center",
      paddingVertical: 10,
    },
    userGalleryCard: {
      width: 80,
      height: 80,
      backgroundColor: dark
        ? theme.darkMode.colorBackgroundInverse
        : theme.lightMode.colorBackgroundInverse,
      borderRadius: 6,
      textAlign: "center",
      alignSelf: "center",
      padding: 4,
      margin: 2,
      overflow: "hidden",
    },
    miniAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignSelf: "center",
      backgroundColor: "grey",
    },
    miniName: {
      textAlign: "center",
      fontWeight: "bold",
      lineHeight: 20,
      color: dark
        ? theme.darkMode.textColorInverse
        : theme.lightMode.textColorInverse,
    },
  })
}
