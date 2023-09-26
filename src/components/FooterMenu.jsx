import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"
import { View } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"

const FooterMenu = (navigation) => {
  const globalStyles = stylesGlobalMaster()

  return (
    <View style={globalStyles.bottomScreen}>
      <Menu {...navigation} />

      <View>
        <AdFooter />
      </View>
    </View>
  )
}

export default FooterMenu
