import React, { useEffect, useState } from "react"
import { View, Text, ScrollView, Alert } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import ItemRanking from "./ItemRanking"

import {
  getRankingMoney,
  getRankingUserValue,
} from "../functions/globalFunctions"

import FooterMenu from "../components/FooterMenu"

import { useUser } from "../info/UserContext"

const Awards = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()
  const [rankingMoney, setRankingMoney] = useState()
  const [rankingUserValue, setRankingUserValue] = useState()

  useEffect(() => {
    setRankingMoney(getRankingMoney())
    setRankingUserValue(getRankingUserValue())
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
        {rankingMoney && (
          <View>
            <Text style={globalStyles.normalLabel}>Ranking de Money</Text>

            {rankingMoney.map((userRanking, index) => {
              return (
                <ItemRanking
                  key={userRanking.id}
                  index={index}
                  userRanking={userRanking}
                  value={userRanking.money}
                  navigation={navigation}
                />
              )
            })}
          </View>
        )}

        <View>
          <Text>
            -----------------------------------------------------------------
          </Text>
        </View>

        {rankingUserValue && (
          <View>
            <Text style={globalStyles.normalLabel}>Ranking de User Value</Text>

            {rankingUserValue.map((userRanking, index) => {
              console.log(userRanking, " userRanking")
              return (
                <ItemRanking
                  key={userRanking.id}
                  index={index}
                  userRanking={userRanking}
                  value={userRanking.userValue}
                  navigation={navigation}
                />
              )
            })}
          </View>
        )}

        <View style={globalStyles.filled}></View>

        {/*         <View style={globalStyles.infoContent}>
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
        </View> */}
      </ScrollView>
      <FooterMenu {...navigation} />
    </View>
  )
}

export default Awards
