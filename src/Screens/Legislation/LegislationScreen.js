import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import styles, { Color } from "../../Shared/styles.js";
import TileButton from "../../Shared/Components/TileButton.js";


import data from "./LegislationScreenData.js";

let showButtons = data.map(({ id, buttonText, imgURI, buttonPress }) => {
  return (
    <TileButton
      key={id}
      buttonText={buttonText}
      imgURI={imgURI}
      buttonPress={buttonPress}
      // buttonPress={() => navigation.navigate({ LegislationScreen })}
    />
  );
});

const LegislationScreen = ({ navigation }) => {
  
  return (
    <ScrollView style={styles.homeScreenBackground}>
      <Text style={styles.homeScreenHeader}>
        What kind of Legislation are you looking for?
      </Text>
      <Text style={styles.homeScreenSubHeader}>
        Explore supporting information and resources
      </Text>
      <View style={styles.LegislationTilesView}>{showButtons}
      
      
      </View>
    </ScrollView>
  );
};

export default LegislationScreen;
