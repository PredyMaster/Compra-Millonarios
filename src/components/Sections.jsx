import React from "react"
import { View, ScrollView, Text, Pressable, FlatList } from "react-native"
import FooterMenu from "../components/FooterMenu"
import { stylesGlobalMaster } from "../styles/globalStyle"
import globalTraductions from "../traductions/globalTraductions"
import { useUser } from "../info/UserContext"

const Item = ({ section, name, colorSection, navigation, globalStyles }) => (
  <Pressable
    title={name}
    onPress={() => navigation.navigate(section, { name: "Predy" })}
    style={[globalStyles.menuButton, globalStyles[colorSection]]}
  >
    <Text style={globalStyles.menuTextButton}>{name}</Text>
  </Pressable>
)

const Sections = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()

  const translatedValues = {
    arteTrans: globalTraductions("Arte", user.language),
    jugadoresTrans: globalTraductions("Jugadores", user.language),
    propiedadesTrans: globalTraductions("Propiedades", user.language),
    inversionesTrans: globalTraductions("Inversiones", user.language),
    negociosTrans: globalTraductions("Negocios", user.language),
    premiosTrans: globalTraductions("Premios", user.language),
    configTrans: globalTraductions("Configuracion", user.language),
    ayudaTrans: globalTraductions("Ayuda", user.language),
  }

  const SECTIONS = [
    {
      id: "1",
      section: "Art",
      name: translatedValues.arteTrans,
      colorSection: "orange",
    },
    {
      id: "2",
      section: "Players",
      name: translatedValues.jugadoresTrans,
      colorSection: "pink",
    },
    {
      id: "3",
      section: "Propierties",
      name: translatedValues.propiedadesTrans,
      colorSection: "green",
    },
    {
      id: "4",
      section: "Investments",
      name: translatedValues.inversionesTrans,
      colorSection: "green",
    },
    {
      id: "5",
      section: "Business",
      name: translatedValues.negociosTrans,
      colorSection: "orange",
    },
    {
      id: "6",
      section: "Awards",
      name: translatedValues.premiosTrans,
      colorSection: "blue",
    },
    {
      id: "7",
      section: "Config",
      name: translatedValues.configTrans,
      colorSection: "blue",
    },
    {
      id: "8",
      section: "Help",
      name: translatedValues.ayudaTrans,
      colorSection: "purple",
    },
  ]

  const renderItem = ({ item }) => (
    <Item
      section={item.section}
      name={item.name}
      colorSection={item.colorSection}
      navigation={navigation}
      globalStyles={globalStyles}
    />
  )

  return (
    <View
      style={[
        globalStyles.fullScreen,
        user.darkMode
          ? globalStyles.darkmodeContent
          : globalStyles.lightmodeContent,
      ]}
    >
      <View style={globalStyles.topScreen}>
        <View style={globalStyles.menuContent}>
          <FlatList
            data={SECTIONS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2} // Número de columnas deseado
          />
        </View>
      </View>
      <FooterMenu {...navigation} />
    </View>
  )
}

export default Sections
