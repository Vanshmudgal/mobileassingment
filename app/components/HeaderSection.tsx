import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeaderSection() {
  return (
    <View>

      {/* TOP ROW — NAME + EDIT + 3 DOT */}
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

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
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
