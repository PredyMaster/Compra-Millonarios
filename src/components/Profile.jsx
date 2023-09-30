import React, { useEffect, useState } from "react"
import { View, Text, Image, ScrollView } from "react-native"
import { stylesGlobalMaster } from "../styles/globalStyle"
import { stylesProfile } from "../styles/componentProfileStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { getMyUsers } from "../functions/globalFunctions"

import { useUser } from "../info/UserContext"

import UserGallery from "./UserGallery"
import FooterMenu from "../components/FooterMenu"

const Profile = ({ navigation }) => {
  const { user, updateUser } = useUser()
  const [myUsers, setMyUsers] = useState([])
  const globalStyles = stylesGlobalMaster()
  const styles = stylesProfile()

  useEffect(() => {
    const myUsersSearch = getMyUsers(user.id)
    setMyUsers(myUsersSearch)
  }, [])

  return (
    <View
      style={[
        globalStyles.fullScreen,
        user.darkMode
          ? globalStyles.darkmodeContent
          : globalStyles.lightmodeContent,
      ]}
    >
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={styles.infoUserContent}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={styles.infoUserTextContent}>
            <Text style={styles.infoUserTextName}>{user.name}</Text>
            <Text style={styles.infoUserTextValue}>
              Valor usuario{" "}
              <Text style={styles.boldText}>{user.userValue}</Text>
            </Text>
            <Text style={styles.infoUserTextValue}>
              Monedas <Text style={styles.boldText}>{user.money}</Text>
            </Text>
            <Text style={styles.infoUserTextValue}>
              Diamantes <Text style={styles.boldText}>{user.diamonds}</Text>
            </Text>
          </View>
        </View>

        {/*         <View>
          <Text>Personas que tengo compradas:</Text>
          {myUsers &&
            myUsers.map((item) => {
              console.log(item, " el item")
              return (
                <Text key={item.id} style={styles.infoUserTextValue}>
                  {item.name}
                </Text>
              )
            })}
          <Text></Text>
        </View> */}

        <View style={stylesProfile.UserGalleryComponent}>
          <Text style={styles.infoUserTextValue}>
            Personas que tengo compradas:
          </Text>
          <UserGallery myUsers={myUsers} navigation={navigation} />
          {/* {myUsers.length && <UserGallery myUsers={myUsers} />} */}
        </View>

        {/*         <View style={styles.sectionContent}>
          <View>
            <Text>Si te tienes en posesion o te han comprado</Text>
          </View>

          <View>
            <Text>Lista de usuarios que has comprado</Text>
          </View>
        </View>

        <View style={styles.sectionContent}>
          <View>
            <Text>Cantidad de materiales que tienes oro/plata/bronce</Text>
          </View>

          <View>
            <Text>Los negocios que te has comprado</Text>
          </View>

          <View>
            <Text>Las criptomonedas invertidas</Text>
          </View>
        </View>

        <View style={styles.sectionContent}>
          <View>
            <Text>
              Numero de hangares, garajes, puertos // coches, aviones, barcos
            </Text>
            <Text>Numero de casas, edificios, islas, monumentos</Text>
            <Text>Numero de cuadros, museos, NFTS</Text>
          </View>
        </View>

        <View style={styles.sectionContent}>
          <View>
            <Text>
              Links para compartir tu perfil del juego en redes sociales
            </Text>
          </View>
        </View> */}

        {/*         <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Profile</Text>
          <Text style={globalStyles.textInfoContent}>
            - Tu foto y tu nombre (Hay que controlar que la peña no suba fotos
            de pollas o cosas raras, poner un filtro de subida en las imagenes?)
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Sales si has comprado a otros jugadores (y sale la foto de los
            jugadores), el valor del jugador es 1000 euros, y cada vez que
            compran al jugador se revaloriza 500€{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Cantidad de moneda especial del juego (Mcoins){" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Balance total Sale quien te ha comprado Barra de grafico con la
            cantidad de dinero que tienes en cada sección de abajo
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Estadisticas de cuanto dinero has generado en (Inversiones,
            negocios..){" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>- Negocios</Text>

          <Text style={globalStyles.textInfoContent}>- Inversiones</Text>

          <Text style={globalStyles.textInfoContent}>
            - Dinero en Coleccionables
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Compartir en redes sociales{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - Te sale la cantidad de dinero que te ha donado otro usuario y
            puedes ver la lista // puedes dejar que se vea en tu perfil o
            desactivarlo desde opciones{" "}
          </Text>

          <Text style={globalStyles.textInfoContent}>
            - En tu cuenta tambien salen tus hangares, garajes, puertos etc
          </Text>
        </View> */}
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Profile
