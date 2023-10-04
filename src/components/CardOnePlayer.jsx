import React from "react"
import { View, Image, Text, Pressable } from "react-native"
import { stylesProfile } from "../styles/componentProfileStyle"

export const CardOnePlayer = ({ usersFound, navigation, search }) => {
  console.log(usersFound, " usersFound")
  const CardComponent = (usersFound) => {
    const styles = stylesProfile()
    if (usersFound != undefined) {
      return (
        <Pressable
          onPress={() =>
            navigation.navigate("Profile", {
              userID: usersFound.id,
              goBack: "CardOnePlayer",
              search,
            })
          }
        >
          <View style={styles.cardTop}></View>

          <View style={styles.cardContent}>
            <View style={styles.infoUserContent}>
              <Image
                source={{ uri: usersFound.avatar }}
                style={styles.avatar}
              />
              <View style={styles.infoUserTextContent}>
                <Text style={styles.infoUserTextName}>{usersFound.name}</Text>
                <Text style={styles.infoUserTextValue}>
                  Valor usuario{" "}
                  <Text style={styles.boldText}>{usersFound.userValue}</Text>
                </Text>
                <Text style={styles.infoUserTextValue}>
                  Monedas{" "}
                  <Text style={styles.boldText}>{usersFound.money}</Text>
                </Text>
                <Text style={styles.infoUserTextValue}>
                  Diamantes{" "}
                  <Text style={styles.boldText}>{usersFound.diamonds}</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.cardBottom}>
            <Text style={styles.owner}>
              Propiedad de {usersFound.ownerName}
            </Text>
          </View>

          {/* <Pressable
            onPress={() => console.log("comprado")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Comprar por {usersFound.userValue + 500}
            </Text>
          </Pressable> */}
        </Pressable>
      )
    }
  }

  return CardComponent(usersFound)
}
