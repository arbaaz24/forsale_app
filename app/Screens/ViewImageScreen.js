import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";

export default ViewImageScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: "https://picsum.photos/1800/800" }}
      />
      <AppText>THIS is an awesome image! </AppText>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: "https://picsum.photos/1900/1000" }}
      />
      <AppText>$500 </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    justifyContent: "space-evenly",
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
