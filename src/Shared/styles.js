import { StyleSheet } from "react-native";

export const Colours = {
  primaryText: "#FFFFFF", //White
  backgroundColouring: "#000000", //Black
};

export default StyleSheet.create({
  body: {
    fontFamily: "Roboto",
  },

  background: {
    backgroundColor: Colours.backgroundColouring,
  },
});
