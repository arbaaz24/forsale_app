import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  useState,
  KeyboardAwareScrollView,
} from "react-native";
import colors from "../config/colors";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

import ViewImageScreen from "./ViewImageScreen";
import { TextInput } from "react-native-gesture-handler";

export default HomeScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onFooterLinkPress = () => {
    navigation.navigate(ViewImageScreen);
  };

  const onRegisterPress = () => {
    console.log("register pressed");
  };
  return (
    <ImageBackground
      resizeMode={"contain"}
      style={styles.container}
      source={{ uri: "https://picsum.photos/800/900" }}
    >
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        ></TouchableOpacity>
      </KeyboardAwareScrollView>
      <AppButton title="log in" onPress={() => console.log("login pressed")} />
      <Button
        title="View Images"
        onPress={() => navigation.navigate(ViewImageScreen)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
