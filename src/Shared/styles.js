import { StyleSheet } from "react-native";

export const Colours = {
  primaryText: "#ffffff", //White
  backgroundColouring: "#000000", //Black
  active :  "#ffffff", // White 
  inActive: '#b3b3b3', // Grey

};

export default StyleSheet.create({
  body: {
    fontFamily: "Roboto",
  },

  background: {
    backgroundColor: Colours.backgroundColouring,
  },
  bottomTabIconSize:{
    fontSize: 24,
  },
  bottomTabText:{
    fontFamily: "Roboto",
    fontSize:10,
  }
  
});
