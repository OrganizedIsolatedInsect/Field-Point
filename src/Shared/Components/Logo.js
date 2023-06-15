import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Logo is scalable
// Takes logoHeight and logoWidth as props. If height and width is undefined, use the defaultLogoSize dimensions.
//      <Logo logoHeight={200} logoWidth={300} />
export const Logo = ({ logoHeight, logoWidth }) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{
          height:
            logoHeight === undefined ? styles.defaultLogoSize.height : logoHeight,
          width:
            logoWidth === undefined ? styles.defaultLogoSize.width : logoWidth,
        }}
        source={require("../../Assets/Imgs/Shared/FP-Logo-547x490.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLogoSize: {
    height: 51,
    width: 57,
  },
});
