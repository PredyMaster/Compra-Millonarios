import React, { useState, useEffect } from "react"
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesMoney } from "../styles/componentMoneyStyle"
import ProgressBar from "./ProgressBar"
import FooterMenu from "../components/FooterMenu"
import { useUser } from "../info/UserContext"

const Money = ({ navigation }) => {
  //const difficultyLevels = [3, 6, 9, 12, 15, 18, 21, 24, 27]

  const difficultyLevels = [3, 6, 9]

  const findLevel = (valor, niveles) => {
    let position = niveles.indexOf(niveles.find((level) => valor < level)) + 1
    return position === 0 ? niveles.length + 1 : position
  }

  const calcMaxClickLevel = (valor, niveles) => {
    const aboveLevels = niveles.filter((level) => valor < level)
    return aboveLevels.length > 0 ? aboveLevels[0] : null
  }

  const { user, updateUser } = useUser()
  const [economicStatus, setEconomicStatus] = useState("--")
  const [numClicks, setNumClicks] = useState(user.money)
  const [level, setLevel] = useState(findLevel(user.money, difficultyLevels))
  const [enabledProgressBar, setEnabledProgressBar] = useState(true)
  const [nextLevel, setNextLevel] = useState(difficultyLevels[0])
  const [maxClickLevel, setMaxClickLevel] = useState(
    calcMaxClickLevel(user.money, difficultyLevels)
  )

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const moneyRank = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
    const Status = [
      "indigente",
      "pobre",
      "clase baja",
      "clase media-baja",
      "clase media",
      "clase media-alta",
      "clase alta",
      "adinerado",
      "millonario",
      "multimillonario",
      "billonario",
      "multibillonario",
      "trillonario",
    ]

    let position = moneyRank.indexOf(
      moneyRank.find((position) => numClicks < position)
    )
    if (position === -1) position = moneyRank.length

    setEconomicStatus(Status[position])
    updateUser({ ...user, money: numClicks })
  }, [numClicks])

  const globalStyles = stylesGlobalMaster()
  const styles = stylesMoney()

  const cuentaClicks = () => {
    setNumClicks(numClicks + 1)

    if (enabledProgressBar) {
      setProgress(progress + 1)

      if (progress === maxClickLevel && level < difficultyLevels.length) {
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
        styles.fullScreen,
        user.darkMode
          ? globalStyles.darkmodeContent
          : globalStyles.lightmodeContent,
      ]}
    >
      <View style={styles.topScreen}>
        <View style={styles.sectionMoneyContainer}>
          <View style={styles.card}>
            <View style={styles.borderCard}>
              <ImageBackground
                source={require("../../assets/images/card.jpg")} // Reemplaza con tu propia imagen de fondo
                style={styles.imageBackground}
              >
                <View style={styles.statusContainer}>
                  <View style={styles.statusContainerWrapper}>
                    <Text style={styles.bank}>Nivel {level}</Text>
                    <Text style={styles.status}>{economicStatus}</Text>
                  </View>
                  {/* <View style={styles.logoWrapper}>
                  <Text style={styles.logo}>💰</Text>
                </View> */}
                </View>
                <View style={styles.moneyContainter}>
                  <Text style={styles.money}>{numClicks}</Text>
                </View>

                {/* <View style={styles.multiplierContainter}>
                  <Text style={styles.multiplier}>+5</Text>
                </View> */}
              </ImageBackground>
            </View>
          </View>

          {enabledProgressBar && (
            <View style={styles.progresBarContainer}>
              <View style={styles.valueClickContainer}>
                <Text style={styles.valueClick}>1😄 / Click</Text>
              </View>
              <View style={styles.levelsContainer}>
                <Text style={styles.levels}>Nivel {level}</Text>
                <Text style={styles.levels}>
                  Nivel {level === difficultyLevels.length ? "Max" : level + 1}
                </Text>
              </View>
              <ProgressBar
                start={0}
                end={maxClickLevel}
                progress={progress}
                style={styles.ProgressBar}
              />
            </View>
          )}
          {/* <View style={styles.relleno}></View> */}
        </View>
        <View style={styles.adWrapper}>
          <Pressable
            style={styles.adSection}
            onPress={() => Alert.alert("PUBLI")}
          >
            <Text>publi</Text>
          </Pressable>
        </View>

        <Pressable style={styles.clickSection} onPress={cuentaClicks}>
          {/* <Text>Nivel {level}</Text>
          <Text>Monedas {numClicks}</Text>
          <Text>Monedas siguiente nivel: {nextLevel}</Text>
          <Text>maxClickLevel: {maxClickLevel}</Text>
          <Text>progress: {progress}</Text> */}

          <Image
            source={require("../../assets/images/clickIcon.png")}
            style={styles.clickIcon}
          />
        </Pressable>

        {/* <Button
          onPress={cuentaClicks}
          title="PULSA COMO UN LOCO"
          style={styles.ProgressBarButton}
        /> */}
      </View>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Money
