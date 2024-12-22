import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button}>
        <FontAwsome name="times" size={27} color="#F06795" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwsome name="heart" size={27} color="#64EDCC" />
      </TouchableOpacity>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
