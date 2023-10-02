import React, { useEffect } from "react"
import { View, Text, ScrollView } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import {
  getRankingMoney,
  getRankingUserValue,
} from "../functions/globalFunctions"

import FooterMenu from "../components/FooterMenu"

import { useUser } from "../info/UserContext"

const Awards = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()

  useEffect(() => {
    getRankingMoney()

    getRankingUserValue()
  }, [])

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
