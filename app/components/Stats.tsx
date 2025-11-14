import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Stats({ activeTab, setActiveTab }) {
  return (
    <View>
      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.num}>124</Text>
          <Text style={styles.label}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.num}>12K</Text>
          <Text style={styles.label}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.num}>2K</Text>
          <Text style={styles.label}>Following</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["posts", "clips", "tagged"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    marginBottom: 10,
  },
  statBox: { alignItems: "center" },
  num: { fontSize: 18, fontWeight: "bold" },
  label: { fontSize: 13, color: "gray" },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
  tab: {
    fontSize: 15,
    fontWeight: "600",
    color: "gray",
  },
  activeTab: {
    color: "#0F766E",
    borderBottomWidth: 2,
    borderColor: "#0F766E",
  },
});
