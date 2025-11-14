import { Image } from "expo-image";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Bio from "./components/Bio";
import BottomNav from "./components/BottomNav";
import HeaderSection from "./components/HeaderSection";
import ImageGrid from "./components/ImageGrid";
import Stats from "./components/Stats";

export default function Home() {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const mockData = {
    posts: [
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    ],
    clips: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    ],
    tagged: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    ],
  };

  const images = mockData[activeTab];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFB" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TOP COVER */}
        <View style={{ position: "relative" }}>
          <Image
            source="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            style={styles.cover}
            contentFit="cover"
          />

          {/* TOP RIGHT BUTTONS */}
          <View style={styles.topIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="funnel-outline" size={22} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* PROFILE CARD */}
        <View style={styles.card}>
          <HeaderSection />
          <Bio />
          <Stats activeTab={activeTab} setActiveTab={handleTabChange} />
        </View>

        {/* GRID */}
        <ImageGrid images={images} activeTab={activeTab} />

        <View style={{ height: 100 }} />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: "100%",
    height: 200,
  },
  topIcons: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 8,
    borderRadius: 30,
  },
  card: {
    marginTop: -40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 20,
  },
});