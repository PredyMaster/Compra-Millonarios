import { View, Image, Text, Pressable, StyleSheet } from "react-native"
import theme from "../styles/theme"

const ItemRanking = ({ index, userRanking, navigation, value }) => {
  console.log(userRanking, " userRanking")
  return (
    <Pressable
      onPress={() => navigation.navigate("Profile", { userID: userRanking.id })}
      style={styles.buttonRanking}
    >
      <Text style={styles.position}>{index}</Text>
      <Image
        source={{ uri: userRanking.avatar }}
        style={styles.avatarRanking}
      />
      <Text style={styles.userNameRanking}>{userRanking.name}</Text>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonRanking: {
    backgroundColor: theme.generic.mainColor,
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: theme.global.borderRadiusMini,
    alignItems: "center",

    marginBottom: 10,
  },

  position: {
    color: "white",
    fontWeight: "bold",
  },

  avatarRanking: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },

  userNameRanking: {
    color: "white",
  },

  value: {
    color: "white",
    paddingLeft: 10,
    fontWeight: "bold",
  },
})

export default ItemRanking
