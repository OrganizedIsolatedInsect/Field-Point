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
  black: "#000000", //black
  lightGrey: "#9c9c9c", //light grey
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

  //BOOKMARK STYLING
  bookmarkScreenFormatting: {
    backgroundColor: Color.background,
    color: Color.primaryText,
    flex: 1,
    flexDirection: "column",
    width: width,
    height: height,
  },
  bookmarkContainer: {
    backgroundColor: Color.black,
    width: width,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 36,
  },
  bookmarkFlexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookmarkTextRender: {
    color: Color.primaryText,
    fontSize: 14,
    fontWeight: 300,
  },
  bookmarkLabelRender: {
    color: Color.lightGrey,
    fontSize: 14,
    fontWeight: 300,
  },
  bookmarkChevronRender: {
    color: Color.lightGrey,
    flex: 1,
    alignItems: "flex-end",
    fontSize: 14,
    fontWeight: 300,
  },
  bookmarkFlexOne: {
    flex: 1,
    alignItems: "flex-start",
  },
  bookmarkFlexTwo: {
    flex: 2,
    alignItems: "flex-start",
  },
  bookmarkTitleRender: {
    color: Color.primaryText,
    fontSize: 18,
    fontWeight: 500,
    paddingTop: 8,
  },
});
