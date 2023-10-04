import React, { useEffect, useState } from "react"
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  Keyboard,
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
import { CardOnePlayer } from "./CardOnePlayer"

const Players = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()
  const [text, onChangeText] = useState("")
  const [usersFound, setUsersFound] = useState("")
  const [keyboardVisible, setKeyboardVisible] = useState(true)

  useEffect(() => {
    let searchedUsers
    if (text) {
      searchedUsers = searchUsers(text)
      setUsersFound(searchedUsers)
    }
    if (text === "") setUsersFound("")
  }, [text])

  useEffect(() => {
    // Realiza acciones cuando el teclado se muestra
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(false)
      }
    )

    // Realiza acciones cuando el teclado se oculta
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(true)
      }
    )
    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

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

        {usersFound !== "" &&
          usersFound &&
          usersFound.map((user) => (
            <View style={globalStyles.cardOnePlayer} key={user.id}>
              <CardOnePlayer
                key={user.id}
                usersFound={user}
                navigation={navigation}
                search={text}
              />
            </View>
          ))}

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

      {keyboardVisible && <FooterMenu {...navigation} />}
    </View>
  )
}

export default Players
