//https://stackoverflow.com/questions/38715028/how-to-handle-different-screen-sizes-in-react-native

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
  accordionHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Color.headingBackground,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    borderRadius: 5,
  },
  headingLabelContainer: {
    width: 275,
  },
  partsPrimaryText: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: Color.primaryText,
    flexDirection: "column",
  },
  partsSecondaryText: {
    fontFamily: "Roboto",
    fontSize: 10,
    color: Color.inActiveIcon,
  },
  partsCheveronCircle: {
    color: Color.inActiveIcon,
    fontSize: 30,
    marginRight: 20,
    marginLeft: 20,
  },
  accordionBody: {
    paddingLeft: 20,
    backgroundColor: Color.cardBody,
    borderBottomColor: Color.inActiveIcon,
    borderBottomWidth: 2,
    marginHorizontal: 5,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionsHeaderContainer: {
    width: 240,
    padding: 5,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  sectionsPrimaryText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: Color.primaryText,
    flexDirection: "column",
  },
  sectionsCheveron: {
    color: Color.primaryText,
    fontSize: 20,
    padding: 3,
  },
  sectionsNum: {
    width: 45,
    marginRight: 20,
  },
  subSectionCard: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 5,
    height: 600,
  },
  subSectionHeader: {
    backgroundColor: Color.background,
    padding: 20,
    flexDirection: "row",
  },
  subSectionLabelContainer: {
    marginLeft: 40,
    width: 240,
  },
  subSectionPartSectionContainer: {
    flexDirection: "column",
  },
  subSectionHeaderPartText: {
    color: Color.inActiveIcon,
    fontSize: 10,
  },
  subSectionHeaderSectionNumText: {
    color: Color.primaryText,
    fontSize: 24,
  },
  subSectionHeaderSectionLabelText: {
    color: Color.primaryText,
    fontSize: 18,
  },
  subSectionBody: {
    backgroundColor: Color.cardBody,
    alignItems: "flex-start",
  },
  subSectionBodyHeaderText: {
    color: Color.primaryText,
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 14,
  },
  subSectionBodyText: {
    color: Color.inActiveIcon,
    fontSize: 12,
  },
  subSectionBodyLevel1: {
    paddingLeft: 10,
  },
  subSectionBodyLevel2: {
    paddingLeft: 25,
    marginTop: 5,
  },
  subSectionBodyLevel3: {
    paddingLeft: 35,
    marginTop: 5,
  },
});
