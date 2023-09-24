import { language } from "../info/infoConfigUser"

const traductions = (text) => {
  return traducciones[text][language]
}

//Traducciones
const traducciones = {
  idiomaComponente: {
    ESP: "Hola Español Componente",
    ENG: "Hello English Componente",
    CAT: "Bon dia Catalá Componente",
  },
}

export default traductions
