import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { TouchableHighlight } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Header = () => {
  const [dropdownVisible, setDropDownVisible] = useState(false);

  const Stack = createStackNavigator();

  const toggleDropdown = () => {
    setDropDownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Whatsapp</Text>
        <View style={styles.iconContainer}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
            style={styles.button}
          >
            <Feather name="camera" size={25} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
            style={[styles.button, { marginLeft: 5 }]}
          >
            <Fontisto name="search" size={20} color="white" />
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={toggleDropdown}
            style={styles.button}
          >
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color="white"
            />
          </TouchableHighlight>
        </View>
      </View>

      {/* Modal for Dropdown */}
      <Modal
        transparent={true}
        visible={dropdownVisible} // show if dropdown visible is true
        animationType="fade"
        onRequestClose={() => setDropDownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setDropDownVisible(false)}
        >
          {/* This touchable opacity is used to close the dropdown whenever any where you click and it is opened*/}
          <View style={styles.dropdown}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={toggleDropdown}
              style={styles.button}
            >
              <Text style={{ fontSize: 16 }}>Option1</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={toggleDropdown}
              style={styles.button}
            >
              <Text style={{ fontSize: 16 }}>Option2</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate("Settings")}
              style={styles.button}
            >
              <Text style={{ fontSize: 16 }}>Settings</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e806a",
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a transparent background
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  dropdown: {
    marginTop: 60,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "50%",
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#000",
  },
});
