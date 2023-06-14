import { StyleSheet } from "react-native";
import { Color } from "../../Shared/styles.js";

export default StyleSheet.create({
  background: {
    backgroundColor: Color.background,
    paddingHorizontal: 13,
    paddingVertical: 40,
  },

  homeScreenHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.primaryText,
  },

  homeScreenSubHeader: {
    fontSize: 14,
    color: "#B3B3B3",
  },

  homeScreenImg: {
    borderRadius: 4,
    opacity: 0.8,
    marginVertical: 13,
    width: 334,
    height: 120,
  },

  homeScreenButtonText: {
    fontSize: 20,
    color: Color.primaryText,
  },

  homeScreenButtonView: {
    //center the icon and text horizontally and vertically
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
