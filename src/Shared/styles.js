import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const Color = {
  primaryText: "#ffffff",
  background: "#323232",
  activeIcon: "#ffffff",
  inActiveIcon: "#b3b3b3",
  headingBackground: "#000000",
  cardBody: "#464646",
  searchBody: "#ffffff",
  inFocus: "#419aff",
};

export default StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    backgroundColor: Color.background,
  },
  bottomTabIconSize: {
    fontSize: 24,
  },
  bottomTabText: {
    fontFamily: "Roboto",
    fontSize: 10,
  },

  //Bookmark styling
  bookmarkScreenFormatting: {
    backgroundColor: Color.background,
    flex: 1,
    flexDirection: "column",
    width: width,
    height: height,
  },
});
