import React, { useEffect, useState, useRef } from "react"
import { View, Text, Image, ScrollView, Pressable, Alert } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesProfile } from "../styles/componentProfileStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import {
  getMyUsers,
  getProfile,
  updateSoldUser,
} from "../functions/globalFunctions"

import { useUser } from "../info/UserContext"

import UserGallery from "./UserGallery"
import FooterMenu from "../components/FooterMenu"

const Profile = ({ route, navigation }) => {
  const { user, updateUser } = useUser()
  const userID = route.params?.userID ? route.params.userID : ""
  const actualUser = userID ? getProfile(userID) : user
  const [myUsers, setMyUsers] = useState([])
  const globalStyles = stylesGlobalMaster()
  const styles = stylesProfile()

  useEffect(() => {
    if (actualUser) setMyUsers(getMyUsers(actualUser.id))
  }, [actualUser])

  const buyUser = () => {
    if (user.id !== actualUser.owner) {
      if (user.money >= actualUser.userValue) {
        const pay = actualUser.userValue + 500

        const pastBuyer = getProfile(actualUser.owner)
        const soldUser = {
          ...actualUser,
          owner: user.id,
          ownerName: user.name,
          userValue: user.userValue + 500,
        }
        const buyerUser = { ...user, money: user.money - pay }
        const pastBuyerUpdated = { ...pastBuyer, money: pastBuyer.money + pay }

        updateSoldUser(soldUser, buyerUser, pastBuyerUpdated)
        updateUser({ ...buyerUser, money: buyerUser.money })
      } else {
        Alert.alert("No tienes dinero")
      }
    }
  }

  const estoyComprado = (user, actualUser) => {
    let valueUser
    user.id === actualUser.owner
      ? (valueUser = "COMPRADO")
      : (valueUser = actualUser.userValue + 500)

    return valueUser
  }

  const createBuyUserButton = () => {
    return <></>
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
        <View style={styles.infoUserContent}>
          <Image source={{ uri: actualUser.avatar }} style={styles.avatar} />
          <View style={styles.infoUserTextContent}>
            <Text style={styles.infoUserTextNameProfile}>
              {actualUser.name}
            </Text>

            {!userID && (
              <View>
                <Text style={styles.infoUserTextValueProfile}>
                  Valor usuario{" "}
                  <Text style={styles.boldTextProfile}>
                    {actualUser.userValue}
                  </Text>
                </Text>
              </View>
            )}
            <Text style={styles.infoUserTextValueProfile}>
              Monedas{" "}
              <Text style={styles.boldTextProfile}>{actualUser.money}</Text>
            </Text>
            <Text style={styles.infoUserTextValueProfile}>
              Diamantes{" "}
              <Text style={styles.boldTextProfile}>{actualUser.diamonds}</Text>
            </Text>
          </View>
        </View>

        {userID != "" && userID != user.id && (
          <View style={styles.userValueContent}>
            <Text
              style={
                estoyComprado(user, actualUser) === "COMPRADO"
                  ? styles.userValueTextBuy
                  : styles.userValueText
              }
            >
              Precio Usuario:
            </Text>
            <Text style={styles.userValueMoney}>
              {estoyComprado(user, actualUser)}
            </Text>
            <Text
              style={
                estoyComprado(user, actualUser) === "COMPRADO"
                  ? styles.userValueOwnerBuy
                  : styles.userValueOwner
              }
            >
              Comprado por {actualUser.ownerName}
            </Text>
          </View>
        )}

        <View>
          <Text style={styles.infoUserText}>
            {userID
              ? "Personas que tiene compradas"
              : "Personas que tengo compradas"}
          </Text>
          <UserGallery
            myUsers={myUsers}
            navigation={navigation}
            userID={actualUser.id}
          />
        </View>

        {userID != "" && actualUser.owner != user.id && (
          <View>
            <Pressable onPress={() => buyUser()}>
              <>
                <View style={globalStyles.buttonTextMixtButton}>
                  <Text style={globalStyles.buttonTextMixt}>
                    Comprar Usuario
                  </Text>
                </View>
                <View style={globalStyles.buttonTextMixtValue}>
                  <Text
                    style={
                      user.money >= actualUser.userValue
                        ? styles.userMoney
                        : styles.userMoneyPoor
                    }
                  >
                    [ Mi dinero: {user.money} ]
                  </Text>
                </View>
              </>
            </Pressable>
          </View>
        )}
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Profile
