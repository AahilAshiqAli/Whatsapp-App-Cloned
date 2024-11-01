import { View, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Navigation from "./Navigation";

// i am navigating from a component that i have imported in Homescreen so definity navigation.navigate
// would be called there so i would have to pass it as a prop to Header
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container1}>
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
});
