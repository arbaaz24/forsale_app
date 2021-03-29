import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default AppText = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
);
const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //fontWeight: "900",
    fontSize: 16,
  },
});
