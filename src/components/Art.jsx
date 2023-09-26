import React from "react"
import { View, ScrollView, Text, Button } from "react-native"
import { scheduleNotificationAsync } from "expo-notifications"
import FooterMenu from "../components/FooterMenu"
import { stylesGlobalMaster } from "../styles/globalStyle"

import { useUser } from "../info/UserContext"

const Art = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()

  const enviarNotificacionPush = async () => {
    // Obtener la fecha actual
    const fechaActual = new Date()

    // Sumar 5 segundos a la fecha actual
    fechaActual.setSeconds(fechaActual.getSeconds() + 5)

    try {
      await scheduleNotificationAsync({
        content: {
          title: "¡Atención!",
          body: "Tienes que entrar, rápido!",
        },
        trigger: {
          date: fechaActual,
        },
      })
    } catch (error) {
      console.error("Error al programar la notificación:", error)
    }
  }

  return (
    <View
      style={[
        globalStyles.fullScreen,
        user.darkMode
          ? globalStyles.darkmodeContent
          : globalStyles.lightmodeContent,
      ]}
    >
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Art</Text>
          <Text style={globalStyles.textInfoContent}>
            - Un sitio donde comprar cuadros y obras de arte
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Hacerlo que sea exclusivo? modo VIP? que solo se puede pagar con
            diamantes?
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - ir haciendo eventos que salgan cuadros para que el usuario tenga
            que meterse dias en concreto para no perderse esa obra de arte
          </Text>
        </View>

        <View>
          <Button
            title="Enviar notificación push"
            onPress={enviarNotificacionPush}
          />
        </View>
      </ScrollView>
      <FooterMenu {...navigation} />
    </View>
  )
}

export default Art
