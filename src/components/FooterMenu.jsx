import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"
import { View } from "react-native"
import { globalStyles } from "../styles/globalStyle"

const FooterMenu = (navigation) => {
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
