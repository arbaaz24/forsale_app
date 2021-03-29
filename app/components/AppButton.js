import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";

export default AppButton = ({ color = "primary", onPress, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 10,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 14,
    textTransform: "uppercase",
  },
});
