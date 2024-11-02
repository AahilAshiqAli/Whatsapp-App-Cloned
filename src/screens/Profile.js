import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image
          source={require("../../assets/Faces/002_a.png")}
          style={styles.profilePicture}
        />
        <TouchableOpacity
          style={styles.cameraIcon}
          onPress={() => {
            alert("New Picture");
          }}
        >
          <FontAwesome name="camera" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("hello")}
        >
          <View style={styles.infoItem}>
            <FontAwesome
              name="user"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>Name</Text>
              <Text style={styles.infoValue}>Aahil Ashiq Ali</Text>
              <Text style={styles.infoDescription}>
                This is not your username or pin. This name will be visible to
                your WhatsApp contacts.
              </Text>
            </View>
            <MaterialIcons name="edit" size={20} color="green" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.infoItem}>
            <FontAwesome
              name="info-circle"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>About</Text>
              <Text style={styles.infoValue}>
                Hey there! I am using WhatsApp...
              </Text>
            </View>
            <MaterialIcons name="edit" size={20} color="green" />
          </View>
        </TouchableHighlight>
        <View style={styles.infoItem}>
          <FontAwesome
            name="phone"
            size={24}
            color="gray"
            style={styles.icon}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Phone</Text>
            <Text style={styles.infoValue}>+92 335 2518587</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  cameraIcon: {
    position: "absolute",
    bottom: -5,
    right: 110,
    backgroundColor: "green",
    borderRadius: 100,
    padding: 12,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    width: "100%",
  },
  icon: {
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    color: "gray",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },
  infoDescription: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
});
