import { Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Chat from "./screens/Chat";
import Calls from "./screens/Calls";
import Status from "./screens/Status";
import Community from "./screens/Community";

const Tab = createMaterialTopTabNavigator();

const CustomTabLabel = ({ label, color }) => (
  <Text numberOfLines={1} style={[styles.tabLabel, { color }]}>
    {label}
  </Text>
);

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: "white", // jo highlighted hai
        tabBarInactiveTintColor: "#eeeee4", // jo highlighted nahi hai
        tabBarIndicatorStyle: {
          backgroundColor: "white", // sets style for indicator line
        },
        tabBarStyle: {
          backgroundColor: "#0e806a", // green background
        },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: ({ color }) => (
            <CustomTabLabel label="Chats" color={color} />
          ),
          // we are passing the color which is Tab.Navigator decides based on Active and Inactive tint color
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Status}
        options={{
          tabBarLabel: ({ color }) => (
            <CustomTabLabel label="Updates" color={color} />
            // passing props so this component
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="update" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Community}
        options={{
          tabBarLabel: ({ color }) => (
            <CustomTabLabel label="Communities" color={color} />
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: ({ color }) => (
            <CustomTabLabel label="Calls" color={color} />
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabLabel: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
