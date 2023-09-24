import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Profile from "./src/components/Profile"
import Players from "./src/components/Players"
import Propierties from "./src/components/Propierties"
import Investments from "./src/components/Investments"
import Money from "./src/components/Money"
import Art from "./src/components/Art"
import Business from "./src/components/Business"
import Awards from "./src/components/Awards"
import Config from "./src/components/Config"
import Help from "./src/components/Help"
import Store from "./src/components/Store"

const Tab = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ animation: "none" }}>
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
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
      </Tab.Navigator>
    </NavigationContainer>
  )
}

/* Para implementar las notificaciones push
https://youtu.be/luFyVZ18w8Y */
