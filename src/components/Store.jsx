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

const Store = ({ navigation }) => {
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
          <Text style={globalStyles.titleInfoContent}>Store</Text>
          <Text style={globalStyles.textInfoContent}>
            - Opción para comprar moneda del juego ???
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Compras mejoras para casas o coches premium.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Publicidad opcional para ganar moneda del juego adicional. (Esto
            se puede adaptar a según el capital que tengas que el anuncio te de
            una cantidad mayor?
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Store
