import { Text, ScrollView } from "react-native";
import React from "react";
import styles from "../../Shared/styles.js";
import HomeScreenButton from "../../Shared/Components/HomeScreenButton.js";

import HomeScreenData from "../../Data/HomeScreenData.js"

// Map the HomeScreenData.js JSON file and return <HomeScreenButton />
// components with mapped JSON data as props.
let showButtons = HomeScreenData.map(
  ({
    id,
    name,
    iconStyle,
    iconName,
    iconSize,
    imgURI,
    iconColor,
    buttonPress,
  }) => {
    return (
      <HomeScreenButton
        key={id}
        iconStyle={iconStyle}
        iconName={iconName}
        buttonText={name}
        iconSize={iconSize}
        iconColor={iconColor}
        imgURI={imgURI}
        buttonPress={buttonPress}
      />
    );
  }
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.homeScreenBackground}>
      <Text style={styles.homeScreenHeader}>What are you looking for?</Text>
      <Text style={styles.homeScreenSubHeader}>
        Explore supporting information and resources
      </Text>

      {/* Show the buttons from the <HomeScreenButton /> compoment 
      with props mapped from the HomeScreenData.js JSON file */}
      {showButtons}
    </ScrollView>
  );
};

export default HomeScreen;
