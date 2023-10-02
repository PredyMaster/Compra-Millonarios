import React from "react"
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native"
import { useUser } from "../info/UserContext"
import theme from "../styles/theme"

const UserGalleryCard = ({ user, navigation, userID, dark }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Profile", {
          userID: userID,
        })
      } // <-------------------------------------------------------- Aquí está la ruta
      style={styles.userGalleryCard}
    >
      <Image style={styles.miniAvatar} source={{ uri: user.avatar }} />
      <Text style={styles.miniName}>{user.name}</Text>
    </TouchableOpacity>
  )
}

const UserGallery = ({ myUsers, navigation }) => {
  const { user } = useUser()
  const dark = user.darkMode

  /*   console.log("Render UserGallery", myUsers)
   */ return (
    <ScrollView contentContainerStyle={styles.userGalleryCardContainer}>
      {myUsers &&
        myUsers.map((user) => (
          <UserGalleryCard
            key={user.id}
            user={user}
            userID={user.id}
            dark={dark}
            navigation={navigation}
          />
        ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
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
    backgroundColor: "white",
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
  },
})

export default UserGallery
