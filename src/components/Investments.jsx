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

const Investments = ({ navigation }) => {
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
          <Text style={globalStyles.titleInfoContent}>Investments</Text>
          <Text style={globalStyles.textInfoContent}>
            - Opciones de inversión, como acciones, bienes raíces o
            criptomonedas.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Información sobre tendencias del mercado y oportunidades.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Historial de inversiones y rendimientos.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Lista de acciones disponibles para comprar.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Gráficos y datos en tiempo real sobre precios de las acciones.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Historial de transacciones en el mercado de valores.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Acciones, criptomonedas, metales preciosos (Oro, plata..)
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Investments
