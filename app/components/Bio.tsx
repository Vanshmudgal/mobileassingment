import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BioAndWebsite() {
  return (
    <View>
      {/* Bio */}
      <View style={styles.bioRow}>
        <Ionicons name="ellipse-outline" size={18} color="#0F766E" />
        <Text style={styles.bio}>Better things are coming !!</Text>
      </View>

      {/* Website */}
      <TouchableOpacity
        style={styles.websiteRow}
        onPress={() => Linking.openURL("https://yourdesignallypikko.framer.website")}
      >
        <Ionicons name="link-outline" size={18} color="#3B82F6" />
        <Text style={styles.website}>yourdesignallypikko.framer...</Text>
      </TouchableOpacity>
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
  websiteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  website: {
    marginLeft: 6,
    fontSize: 15,
    color: "#3B82F6",
  },
});
