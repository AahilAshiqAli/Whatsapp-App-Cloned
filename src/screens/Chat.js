import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import DATA from "../data/chatdata";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";

// difference between Touchable Opacity and Touchable Highlight is that Touchable Opacity is used when not much customization is needed and it will automatically dicrease the activeOpacity
// but in Touchable Highlight, you can change color as well using underlay color and more customization
const Chat = () => {
  const [chatData, setChatData] = useState(DATA);

  useEffect(() => {
    const sortedData = [...DATA].sort((a, b) => b.totalUnread - a.totalUnread);
    setChatData(sortedData);
  }, []); // reload on only first render??

  const onPress = () => {
    console.log("Go to Chat");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
          >
            <View style={styles.chatContainer}>
              <Image source={item.photos} style={styles.image} />
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  {item.totalUnread > 0 ? (
                    <Text style={styles.chatTimeActive}>{item.time}</Text>
                  ) : (
                    <Text style={styles.chatTimeInactive}>{item.time}</Text>
                  )}
                </View>
                <View style={styles.messages}>
                  <Text style={styles.chatMessage} numberOfLines={1}>
                    {item.lastMessage}
                  </Text>
                  {item.totalUnread > 0 && (
                    <View style={styles.unReadContainer}>
                      <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
      <TouchableOpacity style={styles.chatButton} onPress={() => "#"}>
        <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  chatContainer: {
    flexDirection: "row",
    marginRight: 16,
    marginLeft: 16,
    paddingTop: 5,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#128c7e",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  chatContent: {
    flex: 5, // will take 5 times more space than image
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 15,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    marginTop: 4,
    alignItems: "center",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "5505",
  },
  chatTimeInactive: {
    fontSize: 12,
    color: "#A0A09E",
  },

  chatTimeActive: {
    fontSize: 12,
    color: "#25D366",
  },
  messages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatMessage: {
    fontSize: 14,
    color: "#A0A09E",
    width: "90%",
  },
  totalUnread: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },
  unReadContainer: {
    height: 25,
    width: 25,
    borderRadius: 100,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
  },
  chatButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#0e806a",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
