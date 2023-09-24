import { View, Text } from "react-native"
import { globalStyles } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { language } from "../info/infoConfigUser"
import { infoUser } from "../info/infoUser"
import { AdFooter } from "../ads/adSection"
import Menu from "../components/Menu"

const Template = ({ navigation }) => {
  return (
    <View>
      <View style={globalStyles.infoContent}>
        <Text>Submenu componente</Text>
      </View>

      <View style={globalStyles.contentPrueba}>
        <Text>bienvenido {infoUser.name}</Text>
        <Text style={globalStyles.text}>Idioma del usuario : {language}</Text>
        <Text style={styles.textoComponent}>{globalTraductions("idioma")}</Text>
        <Text style={globalStyles.text}>{traductions("idiomaComponente")}</Text>
        <Text style={globalStyles.text}>{callApi()}</Text>
      </View>

      <View style={globalStyles.infoContent}>
        <Text>Info del componente</Text>
      </View>

      <Menu {...navigation} />

      <View>
        <AdFooter />
      </View>
    </View>
  )
}

export default Template
