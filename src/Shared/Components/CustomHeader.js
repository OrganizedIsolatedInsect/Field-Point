import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

import { Color } from "../styles";

import Searchbar from "./Searchbar";
import BreadcrumbBar from "./BreadcrumbBar";

// Custom header should display branding, searchbar and breadcrumb
export const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          style={styles.imageSize}
          source={require("../../Assets/Imgs/Shared/FP-Logo-547x490.png")}
        />
        <Searchbar />
      </View>
      <View>
        <BreadcrumbBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: Color.headingBackground,
    height: 110,
  },
  topRow: {
    flexDirection: "row",
  },

  imageSize: {
    height: 51,
    width: 57,
  },
});
