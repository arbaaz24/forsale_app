import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";

export default ViewImageScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ borderRadius: 20, overflow: "hidden", margin: 10 }}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: "https://picsum.photos/300/150" }}
        />
        <AppText>THIS is an awesome image! </AppText>
        <AppText>$500 </AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: "100%",
    height: "45%",
  },
});
