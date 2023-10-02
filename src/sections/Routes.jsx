import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

import Profile from "../components/Profile"
import Players from "../components/Players"
import Propierties from "../components/Propierties"
import Investments from "../components/Investments"
import Money from "../components/Money"
import Art from "../components/Art"
import Business from "../components/Business"
import Awards from "../components/Awards"
import Config from "../components/Config"
import Help from "../components/Help"
import Store from "../components/Store"
import UserGallery from "../components/UserGallery"

const Tab = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ animation: "none" }}>
        <Tab.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => <Profile {...props} goBack="Profile" search="" />}
        </Tab.Screen>
        <Tab.Screen
          name="Art"
          options={{ headerShown: false }}
          component={Art}
        />
        <Tab.Screen
          name="Players"
          options={{ headerShown: false }}
          component={Players}
        />
        <Tab.Screen
          name="Propierties"
          options={{ headerShown: false }}
          component={Propierties}
        />
        <Tab.Screen
          name="Investments"
          options={{ headerShown: false }}
          component={Investments}
        />
        <Tab.Screen
          name="Money"
          options={{ headerShown: false }}
          component={Money}
        />
        <Tab.Screen
          name="Business"
          options={{ headerShown: false }}
          component={Business}
        />
        <Tab.Screen
          name="Awards"
          options={{ headerShown: false }}
          component={Awards}
        />
        <Tab.Screen
          name="Config"
          options={{ headerShown: false }}
          component={Config}
        />
        <Tab.Screen
          name="Help"
          options={{ headerShown: false }}
          component={Help}
        />
        <Tab.Screen
          name="Store"
          options={{ headerShown: false }}
          component={Store}
        />
        <Tab.Screen
          name="UserGallery"
          options={{ headerShown: false }}
          component={UserGallery}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
