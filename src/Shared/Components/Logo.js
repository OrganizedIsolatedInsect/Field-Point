import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Logo is scalable
// Takes logoHeight and logoWidth as props
export const Logo = ({ logoHeight, logoWidth }) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={[styles.defaultImage, { height: logoHeight, width: logoWidth }]}
        source={require("../../Assets/Imgs/Shared/FP-Logo-547x490.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultImage: {
    height: 51,
    width: 57,
  },
});
