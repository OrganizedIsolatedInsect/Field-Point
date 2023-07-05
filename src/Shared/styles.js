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
  black: "#000000",
  lightGrey: "#9c9c9c",
};

export const DarkTheme = {
  dark: true,
  colors: {
    background: Color.background,
  },
};

export default StyleSheet.create({
  body: {
    fontFamily: "Roboto",
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

  /* Home Screen Styles */
  screenBackground: {
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
    color: Color.inActiveIcon,
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

  /* End of Home Screen Styles */

  /* Legislation Screen Styles */

  LegislationTilesView: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    flexShrink: 1,
    justifyContent: "space-between",
    rowGap: 13,
    paddingTop: 22,
  },

  LegislationImg: {
    borderRadius: 4,
    opacity: 0.8,
  },

  LegislationButtonTextView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    padding: 10,
  },

  LegislationButtonText: {
    fontSize: 20,
    color: Color.primaryText,
    textAlign: "center",
  },

  /* End of Legislation Screen Styles */
  defaultLogoSize: {
    height: 400,
    width: 416,
  },

  // Header styles start
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 7,
    height: 56,
  },
  searchIcon: {
    backgroundColor: Color.searchBody,
    height: 50,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    fontSize: 24,
  },
  searchbar: {
    width: 227,
    height: 50,
    backgroundColor: Color.searchBody,
    fontSize: 16,
    textAlign: "left",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  breadcrumb: {
    color: Color.primaryText,
    backgroundColor: Color.headingBackground,
    paddingBottom: 10,
    paddingHorizontal: 13,
  },
  breadcrumbLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  breadcrumbText: {
    color: Color.primaryText,
    fontSize: 18,
  },
  backIcon: {
    color: Color.primaryText,
    fontSize: 20,
  },
  blankBar: {
    height: 24,
    backgroundColor: Color.headingBackground,
  },
  headerContainer: {
    // paddingVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 13,
    backgroundColor: Color.headingBackground,
    // height: 110,
    height: 76,
  },
  headerTopRow: {
    flex: 1,
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
  },
  headerTopRowSpacing: {
    paddingRight: 5,
  },
  headerLogoPadding: {
    paddingTop: 3,
  },
  headerBottomRow: {
    marginTop: 24,
  },
  // Header styles end

  //BOOKMARK STYLING
  centerOnScreen: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkIcon: {
    color: Color.primaryText,
    fontSize: 24,
    textAlign: "right",
  },
  bookmarkIconLarge: {
    fontSize: 200,
    color: Color.primaryText,
  },
  bookmarkIconTiny: {
    fontSize: 15,
    color: Color.primaryText,
  },
  bookmarkIconRight: {
    fontSize: 24,
    color: Color.primaryText,
  },
  bookmarkScreenFormatting: {
    color: Color.primaryText,
    flexDirection: "row",
    width: width,
    height: height - 200, //to compensate for the height of the header and breadcrumb rows.
  },
  bookmarkContainer: {
    backgroundColor: Color.black,
    width: width - 26,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 13,
    marginRight: 13,
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 36,
    borderRadius: 7,
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
    textAlign: "right",
    // flex: 1,
    // alignItems: "flex-end",
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
    fontWeight: 400,
    paddingTop: 8,
    width: width - 36 - 26, //to allow for 1 line of title and an ellipses if trucating is necessary. (additional values are padding values)
  },
  bookmarkNoneLabelRender: {
    flexDirection: "row",
    fontSize: 14,
    fontWeight: 300,
  },
  bookmarkNoneBoxRender: {
    paddingLeft: 36,
    paddingRight: 36,
  },
  bookmarkNoneTitleRender: {
    fontWeight: 500,
    fontSize: 24,
    color: Color.primaryText,
  },
});
