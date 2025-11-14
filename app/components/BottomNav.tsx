import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomNav() {
  return (
    <View style={styles.nav}>
      <Ionicons name="home-outline" size={28} color="#0F766E" />
      <Ionicons name="search-outline" size={28} color="#0F766E" />

      <View style={styles.addBtn}>
        <Ionicons name="add" size={32} color="#fff" />
      </View>

      <Ionicons name="chatbubble-outline" size={27} color="#0F766E" />
      <Ionicons name="person-outline" size={28} color="#0F766E" />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#0F766E",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
});
