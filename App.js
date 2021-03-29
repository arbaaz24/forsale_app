import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import {
  RegistrationScreen,
  HomeScreen,
  ViewImageScreen,
  LoginScreen,
} from "./app/Screens";

import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import firebaseConfig from "./app/config/firebaseConfig";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default App = () => {
  console.log("app executed_5");
  const Stack = createStackNavigator();
  const [user, setUser] = useState(null);
  //const [loading, setLoading] = useState(true);
  //if (loading) {
  // return <></>;
  //}
  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            console.log("error in useEffect() of App.js");
            //setLoading(false);
          });
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
