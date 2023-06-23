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

  /* Home Screen Styles */
  homeScreenBackground: {
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
