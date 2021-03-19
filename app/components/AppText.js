import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default AppText = (props) => (
  <Text style={styles.text}>{props.children}</Text>
);
const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //fontWeight: "900",
    fontSize: 16,
  },
});
