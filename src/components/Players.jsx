import React, { useEffect, useState } from "react"
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"
import { getUsers } from "../functions/globalFunctions"
import { stylesProfile } from "../styles/componentProfileStyle"

import FooterMenu from "../components/FooterMenu"
import { searchUsers } from "../functions/globalFunctions"

import { useUser } from "../info/UserContext"
/* import { CardPlayer } from "./CardPlayer" */
/* import { CCardPlayer } from "./CardPlayer" */
import { CardOnePlayer } from "./CardOnePlayer"

const Players = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()
  const [text, onChangeText] = useState("")
  const [usersFound, setUsersFound] = useState("")
  const styles = stylesProfile()

  useEffect(() => {
    let searchedUsers
    if (text) {
      //console.log(" entra en if ", text)
      searchedUsers = searchUsers(text)
      setUsersFound(searchedUsers)
    }
  }, [text])

  //console.log(usersFound, " usersFound 🧡")

  return (
    <View
      style={[
        globalStyles.fullScreen,
        user.darkMode
          ? globalStyles.darkmodeContent
          : globalStyles.lightmodeContent,
      ]}
    >
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <Text style={globalStyles.labelSearch}>Encuentra al usuario</Text>
        <SafeAreaView>
          <TextInput
            inputMode="search"
            maxLength={40}
            onChangeText={onChangeText}
            value={text}
            style={globalStyles.inputSearch}
          />
        </SafeAreaView>

        {/* <Text style={globalStyles.titleInfoContent}>
          {console.log(usersFound.name, " usersFound.name 💙")}
        </Text> 
         */}

        {usersFound !== "" && <CardOnePlayer usersFound={usersFound} />}

        {/*         <View>
          <View style={styles.infoUserContent}>
            <Image source={{ uri: usersFound.avatar }} style={styles.avatar} />
            <View style={styles.infoUserTextContent}>
              <Text style={styles.infoUserTextName}>{usersFound.name}</Text>
              <Text style={styles.infoUserTextValue}>
                Valor usuario{" "}
                <Text style={styles.boldText}>{usersFound.userValue}</Text>
              </Text>
              <Text style={styles.infoUserTextValue}>
                Monedas <Text style={styles.boldText}>{usersFound.money}</Text>
              </Text>
              <Text style={styles.infoUserTextValue}>
                Diamantes{" "}
                <Text style={styles.boldText}>{usersFound.diamonds}</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.owner}>Propiedad de {usersFound.ownerName}</Text>
        </View> */}

        {/* <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Players</Text>

          <Text style={globalStyles.textInfoContent}>
            - Sale quien te ha comprado y tiene la opcion de volverte a comprar
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Sale un listado de todos tus jugadores comprados y el valor actual
            de cada uno
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Historial de toda la gente que te ha comprado y por cuanto dinero,
            en plan log??
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Una opcion para buscar otros usuarios por sus nombres
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Ranking con los mejores jugadores y la opcion de comprarlos
          </Text>
        </View> */}
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Players
