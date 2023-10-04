export default ({ config }) => {
  return Object.assign(config, {
    icon: process.env.APP_ICON || "./assets/icon.png",
    name: process.env.APP_NAME || "Compro Millonarios",
    extra: {
      eas: {
        projectId: "compra-millonarios",
      },
      android: {
        package: "com.ComproMillonarios",
        versionCode: 1,
      },
      API_URI: process.env.API_URI,
      API_KEY: process.env.API_KEY,
    },
  })
}
