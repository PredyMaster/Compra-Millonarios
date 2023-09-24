import { StyleSheet } from "react-native"
import theme from "./theme"

export const styles = StyleSheet.create({
  textoComponent: {
    padding: 5,
    width: "auto",
    justifyContent: "center",
    color: "green",
  },

  optionContent: {
    borderRadius: theme.global.borderRadiusMini,
    flexDirection: "row",
    backgroundColor: "#b1eff8",
    alignItems: "center",
    padding: 0,
    height: 90,
    marginVertical: 4,
    justifyContent: "space-around",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  labelDropdown: {
    alignItems: "flex-start",
    width: "90%",
  },
  dropdownButton: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#2bd3eb",
    borderColor: "#228f9f",
  },
})
