//https://stackoverflow.com/questions/38715028/how-to-handle-different-screen-sizes-in-react-native

import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const Color = {
  primaryText: "#ffffff", //white
  background: "#323232", //really dark grey
  activeIcon: "#ffffff", //white
  inActiveIcon: "#b3b3b3", //light red
  headingBackground: "#000000", //black
  cardBody: "#464646", //more dark grey
  searchBody: "#ffffff", //white
  inFocus: "#419aff", //light blue
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
  centerOnScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //Bookmark styling
  bookmarkScreenFormatting: {
    backgroundColor: Color.background,
    flex: 1,
    flexDirection: "column",
    width: width,
    height: height,
  },
  bookmarkRender: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
