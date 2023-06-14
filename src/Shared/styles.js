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
  partsButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Color.headingBackground,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    flexDirection: "row",
  },
  partsButtonPrimaryText: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: Color.primaryText,
    flexDirection: "column",
  },
  partsButtonSecondaryText: {
    fontFamily: "Roboto",
    fontSize: 10,
    color: Color.cardBody,
  },
  partsButtonCheveron: {
    color: Color.cardBody,
    fontSize: 30,
    marginRight: 20,
    marginLeft: 20,
  },
});
