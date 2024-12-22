import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import Constants from "expo-constants";
import SwipeableImage from "./components/SwipeableImage";
import BottomBar from "./components/BottomBar";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchUsers() {
    try {
      const { data } = await axios.get("https://randomuser.me/api?results=50");
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", "", [
        { text: "retry", onPress: () => fetchUsers() },
      ]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 && <SwipeableImage user={users[currentIndex]} />}
      </View>
      <BottomBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
