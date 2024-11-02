import "./gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import SettingsScreen from "./src/screens/Settings";
import Profile from "./src/screens/Profile";

// Stack Navigator definition
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: "#0e806a" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
//the stack navigator typically starts from the entry point of your app,
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
