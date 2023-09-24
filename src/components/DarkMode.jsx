import {
  View,
  Text,
  Appearance,
  useColorScheme,
  StyleSheet,
} from "react-native"
import { commonColor, light, dark } from "../pantallas/colors"

const colorScheme = Appearance.getColorScheme()

const DarkMode = () => {
  const theme = useColorScheme()
  const isDarkTheme = theme === "dark"

  return (
    <View
      style={[
        styles.content,
        isDarkTheme
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" },
      ]}
    >
      <Text style={styles.textos}>
        {colorScheme === "dark" ? "DarkMode ACTIVADO" : "DarkMode desactivado"}
      </Text>
      <Text style={styles.textos}>{theme} : theme</Text>
      <Text style={[isDarkTheme ? { color: "red" } : { color: "green" }]}>
        {isDarkTheme ? "true" : "false"} : isDarkTheme
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    marginHorizontal: 20,
  },

  textos: {
    borderWidth: 3,
    borderColor: "grey",
    borderRadius: 10,
    padding: 5,
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  isDarkTheme: {},
})

export default DarkMode
