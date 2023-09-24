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

const Money = ({ navigation }) => {
  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Money</Text>
          <Text style={globalStyles.textInfoContent}>
            - Tarjeta con el dinero total
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Barra de subida de nivel
          </Text>
          <Text style={globalStyles.textInfoContent}>- Botón de click</Text>
          <Text style={globalStyles.textInfoContent}>
            - Publicidad para el multiplicador del clicker
          </Text>
          <Text style={globalStyles.textInfoContent}>- Menú de opciones</Text>
          <Text style={globalStyles.textInfoContent}>
            - Al hacer click van saliendo +1s
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Para eventos especiales aparece un objeto en pantalla que si no
            clickas pierdes
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Money
