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

/*=====================FIRE========================== */
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9fNx3sW9G8rxKfpvMCnRP8AxQ_I4d510",
  authDomain: "learning-29ccf.firebaseapp.com",
  projectId: "learning-29ccf",
  storageBucket: "learning-29ccf.appspot.com",
  messagingSenderId: "155925228676",
  appId: "1:155925228676:web:95e95ebb56e457500c26d1",
  measurementId: "G-Q8V5JY766T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import auth from "firebase/auth";
import "firebase/firestore";
import "firebase/analytics;";
/*=====================FIRE========================== */

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
