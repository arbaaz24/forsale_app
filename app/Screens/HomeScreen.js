import React from "react";
import { ImageBackground, Button, StyleSheet } from "react-native";
import * as firebase from "firebase";
import colors from "../config/colors";
import ViewImageScreen from "./ViewImageScreen";

export default HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode={"contain"}
      style={styles.container}
      source={{ uri: "https://picsum.photos/800/900" }}
    >
      <AppButton title="log in" onPress={() => console.log("login pressed")} />
      <Button
        title="View Images"
        onPress={() => navigation.navigate(ViewImageScreen)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
