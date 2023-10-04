import { View, Text, ScrollView } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import FooterMenu from "../components/FooterMenu"

import { useUser } from "../info/UserContext"

const Business = ({ navigation }) => {
  const { user, updateUser } = useUser()
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
        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Business</Text>
          <Text style={globalStyles.textInfoContent}>
            - Lista de negocios disponibles para comprar
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Detalles de cada negocio, incluyendo costos y beneficios
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Opción para comprar, mejorar o vender negocios
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Business
