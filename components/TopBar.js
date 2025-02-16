import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome} from "@expo/vector-icons";
const TopBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="fire" size={27} color="#F06795" />
      <FontAwesome name="comments" size={27} color="#F06795" />
      <FontAwesome name="user" size={27} color="#F06795" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
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

export default TopBar;
