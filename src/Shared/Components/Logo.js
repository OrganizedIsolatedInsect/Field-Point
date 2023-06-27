import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Logo component is scalable
// Takes logoHeight and logoWidth as props. If height and/or width is undefined, use the defaultLogoSize dimensions.
//      <Logo logoHeight={200} logoWidth={200} />

// Due to the dynamic nature of the resizability (via ternary), the styles need to remain inline.
export const Logo = ({ logoHeight, logoWidth }) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{
          height:
            logoHeight === undefined
              ? styles.defaultLogoSize.height
              : logoHeight,
          width:
            logoWidth === undefined ? styles.defaultLogoSize.width : logoWidth,
        }}
        source={require("../../Assets/Imgs/Shared/logo/png/400x416.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLogoSize: {
    height: 400,
    width: 416,
  },
});
