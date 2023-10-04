const globalTraductions = (text, language) => {
  return traducciones[text][language]
}

//Traducciones
const traducciones = {
  Perfil: {
    ESP: "Perfil",
    ENG: "Profile",
    CAT: "Perfil",
  },

  Arte: {
    ESP: "Arte",
    ENG: "Art",
    CAT: "Art",
  },

  Jugadores: {
    ESP: "Jugadores",
    ENG: "Players",
    CAT: "jugadors",
  },

  Propiedades: {
    ESP: "Propiedades",
    ENG: "Propierties",
    CAT: "Propietats",
  },

  Inversiones: {
    ESP: "Inversiones",
    ENG: "Investments",
    CAT: "Inversions",
  },

  Dinero: {
    ESP: "Dinero",
    ENG: "Money",
    CAT: "Diners",
  },

  Negocios: {
    ESP: "Negocios",
    ENG: "Business",
    CAT: "Negocis",
  },

  Premios: {
    ESP: "Premios",
    ENG: "Awards",
    CAT: "Premis",
  },

  Configuracion: {
    ESP: "Config",
    ENG: "Config",
    CAT: "Config",
  },

  Ayuda: {
    ESP: "Ayuda",
    ENG: "Help",
    CAT: "Ayuda",
  },

  Tienda: {
    ESP: "Tienda",
    ENG: "Store",
    CAT: "Botiga",
  },

  Secciones: {
    ESP: "Secciones",
    ENG: "Secciones",
    CAT: "Secciones",
  },
}

export default globalTraductions
