import { View, Text, FlatList, Pressable } from "react-native"
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
    seccionesTrans: globalTraductions("Secciones", user.language),
  }

  const DATA = [
    {
      id: "1",
      section: "Profile",
      name: translatedValues.perfilTrans,
      colorSection: "blue",
    },
    {
      id: "2",
      section: "Money",
      name: translatedValues.dineroTrans,
      colorSection: "green",
    },
    {
      id: "3",
      section: "Sections",
      name: translatedValues.seccionesTrans,
      colorSection: "pink",
    },
    {
      id: "4",
      section: "Store",
      name: translatedValues.tiendaTrans,
      colorSection: "orange",
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
