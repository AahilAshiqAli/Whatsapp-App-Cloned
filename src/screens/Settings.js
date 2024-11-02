import React from "react";
import { TouchableHighlight } from "react-native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
} from "react-native-vector-icons";

export default function SettingsScreen({ navigation }) {
  const settingsData = [
    {
      id: "1",
      title: "Account",
      description: "Security notifications, change number",
      icon: (
        <MaterialCommunityIcons name="account-key" size={30} color="#a6b1b2" />
      ),
    },
    {
      id: "2",
      title: "Privacy",
      description: "Block contacts, disappearing messages",
      icon: <FontAwesome name="lock" size={30} color="#a6b1b2" />,
    },
    {
      id: "3",
      title: "Avatar",
      description: "Create, edit, profile photo",
      icon: (
        <MaterialCommunityIcons name="face-man" size={30} color="#a6b1b2" />
      ),
    },
    {
      id: "4",
      title: "Favourites",
      description: "Add, reorder, remove",
      icon: <FontAwesome name="heart" size={30} color="#a6b1b2" />,
    },
    {
      id: "5",
      title: "Chats",
      description: "Theme, wallpapers, chat history",
      icon: (
        <MaterialCommunityIcons name="message-text" size={30} color="#a6b1b2" />
      ),
    },
    {
      id: "6",
      title: "Notifications",
      description: "Message, group & call tones",
      icon: <Fontisto name="bell" size={30} color="#a6b1b2" />,
    },
    {
      id: "7",
      title: "Storage and data",
      description: "Network usage, auto-download",
      icon: (
        <MaterialCommunityIcons name="database" size={30} color="#a6b1b2" />
      ),
    },
    {
      id: "8",
      title: "Notifications",
      description: "Message, group & call tones",
      icon: <Fontisto name="bell" size={30} color="#a6b1b2" />,
    },
    {
      id: "9",
      title: "Storage and data",
      description: "Network usage, auto-download",
      icon: (
        <MaterialCommunityIcons name="database" size={30} color="#a6b1b2" />
      ),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.itemContainer}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Pressed!")}
    >
      <>
        <View style={styles.iconContainer}>{item.icon}</View>
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/Faces/002_a.png")}
            style={styles.image}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.profileName}>Aahil Ashiq Ali</Text>
            <Text style={styles.profileStatus}>Hey there! I am using...</Text>
          </View>
        </View>
      </TouchableHighlight>
      {/* Settings List */}
      <FlatList
        data={settingsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  headerTextContainer: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileStatus: {
    fontSize: 14,
    color: "gray",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  iconContainer: {
    marginRight: 16,
    width: 40, // to make sure that every text component start from same position vertically
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemDescription: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#128c7e",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Aligns content to the left
    alignItems: "center", // Vertically centers the items
    width: "100%", // Ensures the container takes up full width
  },
});
