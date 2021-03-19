import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
} from "react-native";

import HomeScreen from "./app/Screens/HomeScreen.js";
import ViewImageScreen from "./app/Screens/ViewImageScreen.js";

export default App = () => {
  console.log("app executed_1");
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="ViewImageScreen"
          options={{ title: "Listings" }}
          component={ViewImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
