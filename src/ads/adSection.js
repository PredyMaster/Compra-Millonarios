import { View, Text, StyleSheet, Image } from "react-native"
import theme from "../styles/theme"
import Publi from "../../assets/images/Publi.png"

export const AdFooter = () => {
  return (
    <View style={styles.adFooterContent}>
      <Image
        source={Publi} // Ruta relativa a la imagen local
        style={styles.adImage} // Define el ancho y alto de la imagen
      />
    </View>
  )
}

const styles = StyleSheet.create({
  adFooterContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "red",
  },

  adText: {
    color: "white",
    justifyContent: "center",
    width: "auto",
  },

  adImage: {
    width: "100%",
    height: 50,
  },
})
