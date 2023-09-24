import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  Switch,
  Modal,
  TouchableOpacity,
} from "react-native"
import { globalStyles } from "../styles/globalStyle"
import { styles } from "../styles/componentConfigStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { changeLanguage } from "../info/infoConfigUser"
import { infoUser } from "../info/infoUser"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import FooterMenu from "../components/FooterMenu"

const Config = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [selectedWord, setSelectedWord] = useState("")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const words = ["Español", "Ingles", "Catalan"]

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const handleDropdownSelect = (word) => {
    setSelectedWord(word)
    //changeLanguage(word)
    toggleDropdown()
  }

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Config</Text>

          <View style={styles.optionContent}>
            <Text>Activar/Desactivar DarkMode:</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={styles.optionContent}>
            <View style={styles.container}>
              <Text style={styles.labelDropdown}>Selecciona tu idioma:</Text>
              <TouchableOpacity
                onPress={toggleDropdown}
                style={styles.dropdownButton}
              >
                <Text>{selectedWord || "Idioma"}</Text>
              </TouchableOpacity>
              <Modal
                visible={isDropdownVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleDropdown}
              >
                <View style={globalStyles.modal}>
                  {words.map((word, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleDropdownSelect(word)}
                      style={globalStyles.modalItem}
                    >
                      <Text style={globalStyles.modalOptions}>{word}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Modal>
            </View>
          </View>

          <View></View>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Config
