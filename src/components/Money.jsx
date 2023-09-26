import React, { useState } from "react"
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesMoney } from "../styles/componentMoneyStyle"
import ProgressBar from "./ProgressBar"
import FooterMenu from "../components/FooterMenu"
import { useUser } from "../info/UserContext"

const Money = ({ navigation }) => {
  const difficultyLevels = [3, 6, 9, 12, 15, 18, 21, 24, 27]

  const findLevel = (valor, niveles) => {
    let position = niveles.indexOf(niveles.find((level) => valor < level)) + 1
    return position === 0 ? niveles.length + 1 : position
  }

  const calcMaxClickLevel = (valor, niveles) => {
    const aboveLevels = niveles.filter((level) => valor < level)
    return aboveLevels.length > 0 ? aboveLevels[0] : null
  }

  const { user, updateUser } = useUser()
  const [numClicks, setNumClicks] = useState(user.money)
  const [level, setLevel] = useState(findLevel(user.money, difficultyLevels))
  const [enabledProgressBar, setEnabledProgressBar] = useState(true)
  const [nextLevel, setNextLevel] = useState(difficultyLevels[0])
  const [maxClickLevel, setMaxClickLevel] = useState(
    calcMaxClickLevel(user.money, difficultyLevels)
  )

  const [progress, setProgress] = useState(0)

  const globalStyles = stylesGlobalMaster()
  const styles = stylesMoney()

  //console.log(findLevel(8, difficultyLevels))

  const cuentaClicks = () => {
    setNumClicks(numClicks + 1)

    if (enabledProgressBar) {
      setProgress(progress + 1)

      if (progress === maxClickLevel && level < difficultyLevels.length) {
        console.log("Entro en el if")
        setProgress(1)
        setNextLevel((prev) => prev + difficultyLevels[level])
        setMaxClickLevel(difficultyLevels[level])
        setLevel(level + 1)
      }
      if (progress >= difficultyLevels[difficultyLevels.length - 1]) {
        setEnabledProgressBar(false)
      }
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

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.borderCard}>
              <ImageBackground
                source={require("../../assets/images/card.jpg")} // Reemplaza con tu propia imagen de fondo
                style={styles.imageBackground}
              >
                <View style={styles.statusContainer}>
                  <View style={styles.statusContainerWrapper}>
                    <Text style={styles.status}>MILLONARIO</Text>
                  </View>
                  {/* <View style={styles.logoWrapper}>
                  <Text style={styles.logo}>💰</Text>
                </View> */}
                </View>
                <View style={styles.moneyContainter}>
                  <Text style={styles.bank}>Nivel {level}</Text>
                  <Text style={styles.money}>{numClicks}</Text>
                </View>

                <View style={styles.multiplierContainter}>
                  <Text style={styles.multiplier}>+5</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>

        {enabledProgressBar && (
          <ProgressBar
            start={0}
            end={maxClickLevel}
            progress={progress}
            style={styles.ProgressBar}
          />
        )}
        <View style={styles.relleno}></View>

        <Button
          onPress={cuentaClicks}
          title="PULSA COMO UN LOCO"
          style={styles.ProgressBarButton}
        />

        <Text>Nivel {level}</Text>
        <Text>Monedas {numClicks}</Text>
        {enabledProgressBar && (
          <Text>Monedas siguiente nivel: {nextLevel}</Text>
        )}
        <Text>maxClickLevel: {maxClickLevel}</Text>
        <Text>progress: {progress}</Text>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Money
