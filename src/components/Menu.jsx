import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import globalTraductions from "../traductions/globalTraductions"
import { useUser } from "../info/UserContext"

const Item = ({ section, name, colorSection, navigation, globalStyles }) => (
  <TouchableOpacity
    title={name}
    onPress={() => navigation.navigate(section, { name: "Predy" })}
    style={[globalStyles.menuButton, globalStyles[colorSection]]}
  >
    <Text style={globalStyles.menuTextButton}>{name}</Text>
  </TouchableOpacity>
)

const Menu = (navigation) => {
  const { user, updateUser } = useUser()
  const globalStyles = stylesGlobalMaster()

  const translatedValues = {
    perfilTrans: globalTraductions("Perfil", user.language),
    arteTrans: globalTraductions("Arte", user.language),
    jugadoresTrans: globalTraductions("Jugadores", user.language),
    propiedadesTrans: globalTraductions("Propiedades", user.language),
    inversionesTrans: globalTraductions("Inversiones", user.language),
    dineroTrans: globalTraductions("Dinero", user.language),
    negociosTrans: globalTraductions("Negocios", user.language),
    premiosTrans: globalTraductions("Premios", user.language),
    configTrans: globalTraductions("Configuracion", user.language),
    ayudaTrans: globalTraductions("Ayuda", user.language),
    tiendaTrans: globalTraductions("Tienda", user.language),
  }

  const DATA = [
    {
      id: "1",
      section: "Profile",
      name: translatedValues.perfilTrans,
      colorSection: "green",
    },
    {
      id: "2",
      section: "Art",
      name: translatedValues.arteTrans,
      colorSection: "orange",
    },
    {
      id: "3",
      section: "Players",
      name: translatedValues.jugadoresTrans,
      colorSection: "pink",
    },
    {
      id: "4",
      section: "Propierties",
      name: translatedValues.propiedadesTrans,
      colorSection: "green",
    },
    {
      id: "5",
      section: "Investments",
      name: translatedValues.inversionesTrans,
      colorSection: "green",
    },
    {
      id: "6",
      section: "Money",
      name: translatedValues.dineroTrans,
      colorSection: "green",
    },
    {
      id: "7",
      section: "Business",
      name: translatedValues.negociosTrans,
      colorSection: "orange",
    },
    {
      id: "8",
      section: "Awards",
      name: translatedValues.premiosTrans,
      colorSection: "blue",
    },
    {
      id: "9",
      section: "Config",
      name: translatedValues.configTrans,
      colorSection: "blue",
    },
    {
      id: "10",
      section: "Help",
      name: translatedValues.ayudaTrans,
      colorSection: "purple",
    },
    {
      id: "11",
      section: "Store",
      name: translatedValues.tiendaTrans,
      colorSection: "yellow",
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
    <View style={globalStyles.menuContent}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4} // Número de columnas deseado
      />
    </View>
  )
}

export default Menu
