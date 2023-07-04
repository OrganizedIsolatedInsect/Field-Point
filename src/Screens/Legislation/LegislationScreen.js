import { View, Text, ScrollView, Button } from "react-native";
import React from "react";
import styles, { Color } from "../../Shared/styles.js";
import TileButton from "../../Shared/Components/TileButton.js";
import Breadcrumb from "../../Shared/Components/header/Breadcrumb";
import LegislationScreenData from "../../Data/LegislationScreenData.js";


// Map the LegislationScreenData.js JSON file and return <HomeScreenButton />
// components with mapped JSON data as props.

let showButtons = LegislationScreenData.map(
  ({ id, buttonText, imgURI, buttonPress }) => {
    return (
      <TileButton
        key={id}
        buttonText={buttonText}
        imgURI={imgURI}
        buttonPress={buttonPress} ///Screen Name
      />
    );
  }
);

const LegislationScreen = () => {
  return (
    <ScrollView style={styles.screenBackground}>
      <Text style={styles.homeScreenHeader}>
        What kind of Legislation are you looking for?
      </Text>
      <Text style={styles.homeScreenSubHeader}>
        Explore supporting information and resources
      </Text>
      <View style={styles.LegislationTilesView}>
        {/* Show the buttons from the <TileButton /> compoment 
      with props mapped from the LegislationScreenData.js JSON file */}

        {showButtons}
      </View>
    </ScrollView>
  );
};

export default LegislationScreen;
