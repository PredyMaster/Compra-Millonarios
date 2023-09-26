import { View, Text, ScrollView } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesHelp } from "../styles/componentHelpStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import FooterMenu from "../components/FooterMenu"

import { useUser } from "../info/UserContext"

const Help = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const styles = stylesHelp()
  const globalStyles = stylesGlobalMaster()

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

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Help</Text>
          <Text style={globalStyles.textInfoContent}>
            - Sección de preguntas frecuentes.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Formulario de contacto para soporte al cliente.
          </Text>
          <Text style={styles.red}>
            - Enlaces a redes sociales y comunidad de jugadores.
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Help
