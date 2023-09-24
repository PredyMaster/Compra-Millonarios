import { View, Text, ScrollView } from "react-native"
import { globalStyles } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { language } from "../info/infoConfigUser"
import { infoUser } from "../info/infoUser"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import FooterMenu from "../components/FooterMenu"

const Investments = ({ navigation }) => {
  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

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
