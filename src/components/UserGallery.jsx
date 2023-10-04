import React from "react"
import { Image, Text, Pressable, ScrollView } from "react-native"
import { useUser } from "../info/UserContext"
import { stylesUserGallery } from "../styles/componentUserGalleryStyle"

const UserGallery = ({ myUsers, navigation }) => {
  const { user } = useUser()
  const styles = stylesUserGallery()

  const UserGalleryCard = ({ user, navigation, userID }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("Profile", {
            userID: userID,
          })
        } // <-------------------------------------------------------- Aquí está la ruta
        style={styles.userGalleryCard}
      >
        <Image style={styles.miniAvatar} source={{ uri: user.avatar }} />
        <Text style={styles.miniName}>{user.name}</Text>
      </Pressable>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.userGalleryCardContainer}>
      {myUsers &&
        myUsers.map((user) => (
          <UserGalleryCard
            key={user.id}
            user={user}
            userID={user.id}
            navigation={navigation}
          />
        ))}
    </ScrollView>
  )
}

export default UserGallery
