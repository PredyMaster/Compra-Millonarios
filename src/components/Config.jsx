import React, { useState } from "react"
import { View, Text, ScrollView, Switch, Modal, Pressable } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesConfig } from "../styles/componentConfigStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import { useUser } from "../info/UserContext"

import FooterMenu from "../components/FooterMenu"

const Config = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()
  const [isActiveDarkmode, setActiveDarkmode] = useState(!!user.darkMode)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const styles = stylesConfig()
  const words = ["ESP", "ENG", "CAT"]

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const handleDropdownSelect = (word) => {
    updateUser(() => ({ ...user, language: word }))
    toggleDropdown()
  }

  const toggleSwitch = () => {
    updateUser(() => ({ ...user, darkMode: isActiveDarkmode ? 0 : 1 }))
    setActiveDarkmode((previousState) => !previousState)
  }

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
        <View style={globalStyles.backContent}>
          <Text style={globalStyles.titleInfoContent}>Config</Text>

          <View style={styles.optionContent}>
            <Text style={globalStyles.invertLabel}>
              Activar/Desactivar DarkMode:
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isActiveDarkmode ? "#00ddfd" : "#cccccc"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isActiveDarkmode}
            />
          </View>
          {/* <Text>Darkmode: {user.darkMode}</Text>
          <Text>isActiveDarkmode: {isActiveDarkmode ? "true" : "false"}</Text> */}

          <View style={styles.optionContent}>
            <View style={styles.container}>
              <Text style={globalStyles.invertLabel}>
                Selecciona tu idioma:
              </Text>
              <Pressable onPress={toggleDropdown} style={styles.dropdownButton}>
                <Text>{user.language || "Idioma"}</Text>
              </Pressable>
              <Modal
                visible={isDropdownVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleDropdown}
              >
                <View style={globalStyles.modal}>
                  {words.map((word, index) => (
                    <Pressable
                      key={index}
                      onPress={() => handleDropdownSelect(word)}
                      style={globalStyles.modalItem}
                    >
                      <Text style={globalStyles.modalOptions}>{word}</Text>
                    </Pressable>
                  ))}
                </View>
              </Modal>
            </View>
          </View>

          {/* <View>
            <Text>{user.name}</Text>
          </View> */}
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Config
