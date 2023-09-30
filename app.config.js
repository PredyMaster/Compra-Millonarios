export default ({ config }) => {
  return Object.assign(config, {
    icon: process.env.APP_ICON || "./assets/icon.png",
    name: process.env.APP_NAME || "Compro Millonarios",
    extra: {
      eas: {
        projectId: "e3c2f82c-2cb0-46cd-a190-6c4cad1cc21f",
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
