import { StyleSheet, Text, View, Button } from "react-native"

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoy en el INICIO</Text>

      <View style={styles.wrapperButton}>
        <Button
          title="DarkMode"
          onPress={() => navigation.navigate("DarkMode", { name: "Predy" })}
          style={styles.button}
        />

        <Button
          title="Template"
          onPress={() => navigation.navigate("Template", { name: "Ana" })}
          style={styles.button}
        />

        {/* <Button
          title="STATUSBAR"
          onPress={() => navigation.navigate("StatusBar", { name: "Juanmita" })}
          style={styles.button}
        />

        <Button
          title="MODAL"
          onPress={() => navigation.navigate("Modal", { name: "Sergete" })}
          style={styles.button}
        />

        <Button
          title="Graficos"
          onPress={() => navigation.navigate("Graficos", { name: "Sergete" })}
          style={styles.button}
        />

        <Button
          title="ConversorMoneda"
          onPress={() =>
            navigation.navigate("ConversorMoneda", { name: "Vilori" })
          }
          style={styles.button}
        /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    marginBottom: 0,
    fontSize: 20,
  },
  wrapperButton: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-evenly",
    //flexFlow: "wrap",
    gap: 10,
    margin: 5,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "green",
    fontSize: 20,
    width: "auto",
    paddingVertical: 30,
    //flexFlow: "wrap",
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
    marginTop: 20,
    borderRadius: 20,
  },
})
