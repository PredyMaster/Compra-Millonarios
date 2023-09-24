import { language } from "../info/infoConfigUser"

const globalTraductions = (text) => {
  return traducciones[text][language]
}

//Traducciones
const traducciones = {
  idioma: {
    ESP: "Hola Español",
    ENG: "Hello English",
    CAT: "Bon dia Catalá",
  },
}

export default globalTraductions
