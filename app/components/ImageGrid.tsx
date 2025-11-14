import { Image, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ImageGrid({ images, loading }) {
  if (loading) {
    return (
      <View style={styles.grid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <View key={i} style={styles.skeleton} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.grid}>
      {images.map((img, i) => (
        <View key={i} style={styles.imgWrapper}>

          {/* FIRST IMAGE → PINNED ICON */}
          {i === 0 && (
            <MaterialCommunityIcons
              name="pin"
              size={22}
              color="#ffffff"
              style={styles.iconOverlay}
            />
          )}

          {/* SECOND IMAGE → STACKED ICON */}
          {i === 1 && (
            <MaterialCommunityIcons
              name="layers"
              size={22}
              color="#ffffff"
              style={styles.iconOverlay}
            />
          )}

          <Image style={styles.img} source={{ uri: img }} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },

  imgWrapper: {
    width: "32%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    position: "relative",
  },

  img: {
    width: "100%",
    height: "100%",
  },

  iconOverlay: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 10,
  },

  skeleton: {
    width: "32%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
    marginBottom: 10,
  },
});
