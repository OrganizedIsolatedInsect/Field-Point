import { StyleSheet } from "react-native";

export const Color = {
  primaryText: "#ffffff",
  background: "#323232",
  activeIcon: "#ffffff",
  inActiveIcon: "#b3b3b3",
  headingBackground: "#000000",
  cardBody: "#464646",
  searchBody: "#ffffff",
  inFocus: "#419aff",
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
  
});
