import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BioAndWebsite() {
  return (
    <View>
      {/* Bio */}
      <View style={styles.bioRow}>
        <Ionicons name="ellipse-outline" size={18} color="#0F766E" />
        <Text style={styles.bio}>Better things are coming !!</Text>
      </View>

      {/* Website + See more */}
      <View style={styles.websiteContainer}>
        <TouchableOpacity
          style={styles.websiteRow}
          onPress={() =>
            Linking.openURL("https://yourdesignallypikko.framer.website")
          }
        >
          <Ionicons name="link-outline" size={18} color="#3B82F6" />
          <Text style={styles.website}>yourdesignallypikko.framer...</Text>
        </TouchableOpacity>

        {/* See more on the RIGHT */}
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  bio: {
    marginLeft: 6,
    fontSize: 16,
  },

  // ⭐ Horizontal container (URL left + See more right)
  websiteContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // ← pushes See more to right
    alignItems: "center",
    marginTop: 8,
  },

  websiteRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  website: {
    marginLeft: 6,
    fontSize: 15,
    color: "#3B82F6",
  },

  // ⭐ Your color
  seeMore: {
    color: "#0F766E",
    fontWeight: "600",
    fontSize: 14,
  },
});
