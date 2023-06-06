import { StyleSheet } from "react-native";

export const Colours = {
  primary: "#FFFFFF", //White
  backgroundColouring: "#000000", //Black
};

export default StyleSheet.create({
  background: {
    backgroundColour: Colours.backgroundColouring,
  },

  bottomTabBar: {
    width: "360px",
    height: "90px",
    backgroundColour: Colours.backgroundColouring,
  },
});
