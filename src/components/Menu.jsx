import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { globalStyles } from "../styles/globalStyle"

const DATA = [
  { id: "1", section: "Profile", colorSection: "green" },
  { id: "2", section: "Art", colorSection: "orange" },
  { id: "3", section: "Players", colorSection: "pink" },
  { id: "4", section: "Propierties", colorSection: "green" },
  { id: "5", section: "Investments", colorSection: "green" },
  { id: "6", section: "Money", colorSection: "green" },
  { id: "7", section: "Business", colorSection: "orange" },
  { id: "8", section: "Awards", colorSection: "blue" },
  { id: "9", section: "Config", colorSection: "blue" },
  { id: "10", section: "Help", colorSection: "purple" },
  { id: "11", section: "Store", colorSection: "yellow" },
]

const Item = ({ section, colorSection, navigation }) => (
  <TouchableOpacity
    title={section}
    onPress={() => navigation.navigate(section, { name: "Predy" })}
    style={[globalStyles.menuButton, globalStyles[colorSection]]}
  >
    <Text style={globalStyles.menuTextButton}>{section}</Text>
  </TouchableOpacity>
)

const Menu = (navigation) => {
  const renderItem = ({ item }) => (
    <Item
      section={item.section}
      colorSection={item.colorSection}
      navigation={navigation}
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
