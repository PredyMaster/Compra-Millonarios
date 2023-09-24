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

const Awards = ({ navigation }) => {
  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Awards</Text>
          <Text style={globalStyles.textInfoContent}>
            - Resumen del balance
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Gráficos y estadísticas de crecimiento financiero.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Acceso rápido a las inversiones y activos disponibles.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Lista de desafíos y logros para que los jugadores completen.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Recompensas por cumplir desafíos y logros específicos.
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Los jugadores que has comprado, con sus fortos de perfil y sus
            nombres
          </Text>
        </View>
      </ScrollView>
      <FooterMenu {...navigation} />
    </View>
  )
}

export default Awards
