import { View, Text, ScrollView } from "react-native"
import { globalStyles } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { language } from "../info/infoConfigUser"
import { infoUser } from "../info/infoUser"

import FooterMenu from "../components/FooterMenu"

const Profile = ({ navigation }) => {
  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Profile</Text>
          <Text style={globalStyles.textInfoContent}>
            - Tu foto y tu nombre (Hay que controlar que la peña no suba fotos
            de pollas o cosas raras, poner un filtro de subida en las imagenes?)
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Sales si has comprado a otros jugadores (y sale la foto de los
            jugadores), el valor del jugador es 1000 euros, y cada vez que
            compran al jugador se revaloriza 500€{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Cantidad de moneda especial del juego (Mcoins){" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Balance total Sale quien te ha comprado Barra de grafico con la
            cantidad de dinero que tienes en cada sección de abajo
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Estadisticas de cuanto dinero has generado en (Inversiones,
            negocios..){" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>- Negocios</Text>

          <Text style={globalStyles.textInfoContent}>- Inversiones</Text>

          <Text style={globalStyles.textInfoContent}>
            - Dinero en Coleccionables
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Compartir en redes sociales{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Te sale la cantidad de dinero que te ha donado otro usuario y
            puedes ver la lista // puedes dejar que se vea en tu perfil o
            desactivarlo desde opciones{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - En tu cuenta tambien salen tus hangares, garajes, puertos etc
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Profile
