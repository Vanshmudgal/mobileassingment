import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderSection() {
  return (
    <View style={styles.headerRow}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          }}
          style={styles.dp}
        />

        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>Joy Alexander</Text>
          <Text style={styles.username}>@J_Jay</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editBtn}>
        <Text style={{ color: "#fff", fontWeight: "600" }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dp: {
    width: 78,
    height: 78,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    color: "gray",
  },
  editBtn: {
    backgroundColor: "#0F766E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});
